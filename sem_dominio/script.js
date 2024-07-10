const mobileBtn = document.getElementById("mobile-cta");
nav = document.querySelector("nav");
mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});

/* testes */

// Função para iniciar ou reiniciar a animação
function animateTyping(entry) {
  if (entry.isIntersecting) {
    // Reinicia a animação
    entry.target.style.animation = "none";
    setTimeout(() => {
      entry.target.style.animation = "";
    }, 50);
  }
}

// Criando um observer com a função callback
const observer = new IntersectionObserver((entries) => {
  entries.forEach(animateTyping);
});

// Elemento que você quer observar
const subhead = document.querySelector(".subhead");

// Iniciando a observação
observer.observe(subhead);
