var clickEyes = document.getElementsByClassName('clickEyes');
var activeEye = document.getElementById('activeEye')
var eyeClosed = document.getElementById('eyeClosed')
var htmlBody = document.getElementById('htmlBody')

for (var i = 0; i < clickEyes.length; i++) {
    clickEyes[i].addEventListener('click', function () {
        activeEye.classList.remove('active-eye-display');
        htmlBody.classList.add('htmlBody-overflow')

    });
}

setTimeout(() => {
    eyeClosed.addEventListener('click',function(){
        activeEye.classList.add('active-eye-display')
        eyeClosed.classList.remove('icon-circle-press')
        htmlBody.classList.remove('htmlBody-overflow')
    })
}, 3000);

var nombre = document.getElementById('name')
var inputName = document.getElementById('inputName')

nombre.addEventListener('click',function(){
    inputName.focus()
})

var control = document.getElementById('control')
var controlInput = document.getElementById('controlImput')

control.addEventListener('click',function(){
    controlInput.focus()
})


var dataViaClosed = document.getElementById('dataViaClosed')
var dataViaOpen =document.getElementById('dataViaOpen')
var dataVia = document.getElementById('dataVia')
var carpicture =document.getElementById('carpicture')

dataViaOpen.addEventListener('click',function(){
    dataVia.classList.toggle('carrera-data-second-via-wind-display')
})

dataViaClosed.addEventListener('click',function(){
    dataVia.classList.toggle('carrera-data-second-via-wind-display')
})

document.addEventListener('click',function(car){

    if(car.target == carpicture){

    }else{

        if(!dataVia.classList.contains('carrera-data-second-via-wind-display')){
            if(!dataVia.contains(car.target)){
                dataVia.classList.add('carrera-data-second-via-wind-display')
            }
        }
    }


})


var selectPerson = document.getElementById('selectPerson')
var expandWhite = document.getElementById('expandWhite')
var dataEstudentsHiden = document.getElementById('dataEstudentsHiden')
var inputNameWhite = document.getElementById('inputNameWhite')
var inputnumberWhite = document.getElementById('inputnumberWhite')

selectPerson.addEventListener('change',function(){
    var valorSelect = this.value

    if(valorSelect == 'invitado'){
        expandWhite.classList.add('personal-data-inv-backwhit')
        dataEstudentsHiden.classList.add('personal-data-invhiden')
        inputNameWhite.placeholder = "Nombre del invitado"
        inputnumberWhite.placeholder = "Identificador"
    }else{
        expandWhite.classList.remove('personal-data-inv-backwhit')
        dataEstudentsHiden.classList.remove('personal-data-invhiden')
        inputNameWhite.placeholder = "Nombre del estudiante"
        inputnumberWhite.placeholder = "Numero de control"
    }

})

var reportClose = document.getElementById('reportClose')
var reportBack = document.getElementById('reportBack')

reportClose.addEventListener('click',function(){
    reportBack.classList.add('personal-data-invhiden')
    htmlBody.classList.remove('htmlBody-overflow')
})

var circleReport = document.getElementById('circleReport')

circleReport.addEventListener('click',function(){
    reportBack.classList.remove('personal-data-invhiden')
    htmlBody.classList.add('htmlBody-overflow')
})


var viaVisitante = document.getElementById('viaVisitante')
var dispVisit = document.getElementById('dispVisit')
var visitclosed = document.getElementById('visitclosed')
var exVisitClosed = document.getElementById('exVisitClosed')
var pageInvits = document.getElementById('pageInvits')
var prinButton = document.getElementById('prinButton')

viaVisitante.addEventListener('click',function(){
    dispVisit.classList.toggle('carrera-data-second-via-wind-display')
})

visitclosed.addEventListener('click',function(){
    dispVisit.classList.add('carrera-data-second-via-wind-display')
})

document.addEventListener('click',function(invit){

    if(invit.target == viaVisitante){

    }else{

        if(!dispVisit.classList.contains('carrera-data-second-via-wind-display')){
            if(!dispVisit.contains(invit.target)){
                dispVisit.classList.add('carrera-data-second-via-wind-display')
            }
        }
    }


})

exVisitClosed.addEventListener('click',function(){
    pageInvits.classList.add('invi-back-hiden')
    htmlBody.classList.remove('htmlBody-overflow')
})


// prinButton.addEventListener('click',function(){
//     pageInvits.classList.remove('invi-back-hiden')
//     htmlBody.classList.add('htmlBody-overflow')
// })



