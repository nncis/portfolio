import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 md:px-16">
      {/* Logo / Marca */}
      <div className="flex items-center">
        <Link href="/" className="group flex items-center gap-2">
          {/* Opción 1: Si tienes el logo como imagen SVG */}
          {/* <img src="/logo.svg" alt="NC Logo" className="h-10 w-auto" /> */}
          
          {/* Opción 2: Texto simulado con una fuente cursiva parecida a la de la imagen */}
          <span className="text-4xl font-light tracking-wider text-white drop-shadow-md" 
                style={{ fontFamily: '"Brush Script MT", "Great Vibes", cursive' }}>
            NC
          </span>
        </Link>
      </div>

      {/* Navegación (Menú) */}
      <nav className="hidden md:flex items-center space-x-10">
        <Link 
          href="/" 
          className="text-lg font-semibold text-white transition-colors duration-300 hover:text-[#a0f0ea]"
        >
          Home
        </Link>
        <Link 
          href="/contact" 
          className="text-lg font-semibold text-white transition-colors duration-300 hover:text-[#a0f0ea]"
        >
          Contact
        </Link>
        <Link 
          href="/about" 
          className="text-lg font-semibold text-white transition-colors duration-300 hover:text-[#a0f0ea]"
        >
          About
        </Link>
      </nav>

      {/* Botón de menú hamburguesa para móviles (opcional para empezar) */}
      <button className="block md:hidden text-white">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}