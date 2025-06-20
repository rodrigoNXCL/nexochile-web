export default function Privacidad() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-nxorange mb-6">Aviso de Privacidad</h1>
      <p className="mb-4">
        En Nexo Chile valoramos y respetamos tu privacidad. Esta página explica cómo recopilamos, usamos y protegemos tus datos personales.
      </p>
      <h2 className="text-xl font-semibold text-nxorange mt-8 mb-2">¿Qué datos recopilamos?</h2>
      <p className="mb-4">
        Solo recopilamos los datos que tú mismo nos entregas mediante nuestros formularios de contacto y comunicación directa.
      </p>
      <h2 className="text-xl font-semibold text-nxorange mt-8 mb-2">¿Para qué usamos tu información?</h2>
      <p className="mb-4">
        Utilizamos tus datos únicamente para responder tus consultas y entregarte información sobre nuestros servicios. No los compartimos con terceros.
      </p>
      <h2 className="text-xl font-semibold text-nxorange mt-8 mb-2">Tus derechos</h2>
      <p className="mb-4">
        Puedes solicitar en cualquier momento la eliminación o actualización de tus datos enviando un correo a <a href="mailto:contacto@nxchile.com" className="text-nxorange underline">contacto@nxchile.com</a>.
      </p>
      <p className="text-gray-400 text-xs mt-8">
        Última actualización: {new Date().toLocaleDateString()}
      </p>
    </section>
  );
}
