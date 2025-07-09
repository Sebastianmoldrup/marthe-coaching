import LeadForm from '@/app/components/LeadForm';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center jusitfy-between h-screen mx-auto max-w-4xl">
      {/* Hero section with background image and form */}
      <section className="space-y-4 md:space-y-0 md:flex md:items-end md:mt-20">
        {/* Background image */}
        <div className='flex flex-col items-center'>
          <Image
            src="/img/marthe.png"
            alt="Marthe Coaching Hero"
            width={1920}
            height={1080}
            className="object-cover max-w-[360px]"
            priority
          />
          <hr className='w-[172px] bg-primary-light' />
        </div>
        <LeadForm />
      </section>
    </main>
  );
}
