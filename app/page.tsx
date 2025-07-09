import LeadForm from '@/app/components/LeadForm';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center jusitfy-between h-screen mx-auto">
      {/* Hero section with background image and form */}

      <section className="grid grid-rows-1 grid-cols-3 grid-cols-1 h-screen w-full place-items-center relative overflow-hidden">
        {/* Background image */}
        <div className="col-span-full row-start-1 w-full h-full z-0">
          <Image
            src="/img/hero.jpg"
            alt="Marthe Coaching Hero"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        {/* LeadForm centered */}
        <div className="row-start-1 col-start-2 z-20">
          <LeadForm />
        </div>
      </section>



      <section className="w-full overflow-hidden mt-10">
        <div className="relative bg-primary-light text-primary pb-20">
          <div className="max-w-4xl mx-auto px-4 pt-20">
            <h2 className="text-3xl font-semibold">Velkommen til Marthe Coach</h2>
            <p className="mt-4">Dette er din reise mot bedre helse og velvære.</p>
          </div>

          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
              className="block w-full h-20 fill-background"
            >
              <path d="M0,50 C360,0 1080,100 1440,50 L1440,100 L0,100 Z" />
            </svg>
          </div>
        </div>
      </section>


    </main>
  );
}
