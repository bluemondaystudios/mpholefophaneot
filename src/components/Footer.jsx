export default function Footer() {
  return (
    <footer className="bg-cream-50 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" width="1182" height="922" alt="" loading="lazy" decoding="async" className="h-10 w-auto rounded-lg" />
          <div>
            <p className="font-semibold text-navy">Mpho Lefophane Occupational Therapy</p>
            <p className="text-xs text-stone-500">Care That Meets You</p>
          </div>
        </div>
        <p className="text-sm text-stone-400">© {new Date().getFullYear()} Mpho Lefophane Occupational Therapy. All rights reserved.</p>
      </div>
    </footer>
  );
}
