document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll pour les sections
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Bouton retour en haut
  const backToTop = document.createElement("button");
  backToTop.textContent = "↑";
  backToTop.className =
    "fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded shadow-md hover:bg-blue-700 transition";
  backToTop.style.display = "none";
  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 🚀 Générer dynamiquement la section contact
  const contacts = [
    { icon: "📧", label: "Email", link: "randylucas.4m@gmail.com" },
    { icon: "📱", label: "Téléphone", link: "tel:+261346759199" },
    {
      icon: '<i class="fab fa-linkedin text-blue-700"></i>', // Utilisation de guillemets simples pour la chaîne
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/randy-miandra-4m/",
    },
    {
      icon: '<i class="fab fa-github"></i>',
      label: "GitHub",
      link: "https://github.com/Lucas-randy",
    },
  ];

  const contactLinksContainer = document.getElementById("contact-links");

  contacts.forEach((contact) => {
    // Créer un div pour chaque contact
    const contactDiv = document.createElement("div");
    contactDiv.classList.add(
      "flex",
      "items-center",
      "justify-center",
      "p-4",
      "bg-gray-800",
      "text-gray-300",
      "rounded-lg",
      "shadow-lg",
      "transition-all",
      "duration-500",
      "hover:bg-gray-700",
      "w-32",
      "h-32"
    );

    // Créer un lien pour chaque contact
    const contactLink = document.createElement("a");
    contactLink.href = contact.link;
    contactLink.target = "_blank";
    contactLink.classList.add("text-center");

    // Ajouter l'icône et le label
    contactLink.innerHTML = `${contact.icon}<p class="mt-2">${contact.label}</p>`;

    // Ajouter le lien dans le div de contact
    contactDiv.appendChild(contactLink);

    // Ajouter le div au conteneur des liens de contact
    contactLinksContainer.appendChild(contactDiv);
  });
});
