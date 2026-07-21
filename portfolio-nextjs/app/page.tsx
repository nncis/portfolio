import Header from './components/Header';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      
      {/* 1. El Header */}
      <Header />

      {/* 2. El fondo y el rectángulo horizontal */}
      <div className="absolute inset-0 -z-10">
        
        {/* La Imagen de fondo */}
        <img 
          src="/backgroundHero1.png" 
          alt="Fondo de escritorio" 
          className="h-full w-full object-cover"
        />

        {/* EL RECTÁNGULO HORIZONTAL QUE ATRAVIESA LA PANTALLA */}
        {/* Usamos un degradado lineal: transparente a los lados, negro sólido en el centro */}
        <div 
          className="absolute inset-x-0 top-1/2 h-64 -translate-y-1/2"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(16, 16, 16, 0.25) 30%, rgba(0, 0, 0, 0.1) 1%, rgba(16, 16, 16, 0.25) 30%, transparent 100%)'
          }}
        ></div>

      </div>

      {/* 3. Contenido principal (Texto y botón) */}
      {/* Como el rectángulo ya da el contraste, podemos quitar los drop-shadow excesivos */}
      <div className="flex h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-[#a0f0ea] md:text-7xl">
          Nahuel Cisneros
        </h1>
        <p className="mt-4 text-2xl font-semibold text-white md:text-3xl">
          Construyendo soluciones web escalables
        </p>
        <button className="mt-8 rounded-lg bg-[#a0f0ea] px-8 py-3 text-lg font-semibold text-slate-900 transition-colors hover:bg-[#7cd8d2]">
          Ver Portfolio
        </button>
      </div>

    </main>
  );
}