export function setupNavigation() {
  const toggleCart = () => {
    const cart = document.getElementById('cart');
    if (cart) {
      cart.classList.toggle('hidden');
    }
  };

  const toggleMenu = () => {
    const menu = document.getElementById('menu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  };

  // Add click event listeners
  const cartButton = document.querySelector('[data-cart-toggle]');
  const menuButton = document.querySelector('[data-menu-toggle]');

  if (cartButton) {
    cartButton.addEventListener('click', toggleCart);
  }

  if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
  }
}
