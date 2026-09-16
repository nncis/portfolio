import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-[#f8f9fa] min-h-[736px] flex items-center py-12 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12">

        {/* Estructura principal: En móvil columna, en escritorio fila */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-16">

          {/* Columna Izquierda: Avatar (Ajustado para que no se aplaste) */}
          <div className="shrink-0">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-lg md:h-48 md:w-48">
              <Image
                src="/profilepic.jpeg"
                alt="Avatar de Nahuel Cisneros"
                fill
                className="object-cover object-[50%_60%]" // <--- CAMBIO CLAVE: object-top evita que se aplaste la cara
                sizes="(max-width: 768px) 160px, 192px"
              />
            </div>
          </div>

          {/* Columna Derecha: Texto */}
          <div className="flex-1 space-y-6 md:space-y-8">

            {/* Título */}
            <h2 className="text-3xl font-bold text-[#40E0D0] md:text-4xl">
              Sobre mí
            </h2>

            {/* Párrafos */}
            <div className="space-y-4 text-base leading-relaxed text-gray-700 md:text-lg md:space-y-5">
              <p>
                Soy Nahuel, Full Stack Developer.
              </p>
              <p>
                Con un enfoque en el desarrollo web moderno, <strong className="font-bold text-gray-900">combino mi creatividad con sólidos conocimientos técnicos para construir aplicaciones web de alto rendimiento.</strong>
              </p>
              <p>
                Mi stack principal se centra en JavaScript, React para el frontend y Node.js con bases de datos relacionales y NoSQL en el backend. Disfruto trabajando en equipo y estoy en constante búsqueda de nuevas tecnologías para mejorar mis habilidades y aportar valor real a cada proyecto.
              </p>
            </div>
          </div>
        </div>

        {/* Fila de íconos de Tecnologías (Ajustados para móvil) */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 md:mt-16 md:gap-6">
          <TechIcon src="/reactLogo.png" alt="React" />
          <TechIcon src="/nextjs-logo.png" alt="Next.js" />
          <TechIcon src="/typescript-logo.svg" alt="TypeScript" />
          <TechIcon src="/postgresql-logo.png" alt="PostgreSQL" />
          <TechIcon src="/mongodb-logo.png" alt="MongoDB" />
        </div>

      </div>
    </section>
  );
}

// Componente auxiliar para los íconos redondos
function TechIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-2 shadow-md transition-transform hover:scale-110 md:h-16 md:w-16 md:p-3">
      <Image
        src={src}
        alt={alt}
        title={alt}
        width={50}
        height={50}
        className="h-auto w-full object-contain"
      />
    </div>
  );
}