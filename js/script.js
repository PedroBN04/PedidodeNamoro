document.addEventListener('DOMContentLoaded', () => {
  console.log('Você encontrou o segredo do coração ❤️');

  const telaInicial   = document.getElementById('tela-inicial');
  const preparadaTxt  = document.getElementById('preparada');
  const btnStart      = document.getElementById('btn-start');
  const telaPrincipal = document.getElementById('tela-principal');
  const btnYes        = document.getElementById('btn-yes');
  const btnYes2       = document.getElementById('btn-yes-2');
  const telaFinal     = document.getElementById('tela-final');
  const audio         = document.getElementById('audio');
  const btnMusic      = document.getElementById('btn-music');

  // Mostrar "Preparada?" após 3s
  setTimeout(() => preparadaTxt.classList.remove('invisivel'), 3000);

  // Start -> exibir tela principal e soltar corações
  btnStart.addEventListener('click', () => {
    createHearts();
    telaInicial.classList.add('invisivel');
    setTimeout(() => telaPrincipal.classList.remove('invisivel'), 800);
  });

  // Tocar música
  btnMusic.addEventListener('click', () => audio.play());

  // Carrossel de fotos
 const imgNames = ['Maio2024.jpeg', 'Junho2024.jpeg', 'Julho2024.jpeg', 'Agosto2024.jpeg', 'Setembro2024.jpeg', 'Outubro2024.jpeg', 'Novembro2024.jpeg', 'Dezembro2024.jpeg', 'Janeiro2025.jpeg', 'Fevereiro2025.jpeg', 'Março2025.jpeg','Abril2025.jpeg', 'Maio2025.jpeg' ];
  const wrapper  = document.querySelector('.swiper-wrapper');

  imgNames.forEach(name => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    let label = name.replace('.jpeg','');
    if (/Dezembro|Janeiro/.test(name)) {
      slide.innerHTML = `
        <img src="img/corrompido.jpeg" alt="Memória corrompida">
        <div class="caption">Memória corrompida ❤️</div>
      `;
    } else {
      slide.innerHTML = `
        <img src="img/${name}" alt="${label}">
        <div class="caption">${label}</div>
      `;
    }
    wrapper.appendChild(slide);
  });
  new Swiper('.swiper-container', {
    pagination: { el: '.swiper-pagination' }
  });

  // Botões SIM -> fogos + tela final
  [btnYes, btnYes2].forEach(btn => {
    btn.addEventListener('click', () => {
      shootFireworks();
      telaPrincipal.classList.add('invisivel');
      setTimeout(() => telaFinal.classList.remove('invisivel'), 800);
    });
  });
});

// Hearts
function createHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = 3 + Math.random() * 2 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}

// Fireworks
function shootFireworks() {
  for (let i = 0; i < 20; i++) {
    const fw = document.createElement('div');
    fw.className = 'firework';
    fw.style.left = 50 + (Math.random()-0.5)*60 + '%';
    fw.style.top  = 50 + (Math.random()-0.5)*60 + '%';
    document.body.appendChild(fw);
    setTimeout(() => fw.remove(), 800);
  }
}
