import LeadForm from '@/app/components/LeadForm';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center jusitfy-between h-screen mx-auto">
      {/* Hero section with background image and form */}

      <section className="grid grid-rows-1 grid-cols-3 h-screen w-full place-items-center relative overflow-hidden">
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

      <section className="bg-primary-light w-full">
        <div className="pt-6 md:pt-12 px-4 max-w-xl mx-auto">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Veien videre
          </span>
          <h2 className="text-3xl font-bold tracking-tight mt-2">
            Klar for å oppnå målene dine?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac convallis sapien. Donec at ultrices nunc. In sed ex ut lacus iaculis elementum.
          </p>
        </div>
      </section>


      <section className="relative w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
          className="w-full h-[150px] md:h-[300px] rotate-180"
        >
          <path
            d="M0 517L32 554.8C64 592.7 128 668.3 192 677.3C256 686.3 320 628.7 384 628C448 627.3 512 683.7 576 691.7C640 699.7 704 659.3 768 666.3C832 673.3 896 727.7 960 741.7C1024 755.7 1088 729.3 1152 690.3C1216 651.3 1280 599.7 1344 565.3C1408 531 1472 514 1536 557C1600 600 1664 703 1728 725.7C1792 748.3 1856 690.7 1888 661.8L1920 633L1920 1081L1888 1081C1856 1081 1792 1081 1728 1081C1664 1081 1600 1081 1536 1081C1472 1081 1408 1081 1344 1081C1280 1081 1216 1081 1152 1081C1088 1081 1024 1081 960 1081C896 1081 832 1081 768 1081C704 1081 640 1081 576 1081C512 1081 448 1081 384 1081C320 1081 256 1081 192 1081C128 1081 64 1081 32 1081L0 1081Z"
            fill="var(--primary-light)"
            strokeLinecap="round"
            strokeLinejoin="miter"
          />
        </svg>
      </section>
    </main>
  );
}
