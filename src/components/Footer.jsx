import { Mail, Phone, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-nxblack text-gray-200 px-6 pt-10 pb-4 mt-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">

        {/* Columna 1: Contacto */}
        <div>
          <h3 className="text-lg font-bold text-nxorange mb-2">Contacto</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-nxorange" />
              <a href="mailto:contacto@nxchile.com" className="hover:text-nxorange transition">contacto@nxchile.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-nxorange" />
              <a href="https://wa.me/56977412178" target="_blank" rel="noopener noreferrer" className="hover:text-nxorange transition">+56 9 7741 2178</a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="w-5 h-5 text-nxorange" />
              <a href="https://www.instagram.com/nexo_chile/" target="_blank" rel="noopener noreferrer" className="hover:text-nxorange transition">@nexo_chile</a>
            </li>
          </ul>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-bold text-nxorange mb-2">Enlaces rápidos</h3>
          <ul className="space-y-2">
            <li>
              <a href="#servicios" className="hover:text-nxorange transition">Servicios</a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-nxorange transition">Contacto</a>
            </li>
            <li>
              <a href="/privacidad" className="hover:text-nxorange transition">
                Aviso de privacidad
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Sello institucional */}
      <div className="mt-10 border-t border-gray-700 pt-3 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Nexo Chile · Soluciones IT & Capacitación. Todos los derechos reservados.
        <br />
        Desarrollado con 💻 por nxCHILE & NexitoBOT
      </div>
    </footer>
  );
}
