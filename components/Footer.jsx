import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 sticky top-[100vh] bg-zinc-950/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          Next<span className="text-indigo-500">App</span>
        </Link>

        {/* Copyright */}
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} NextApp. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/about"
            className="text-zinc-400 transition-colors hover:text-indigo-400"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-zinc-400 transition-colors hover:text-indigo-400"
          >
            Contact
          </Link>

        
        </div>
      </div>
    </footer>
  );
}
