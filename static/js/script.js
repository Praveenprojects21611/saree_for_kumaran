document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const dropdown = toggle.parentElement;
      const menu = dropdown.querySelector('.dropdown-menu');
      const isActive = menu.classList.contains('show');

      // Close all dropdowns
      document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
      document.querySelectorAll('.dropdown-toggle').forEach(t => t.classList.remove('active'));

      // Toggle current dropdown
      if (!isActive) {
        menu.classList.add('show');
        toggle.classList.add('active');
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('show'));
      document.querySelectorAll('.dropdown-toggle').forEach(toggle => toggle.classList.remove('active'));
    }
  });
});