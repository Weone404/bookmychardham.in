import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import Beasties from 'beasties';

const appDirectory = path.resolve('.next/server/app');
const cssDirectory = path.resolve('.next/static/css');
const temporaryCssDirectory = path.join(appDirectory, 'static/css');

await mkdir(temporaryCssDirectory, { recursive: true });
await cp(cssDirectory, temporaryCssDirectory, { recursive: true });

const processor = new Beasties({
  path: appDirectory,
  publicPath: '/_next/',
  preload: 'swap',
  compress: true,
});

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...await findHtmlFiles(entryPath));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(entryPath);
    }
  }

  return files;
}

const htmlFiles = await findHtmlFiles(appDirectory);
const errors = [];
let processed = 0;

for (const filePath of htmlFiles) {
  try {
    const html = await readFile(filePath, 'utf8');
    const processedHtml = await processor.process(html);
    await writeFile(filePath, processedHtml);
    processed += 1;
  } catch (error) {
    errors.push({ filePath, error });
    console.error(`Failed to inline critical CSS for ${filePath}:`, error);
  }
}

console.log(`Inlined critical CSS in ${processed} HTML files.`);
if (errors.length > 0) {
  console.error(`${errors.length} HTML files failed critical CSS processing.`);
}

await rm(path.join(appDirectory, 'static'), { recursive: true, force: true });
