import { useState } from "react";
import { Mail, Phone, Instagram } from "lucide-react"; // WhatsApp: cambia Phone por Whatsapp si lo logras instalar

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
const scrollToSection = (id) => {
  setMenuOpen(false);
  setTimeout(() => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, 100);
};


  return (
    <nav className="bg-nxblack text-white flex items-center justify-between px-6 py-4 fixed top-0 left-0 w-full z-50 shadow-lg">
      {/* Logo + texto */}
      <div className="flex items-center gap-3">
        <div
  className="bg-white rounded-full overflow-hidden flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl"
  style={{ width: 72, height: 72 }}
  tabIndex={0}
>
  <img
    src="/logo.png"
    alt="Nexo Chile Logo"
    className="w-full h-full object-cover pointer-events-none"
  />
</div>

        <span className="font-bold text-xl tracking-wide text-nxorange ml-2">NEXO CHILE</span>
      </div>

      {/* Menú desktop */}
      <ul className="hidden md:flex gap-8 text-base">
        <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="cursor-pointer ...">
  Inicio
</li>
        <li className="hover:text-nxorange transition-colors cursor-pointer relative group">
          <a href="#servicios" className="group-hover:underline group-hover:decoration-nxorange group-hover:underline-offset-8">Servicios</a>
        </li>
        <li className="hover:text-nxorange transition-colors cursor-pointer relative group">
          <a href="#capacitacion" className="group-hover:underline group-hover:decoration-nxorange group-hover:underline-offset-8">Capacitación</a>
        </li>
        <li className="hover:text-nxorange transition-colors cursor-pointer relative group">
  <a href="#contacto" className="group-hover:underline group-hover:decoration-nxorange group-hover:underline-offset-8 scroll-smooth">Contacto</a>
</li>

      </ul>

      {/* Íconos contacto (solo en escritorio) */}
      <div className="hidden md:flex items-center gap-4 ml-6">
        <a href="mailto:contacto@nxchile.com" aria-label="Correo">
          <Mail className="w-5 h-5 text-nxorange hover:scale-125 transition" />
        </a>
        <a href="https://wa.me/56977412178" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <Phone className="w-5 h-5 text-nxorange hover:scale-125 transition" />
        </a>
        <a href="https://www.instagram.com/nexo_chile/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="w-5 h-5 text-nxorange hover:scale-125 transition" />
        </a>
      </div>

      {/* Botón hamburguesa en móvil */}
      <button
        className="md:hidden flex flex-col justify-center items-center z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {/* Icono animado */}
        <span className={`block w-7 h-1 rounded bg-white mb-1 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block w-7 h-1 rounded bg-white mb-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`block w-7 h-1 rounded bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>

      {/* Overlay oscuro al abrir el menú */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Menú móvil */}
      <ul className={`fixed top-6 right-6 bg-nxblack text-white rounded-xl shadow-2xl flex flex-col gap-6 py-6 px-10 z-50 md:hidden transition-transform duration-300
        ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}
      >
        <li onClick={() => scrollToSection("top")}>Inicio</li>
        <li onClick={() => scrollToSection("servicios")}>Servicios</li>
        <li onClick={() => scrollToSection("capacitacion")}>Capacitación</li>
        <li onClick={() => scrollToSection("contacto")}>Contacto</li>
      </ul>
    </nav>
  );
}
