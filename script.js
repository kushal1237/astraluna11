// Small progressive enhancement: keep the download action native and accessible.
document.querySelectorAll('a[href="#about"]').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  });
});
