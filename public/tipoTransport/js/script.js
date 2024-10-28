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

const inputNombre = document.getElementById("Nombre");

// Función para buscar eventos
function buscar() {
  apiClient
    .get(`${generalDate}/api/TipoTransport/`)
    .then((response) => {
      const resultados = response.data.data;
      renderResultados(resultados);
    })
    .catch((error) => {
      console.error("Error al buscar espacios:", error);
    });
}

function buscarId() {
  const searchInput = document.getElementById("searchInput").value;
  const url = `${generalDate}/api/TipoTransport/${searchInput}`;

  apiClient
    .get(url)
    .then((response) => {
      const result = response.data;
      if (result) {
        renderResultados([result]); // Convertimos el resultado a un array para reutilizar la función
      } else {
        mostrarMensaje(
          "No se encontró ningún resultado para el ID proporcionado."
        );
      }
    })
    .catch((error) => {
      console.error("Error al buscar tipo de Transporte:", error);
      mostrarMensaje(
        "Error al buscar tipo de Trasnporte. Por favor, intente de nuevo."
      );
    });
}

function renderResultados(resultados) {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores

  resultados.forEach((result, index) => {
    const resultDiv = document.createElement("div");
    resultDiv.className = "card mb-3";
    resultDiv.innerHTML = `
      <div class="card-body">
          <h5 class="card-title">${result.Nombre}<h5>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop-${index}">Editar</button>
        <button type="button" onclick="eliminar(${result.IdTpTransp})" class="btn btn-danger">Eliminar</button>

        <div class="modal fade" id="staticBackdrop-${index}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header bg-success">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Tipo de Transporte: </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <label class="fs-7">Nombre del Tipo de Transporte</label>
                <input type="text" id="nombre-${index}" class="form-control" placeholder="Nombre del Tipo de Transporte" value="${result.Nombre}">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" onclick="actualizar(${result.IdTpTransp}, 'nombre-${index}')">Actualizar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    resultadosDiv.appendChild(resultDiv);
  });
}

function actualizar(idTpTransp, nombreId) {
  const nombreTipoTransport = document.getElementById(nombreId).value;
  // Validación de los valores obtenidos
  if (!nombreTipoTransport) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  // Crear el objeto de datos actualizados
  const datosActualizados = {
    IdTpTransp: idTpTransp,
    Nombre: nombreTipoTransport,
  };

  // Realizar la solicitud de actualización
  apiClient({
    method: "put",
    url: `${generalDate}/api/TipoTransport/${idTpTransp}`,
    data: datosActualizados,
  })
    .then((res) => {
      document.querySelector("div.modal-backdrop.fade.show")?.remove();
      buscar(); // Asumo que esta función refresca la lista de espacios
      alert("Actualización exitosa");
    })
    .catch((err) => {
      alert("Error al actualizar el tipo Transporte");
      console.error("Error al actualizar tipo Transporte:", err);
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
  const nombreTpTranspt = inputNombre.value;

  // Validaciones básicas
  if (!nombreTpTranspt) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  apiClient({
    method: "post",
    url: `${generalDate}/api/TipoTransport/`,
    data: {
      Nombre: nombreTpTranspt,
    },
  })
    .then((res) => {
      buscar();
      alert("Tipo transporte creado exitosamente");
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("CrtTpTransp")
      );
      modal.hide();
    })
    .catch((err) => {
      if (err.response && err.response.data && err.response.data.message) {
        if (err.response.data.message.code === "P2002") {
          alert("El Id ya existe. Por favor, use otro Id.");
        } else {
          alert("Error al crear el tipo transporte: " + err.response.data.message);
        }
      } else {
        alert("Error al crear el tipo trasnporte");
      }
      console.error(err);
    });
}

// Función para eliminar Evento
function eliminar(id) {
  if (confirm("¿Estás seguro de que quieres eliminar este Tipo de Transporte?")) {
    apiClient
      .delete(`${generalDate}/api/TipoTransport/${id}`)
      .then((res) => {
        alert("Tipo de Transporte eliminado correctamente");
        buscar(); // Refrescar la lista de eventos después de eliminar
      })
      .catch((err) => {
        alert("Error al eliminar el Tipo de Transporte");
        console.log(err);
      });
  }
}

// Llamar a la función buscar() para mostrar los eventos al cargar la página
window.onload = function () {
  buscar();
};
