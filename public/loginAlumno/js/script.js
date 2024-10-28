// document.addEventListener("DOMContentLoaded", function () {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     window.location.href = "../index.html";
//     return;
//   }

//   axios
//     .get(`http://localhost:3000/api/authAlumno/validate/`, {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//     .then(function (response) {
//     })
//     .catch(function (error) {
//       console.error(error);
//       alert("Validation failed: " + error.response.data.error);
//       window.location.href = "../index.html";
//     });
// });


// document
//   .getElementById("loginForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     const userType = document.getElementById("userType").value;
//     const numControl = document.getElementById("numControl").value;
//     const curp = document.getElementById("curp").value;

//     if (userType == 1) {
//       axios
//         .post(`${generalDate}/api/authAlumno/login`, {
//           numControl: Number(numControl),
//           curp: curp,
//         })
//         .then(function (response) {
//           localStorage.setItem("token", response.data.token);
//           const dataLocal = {
//             idTipo: userType,
//             NumControl: numControl,
//           };
//           localStorage.setItem("dataPerson", JSON.stringify(dataLocal));

//           window.location.href = "generate_qr.html";
//         })
//         .catch(function (error) {
//           console.error(error);
//           alert("Login failed: " + error.response.data.error);
//         });
//     } else if (userType == 4) {
//       axios
//         .post(`${generalDate}/api/authAdmin/login`, {
//           user: numControl,
//           password: curp,
//         })
//         .then(function (response) {
//           localStorage.setItem("token", response.data.token);
//           const dataLocal = {
//             NumControl: numControl,
//           };
//           localStorage.setItem("dataPerson", JSON.stringify(dataLocal));

//           window.location.href = "../index.html";
//         })
//         .catch(function (error) {
//           console.error(error);
//           alert("Login failed: " + error.response.data.error);
//         });
//     }
//   });
