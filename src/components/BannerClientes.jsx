// src/components/BannerClientes.jsx

const clientes = [
  { src: "/logos/bastcon.jpg", alt: "Cliente 1" },
  { src: "/logos/vmp.png", alt: "Cliente 2" },
  { src: "/logos/muevo.jpg", alt: "Cliente 3" },
  { src: "/logos/qpq_logo.jpg", alt: "Cliente 4" },
  { src: "/logos/ac_logo.png", alt: "Cliente 5" },
  // ...agrega los que quieras
];

export default function BannerClientes() {
  return (
    <section className="w-full bg-white py-8 border-y border-gray-100">
      <h3 className="text-center text-xl md:text-2xl font-bold text-nxorange mb-5 tracking-wide">
        Clientes que confian en nosotros!
      </h3>
      <div className="overflow-hidden w-full">
        <div className="flex gap-14 animate-marquee-long items-center" style={{ minWidth: "200%" }}>
          {/* Duplicamos los logos para scroll infinito */}
          {clientes.concat(clientes).map((cliente, i) => (
            <img
              key={i}
              src={cliente.src}
              alt={cliente.alt}
              className="h-20 object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}