

const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal-button");
const closeButton = document.querySelector(".close-button");
const scrollDown = document.querySelector(".scroll-down");
let isOpened = false;

const openModal = () => {
  modal.classList.add("is-open");
  body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.remove("is-open");
  body.style.overflow = "initial";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 3 && !isOpened) {
    isOpened = true;
    scrollDown.style.display = "none";
    openModal();
  }
});

modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

document.onkeydown = evt => {
  evt = evt || window.event;
  evt.keyCode === 27 ? closeModal() : false;
};


var selectInp = document.getElementById('selectInp');

selectInp.addEventListener('change', function () {
  var selectedText = selectInp.options[selectInp.selectedIndex].text;
  if (selectedText === "Tipo de Usuario") {
    selectInp.style.color = "#CFCCCC";
  } else {
    selectInp.style.color = "#000000";
  }
});

const buttonData = document.getElementById('buttonSend')
buttonData.addEventListener('click', function () {
  const numControl = document.getElementById("email");
  const curp = document.getElementById("password");
  const typePerson = document.getElementById("selectInp")

  if (typePerson.value == 1) {
    axios.post(`${generalDate}/api/authAlumno/login`, {
      numControl: Number(numControl.value),
      curp: String(curp.value)
    })
      .then(function (response) {
        localStorage.setItem("token", response.data.token);
        const dataLocal = {
          idTipo: Number(typePerson.value),
          NumControl: Number(numControl.value),
        };
        localStorage.setItem("dataPerson", JSON.stringify(dataLocal));
        window.location.href = "/login/cellphone/index.html";
      })
      .catch(function (error) {
        console.error(error);
        alert("Login failed: " + error.response.data.error);
      });
  } else if (typePerson.value == 5) {
    axios.post(`${generalDate}/api/authAdmin/login`, {
      user: String(numControl.value),
      password: String(curp.value),
    })
      .then(function (response) {
        localStorage.setItem("token", response.data.token);
        const dataLocal = {
          NumControl: String(numControl.value),
        };
        localStorage.setItem("dataPerson", JSON.stringify(dataLocal));

        window.location.href = "/DASHBOARD/index.html";
      })
      .catch(function (error) {
        console.error(error);
        alert("Login failed: " + error.response.data.error);
      });
  }
});
