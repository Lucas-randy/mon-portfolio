export default function Contact() {
  const contacts = [
    { icon: "📧", label: "Email", link: "mailto:randylucas.4m@gmail.com" },
    { icon: "📱", label: "Téléphone", link: "tel:+261346759199" },
    {
      icon: "🔗",
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/randy-miandra-4m/",
    },
    { icon: "💻", label: "GitHub", link: "https://github.com/Lucas-randy" },
  ];

  return (
    <section className="p-6 bg-gray-100 rounded-xl shadow-lg text-center">
      <h2 className="text-3xl font-bold mb-4 text-blue-500">Contactez-moi</h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 bg-white border border-gray-300 rounded-lg shadow hover:bg-blue-100 transition-transform transform hover:scale-105"
          >
            <span className="text-2xl">{contact.icon}</span>
            <span className="font-medium">{contact.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
