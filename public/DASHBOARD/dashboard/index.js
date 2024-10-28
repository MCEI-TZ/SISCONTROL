document.addEventListener("DOMContentLoaded", function () {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/index.html";
      return;
    }

    axios
      .get(`${generalDate}/api/authAdmin/validate/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
      })
      .catch(function (error) {
        console.error(error);
        alert("Validation failed: " + error.response.data.error);
        window.location.href = "/index.html";
      });
  });

const ex = document.getElementById('navegacionClosed')
const header = document.getElementById('header')
const hamburgesaMenu = document.getElementById('hamburgesa')
const navegacion = document.getElementById('navegacion')

document.addEventListener('DOMContentLoaded', () => {
    navegacion.classList.add('navegacion__position-false')
    setTimeout(() => {
        header.classList.add('hidenHeader')
        navegacion.classList.remove('navegacion__position-true')
        setTimeout(() => {
            hamburgesaMenu.src = '/DASHBOARD/dashboard/pictures/hamburgesa.svg'
        }, 310);
        const userDate = document.getElementById('userDate')
        const allData = localStorage.getItem('dataPerson')
        const convert = JSON.parse(allData)
        userDate.textContent = convert.NumControl
    }, 200);
});

ex.addEventListener('click', () => {
    navegacion.classList.add('navegacion__position-false')
    setTimeout(() => {
        header.classList.add('hidenHeader')
        navegacion.classList.remove('navegacion__position-true')
        setTimeout(() => {
            hamburgesaMenu.src = '/DASHBOARD/dashboard/pictures/hamburgesa.svg'
        }, 310);
    }, 200);
})

hamburgesaMenu.addEventListener('click', () => {
    header.classList.remove('hidenHeader')
    navegacion.classList.remove('navegacion__position-false')
    hamburgesaMenu.src = '/DASHBOARD/dashboard/pictures/close-whit.svg'
    setTimeout(() => {
        navegacion.classList.add('navegacion__position-true')
    }, 1);
})


const listAtrib1 = document.getElementById('listAtrib1')
const listAtrib1Img = document.getElementById('listAtrib1Img')

listAtrib1.addEventListener('mouseover', () =>{
    listAtrib1Img.src = '/DASHBOARD/dashboard/pictures/estudiante-black.svg'
})

listAtrib1.addEventListener('mouseout', () =>{
    listAtrib1Img.src = '/DASHBOARD/dashboard/pictures/estudiante.svg'
})



const listAtrib2 = document.getElementById('listAtrib2')
const listAtrib2Img = document.getElementById('listAtrib2Img')

listAtrib2.addEventListener('mouseover', () =>{
    listAtrib2Img.src = '/DASHBOARD/dashboard/pictures/car-black.svg'
})

listAtrib2.addEventListener('mouseout', () =>{
    listAtrib2Img.src = '/DASHBOARD/dashboard/pictures/car.svg'
})

const listAtrib3 = document.getElementById('listAtrib3')
const listAtrib3Img = document.getElementById('listAtrib3Img')

listAtrib3.addEventListener('mouseover', () =>{
    listAtrib3Img.src = '/DASHBOARD/dashboard/pictures/portafolio-black.svg'
})

listAtrib3.addEventListener('mouseout', () =>{
    listAtrib3Img.src = '/DASHBOARD/dashboard/pictures/portafolio.svg'
})

const listAtrib4 = document.getElementById('listAtrib4')
const listAtrib4Img = document.getElementById('listAtrib4Img')

listAtrib4.addEventListener('mouseover', () =>{
    listAtrib4Img.src = '/DASHBOARD/dashboard/pictures/car-black.svg'
})

listAtrib4.addEventListener('mouseout', () =>{
    listAtrib4Img.src = '/DASHBOARD/dashboard/pictures/car.svg'
})

const listAtrib5 = document.getElementById('listAtrib5')
const listAtrib5Img = document.getElementById('listAtrib5Img')

listAtrib5.addEventListener('mouseover', () =>{
    listAtrib5Img.src = '/DASHBOARD/dashboard/pictures/visitante-black.svg'
})

listAtrib5.addEventListener('mouseout', () =>{
    listAtrib5Img.src = '/DASHBOARD/dashboard/pictures/visitante.svg'
})

const listAtrib6 = document.getElementById('listAtrib6')
const listAtrib6Img = document.getElementById('listAtrib6Img')

listAtrib6.addEventListener('mouseover', () =>{
    listAtrib6Img.src = '/DASHBOARD/dashboard/pictures/car-black.svg'
})

listAtrib6.addEventListener('mouseout', () =>{
    listAtrib6Img.src = '/DASHBOARD/dashboard/pictures/car.svg'
})

const listAtrib7 = document.getElementById('listAtrib7')
const listAtrib7Img = document.getElementById('listAtrib7Img')

listAtrib7.addEventListener('mouseover', () =>{
    listAtrib7Img.src = '/DASHBOARD/dashboard/pictures/asunto-black.svg'
})

listAtrib7.addEventListener('mouseout', () =>{
    listAtrib7Img.src = '/DASHBOARD/dashboard/pictures/asunto.svg'
})

const listAtrib8 = document.getElementById('listAtrib8')
const listAtrib8Img = document.getElementById('listAtrib8Img')

listAtrib8.addEventListener('mouseover', () =>{
    listAtrib8Img.src = '/DASHBOARD/dashboard/pictures/asistencia-black.svg'
})

listAtrib8.addEventListener('mouseout', () =>{
    listAtrib8Img.src = '/DASHBOARD/dashboard/pictures/asistencia.svg'
})

const listAtrib9 = document.getElementById('listAtrib9')
const listAtrib9Img = document.getElementById('listAtrib9Img')

listAtrib9.addEventListener('mouseover', () =>{
    listAtrib9Img.src = '/DASHBOARD/dashboard/pictures/salonClase-black.svg'
})

listAtrib9.addEventListener('mouseout', () =>{
    listAtrib9Img.src = '/DASHBOARD/dashboard/pictures/salonClase.svg'
})

const listAtrib10 = document.getElementById('listAtrib10')
const listAtrib10Img = document.getElementById('listAtrib10Img')

listAtrib10.addEventListener('mouseover', () =>{
    listAtrib10Img.src = '/DASHBOARD/dashboard/pictures/graficas-black.svg'
})

listAtrib10.addEventListener('mouseout', () =>{
    listAtrib10Img.src = '/DASHBOARD/dashboard/pictures/graficas.svg'
})

const listAtrib11 = document.getElementById('listAtrib11')
const listAtrib11Img = document.getElementById('listAtrib11Img')

listAtrib11.addEventListener('mouseover', () =>{
    listAtrib11Img.src = '/DASHBOARD/dashboard/pictures/evento-black.svg'
})

listAtrib11.addEventListener('mouseout', () =>{
    listAtrib11Img.src = '/DASHBOARD/dashboard/pictures/evento.svg'
})

const listAtrib12 = document.getElementById('listAtrib12')
const listAtrib12Img = document.getElementById('listAtrib12Img')

listAtrib12.addEventListener('mouseover', () =>{
    listAtrib12Img.src = '/DASHBOARD/dashboard/pictures/car-black.svg'
})

listAtrib12.addEventListener('mouseout', () =>{
    listAtrib12Img.src = '/DASHBOARD/dashboard/pictures/car.svg'
})

const listAtrib13 = document.getElementById('listAtrib13')
const listAtrib13Img = document.getElementById('listAtrib13Img')

listAtrib13.addEventListener('mouseover', () =>{
    listAtrib13Img.src = '/DASHBOARD/dashboard/pictures/TipoPersona-black.svg'
})

listAtrib13.addEventListener('mouseout', () =>{
    listAtrib13Img.src = '/DASHBOARD/dashboard/pictures/TipoPersona.svg'
})

const listAtrib14 = document.getElementById('listAtrib14')
const listAtrib14Img = document.getElementById('listAtrib14Img')

listAtrib14.addEventListener('mouseover', () =>{
    listAtrib14Img.src = '/DASHBOARD/dashboard/pictures/TipoCr-black.svg'
})

listAtrib14.addEventListener('mouseout', () =>{
    listAtrib14Img.src = '/DASHBOARD/dashboard/pictures/TipoCr.svg'
})

