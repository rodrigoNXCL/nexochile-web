export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] bg-nxorange text-white text-center px-4">
      <h1 className="text-5xl font-bold mb-4 drop-shadow">Soluciones IT a tu Medida</h1>
      <p className="text-lg mb-6 max-w-xl">
        Desarrollo, automatización, integración y capacitación con el sello distintivo de <span className="font-bold">nxCHILE</span>.
      </p>
<a
  href="#contacto"
  className="bg-white text-nxorange font-semibold px-6 py-3 rounded-full shadow transition-all duration-200 hover:bg-nxblack hover:text-white hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-nxorange/50"
>
  Contáctanos
</a>

    </section>
  );
}
