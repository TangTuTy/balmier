document.addEventListener('DOMContentLoaded', async () => {
  const mount = document.getElementById('header-placeholder');
  if (!mount) return;

  try {
    const res = await fetch('header.html?v=3', { cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    
    const headerHtml = await res.text();
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = headerHtml;
    const headerElement = tempDiv.querySelector('.site-header');

    if (headerElement) {
      mount.replaceWith(headerElement);

      const btn = headerElement.querySelector('.hamburger');
      if (btn) {
        btn.addEventListener('click', () => {
          const open = headerElement.classList.toggle('menu-open');
          btn.setAttribute('aria-expanded', String(open));
        });
      }

      const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
      headerElement.querySelectorAll('nav a').forEach(a => {
        const href = (a.getAttribute('href') || '').toLowerCase();
        if (href === here) {
          a.classList.add('is-active');
        }
      });
    }

  } catch (e) {
    console.error('[header]', e);
  }
});
