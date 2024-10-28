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

const inputDescripcion = document.getElementById("Descripcion");

// Función para buscar Tipo de Persona
function buscar() {
  apiClient
    .get(`${generalDate}/api/TipoPersona/`)
    .then((response) => {
      const resultados = response.data.data;
      const resultadosDiv = document.getElementById("resultados");
      resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores

      resultados.forEach((result, index) => {
        const resultDiv = document.createElement("div");
        resultDiv.className = "card mb-3";
        resultDiv.innerHTML = `
                            <div class="card-body">
                                <h5 class="card-title">${result.Descripcion}</h5>
                                <!-- Button trigger modal -->
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop-${index}">
                                  Editar
                                </button>
                                <button type="button" onclick="eliminar(${result.IdTipo})" class="btn btn-danger"  data-bs-target="#staticBackdrop-${index}">
                                  Eliminar
                                </button>

                                <!-- Modal -->
                                <div class="modal fade" id="staticBackdrop-${index}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                  <div class="modal-dialog">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Tipo persona: </h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                        <input type="text" id="desc-${index}" class="form-control" placeholder="Descripcion" value="${result.Descripcion}"></input>
                                      </div>
                                      <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                        <button type="button" class="btn btn-primary" onclick="actualizar(${result.IdTipo},'desc-${index}')" >Actualizar</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                        `;
        resultadosDiv.appendChild(resultDiv);
      });
    })
    .catch((error) => {
      console.error("Error al buscar Tipo de Persona:", error);
    });
}

function buscarId() {
  const searchInput = document.getElementById("searchInput").value;
  const url = `${generalDate}/api/TipoPersona/${searchInput}`;

  apiClient
    .get(url)
    .then((response) => {
      const result = response.data;
      const resultadosDiv = document.getElementById("resultados");
      resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores

      if (result) {
        const resultDiv = document.createElement("div");
        resultDiv.className = "card mb-3";
        resultDiv.innerHTML = `
                        <div class="card-body">
                            <h5 class="card-title">${result.Descripcion}</h5>
                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop-0">
                              Editar
                            </button>
                            <button type="button" onclick="eliminar(${result.IdTipo})" class="btn btn-danger" data-bs-target="#staticBackdrop-0">
                              Eliminar
                            </button>

                            <!-- Modal -->
                            <div class="modal fade" id="staticBackdrop-0" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header bg-secondary-subtle">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Tipo persona: </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body bg-secondary-subtle text-secondary-emphasis">
                                    <input type="text" id="desc-0" class="form-control" placeholder="Descripcion" value="${result.Descripcion}"></input>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="button" class="btn btn-primary" onclick="actualizar(${result.IdTipo},'desc-0')" >Actualizar</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                    `;
        resultadosDiv.appendChild(resultDiv);
      } else {
        resultadosDiv.innerHTML =
          "<p>No se encontró ningún resultado para el ID proporcionado.</p>";
      }
    })
    .catch((error) => {
      console.error("Error al buscar Tipo de Persona:", error);
      const resultadosDiv = document.getElementById("resultados");
      resultadosDiv.innerHTML =
        "<p>Error al buscar Tipo de Persona. Por favor, intente de nuevo.</p>";
    });
}

// Función para editar Tipo de Persona
function crear() {
  const nombre = inputDescripcion.value;

  // TODO: Crear hacer validadiones
  if (false) {
  }

  apiClient({
    method: "post",
    url: `${generalDate}/api/TipoPersona/`,
    data: {
      Descripcion: nombre,
    },
  })
    .then((res) => {
      buscar();
      alert("Se ha creado exitosamente");
    })
    .catch((err) => {
      alert("Error al crear Tipo Persona");
      console.log(err);
    });
}

function actualizar(id, selectInput) {
  const nombre = document.getElementById(selectInput).value;

  // TODO: Crear hacer validadiones
  if (false) {
  }

  apiClient({
    method: "put",
    url: `${generalDate}/api/TipoPersona/${id}`,
    data: {
      IdTipo: id,
      Descripcion: nombre,
    },
  })
    .then((res) => {
      document.querySelector("div.modal-backdrop.fade.show")?.remove();
      buscar();
      alert("Se ha actualizado correctamente");
    })
    .catch((err) => {
      alert("Error al actualizar Tipo Persona");
      console.log(err);
    });
}

// Función para eliminar Tipo de Persona
function eliminar(id) {
  if (confirm("¿Estás seguro de que quieres eliminar este Tipo Persona?")) {
    apiClient({
      method: "delete",
      url: `${generalDate}/api/TipoPersona/${id}`,
    })
      .then((res) => {
        alert("Tipo Persona eliminado correctamente");
        buscar(); // Refrescar la lista de eventos después de eliminar
      })
      .catch((err) => {
        alert("Error al eliminar el Tipo Persona");
        console.log(err);
      });
  }
}
// Llamar a la función getEvents() para mostrar los eventos al cargar la página
window.onload = function () {
  buscar();
};
