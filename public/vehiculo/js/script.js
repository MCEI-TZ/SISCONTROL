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

const inputNumControl = document.getElementById("NumControl");
const inputAPaterno = document.getElementById("APaterno");
const inputAMaterno = document.getElementById("AMaterno");
const inputNombre = document.getElementById("Nombre");
const inputGenero = document.querySelector('input[name="genero"]:checked');
const inputFNacimiento = document.getElementById("FNacimiento");
const inputCURP = document.getElementById("CURP");
const inputSemestre = document.getElementById("Semestre");
const inputEdad = document.getElementById("Edad");
const inputCorreoE = document.getElementById("CorreoE");

// Función para buscar eventos
function buscar() {
  apiClient
    .get(`${generalDate}/api/Vehiculo/`)
    .then((response) => {
      const resultados = response.data.data;
      renderResultados(resultados);
    })
    .catch((error) => {
      console.error("Error al buscar Vehiculo:", error);
    });
}

function buscarId() {
  const searchInput = document.getElementById("searchInput").value;
  const url = `${generalDate}/api/Vehiculo/${searchInput}`;

  apiClient
    .get(url)
    .then((response) => {
      const result = response.data.data;
      if (result) {
        renderResultados([result]); // Convertimos el resultado a un array para reutilizar la función
      } else {
        mostrarMensaje(
          "No se encontró ningún resultado para el ID proporcionado."
        );
      }
    })
    .catch((error) => {
      console.error("Error al buscar Vehiculo:", error);
      mostrarMensaje("Error al buscar Vehiculo. Por favor, intente de nuevo.");
    });
}

async function renderResultados(resultados) {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores

  resultados.forEach((result, index) => {
    const resultDiv = document.createElement("div");
    resultDiv.className = "card mb-3";
    resultDiv.innerHTML = `
        <div class="card-body">
          <div class="row">
              <div class="col-2 card-title fs-6 text-warning-emphasis text-center border-bottom border-primary mb-2">
                IdVehiculo
              </div>
              <div class="col-2 card-title fs-6 text-warning-emphasis text-center border-bottom border-primary-subtle mb-2">
                Marca
              </div>
              <div class="col-2 card-title fs-6 text-warning-emphasis text-center border-bottom border-secondary mb-2">
                Modelo
              </div>
              <div class="col-2 card-title fs-6 text-warning-emphasis text-center border-bottom border-secondary-subtle mb-2">
                Color
              </div>
              <div class="col-2 card-title fs-6 text-warning-emphasis text-center border-bottom border-success mb-2">
                Placas
              </div>
              <div class="col-1 card-title fs-6 text-warning-emphasis text-center border-bottom border-danger mb-2">
                idTipo
              </div>
              <div class="col-1 card-title fs-6 text-warning-emphasis text-center border-bottom border-danger-subtle mb-2">
                NumControl
              </div>
          </div>
          <div class="row">
              <div class="col-2 text-center mb-2">
                ${result.IdVehiculo}
              </div>
              <div class="col-2 text-center mb-2">
                ${result.Marca}
              </div>
              <div class="col-2 text-center mb-2">
                ${result.Modelo}
              </div>
              <div class="col-2 text-center mb-2">
                ${result.Color}
              </div>
              <div class="col-2 text-center mb-2">
                ${result.Placas}
              </div>
              <div class="col-1 text-center mb-2">
                ${result.idTipo}
              </div>
              <div class="col-1 text-center mb-2">
                ${result.NumControl}
              </div>
          </div>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop-${index}">Editar</button>
          <button type="button" onclick="eliminar(${result.NumControl})" class="btn btn-danger">Eliminar</button>

          <div class="modal fade" id="staticBackdrop-${index}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Vehiculo: </h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <label>Marca</label>
                  <input type="text" id="marca-${index}" class="form-control" placeholder="Agregue su Marca" value="${result.Marca}">
                  <label>Modelo</label>
                  <input type="text" id="modelo-${index}" class="form-control" placeholder="Agregue su Modelo" value="${result.Modelo}">
                  <label>Color</label>
                  <input type="text" id="color-${index}" class="form-control" placeholder="Agregue su Color" value="${result.Color}">
                  <label>Placas</label>
                  <input type="text" id="placas-${index}" class="form-control" placeholder="Agregue sus Placas" value="${result.Placas}">
                  <label>Año</label>
                  <input type="number" id="anio-${index}" class="form-control" value="${result.Anio}">
                  <label>IdTipo</label>
                  <input type="number" id="idTipo-${index}" class="form-control" value="${result.idTipo}" maxlength="18">
                  <label>NumControl</label>
                  <input type="number" id="numControl-${index}" class="form-control" value="${result.NumControl}">
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-primary" onclick="actualizar(${result.NumControl}, 'APaterno-${index}', 'AMaterno-${index}', 'Nombre-${index}','genero-${index}','FNacimiento-${index}', 'CURP-${index}', 'Semestre-${index}', 'Edad-${index}', 'CorreoE-${index}')">Actualizar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    resultadosDiv.appendChild(resultDiv);
  });
}

function mostrarMensaje(mensaje) {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = `<p>${mensaje}</p>`;
}

function getGenero(inputGeneros) {
  inputGeneros.forEach((g) => {
    if (g.checked) {
      return g.value;
    }
  });
}

function crear() {
  const numControl = inputNumControl.value;
  const aPaterno = inputAPaterno.value;
  const AMaterno = inputAMaterno.value;
  const nombre = inputNombre.value;
  const genero = inputGenero.value;
  const fNacimiento = new Date(inputFNacimiento.value).toISOString();
  const curp = inputCURP.value;
  const semestre = inputSemestre.value;
  const edad = inputEdad.value;
  const correE = inputCorreoE.value;

  // Validaciones básicas
  if (
    !numControl ||
    !aPaterno ||
    !AMaterno ||
    !nombre ||
    !genero ||
    !fNacimiento ||
    !curp ||
    !semestre ||
    !edad ||
    !correE
  ) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  apiClient({
    method: "post",
    url: `${generalDate}/api/Vehiculo/`,
    data: {
      NumControl: Number(numControl),
      APaterno: aPaterno,
      AMaterno: AMaterno,
      Nombre: nombre,
      Genero: genero,
      FNacimiento: fNacimiento,
      CURP: curp,
      Semestre: Number(semestre),
      Edad: Number(edad),
      CorreoE: correE,
    },
  })
    .then((res) => {
      buscar();
      alert("Alumn@ creado exitosamente");
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("CrtAlumno")
      );
      modal.hide();
    })
    .catch((err) => {
      if (err.response && err.response.data && err.response.data.message) {
        if (err.response.data.message.code === "P2002") {
          alert("El Id ya existe. Por favor, use otro Id.");
        } else {
          alert("Error al crear el Alumn@: " + err.response.data.message);
        }
      } else {
        alert("Error al crear el Alumn@");
      }
      console.error(err);
    });
}
function actualizar(
  numControl,
  aPaternoId,
  aMaternoId,
  nombreId,
  generoName,
  fNacimientoId,
  curpId,
  semestreId,
  edadId,
  CorreEId
) {
  const aPaterno = document.getElementById(aPaternoId).value;
  const aMaterno = document.getElementById(aMaternoId).value;
  const nombre = document.getElementById(nombreId).value;
  const generoRadios = document.getElementById(generoName);
  let genero;
  for (let radio of generoRadios) {
    if (radio.checked) {
      genero = radio.value;
      break;
    }
  }
  const fNacimiento = document.getElementById(fNacimientoId).value;
  const curp = document.getElementById(curpId).value;
  const semestre = document.getElementById(semestreId).value;
  const edad = document.getElementById(edadId).value;
  const email = document.getElementById(CorreEId).value;
  // Validación de los valores obtenidos
  if (
    !aPaterno ||
    !aMaterno ||
    !nombre ||
    !genero ||
    !fNacimiento ||
    !curp ||
    !semestre ||
    !edad ||
    !email
  ) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  // Crear el objeto de datos actualizados
  const datosActualizados = {
    NumControl: numControl,
    APaterno: aPaterno,
    AMaterno: aMaterno,
    Nombre: nombre,
    Genero: genero,
    FNacimiento: new Date(fNacimiento.value).toISOString(),
    CURP: curp,
    Semestre: semestre,
    Edad: edad,
    CorreoE: email,
  };

  // Realizar la solicitud de actualización
  apiClient({
    method: "put",
    url: `${generalDate}/api/Vehiculo/${numControl}`,
    data: datosActualizados,
  })
    .then((res) => {
      document.querySelector("div.modal-backdrop.fade.show")?.remove();
      buscar(); // Asumo que esta función refresca la lista de espacios
      alert("Actualización exitosa");
    })
    .catch((err) => {
      alert("Error al actualizar el Alumn@");
      console.error("Error al actualizar Alumn@:", err);
      if (err.response) {
        console.error("Error data:", err.response.data);
      }
    });
}

// Función para eliminar Evento
function eliminar(id) {
  if (confirm("¿Estás seguro de que quieres eliminar este alumno?")) {
    apiClient
      .delete(`${generalDate}/api/Vehiculo/${id}`)
      .then((res) => {
        alert("Alumn@ eliminado correctamente");
        buscar(); // Refrescar la lista de eventos después de eliminar
      })
      .catch((err) => {
        alert("Error al eliminar el alumno");
        console.log(err);
      });
  }
}

// function formatDate(dateString) {
//   const date = new Date(dateString);
//   return date.toISOString().split("T")[0];
// }

// Llamar a la función buscar() para mostrar los eventos al cargar la página
window.onload = function () {
  buscar();
};
