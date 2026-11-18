/* CONFIGURACIÓN: reemplaza el número por el WhatsApp de la empresa.
   Formato internacional, solo números. Ejemplo El Salvador: 503XXXXXXXX.
   No incluyas +, espacios ni guiones. */
const WHATSAPP_NUMBER = "50374320994";

// Enlaces directos a WhatsApp para los botones de contacto de la página.
document.querySelectorAll('.whatsapp-link').forEach(link => {
  const defaultMessage = 'Hola, me gustaría obtener información sobre sus servicios de climatización y electricidad.';
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('client-name').value.trim();
  const service = document.getElementById('client-service').value;
  const message = document.getElementById('client-message').value.trim();
  const text = `Hola, soy ${name}. Me interesa consultar sobre: ${service}. ${message ? 'Detalles: ' + message : ''}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});
