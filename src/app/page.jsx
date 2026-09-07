import Client from './Client';
import { pageMetadata } from '../lib/site';
import { JsonLd } from '../components/JsonLd';
import { graph, organizationSchema, websiteSchema, webPageSchema, breadcrumbSchema } from '../lib/schema';

const TITLE = 'Kedarnath & Char Dham Helicopter Charter | Book My CharDham';
const DESC =
  'Helicopter charter for Kedarnath, Badrinath & Char Dham yatra from Dehradun. VIP darshan, flower dropping ceremonies, same-day return. Call +91 93556 11996.';

export const metadata = pageMetadata({ title: TITLE, description: DESC, path: '/' });

export default function Home() {
  return (
    <>
      <JsonLd
        data={graph([
          organizationSchema(),
          websiteSchema(),
          webPageSchema({ name: TITLE, description: DESC, path: '/' }),
          breadcrumbSchema([{ name: 'Home', path: '/' }]),
        ])}
      />
      <Client />
    </>
  );
}
