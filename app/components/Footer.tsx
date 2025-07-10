export default function Footer() {
  return (
    <footer className="w-full bg-neutral-light dark:bg-neutral-dark dark:text-background mt-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-12 text-sm">

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Marthe Coaching</h2>
          <p className="text-muted-foreground">© {new Date().getFullYear()} Marthe Coach. Alle rettigheter reservert.</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Lenker</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline hover:text-primary">Link 1</a></li>
            <li><a href="#" className="hover:underline hover:text-primary">Link 2</a></li>
            <li><a href="#" className="hover:underline hover:text-primary">Link 3</a></li>
            <li><a href="#" className="hover:underline hover:text-primary">Link 4</a></li>
          </ul>
        </div>

        <div className="flex items-end md:justify-end">
          <p className="text-muted-foreground">Utviklet av <span className="font-semibold">Sebastian Møldrup</span></p>
        </div>

      </div>
    </footer>
  );
}

