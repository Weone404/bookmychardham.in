import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AIRCRAFT } from '../../../data/fleet';
import { pageMetadata } from '../../../lib/site';

// Only the aircraft we actually list get a page. Without this the route
// answers on any slug, which is an unbounded set of thin pages.
export function generateStaticParams() {
  return AIRCRAFT.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const craft = AIRCRAFT.find((a) => a.slug === slug);
  if (!craft) return {};
  return pageMetadata({
    title: `${craft.name} Charter | ${craft.seatCount} Seats`,
    description: `${craft.description} Enquire on +91 93556 11996.`,
    path: `/fleet/${craft.slug}`,
    index: false,
  });
}

export default async function FleetDetailPage({ params }) {
  const { slug } = await params;
  const craft = AIRCRAFT.find((a) => a.slug === slug);
  if (!craft) notFound();

  return (
    <div className="min-h-[60vh] bg-[#F3E9D0] text-[#6B4E3D]">
      <section className="relative overflow-hidden border-b border-[#A67C52]/20 bg-[#D9C7B8]">
        <div className="absolute inset-0 bg-[#1d120f]/55" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-10 lg:px-12 lg:py-32">
          <div className="max-w-3xl">
            <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.24em] text-[#E6D5C1]">
              Private Jet Charter
            </span>
            <h1 className="text-3xl font-black uppercase tracking-tight text-[#F3E9D0] sm:text-4xl">
              {slug.replace(/-/g, ' ')}
            </h1>
          </div>
        </div>
      </section>

      <div className="px-4 py-12 sm:px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl rounded-lg border border-[#A67C52]/20 bg-[#E6D5C1] p-8 shadow-sm">
          <p className="text-base leading-relaxed text-[#6B4E3D]/80">
            This aircraft profile page is ready for your real fleet data integration. Use this route to render detailed specs, pricing, aircraft gallery, and charter availability.
          </p>
          <Link
            href="/fleet"
            className="mt-8 inline-flex items-center rounded-xs bg-[#A67C52] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#8B6639]"
          >
            Back to Fleet
          </Link>
        </div>
      </div>
    </div>
  );
}
