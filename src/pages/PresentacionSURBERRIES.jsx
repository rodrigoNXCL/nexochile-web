import { useEffect } from 'react';

const PresentacionSURBERRIES = () => {
  // Smooth scroll para anclas internas (evita comportamiento por defecto)
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.hash.startsWith('#')) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="antialiased font-sans text-[#0F0F0F] overflow-x-hidden bg-[#F7F5F0]">
      {/* HEADER con logos */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-black/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
          <div className="flex items-center gap-5 md:gap-10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#0F3B2C] flex items-center justify-center text-white text-sm font-bold shadow-sm">S</div>
              <span className="font-sans text-xl font-semibold tracking-tight text-[#0F0F0F]">SURBERRIES</span>
            </div>
            <div className="w-px h-7 bg-[#0F0F0F]/20 hidden sm:block"></div>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#8A1C3C] flex items-center justify-center text-white text-sm font-bold shadow-sm">N</div>
              <span className="font-sans text-md font-semibold tracking-wide text-[#0F0F0F]/90">NXCHILE<span className="text-[#8A1C3C]"> TECH</span></span>
            </div>
          </div>
          <nav className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#valor" className="nav-link relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-[#8A1C3C] after:transition-all hover:after:w-full text-[#0F0F0F]/80 hover:text-[#0F0F0F]">Valor</a>
            <a href="#web-social" className="nav-link relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-[#8A1C3C] after:transition-all hover:after:w-full text-[#0F0F0F]/80 hover:text-[#0F0F0F]">Web+RRSS</a>
            <a href="#plan-unico" className="nav-link relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-[#8A1C3C] after:transition-all hover:after:w-full text-[#0F0F0F]/80 hover:text-[#0F0F0F]">Plan Único</a>
            <a href="#soporte" className="nav-link relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-[#8A1C3C] after:transition-all hover:after:w-full text-[#0F0F0F]/80 hover:text-[#0F0F0F]">Soporte</a>
            <a href="#cierre" className="nav-link relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-[#8A1C3C] after:transition-all hover:after:w-full text-[#0F0F0F]/80 hover:text-[#0F0F0F]">Continuidad</a>
          </nav>
          <a href="#plan-unico" className="hidden md:block text-sm px-5 py-2 rounded-full border border-[#0F0F0F]/20 hover:border-[#8A1C3C] hover:bg-[#8A1C3C]/5 transition-all">Conversemos</a>
        </div>
      </header>

      <main className="pt-20">
        {/* SECCIÓN 1 — HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/55 z-10"></div>
            <img src="https://images.unsplash.com/photo-1601370690183-1c7796ecec61?q=80&w=2070&auto=format" alt="Berries premium" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/30 to-transparent z-10"></div>
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left">
            <div className="inline-block mb-6 animate-fade-in">
              <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider">Continuidad Exportadora · NXCHILE TECH</span>
            </div>
            <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tighter animate-fade-up [animation-delay:0.1s]">Presencia digital corporativa<br />para una <span className="border-b-4 border-[#8A1C3C]">exportadora moderna</span>.</h1>
            <p className="text-white/90 text-lg md:text-2xl mt-6 max-w-2xl mx-auto md:mx-0 font-light animate-fade-up [animation-delay:0.2s]">NXCHILE mantiene la presencia digital activa, consistente y profesional de SURBERRIES, alineada a su imagen exportadora. Sin intermitencias, sin esfuerzo interno.</p>
            <div className="flex flex-col sm:flex-row gap-5 mt-10 justify-center md:justify-start animate-fade-up [animation-delay:0.3s]">
              <a href="#plan-unico" className="btn-primary px-8 py-4 rounded-full text-white font-semibold shadow-xl text-center transition-all bg-[#8A1C3C] hover:bg-[#0F3B2C] hover:scale-105">Ver propuesta integral <i className="fas fa-arrow-right ml-2 text-sm"></i></a>
              <a href="#contexto" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full font-medium hover:bg-white/20 transition-all text-center">Descubrir más <i className="fas fa-chevron-down ml-2 text-xs"></i></a>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-16 opacity-80">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm"><i className="fas fa-globe"></i> exportsurberries.com</div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm"><i className="fab fa-instagram"></i> Continuidad premium</div>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-white/40 text-[12px]">SCROLL</div>
        </section>

        {/* SECCIÓN 2 — CONTEXTO */}
        <section id="contexto" className="min-h-screen py-28 px-6 md:px-12 bg-[#F7F5F0] section-fade opacity-0 translate-y-6 transition-all duration-700">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div>
                <span className="text-[#8A1C3C] font-bold text-sm uppercase tracking-widest">Realidad exportadora 2025</span>
                <h2 className="font-sans text-4xl md:text-6xl font-bold mt-4 leading-tight text-[#0F0F0F]">La presencia digital es <span className="text-[#0F3B2C]">parte de tu imagen exportadora</span>.</h2>
                <p className="text-gray-700 text-lg mt-6 leading-relaxed">Hoy, una empresa exportadora no solo es evaluada por su producto. También por su continuidad, profesionalismo y consistencia digital. Clientes internacionales validan cada detalle.</p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-white/60"><i className="fas fa-ban text-[#8A1C3C] text-xl w-6"></i><span>Redes abandonadas → desconfianza comercial</span></div>
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-white/80 shadow-sm"><i className="fas fa-check-circle text-[#0F3B2C] text-xl w-6"></i><span className="font-medium">Presencia corporativa consistente → validación premium</span></div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-2 h-80 md:h-96">
                  <div className="bg-[#0F0F0F]/90 flex flex-col items-center justify-center text-center p-5 border-r border-white/10">
                    <i className="fas fa-hourglass-half text-5xl text-white/30 mb-4"></i>
                    <p className="text-white/60 text-sm">Sin continuidad</p>
                    <p className="text-white/30 text-xs">percepción débil</p>
                  </div>
                  <div className="bg-[#0F3B2C]/95 flex flex-col items-center justify-center text-center p-5">
                    <i className="fas fa-chart-simple text-5xl text-[#F7F5F0] mb-4"></i>
                    <p className="text-[#F7F5F0] font-semibold">Presencia activa</p>
                    <p className="text-[#F7F5F0]/80 text-xs">imagen sólida</p>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 text-white/20 text-[10px]">coherencia digital</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3 — VALOR */}
        <section id="valor" className="py-28 px-6 md:px-12 bg-white section-fade opacity-0 translate-y-6 transition-all duration-700">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-sans text-4xl md:text-5xl font-bold text-[#0F0F0F]">Lo que realmente importa: <span className="text-[#8A1C3C]">confianza, percepción y respaldo</span></h2>
              <div className="w-20 h-0.5 bg-[#0F3B2C] mx-auto mt-6"></div>
              <p className="text-gray-500 mt-6 text-lg">Sin métricas vacías. Construimos presencia corporativa real.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/97 border border-black/5 p-8 rounded-2xl hover:-translate-y-1.5 transition-all hover:shadow-xl"><i className="fas fa-infinity text-3xl text-[#0F3B2C] mb-5"></i><h3 className="font-sans text-2xl font-bold">Continuidad ininterrumpida</h3><p className="text-gray-500 mt-2">Flujo constante de contenido alineado al rubro exportador.</p></div>
              <div className="bg-white/97 border border-black/5 p-8 rounded-2xl hover:-translate-y-1.5 transition-all hover:shadow-xl"><i className="fas fa-handshake text-3xl text-[#0F3B2C] mb-5"></i><h3 className="font-sans text-2xl font-bold">Confianza comercial</h3><p className="text-gray-500 mt-2">Respalda la negociación con clientes internacionales.</p></div>
              <div className="bg-white/97 border border-black/5 p-8 rounded-2xl hover:-translate-y-1.5 transition-all hover:shadow-xl"><i className="fas fa-globe-americas text-3xl text-[#0F3B2C] mb-5"></i><h3 className="font-sans text-2xl font-bold">Presencia global</h3><p className="text-gray-500 mt-2">Imagen corporativa consistente en todos los canales.</p></div>
              <div className="bg-white/97 border border-black/5 p-8 rounded-2xl hover:-translate-y-1.5 transition-all hover:shadow-xl"><i className="fas fa-building text-3xl text-[#0F3B2C] mb-5"></i><h3 className="font-sans text-2xl font-bold">Estructura sólida</h3><p className="text-gray-500 mt-2">La web valida, las redes muestran continuidad.</p></div>
              <div className="bg-white/97 border border-black/5 p-8 rounded-2xl hover:-translate-y-1.5 transition-all hover:shadow-xl"><i className="fas fa-bezier-curve text-3xl text-[#0F3B2C] mb-5"></i><h3 className="font-sans text-2xl font-bold">Coherencia corporativa</h3><p className="text-gray-500 mt-2">Identidad visual premium sin fisuras.</p></div>
              <div className="bg-white/97 border border-black/5 p-8 rounded-2xl hover:-translate-y-1.5 transition-all hover:shadow-xl"><i className="fas fa-passport text-3xl text-[#0F3B2C] mb-5"></i><h3 className="font-sans text-2xl font-bold">Validación internacional</h3><p className="text-gray-500 mt-2">Estándar de empresas exportadoras modernas.</p></div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 4 — WEB + RRSS */}
        <section id="web-social" className="py-28 px-6 md:px-12 bg-[#F7F5F0] section-fade opacity-0 translate-y-6 transition-all duration-700">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-sans text-4xl md:text-5xl font-bold leading-tight"><span className="border-l-8 border-[#8A1C3C] pl-5">Web + RRSS: un solo ecosistema de confianza</span></h2>
                <p className="text-gray-700 text-lg mt-6">exportsurberries.com · Instagram & Facebook con estética exportadora premium. Cada publicación refuerza la solidez de SURBERRIES.</p>
                <div className="flex flex-wrap gap-5 mt-8">
                  <div className="flex items-center gap-2"><i className="fas fa-check-circle text-[#0F3B2C]"></i><span>Dominio profesional</span></div>
                  <div className="flex items-center gap-2"><i className="fas fa-check-circle text-[#0F3B2C]"></i><span>Mantención semanal garantizada</span></div>
                  <div className="flex items-center gap-2"><i className="fas fa-check-circle text-[#0F3B2C]"></i><span>Look & feel exportador</span></div>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-white p-4 rounded-3xl w-64 shadow-2xl"><i className="fas fa-laptop-code text-6xl text-black/10 block text-center"></i><div className="h-32 bg-gradient-to-br from-[#0F3B2C]/5 to-[#8A1C3C]/5 rounded-xl mt-3 flex items-center justify-center text-sm text-black/50">exportsurberries.com</div></div>
                <div className="absolute -bottom-5 -right-5 bg-white p-2 rounded-2xl w-32 shadow-xl"><i className="fab fa-instagram text-3xl text-black/20 text-center block"></i><div className="h-20 bg-[#F7F5F0] rounded-md mt-1"></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 5 — QUÉ HACE NXCHILE */}
        <section className="py-28 px-6 md:px-12 bg-white section-fade opacity-0 translate-y-6 transition-all duration-700">
          <div className="max-w-5xl mx-auto text-center">
            <i className="fas fa-shield-haltered text-5xl text-[#8A1C3C]/50 mb-6"></i>
            <h2 className="font-sans text-4xl md:text-6xl font-medium tracking-tight">Continuidad digital · Soporte visual · Respaldo corporativo</h2>
            <div className="h-px w-28 bg-[#0F3B2C] mx-auto my-8"></div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">NXCHILE mantiene activa y consistente la presencia digital de SURBERRIES mediante contenido estratégico alineado al rubro exportador. <strong className="text-[#0F0F0F]">No somos una agencia de marketing: somos el soporte externo que sostiene tu imagen premium.</strong></p>
          </div>
        </section>

        {/* SECCIÓN 6 — PLAN ÚNICO + PRECIO + OFERTA MAYO */}
        <section id="plan-unico" className="py-28 px-6 md:px-12 bg-[#0F3B2C] text-white section-fade opacity-0 translate-y-6 transition-all duration-700">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-5 py-1.5 text-sm font-semibold tracking-wide mb-6">Plan Integral · Continuidad Total</div>
            <h2 className="font-sans text-5xl md:text-6xl font-bold tracking-tight">Un solo plan. <span className="text-[#F7F5F0]">Todo incluido.</span></h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto mt-5">Presencia digital completa sin preocupaciones: web + redes sociales + contenido gráfico + soporte continuo.</p>
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl">
                <div className="text-6xl font-bold mb-2">$150.000 <span className="text-2xl font-normal text-white/70">/ mes</span></div>
                <p className="text-white/70 text-sm">mínimo 6 meses continuos · pago por adelantado</p>
                <div className="h-px bg-white/20 my-6"></div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#F7F5F0]"></i>Mantención web + hosting incluido</li>
                  <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#F7F5F0]"></i>Publicaciones semanales en RRSS</li>
                  <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#F7F5F0]"></i>Diseño gráfico premium (sin depender de tu equipo)</li>
                  <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#F7F5F0]"></i>Contenido alineado a imagen exportadora</li>
                  <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#F7F5F0]"></i>Fichas técnicas / soporte documental visual</li>
                  <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#F7F5F0]"></i>Reporte mensual de continuidad</li>
                </ul>
                <div className="mt-8 bg-[#8A1C3C]/60 rounded-2xl p-4 text-center animate-pulse">
                  <p className="font-bold text-lg"><i className="fas fa-gift mr-2"></i> OFERTA ESPECIAL · CIERRE HOY</p>
                  <p className="text-white/90">Si confirmas hoy, <span className="font-bold text-white text-xl">los días de MAYO van de REGALO</span> dentro del flujo de junio. Ahorro inmediato + continuidad anticipada.</p>
                </div>
                <div className="mt-8">
                  <a href="#contacto-final" className="inline-block bg-[#8A1C3C] hover:bg-[#0F3B2C] px-10 py-4 rounded-full text-white font-bold text-lg shadow-2xl hover:scale-105 transition-transform">Iniciar continuidad digital →</a>
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm mt-8">*Compromiso mínimo 6 meses · facturación mensual adelantada · incluye todo lo descrito</p>
          </div>
        </section>

        {/* SECCIÓN 7 — SOPORTE OPERATIVO */}
        <section id="soporte" className="py-28 px-6 md:px-12 bg-[#F7F5F0] section-fade opacity-0 translate-y-6 transition-all duration-700">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <span className="text-[#8A1C3C] font-bold text-sm uppercase tracking-widest">Respaldo externo</span>
                <h2 className="font-sans text-4xl md:text-5xl font-bold mt-3 leading-tight">Soporte operativo digital: <span className="text-[#0F3B2C]">sin dependencia interna</span></h2>
                <p className="text-gray-700 text-lg mt-5">Fichas técnicas, formatos, material visual, continuidad corporativa. NXCHILE funciona como <strong>respaldo externo de continuidad digital</strong> eliminando la carga de tu equipo.</p>
                <ul className="mt-7 space-y-3">
                  <li className="flex gap-3"><i className="fas fa-database text-[#0F3B2C] mt-1"></i>Gestión de activos visuales</li>
                  <li className="flex gap-3"><i className="fas fa-sync-alt text-[#0F3B2C] mt-1"></i>Actualización sin fricción</li>
                  <li className="flex gap-3"><i className="fas fa-archive text-[#0F3B2C] mt-1"></i>Archivo exportador consistente</li>
                </ul>
              </div>
              <div className="order-1 md:order-2 bg-white/80 rounded-3xl p-8 shadow-xl border border-white/40">
                <i className="fas fa-cogs text-4xl text-[#8A1C3C] mb-5"></i>
                <p className="italic text-gray-600 text-lg">“El objetivo es que SURBERRIES transmita solidez en cada interacción digital, desde su web hasta cada publicación. Sin intermitencias, sin esfuerzo interno.”</p>
                <div className="mt-7 flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-[#8A1C3C] flex items-center justify-center text-white font-bold text-xl">N</div><div><p className="font-bold">NXCHILE TECH</p><p className="text-sm text-gray-500">Continuidad exportadora premium</p></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 8 — CIERRE */}
        <section id="cierre" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden section-fade opacity-0 translate-y-6 transition-all duration-700">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1587234425994-86b6b0a588c1?q=80&w=1974&auto=format" alt="Berries exportación premium" className="w-full h-full object-cover brightness-[0.35]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent"></div>
          </div>
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto text-white">
            <i className="fas fa-seedling text-5xl text-[#F7F5F0]/60 mb-6"></i>
            <h2 className="font-sans text-5xl md:text-7xl font-bold leading-tight">Hoy no basta con existir.</h2>
            <p className="text-2xl md:text-3xl mt-5 font-light">Las empresas que transmiten continuidad y presencia <span className="border-b-2 border-[#8A1C3C]">generan más confianza</span>.</p>
            <div className="my-8 h-px w-20 bg-white/30 mx-auto"></div>
            <p className="text-xl text-white/80">SURBERRIES + NXCHILE TECH<br /><span className="text-[#F7F5F0] font-medium">Continuidad digital para una exportadora moderna.</span></p>
            <div className="mt-8 inline-block bg-[#8A1C3C]/80 backdrop-blur-md rounded-full px-5 py-2 text-sm font-semibold animate-pulse">
              ⚡ Oferta vigente: Mayo de regalo si confirmas hoy
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10">
              <a href="#plan-unico" className="px-10 py-4 bg-[#8A1C3C] text-white rounded-full font-bold text-lg hover:bg-[#0F3B2C] transition-all shadow-2xl">Conversemos <i className="fas fa-comment-dots ml-2"></i></a>
              <a href="#plan-unico" className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full font-medium hover:bg-white/20 transition-all">Iniciar continuidad digital</a>
            </div>
            <div className="mt-16 flex justify-center gap-8 text-white/30 text-xs">
              <span>© NXCHILE TECH — Soporte externo de presencia corporativa</span>
            </div>
          </div>
        </section>
      </main>

      {/* Estilos adicionales para animaciones (sin necesidad de CSS externo) */}
      <style>{`
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-fade-in { animation: fadeIn 1s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .section-fade.visible { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>

      {/* Script para Intersection Observer */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const sections = document.querySelectorAll('.section-fade');
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
              });
            }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
            sections.forEach(s => observer.observe(s));
          })();
        `
      }} />
    </div>
  );
};

export default PresentacionSURBERRIES;