// Relógio (horário de Brasília)
    function updateClock() {
      const els = document.querySelectorAll('.clock');
      if (!els.length) return;
      const options = { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', hour12: false };
      const time = new Intl.DateTimeFormat('pt-BR', options).format(new Date());
      els.forEach(el => el.textContent = time);
    }
    updateClock();
    setInterval(updateClock, 15000);

    // Revelação suave ao rolar a página (progressive enhancement)
    document.addEventListener('DOMContentLoaded', () => {
      const targets = document.querySelectorAll('[data-reveal]');
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!targets.length || !('IntersectionObserver' in window) || reduceMotion) return;

      targets.forEach(el => el.classList.add('reveal-pending'));
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
      targets.forEach(el => io.observe(el));
    });