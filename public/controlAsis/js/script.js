document.addEventListener("DOMContentLoaded", function () {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "../index.html";
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
      window.location.href = "../index.html";
    });
});

// Función para enviar solicitudes HTTP
function sendRequest(method, url, data = null) {
  return axios({
    method: method,
    url: url,
    data: data,
  });
}

// Obtener y mostrar todos los asistencias al cargar la página
async function getControls(page = 1) {
  const eventsList = document.getElementById("controls");

  apiClient.get(`${generalDate}/api/ControlAsis/?page=${page}`)
    .then((res) => {
      eventsList.innerHTML = "";

      const { total, limit, next, prev } = res.data;

      res.data.data.forEach(async(control, index) => {
        const espacioNombre = await ObtenerEspacio(control.IdEspacio);
        const tipoNombre = await ObtenerTipo(control.idTipo);
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.innerHTML = `
        <div class="container">
          <div class="card  mb-1 rounded ">
            <div class="card-body">
              <div class="row">
                <div class="col-2 card-title fs-6 text-warning-emphasis text-center border-bottom border-primary mb-1">
                  Tipo Persona
                </div>
                <div class="col-2 card-title fs-6 text-warning-emphasis text-center border-bottom border-danger mb-1">
                  Espacio
                </div>
                <div class="col-1 card-title fs-6 text-warning-emphasis text-center border-bottom border-primary mb-1">
                  Clave
                </div>
                <div class="col-1 card-title fs-6 text-warning-emphasis text-center border-bottom border-danger mb-1">
                  Fecha
                </div>
                <div class="col-2 card-title fs-6 text-warning-emphasis text-center border-bottom border-primary mb-1">
                  Hora Entrada
                </div>
                <div class="col-2 card-title fs-6 text-warning-emphasis text-center border-bottom border-danger mb-1">
                  Hora Salida
                </div>
                <div class="col-2 card-title fs-6 text-warning-emphasis text-center border-bottom border-info mb-1">
                  Transporte
                </div>
              </div>
              <div class="row">
                <div class="col-2 text-center mb-1">${tipoNombre}</div>
                <div class="col-2 text-center mb-1">${espacioNombre}</div>
                <div class="col-1 text-center mb-1">${control.NumControl}</div>
                <div class="col-1 text-center mb-1">${formatoDate(
                  control.HoraEntrada
                )}</div>
                <div class="col-2 text-center mb-1">${formathour(
                  control.HoraEntrada
                )}</div>
                <div class="col-2 text-center mb-1">${formathour(
                  control.HoraSalida
                )}</div>
                <div class="col-2 text-center mb-1">${(control.IdTpTransport == null)? "No posee": control.IdTpTransport}</div>
              </div>
            </div>
          </div>
        </div>
        `;
        eventsList.appendChild(listItem);
      });

      drawLinks({ total, limit, next, prev, page });
    })
    .catch((err) => {
      alert("Error al obtener asistencias");
      console.log(err);
    });
}

// Función para buscar eventos por ID
async function searchControlById() {
  try {
    const controlId = document.getElementById("searchId").value;
    const eventsList = document.getElementById("controls");

    const res = await apiClient.get(
      `${generalDate}/api/ControlAsis/${controlId}?page=1&limit=20000`
    );

    // Limpiar la lista de eventos antes de agregar nuevos
    eventsList.innerHTML = "";

    // Verifica si se obtienen datos y procesa correctamente
    if (res.data && res.data.data && res.data.data.length > 0) {
      res.data.data.forEach(async(control) => {
        const espacioNombre = await ObtenerEspacio(control.IdEspacio);
        const tipoNombre = await ObtenerTipo(control.idTipo);
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.innerHTML = `
        <div class="container">
          <div class="card mb-2 shadow-lg bg-body-tertiary rounded">
            <div class="card-body">
              <div class="row">
                <div class="col-2 card-title fs-6 text-warning-emphasis text-center border-bottom border-primary mb-2">
                  Tipo Persona
                </div>
                <div class="col-2 card-title fs-6 text-warning-emphasis text-center border-bottom border-danger mb-2">
                  Espacio
                </div>
                <div class="col-1 card-title fs-6 text-warning-emphasis text-center border-bottom border-primary mb-2">
                  Clave
                </div>
                <div class="col-1 card-title fs-6 text-warning-emphasis text-center border-bottom border-danger mb-2">
                  Fecha
                </div>
                <div class="col-2 card-title fs-6 text-warning-emphasis text-center border-bottom border-primary mb-2">
                  Hora Entrada
                </div>
                <div class="col-2 card-title fs-6 text-warning-emphasis text-center border-bottom border-danger mb-2">
                  Hora Salida
                </div>
                <div class="col-2 card-title fs-6 text-warning-emphasis text-center border-bottom border-info mb-2">
                  Transporte
                </div>
              </div>
              <div class="row">
                <div class="col-2 text-center mb-2">
                  ${tipoNombre}
                </div>
                <div class="col-2 text-center mb-2">
                  ${espacioNombre}
                </div>
                <div class="col-1 text-center mb-2">
                  ${control.NumControl}
                </div>
                <div class="col-1 text-center mb-2">
                  ${formatoDate(control.HoraEntrada)}
                </div>
                <div class="col-2 text-center mb-2">
                  ${formathour(control.HoraEntrada)}
                </div>
                <div class="col-2 text-center mb-2">
                  ${formathour(control.HoraSalida)}
                </div>
                <div class="col-2 text-center mb-1">${(control.IdTpTransport == null)? "No posee": control.IdTpTransport}</div>
              </div>
            </div>
          </div>
        </div>
        `;
        eventsList.appendChild(listItem);
      });
    } else {
      // Mostrar mensaje si no se encuentran datos
      eventsList.innerHTML =
        "<li class='list-group-item'>No se encontraron resultados</li>";
    }
  } catch (e) {
    console.error(e);
    alert("Error al buscar el control de asistencia");
  }
}

function drawLinks({ total, limit, next, prev, page }) {
  let links = ``;

  let totalPages = Math.ceil(total / limit);

  links += `
    <ul class="pagination justify-content-center">

      <li class="page-item">
        <a class="page-link" href="#" onclick="getControls(${
          prev != 0 ? prev : 1
        })">Anterior</a>
      </li>

      <li class="page-item">
        <a class="page-link" href="#" onclick="getControls(${
          next >= totalPages ? totalPages : next
        })" >Siguiente</a>
      </li>
    </ul>

  `;

  document.getElementById("nav-pagination").innerHTML = links;
}

function formatoDate(dateString) {
  if (dateString == null) return "";
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", options);
}

function formathour(dateString) {
  if (dateString == null) return "";
  const options = { hour: "2-digit", minute: "2-digit" };
  const date = new Date(dateString);
  return date.toLocaleTimeString("es-ES", options);
}

async function ObtenerEspacio(id) {
  const res = await apiClient.get(`${generalDate}/api/EspaciosDeClase/id/${id}`);

  const { Nombre } = res.data;

  return Nombre;
}

async function ObtenerTipo(id) {
  const res = await apiClient.get(`${generalDate}/api/TipoPersona/id/${id}`);

  const { Descripcion } = res.data;

  return Descripcion;
}

function eliminar(id) {
  if (confirm("De verdad quiere eliminar")) {
    sendRequest("delete", `${generalDate}/api/ControlAsis/${id}`)
      .then((res) => {
        alert("Asistencia eliminado correctamente");
        getControls();
      })
      .catch((err) => {
        alert("Error al eliminar el asistencia");
        console.log(err);
      });
  }
}
// Función para refrescar y mostrar todos los eventos nuevamente
function refreshEvents() {
  getControls();
}

// Llamar a la función getEvents() para mostrar los eventos al cargar la página
window.onload = function () {
  getControls();
};
