import Link from 'next/link';

const fleetVideoUrls = {
  'avanti-180': 'https://www.youtube.com/embed/Bw1ldiDqAIk',
  'cessna-caravan-208b': 'https://www.youtube.com/embed/VtlEOlhMJMg',
  'learjet-60': 'https://www.youtube.com/embed/s5MqoLwnGrY',
  'challenger-604': 'https://www.youtube.com/embed/NiDwxkQ4ZHc',
  'challenger-605': 'https://www.youtube.com/embed/s_p4qLSUC2E',
  'citation-525-a': 'https://www.youtube.com/embed/_uALZI5qKsc',
  'falcon-50': 'https://www.youtube.com/embed/Bw1ldiDqAIk',
  'gulfstream-g650': 'https://www.youtube.com/embed/Bw1ldiDqAIk',
};

export default async function FleetDetailPage({ params }) {
  const { slug } = await params;
  const fleetVideoUrl = fleetVideoUrls[slug] || fleetVideoUrls['avanti-180'];
  const videoId = fleetVideoUrl.split('/').pop();

  return (
    <div className="min-h-[60vh] bg-[#F3E9D0] text-[#6B4E3D]">
      <section className="relative overflow-hidden border-b border-[#A67C52]/20 bg-[#D9C7B8]">
        <iframe
          className="pointer-events-none absolute left-1/2 top-1/2 h-[180%] w-[180%] -translate-x-1/2 -translate-y-1/2 scale-[1.35]"
          src={`${fleetVideoUrl}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&rel=0&playsinline=1`}
          title={`${slug.replace(/-/g, ' ')} background video`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
        />
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
