const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

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
            
            const exoData = data.exoplanetes;
            const modalData = data;
                
            if (data.etoiles[id]) {
                const etoile = data.etoiles[id];
                modalTitle.textContent = etoile.titre;
                modalContent.innerHTML = `
                  <p>Température: ${etoile.temperature}</p>
                  <p>Masse: ${etoile.masse}</p>
                  <p>Description: ${etoile.description}</p>
                  <p>Exemples: ${etoile.exemples.join(', ')}</p>
                `;
              } 
              else if (data.exoplanetes[id]) {
                const exoplanete = data.exoplanetes[id];
                modalTitle.textContent = exoplanete.titre;
                modalContent.innerHTML = `
                  <p>Type: ${exoplanete.type}</p>
                  <p>Masse: ${exoplanete.masse}</p>
                  <p>Période orbitale: ${exoplanete.periode_orbitale}</p>
                  <p>Habitabilité: ${exoplanete.habitabilite}</p>
                `;
              }
        });
      }