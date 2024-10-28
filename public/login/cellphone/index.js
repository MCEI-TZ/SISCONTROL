const contenedorQR = document.getElementById("newQrData");
document.addEventListener("DOMContentLoaded", function () {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/index.html";
    return;
  }

  axios.get(`${generalDate}/api/authAlumno/validate/`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then(function (response) {
      console.log(response);
      const { idTipo, NumControl } = JSON.parse(localStorage.getItem("dataPerson"));
      const qrData = {
        idTipo: Number(idTipo), // Esto se puede ajustar según el tipo de usuario
        NumControl: Number(NumControl),
        CurrentDate:Date()
      };

      console.info(qrData)

      encryptedData=btoa(JSON.stringify(qrData))
    
      const QR = new QRCode(contenedorQR);

      QR.makeCode(JSON.stringify(encryptedData));

      console.info(encryptedData)

      const completeName = document.getElementById('ComplateNameDta');

      const numberControl = document.getElementById('numberControl');
      numberControl.textContent = qrData.NumControl

      const typePersonDta = document.getElementById('typePerson')

      if (qrData.idTipo === 1) {
        typePersonDta.textContent = 'Estudiante'
      } else if (qrData.idTipo === 2) {
        typePersonDta.textContent = 'Docente'
      } else if (qrData.idTipo === 3) {
        typePersonDta.textContent = 'Visitante'
      } else if (qrData.idTipo === 4) {
        typePersonDta.textContent = 'Checador'
      } else if (qrData.idTipo === 5) {
        typePersonDta.textContent = 'Administrador'
      }
    }).then(() => {
      const numberControlData = document.getElementById('numberControl');
      const valorNumberControl = numberControlData.textContent
      getNamePerson(valorNumberControl)
    })
    .catch(function (error) {
      console.error(error);
      alert("Validation failed: " + error.response.data.error);
      window.location.href = "/index.html";
    });
});

function getNamePerson(numControl) {
  axios.get(`${generalDate}/api/alumnos/${numControl}`, {
  })
    .then(function (response) {

      const completeName = document.getElementById('ComplateNameDta');
      completeName.textContent = response.data.NombreCompleto

    })
    .catch(function (error) {
      console.error(error);
    });
}
