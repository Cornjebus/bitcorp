import { Logo } from "@/components/logo";
import { navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-slate-300 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Logo variant="light" width={140} height={40} />
            <p className="text-sm text-slate-400">
              6 S. Broad Street, Lititz, PA 17543
            </p>
            <p className="text-sm text-slate-400">717-925-5611</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} BitCorp, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
