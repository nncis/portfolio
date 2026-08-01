import Image from 'next/image';

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();

  return (
<footer className="bg-[#1e293b] min-h-screen grid place-items-center py-16 text-center md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-12 space-y-10 md:space-y-14">
        
        {/* Título principal */}
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          ¿Tienes un proyecto en mente?
        </h2>

        {/* Subtítulo / Descripción */}
        <p className="mx-auto max-w-2xl text-lg font-semibold leading-relaxed text-white md:text-xl">
          Si estás interesado en colaborar o simplemente quieres saludar, escríbeme.
        </p>

        {/* Botón de Email */}
        <div className="flex justify-center">
          <a 
            href="mailto:tu-email@ejemplo.com"
            className="inline-block w-full rounded-lg bg-[#a0f0ea] px-6 py-3.5 text-base font-semibold text-slate-900 transition-colors hover:bg-[#7cd8d2] shadow-lg sm:w-64 md:w-auto md:px-10 md:py-4 md:text-lg"
          >
            Enviar Email
          </a>
        </div>

        {/* Ícono de LinkedIn */}
        <div className="flex justify-center">
          <a 
            href="https://www.linkedin.com/in/tu-perfil/"
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex h-20 w-20 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 shadow-md"
          >
            <div className="relative h-12 w-12 md:h-14 md:w-14">
              <Image 
                src="/linkedin-logo.png" 
                alt="LinkedIn"
                fill
                className="object-contain" 
                sizes="(max-width: 768px) 48px, 56px"
              />
            </div>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 md:text-sm">
          &copy; {currentYear} Nahuel Cisneros. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}