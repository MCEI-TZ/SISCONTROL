document.addEventListener("DOMContentLoaded", function () {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "../../loginAlumno/index.html";
    return;
  }

  axios
    .get(`${generalDate}/api/authAdmin/validate/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(function (response) {
      console.log(response);
      const { idTipo, NumControl } = JSON.parse(
        localStorage.getItem("dataPerson")
      );
    })
    .catch(function (error) {
      console.error(error);
      alert("Validation failed: " + error.response.data.error);
      window.location.href = "./loginAlumno/index.html";
    });
});

const inputIdVisitante = document.getElementById("idVisitante");
const inputNombre = document.getElementById("Nombre");
const inputApeMat = document.getElementById("Ape_Mat");
const inputApe_Pa = document.getElementById("Ape_Pa");
const IdAsunto = document.getElementById("IdAsunto");
const inputGenero = document.querySelector('input[name="genero"]:checked');
const inputEmail = document.getElementById("Email");

// Función para buscar eventos
function buscar() {
  apiClient
    .get(`${generalDate}/api/Visitante/`)
    .then((response) => {
      const resultados = response.data.data;
      renderResultados(resultados);
    })
    .catch((error) => {
      console.error("Error al buscar visitante:", error);
    });
}

function buscarId() {
  const searchInput = document.getElementById("searchInput").value;
  const url = `${generalDate}/api/Visitante/${searchInput}`;

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
      console.error("Error al buscar Visitante:", error);
      mostrarMensaje("Error al buscar Visitante. Por favor, intente de nuevo.");
    });
}

async function renderResultados(resultados) {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores

  for (const [index, result] of resultados.entries()) {
    const nombreAsunto = await obtenerAsunto(result.IdAsunto);
    const resultDiv = document.createElement("div");
    resultDiv.className = "card mb-3";
    resultDiv.innerHTML = `
          <div class="card-body">
            <div class="row">
                <div class="col-1 card-title fs-6 text-warning-emphasis text-center border-bottom border-primary mb-2">
                   idVisitante
                </div>
                <div class="col-2 card-title fs-6 text-warning-emphasis text-center border-bottom border-warning mb-2">
                   Nombre
               </div>
                <div class="col-2 card-title fs-6 text-warning-emphasis text-center border-bottom border-info mb-2">
                   Apellido Materno
               </div>
               <div class="col-2 card-title fs-6 text-warning-emphasis text-center border-bottom border-danger mb-2">
                   Apellido Paterno
               </div>
               <div class="col-2 card-title fs-6 text-warning-emphasis text-center border-bottom border-success mb-2">
                   Asunto
               </div>
               <div class="col-1 card-title fs-6 text-warning-emphasis text-center border-bottom border-danger mb-2">
                   Genero
               </div>
               <div class="col-2 card-title fs-6 text-warning-emphasis text-center border-bottom border-primary mb-2">
                    Email
               </div>
            </div>
            <div class="row">
                <div class="col-1 text-center mb-2">
                    ${result.idVisitante}
                </div>
                <div class="col-2 text-center mb-2">
                    ${result.Nombre}
                </div>
                <div class="col-2 text-center mb-2">
                    ${result.Ape_Mat}
                </div>
                <div class="col-2 text-center mb-2">
                    ${result.Ape_Pa}
                </div>
                <div class="col-2 text-center mb-2">
                    ${nombreAsunto}
                </div>
                <div class="col-1 text-center mb-2">
                    ${result.Genero}
                </div>
                <div class="col-2 text-center mb-2">
                    ${result.Email}
                </div>
            </div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop-${index}">Editar</button>
            <button type="button" onclick="eliminar(${
              result.idVisitante
            })" class="btn btn-danger">Eliminar</button>

            <div class="modal fade" id="staticBackdrop-${index}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Visitante: </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <label>Nombre</label>
                    <input type="text" id="nombre-${index}" class="form-control" placeholder="Agregue su Nombre" value="${
      result.Nombre
    }">
                    <label>Apellido Materno</label>
                    <input type="text" id="apMat-${index}" class="form-control" placeholder="Agregue su Apellido Materno" value="${
      result.Ape_Mat
    }">
                    <label>Apellido Paterno</label>
                    <input type="text" id="apPat-${index}" class="form-control" placeholder="Agregue su Apellido Paterno" value="${
      result.Ape_Pa
    }">
                    <label> Asunto </label>
                    <select name="" id="asunto-${index}" class="form-control">
                        <option value=""></option>
                    </select>
                    <div class="mb-3">
                      <input type="radio" id="Hombre-${index}" name="genero-${index}" value="H" ${
      result.Genero === "H" ? "checked" : ""
    } />
                      <label for="Hombre-${index}">Hombre</label>
                      <input type="radio" id="Mujer-${index}" name="genero-${index}" value="M" ${
      result.Genero === "M" ? "checked" : ""
    } />
                      <label for="Mujer-${index}">Mujer</label>
                  </div>
                  <label>Email</label>
                    <input type="email" id="email-${index}" class="form-control" placeholder="Agregue su Email" value="${
      result.Email
    }">
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" onclick="actualizar(${
                      result.idVisitante
                    }, 'nombre-${index}','apMat-${index}','apPat-${index}', 'asunto-${index}', 'genero-${index}', 'email-${index}')">Actualizar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
    resultadosDiv.appendChild(resultDiv);
    // Llenar select de eventos para cada modal
    await llenarSelectAsuntosById(`asunto-${index}`);
  }
}

// Llamar a la función para llenar el select cuando la página se cargue
document.addEventListener("DOMContentLoaded", async () => {
  await llenarSelectAsuntosById("IdAsunto");
  buscar(); // Suponiendo que buscar() es la función que inicia la búsqueda de resultados
});

function actualizar(
  idVisitante,
  nombre,
  apeMat,
  apePa,
  idAsunto,
  genero,
  email
) {
  const nombreVisitante = document.getElementById(nombre);
  const apMatVisitante = document.getElementById(apeMat);
  const apPatVisitante = document.getElementById(apePa);
  const descripcionAsunto = document.getElementById(idAsunto).value;
  const generoVisitante = document.getElementById(genero);
  const emailVisitante = document.getElementById(email);
  // Validación de los valores obtenidos
  if (
    !nombreVisitante ||
    !apMatVisitante ||
    !apPatVisitante ||
    !descripcionAsunto ||
    !generoVisitante ||
    !emailVisitante
  ) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  // Crear el objeto de datos actualizados
  const datosActualizados = {
    idVisitante: Number(idVisitante),
    Nombre: nombreVisitante,
    Ape_Mat: apMatVisitante,
    Ape_Pa: apPatVisitante,
    IdAsunto: Number(descripcionAsunto),
    Genero: generoVisitante,
    Email: emailVisitante,
  };

  // Realizar la solicitud de actualización
  apiClient({
    method: "put",
    url: `${generalDate}/api/Visitante/${idVisitante}`,
    data: datosActualizados,
  })
    .then((res) => {
      document.querySelector("div.modal-backdrop.fade.show")?.remove();
      buscar(); // Asumo que esta función refresca la lista de espacios
      alert("Actualización exitosa");
    })
    .catch((err) => {
      alert("Error al actualizar el visitante");
      console.error("Error al actualizar visitante:", err);
      if (err.response) {
        console.error("Error data:", err.response.data);
      }
    });
}

function mostrarMensaje(mensaje) {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = `<p>${mensaje}</p>`;
}

function crear() {
  const idAsunto = inputIdAsunto.value;
  const descripcionAsunto = inputDescripcion.value;
  const IdEvento = inputEvento.value;

  // Validaciones básicas
  if (!idAsunto || !descripcionAsunto || !IdEvento) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  apiClient({
    method: "post",
    url: `${generalDate}/api/asuntos/`,
    data: {
      IdAsunto: Number(idAsunto),
      Descripcion: descripcionAsunto,
      IdEvento: Number(IdEvento),
    },
  })
    .then((res) => {
      buscar();
      alert("Asunto creado exitosamente");
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("CrtAsunto")
      );
      modal.hide();
    })
    .catch((err) => {
      if (err.response && err.response.data && err.response.data.message) {
        if (err.response.data.message.code === "P2002") {
          alert("El Id ya existe. Por favor, use otro Id.");
        } else {
          alert("Error al crear el asunto: " + err.response.data.message);
        }
      } else {
        alert("Error al crear el asunto");
      }
      console.error(err);
    });
}

// Función para eliminar Evento
function eliminar(id) {
  if (confirm("¿Estás seguro de que quieres eliminar este Visitante?")) {
    apiClient
      .delete(`${generalDate}/api/Visitante/${id}`)
      .then((res) => {
        alert("Visitante eliminado correctamente");
        buscar(); // Refrescar la lista de eventos después de eliminar
      })
      .catch((err) => {
        alert("Error al eliminar el Visitante");
        console.log(err);
      });
  }
}

async function obtenerAsuntos() {
  try {
    const response = await apiClient.get(`${generalDate}/api/asuntos/`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los asuntos:", error);
    return [];
  }
}

async function obtenerAsunto(id) {
  try {
    const res = await apiClient.get(`${generalDate}/api/asuntos/${id}`);
    const { Descripcion } = res.data;
    return Descripcion;
  } catch (error) {
    console.error("Error al obtener el descripción:", error);
    return "Actividad no encontrada";
  }
}
async function llenarSelectAsuntos() {
  const asuntos = await obtenerAsuntos();
  const selectAsunto = document.getElementById("IdAsunto");

  // Limpiar las opciones existentes
  selectAsunto.innerHTML = '<option value=""></option>';

  // Llenar con las nuevas opciones
  asuntos.forEach((asunto) => {
    const option = document.createElement("option");
    option.value = asunto.IdAsunto;
    option.textContent = asunto.Descripcion;
    selectAsunto.appendChild(option);
  });
}
async function llenarSelectAsuntosById(selectElementId) {
  const asuntos = await obtenerAsuntos();
  const selectAsunto = document.getElementById(selectElementId);

  if (!selectAsunto) {
    console.error(`Elemento con ID ${selectElementId} no encontrado`);
    return;
  }

  // Limpiar las opciones existentes
  selectAsunto.innerHTML = '<option value=""></option>';

  // Llenar con las nuevas opciones
  asuntos.forEach((asunto) => {
    const option = document.createElement("option");
    option.value = asunto.IdAsunto;
    option.textContent = asunto.Descripcion;
    selectAsunto.appendChild(option);
  });
}

// Llamar a la función para llenar el select cuando la página se cargue
document.addEventListener("DOMContentLoaded", llenarSelectAsuntos);

// Llamar a la función buscar() para mostrar los eventos al cargar la página
window.onload = function () {
  buscar();
};
