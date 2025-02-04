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
            
            const modalData = data;
                if (modalData.etoiles = undefined) {                  
                    modalTitle.textContent = modalData.etoiles[id].titre;
                    modalContent.textContent = modalData.etoiles[id].description;
                } else {
                    console.log(modalData);
                    
                    modalTitle.textContent = modalData.exoplanetes[id].titre;
                    modalContent.textContent = modalData.exoplanetes[id].type;
                }
          
          })
      }