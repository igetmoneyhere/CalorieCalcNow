import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container-max flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:text-blue-400 transition">
          <span className="bg-blue-500 px-3 py-1 rounded">CalorieCalcNow</span>
        </Link>
        
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-blue-400 transition">
            Calculator
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
