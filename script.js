// Configuration rapide : remplace ce numéro par ton numéro WhatsApp.
const WHATSAPP_NUMBER = "22890000000"; // Exemple Togo : 228 + numéro, sans + ni espaces.

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll(".order-button").forEach((button) => {
  const product = button.dataset.product || "une création Brillante Crochet";
  button.href = whatsappLink(`Bonjour Brillante Crochet ! Je souhaite commander : ${product}. Pouvez-vous me donner plus d'informations ?`);
  button.target = "_blank";
  button.rel = "noopener noreferrer";
});

document.getElementById("customOrder").href = whatsappLink("Bonjour Brillante Crochet ! Je voudrais demander une création personnalisée.");
document.getElementById("customOrder").target = "_blank";
document.getElementById("contactWhatsApp").href = whatsappLink("Bonjour Brillante Crochet ! Je voudrais avoir des informations sur vos créations.");
document.getElementById("contactWhatsApp").target = "_blank";

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
