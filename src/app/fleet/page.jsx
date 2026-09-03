import Link from 'next/link';
import { FleetCard } from '../../components/FleetCard';
import { AIRCRAFT as aircraftList } from '../../data/fleet';
import { pageMetadata } from '../../lib/site';
import { JsonLd } from '../../components/JsonLd';
import { graph, organizationSchema, webPageSchema, breadcrumbSchema } from '../../lib/schema';

const PATH = '/fleet';
const TITLE = 'Charter Aircraft Fleet | Jets & Turboprops';
const DESC =
  'Aircraft types we charter across India and abroad \u2014 turboprops, light, medium and heavy jets, 7 to 16 seats. Enquire on +91 93556 11996.';

export const metadata = pageMetadata({ title: TITLE, description: DESC, path: PATH });



export default function FleetPage() {
  return (
    <>
      <JsonLd
        data={graph([
          organizationSchema(),
          webPageSchema({ name: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Charter Aircraft Fleet', path: PATH },
          ]),
        ])}
      />
    <div className="w-full bg-[#F3E9D0] text-[#6B4E3D]">
      <section className="relative overflow-hidden border-b border-[#A67C52]/20 bg-[#D9C7B8]">
        {/* Background video removed Sep 2026: third-party YouTube embed of unknown provenance. Restore with our own footage. */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a3527] to-[#1d120f]" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-10 lg:px-12 lg:py-32">
          <div className="max-w-3xl text-left">
            <span className="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.24em] text-[#E6D5C1]">
              Private Aviation
            </span>
            <h1 className="text-4xl font-black uppercase tracking-[-0.04em] text-[#F3E9D0] sm:text-5xl lg:text-7xl">
              Charter Your Next Journey
            </h1>
            <div className="mt-8 flex justify-start">
              <Link
                href="#fleet-options"
                className="inline-flex items-center justify-center rounded-xs bg-[#A67C52] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#8B6639]"
              >
                Explore Fleet
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="fleet-options" className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12">
          <div className="mb-10 text-center sm:mb-12">
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.24em] text-[#A67C52]">
              Airline-grade comfort
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#6B4E3D] sm:text-4xl">
              Our Private Jet Options
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#6B4E3D]/80 sm:text-base">
              From executive short hops to long-range corporate travel, choose the aircraft that matches your route, range, and cabin preference.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {aircraftList.map((aircraft) => (
              <FleetCard key={aircraft.slug} {...aircraft} />
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
