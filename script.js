const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

document.addEventListener('click', (event) => {
  if (!sidenav.contains(event.target) && !openBtn.contains(event.target) && !closeBtn.contains(event.target)) {
      sidenav.classList.remove("active");
  }
});
etoileText = document.getElementById("etoile");
exoText = document.getElementById("exo");

etoileText.addEventListener("click", () => {
  closeNav();
});
exoText.addEventListener("click", () => {
  closeNav();
})
function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}

const naines = document.getElementById("naines");
const geantes = document.getElementById("geantes");
const exoplanete = document.getElementById("exoplanete");

    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];

    const boites = document.querySelectorAll(".boite");
    boites.forEach(boite => {
      boite.addEventListener("click", () => {
        const id = boite.id;
        updateModal(id);
        modal.style.display = "flex";
      });
    });
    function closeModal() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    function updateModal(id) {
        fetch(`espace.json`)
          .then(response => response.json())
          .then(data => {
            const modalTitle = document.getElementById("modal-title");
            const modalContent = document.getElementById("modal-content"); 
            const img1 = document.getElementById("img1");
            const img2 = document.getElementById("img2");
            const img3 = document.getElementById("img3");
            const text = document.getElementsByClassName("textslide");
            const divid = document.getElementById(id);

            if (data.etoiles[id]) {
                const etoile = data.etoiles[id];
                img1.src = etoile.image[0];
                img2.src = etoile.image[1];
                img3.src = etoile.image[2];
                Array.from(text).forEach(text => {
                  text.textContent = divid.textContent;
                })
                modalTitle.textContent = etoile.titre;
                modalContent.innerHTML = `
                  <p><span>Température:</span> ${etoile.temperature}</p>
                  <p><span>Masse:</span> ${etoile.masse}</p>
                  <p><span>Description:</span> ${etoile.description}</p>
                  <p><span>Exemples:</span> ${etoile.exemples.join(', ')}</p>
                `;
              } 
              else if (data.exoplanetes[id]) {
                const exoplanete = data.exoplanetes[id];
                img1.src = exoplanete.image[0];
                img2.src = exoplanete.image[1];
                img3.src = exoplanete.image[2];
                Array.from(text).forEach(text => {
                  text.textContent = divid.textContent;
                })
                modalTitle.textContent = exoplanete.titre;
                modalContent.innerHTML = `
                  <p><span>Type:</span> ${exoplanete.type}</p>
                  <p><span>Masse:</span> ${exoplanete.masse}</p>
                  <p><span>Période orbitale:</span> ${exoplanete.periode_orbitale}</p>
                  <p><span>Habitabilité:</span> ${exoplanete.habitabilite}</p>
                `;
              }
        });
      }
      let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeslide", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activeslide";
} 