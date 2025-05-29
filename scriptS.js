const images = document.querySelectorAll('#circle img');
const container = document.getElementById('circle');

// Defina as senhas para cada link
const passwords = {
  'Disco1.html': '03-01-1892',
  'Disco2.html': 'emperor',
  'Disco3.html': 'kisha',
  'Disco4.html': 'pudim',
  'Disco5.html': 'grbsg'
};

function positionImages() {
  const rect = container.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const radius = rect.width / 2.5;

  images.forEach((img, index) => {
    const angle = (index / images.length) * 2 * Math.PI;
    const x = Math.cos(angle) * radius + centerX - img.offsetWidth / 2;
    const y = Math.sin(angle) * radius + centerY - img.offsetHeight / 2;

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    img.onclick = () => {
      const link = img.dataset.link;
      const senhaCorreta = passwords[link];
      const senhaDigitada = prompt("Digite a senha para acessar:");

      if (senhaDigitada === senhaCorreta) {
        window.location.href = link;
      } else {
        alert("Senha incorreta.");
      }
    };
  });
}

window.addEventListener('load', positionImages);
window.addEventListener('resize', positionImages);
