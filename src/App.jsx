import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ContactForm from "./components/ContactForm";
import BannerClientes from "./components/BannerClientes";
import Servicios from "./components/Servicios";
import Capacitacion from "./components/Capacitacion";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-28">
        <Hero />
         {/* Banner de clientes */}
      <BannerClientes />
      <Servicios />
      <Capacitacion />
        {/* Contacto */}
        <section id="contacto" className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-stretch my-16 px-4">
  {/* Formulario */}
  <div className="flex-1 flex flex-col justify-center min-h-[430px] bg-white rounded-2xl shadow-2xl border border-nxorange px-8 py-10">
    <ContactForm />
  </div>
  {/* Mapa y datos */}
  <div className="flex-1 flex flex-col items-center justify-center min-h-[430px] bg-white rounded-2xl shadow-2xl border border-nxorange px-6 py-8">
    <h3 className="text-lg font-bold text-nxorange mb-2">Estamos en Chillán, Ñuble</h3>
    <div className="w-full h-64 rounded-lg overflow-hidden mb-4">
      <iframe
        title="Mapa Chillán"
        width="100%"
        height="100%"
        loading="lazy"
        className="w-full h-full"
        allowFullScreen
        src="https://www.google.com/maps?q=Chillán,+Ñuble,+Chile&output=embed"
        style={{ border: 0 }}
      ></iframe>
    </div>
    <div className="flex flex-col items-center mt-4 gap-2">
      <span className="text-nxblack text-lg font-semibold">WhatsApp:</span>
      <a
        href="https://wa.me/56977412178"
        target="_blank"
        rel="noopener noreferrer"
        className="text-nxorange text-xl font-bold underline hover:text-nxblack transition"
      >
        +56 9 7741 2178
      </a>
    </div>
  </div>
</section>
      </main>
      <Footer />
    </div>
  )
}

export default App

