import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactFooter from './components/ContactFooter';

export default function Home() {
  return (
    <main className="relative w-full bg-[#f8f9fa]">

      {/* 1. SECCIÓN HERO */}
      <section className="relative flex min-h-screen w-full flex-col overflow-hidden">

        {/* El Fondo - SOLO la imagen */}
        <div className="absolute inset-0 -z10 bg-[#dbeafe]">
          <img
            src="/backgroundHero1.png"
            alt="Fondo de escritorio"
            className="h-full w-full object-cover"
          />
        </div>

        {/* La cinta suave en el medio */}
        <div
          className="absolute inset-x-0 top-1/2 h-64 -translate-y-1/2 z-0"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(16, 16, 16, 0.2) 30%, rgba(0, 0, 0, 0.5) 50%, rgba(16, 16, 16, 0.2) 70%, transparent 100%)'
          }}
        ></div>

        {/* Contenido del Hero */}
        <Header />
        <div className="relative z-20 flex flex-1 flex-col items-center justify-center px-6 text-center">
          
          {/* Título: En móvil es text-4xl, en escritorio text-7xl */}
          <h1 className="text-4xl font-bold tracking-tight text-[#a0f0ea] drop-shadow-lg md:text-7xl">
            Nahuel Cisneros
          </h1>

          {/* Subtítulo: En móvil es text-lg, en escritorio text-3xl */}
          <p className="mt-4 text-lg font-semibold text-white drop-shadow-lg md:mt-6 md:text-3xl">
            Construyendo soluciones web escalables
          </p>

          {/* Botón: En móvil es más compacto (w-48 y h-12), en escritorio crece */}
          <a 
            href="#expense-manager" 
            className="mt-8 w-48 rounded-lg bg-[#a0f0ea] py-3 text-base font-semibold text-slate-900 transition-colors hover:bg-[#7cd8d2] shadow-lg md:mt-10 md:w-auto md:px-8 md:py-4 md:text-lg"
          >
            Ver Portfolio
          </a>
        </div>
      </section>

      <AboutSection />
      <ProjectsSection />
      <ContactFooter />

    </main>
  );
}