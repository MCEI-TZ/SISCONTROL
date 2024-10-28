// Función para enviar solicitudes HTTP
    function sendRequest(method, url, data = null) {
        return axios({
            method: method,
            url: url,
            data: data,
        });
    }

    function getTypePerson(idTipo) {
        let typePerson;

        if(idTipo === 1){
            typePerson = 'Estudiante'
        }else if(idTipo === 2){
            typePerson = 'Docente'
        }else if(idTipo === 3){
            typePerson = 'Visitante'
        }

        return typePerson;
    }

    function getPlace(IdEspacio){
        let place;

        if(IdEspacio === 1){
            place = 'Entrada Principal'
        }else if(IdEspacio === 2){
            place = 'Sala A2'
        }else if(IdEspacio === 3){
            place = 'Sala A3'
        }else if(IdEspacio === 4){
            place = 'Salon B1'
        }else if(IdEspacio === 5){
            place = 'Salon B2'
        }else if(IdEspacio === 6){
            place = 'Salon B3'
        }else if(IdEspacio === 7){
            place = 'Laboratorio C1'
        }else if(IdEspacio === 8){
            place = 'Laboratorio C2'
        }else if(IdEspacio === 9){
            place = 'Salon D1'
        }else if(IdEspacio === 10){
            place = 'Salon D2'
        }

        return place
    }

    let statusFocus = ''
    let statusFocusClass = ''

    function changeStatus(HoraSalida){
        if(HoraSalida === null){
            statusFocusClass = "div__status-ingreso"
        }else{
            statusFocusClass = "div__status-egreso"
        }

        return statusFocusClass
    }

    function entrada(entrada){
        let entradaInt = ''

        entradaInt = new Date(entrada).toLocaleTimeString(undefined,{hour12: false}) //

        return entradaInt
    }

    function triangleChange(HoraSalidaForTriangle){
        let triangleStatus = 'triangle__id'

        if(HoraSalidaForTriangle === null){
            triangleStatus = "triangle__id2"
        }else{
            statusFocusClass = "triangle__id"
        }

        return triangleStatus
    }

    function colorStatus(color){
        let tableColorRow = ''

        if(color !== null){
            tableColorRow = "status-color"
        }

        return tableColorRow
    }

    function seeHour(hora){
        let seeChangeHour = ''

        if(hora !== null){
            seeChangeHour = new Date(hora).toLocaleTimeString(undefined,{hour12: false})
        }

        return seeChangeHour

    }

    function statusIntOut(habilitado){

        let stayHbilitado = 'Egreso'

        if(habilitado === null){
            stayHbilitado = 'Ingreso'
        }else{
            stayHbilitado = 'Egreso'
        }

        return stayHbilitado
    }

    function getDateNow(entradaGetDay){
        let dateNow = ''

        dateNow = new Date(entradaGetDay).toLocaleDateString()

        return dateNow
    }

    // Obtener y mostrar todos los eventos al cargar la página
    function getControls() {
        let filas = ''
        const tableContent = document.getElementById('table-content')
        apiClient.get(`${generalDate}/api/ControlAsis`)
            .then((res) => {
                res.data.data.forEach(element => {
                const { IdControlAsis,idTipo,IdEspacio,Habilitado,NumControl,HoraEntrada,HoraSalida,IdTpTransport } = element;
                filas+= `
                    <tr class="table__row table__row-hover table_row-color-trasparent ${colorStatus(HoraSalida)}">
                    <td>
                        <div class="apadt-div">
                            <p class="${triangleChange(HoraSalida)}">${NumControl}</p>
                        </div>
                    </td>
                    <td>${getTypePerson(idTipo)}</td>
                    <td>${getPlace(IdEspacio)}</td>
                    <td>
                        <div class="apadt-div">
                            <p class="${changeStatus(HoraSalida)}">${statusIntOut(HoraSalida)}</p>
                        </div>
                    </td>
                    <td>${getDateNow(HoraEntrada)}</td>
                    <td>${entrada(HoraEntrada)}</td>
                    <td>${seeHour(HoraSalida)}</td>
                    <td>
                        <div class="row-button clickEyes">
                            <img src="./resources/eyes.svg" alt="">
                        </div>
                    </td>
                </tr>
                    `
                });
                tableContent.innerHTML = filas
            })
            .catch((err) => {
                alert("Error al obtener eventos");
                console.log(err);
                });
    }
    // setInterval(getControls,1000)

    const buttonSearching = document.getElementById('prinButtonn')
    const inptSearching = document.getElementById('controlImput')

    buttonSearching.addEventListener('click', ()=>{
        searchControlById(inptSearching.value)
    })
    // Función para buscar eventos por ID
    function searchControlById(dataInputSearching) {
        let filas = ''
        const tableContent2 = document.getElementById('table-content')
        apiClient.get(`${generalDate}/api/ControlAsis/${dataInputSearching}`)
            .then((res) => {
                const { IdControlAsis,idTipo,IdEspacio,Habilitado,NumControl,HoraEntrada,HoraSalida,IdTpTransport } = res.data
                    filas+= `
                        <tr class="table__row table__row-hover table_row-color-trasparent ${colorStatus(HoraSalida)}">
                        <td>
                            <div class="apadt-div">
                                <p class="${triangleChange(HoraSalida)}">${NumControl}</p>
                            </div>
                        </td>
                        <td>${getTypePerson(idTipo)}</td>
                        <td>${getPlace(IdEspacio)}</td>
                        <td>
                            <div class="apadt-div">
                                <p class="${changeStatus(HoraSalida)}">${statusIntOut(HoraSalida)}</p>
                            </div>
                        </td>
                        <td>${getDateNow(HoraEntrada)}</td>
                        <td>${entrada(HoraEntrada)}</td>
                        <td>${seeHour(HoraSalida)}</td>
                        <td>
                            <div class="row-button clickEyes">
                                <img src="./resources/eyes.svg" alt="">
                            </div>
                        </td>
                    </tr>
                        `
                    tableContent2.innerHTML = filas
            })
            .catch((err) => {
                alert("Evento no encontrado");
                console.log(err);
            });
    }

    // Llamar a la función getEvents() para mostrar los eventos al cargar la página
    window.onload = function () {
        getControls();
    };
