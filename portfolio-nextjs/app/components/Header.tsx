import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 md:px-16">
      {/* Logo / Marca */}
      <div className="flex items-center">
        <Link href="https://github.com/nncis" className="group flex items-center gap-2">
          {/* <img src="/logo.svg" alt="NC Logo" className="h-10 w-auto" /> */}
          
          {/* Opción 2: Texto simulado con una fuente cursiva parecida a la de la imagen */}
          <span className="text-4xl font-light tracking-wider text-white drop-shadow-md" 
                style={{ fontFamily: '"Brush Script MT", "Great Vibes", cursive' }}>
            NC
          </span>
        </Link>
      </div>
    </header>
  );
}