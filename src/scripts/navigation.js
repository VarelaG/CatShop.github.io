export function setupNavigation() {
  const toggleCart = () => {
    const cart = document.getElementById('cart');
    if (cart) {
      cart.classList.toggle('hidden');
      // Cerrar el menú si está abierto
      const menu = document.getElementById('menu');
      if (menu && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
      }
    }
  };

  const toggleMenu = () => {
    const menu = document.getElementById('menu');
    if (menu) {
      menu.classList.toggle('hidden');
      // Cerrar el carrito si está abierto
      const cart = document.getElementById('cart');
      if (cart && !cart.classList.contains('hidden')) {
        cart.classList.add('hidden');
      }
    }
  };

  // Cerrar al hacer clic fuera
  document.addEventListener('click', (event) => {
    const cart = document.getElementById('cart');
    const menu = document.getElementById('menu');
    const cartButton = document.querySelector('[data-cart-toggle]');
    const menuButton = document.querySelector('[data-menu-toggle]');

    if (cart && !cart.classList.contains('hidden') && 
        !cart.contains(event.target) && 
        !cartButton.contains(event.target)) {
      cart.classList.add('hidden');
    }

    if (menu && !menu.classList.contains('hidden') && 
        !menu.contains(event.target) && 
        !menuButton.contains(event.target)) {
      menu.classList.add('hidden');
    }
  });

  // Agregar event listeners a los botones
  const cartButton = document.querySelector('[data-cart-toggle]');
  const menuButton = document.querySelector('[data-menu-toggle]');

  if (cartButton) {
    cartButton.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleCart();
    });
  }

  if (menuButton) {
    menuButton.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });
  }
}
