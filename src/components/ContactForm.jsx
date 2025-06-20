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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.correo || !form.mensaje) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    if (!validateEmail(form.correo)) {
      setError("Por favor, ingresa un correo válido.");
      return;
    }
    // Enviar por mailto (puedes cambiar a backend más adelante)
    const mailto = `mailto:contacto@nxchile.com?subject=Contacto desde Web&body=Nombre: ${encodeURIComponent(form.nombre)}%0ACorreo: ${encodeURIComponent(form.correo)}%0AMensaje: ${encodeURIComponent(form.mensaje)}`;
    window.location.href = mailto;
    setSent(true);
    setForm({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <section>
      <h2 className="text-2xl font-bold text-nxorange mb-4">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
        {sent && <div className="text-green-600 text-sm">¡Mensaje preparado! Revisa tu correo para enviarlo.</div>}
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
