import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nombre || !form.correo || !form.mensaje) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    if (!validateEmail(form.correo)) {
      setError("Por favor, ingresa un correo válido.");
      return;
    }

    // Enviar datos a Formspree
    try {
      const res = await fetch("https://formspree.io/f/xnnvbjao", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({
          nombre: form.nombre,
          correo: form.correo,
          mensaje: form.mensaje,
        }),
      });

      if (res.ok) {
        setSent(true);
        setForm({ nombre: "", correo: "", mensaje: "" });
      } else {
        setError("Hubo un error al enviar el mensaje. Intenta nuevamente.");
      }
    } catch (err) {
      setError("Error de red. Por favor, intenta más tarde.");
    }
  };

  if (sent) {
    return (
      <section>
        <div className="p-8 text-center text-lg text-nxorange font-semibold">
          ¡Gracias por contactarnos!<br />
          Te responderemos a la brevedad.
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-nxorange mb-4">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
          className="border-b-2 border-nxorange focus:outline-none py-2 px-1 text-nxblack placeholder-gray-400"
        />
        <input
          type="email"
          name="correo"
          placeholder="Tu correo"
          value={form.correo}
          onChange={handleChange}
          className="border-b-2 border-nxorange focus:outline-none py-2 px-1 text-nxblack placeholder-gray-400"
        />
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          rows={5}
          value={form.mensaje}
          onChange={handleChange}
          className="border-b-2 border-nxorange focus:outline-none py-2 px-1 text-nxblack placeholder-gray-400 resize-none"
        />
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <button
          type="submit"
          className="bg-nxorange text-white font-bold py-2 px-6 rounded-full shadow hover:bg-nxblack hover:text-nxorange transition"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}
