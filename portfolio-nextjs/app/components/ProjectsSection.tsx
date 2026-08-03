import Image from 'next/image';

// Componente auxiliar para los íconos redondos (reutilizado del About)
function TechIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-1.5 shadow-sm transition-transform hover:scale-110 md:h-14 md:w-14 md:p-2">
      <Image
        src={src}
        alt={alt}
        title={alt}
        width={50}
        height={50}
        className="h-auto w-full object-contain "
      />
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="expense-manager" className="bg-[#cbd5e1] py-12 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12">

        {/* Estructura principal: Texto a la izquierda, Mockups a la derecha */}
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between md:gap-12">

          {/* COLUMNA IZQUIERDA: Información del proyecto */}
          <div className="flex flex-1 flex-col space-y-4 md:max-w-lg md:space-y-6">

            {/* Título */}
            <h2 className="text-3xl font-bold text-[#1e293b] md:text-4xl">
              Expense Manager
            </h2>

            {/* Descripción */}
            <p className="text-base leading-relaxed text-[#334155] md:text-xl">
              Gestor de finanzas personales. Permite a los usuarios registrar gastos diarios, filtrarlos por categoría y visualizar tendencias de consumo mediante gráficos interactivos semanales y mensuales.
            </p>

            {/* Fila de íconos de Tecnologías */}
            <div className="flex flex-wrap gap-3 pt-2 md:gap-4">
              <TechIcon src="/reactLogo.png" alt="React" />
              <TechIcon src="/typescript-logo.png" alt="TypeScript" />
              <TechIcon src="/postgresql-logo.png" alt="PostgreSQL" />
              <TechIcon src="/d3-logo.png" alt="D3.js" />
              <TechIcon src="/nextjs-logo.png" alt="Next.js" />
              <TechIcon src="/vercel-logo.png" alt="Vercel" />
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col gap-4 pt-4 md:flex-row md:gap-6">

              {/* Botón Turquesa */}
              <a
                href="https://expense-manager-app-topaz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-lg bg-[#a0f0ea] px-4 py-3 text-center text-base font-semibold text-slate-900 transition-colors hover:bg-[#7cd8d2] shadow-sm md:w-52 md:py-3.5 md:text-lg"
              >
                Ver demo en Vercel
              </a>

              {/* Botón Blanco */}
              <a
                href="https://github.com/nncis/expense-manager-app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-lg bg-white px-4 py-3 text-center text-base font-semibold text-slate-900 transition-colors hover:bg-gray-100 shadow-sm md:w-52 md:py-3.5 md:text-lg"
              >
                Código en GitHub
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: Imagen del proyecto (Mockups) */}
          <div className="relative mx-auto w-full max-w-sm md:max-w-lg shrink-0">
            {/* Reemplaza '/projects/expense-manager-mockup.png' con la ruta de tu imagen */}
            <Image
              src="/mockup.png"
              alt="Mockup de Expense Manager en laptop y celular"
              width={800}
              height={500}
              className="h-auto w-full object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}