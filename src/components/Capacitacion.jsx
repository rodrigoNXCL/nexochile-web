// src/components/Capacitacion.jsx

export default function Capacitacion() {
  const cursos = [
    {
      nombre: "Educación",
      descripcion: "Formación y actualización docente, asistente de aula, PIE, integración escolar.",
      imagen: "/capacitacion/educacion.png",
    },
    {
      nombre: "Ofimática",
      descripcion: "Excel, Word, PowerPoint, Google Workspace y herramientas de oficina digital.",
      imagen: "/capacitacion/ofimatica.png",
    },
    {
      nombre: "Inteligencia Artificial",
      descripcion: "Introducción a IA, uso de ChatGPT y herramientas AI para el trabajo diario.",
      imagen: "/capacitacion/ia.png",
    },
    {
      nombre: "Programación Jr.",
      descripcion: "Cursos de introducción a la lógica y programación práctica (Python, JS).",
      imagen: "/capacitacion/programacion.png",
    },
  ];

  return (
    <section id="capacitacion" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-nxorange mb-2 text-center">
        Capacitación Certificada
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Entrenamientos y cursos 100% online y presenciales, con certificación válida bajo la normativa chilena vigente. ¡Potencia tu desarrollo profesional!
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {cursos.map((curso, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-xl border border-nxorange p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all"
          >
            <img
              src={curso.imagen}
              alt={curso.nombre}
              className="h-20 mb-4 object-contain"
            />
            <h3 className="text-lg font-bold text-nxorange mb-2 text-center">
              {curso.nombre}
            </h3>
            <p className="text-center text-gray-600">{curso.descripcion}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
          href="#contacto"
          className="inline-block bg-nxorange text-white font-bold py-3 px-8 rounded-full shadow hover:bg-nxblack hover:text-nxorange transition"
        >
          Solicitar información
        </a>
      </div>
    </section>
  );
}
