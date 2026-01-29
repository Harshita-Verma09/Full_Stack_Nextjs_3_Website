export default function Navbar() {
  return (
    <header className="w-full bg-[#0B5ED7] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-orange-500">BE</span>SONG
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#">Company</a>
          <a href="#">Solutions</a>
          <a href="#">Industries</a>
          <a href="#">Careers</a>
          <a href="#">Partners</a>
        </nav>

        {/* Mobile menu icon */}
        <div className="md:hidden text-xl">☰</div>
      </div>
    </header>
  );
}
