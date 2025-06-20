// src/components/Servicios.jsx

const servicios = [
  {
    nombre: "Desarrollo de Sitios Web",
    descripcion: "Creamos páginas web ágiles, atractivas y administrables, optimizadas para SEO y dispositivos móviles.",
    imagen: "/servicios/Desarrollo.png",
  },
  {
    nombre: "Automatización e IA",
    descripcion: "Optimiza procesos con soluciones automatizadas y herramientas de Inteligencia Artificial a medida.",
    imagen: "/servicios/automatizarIA.png",
  },
  {
    nombre: "Integración de Sistemas",
    descripcion: "Integramos tus sistemas actuales (ERP, CRM, APIs) para lograr una gestión centralizada y eficiente.",
    imagen: "/servicios/integracion.png",
  },
  {
    nombre: "Desarrollo de Apps a Medida",
    descripcion: "Aplicaciones web y móviles según tus necesidades, escalables y seguras.",
    imagen: "/servicios/Programador.png",
  }
];

export default function Servicios() {
  return (
    <section id="servicios" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-nxorange mb-10 text-center">Servicios</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {servicios.map((serv, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-xl border border-nxorange p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all">
            <img
              src={serv.imagen}
              alt={serv.nombre}
              className="h-20 mb-4 object-contain"
            />
            <h3 className="text-lg font-bold text-nxorange mb-2 text-center">{serv.nombre}</h3>
            <p className="text-center text-gray-600">{serv.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
