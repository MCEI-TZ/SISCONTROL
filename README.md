# SISCONTROL

---

## Descripción del Proyecto

`SISCONTROL es un proyecto enfocado en la toma de asistencias de alumnos, docentes, empleados, etc. Además, permite registrar asistencias en estacionamientos y generar gráficos de datos. Este repositorio contiene el backend de la aplicación.`

---

## Instalación

`Para instalar el proyecto, asegúrate de tener las siguientes herramientas instaladas:`

- [Node.js](https://nodejs.org/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server)
- [MongoDB](https://www.mongodb.com/)

`Luego, clona el repositorio y ejecuta el siguiente comando para instalar las dependencias:`

```bash
npm install
```

---

## Paquetes Externos

`El proyecto utiliza una variedad de paquetes externos, cada uno con una función específica. A continuación se detallan los principales paquetes utilizados:`

1. [@prisma/client:](https://www.prisma.io/docs/getting-started) _* Cliente de Prisma para interactuar con bases de datos. *_
2. [bcryptjs:](https://www.npmjs.com/package/bcryptjs) _* Biblioteca para el cifrado de contraseñas. *_
3. [compression:](https://www.npmjs.com/package/compression) _* Middleware de Express para comprimir respuestas HTTP. *_
4. [cors:](https://www.npmjs.com/package/cors) _* Middleware de Express para habilitar CORS. *_
5. [cron:](https://www.npmjs.com/package/cron) _* Herramienta para ejecutar trabajos cron en Node.js.*_
6. [dotenv:](https://www.npmjs.com/package/dotenv) _*Cargar variables de entorno desde un archivo .env.*_
7. [env-var:](https://www.npmjs.com/package/env-var) _*Validación y lectura de variables de entorno.*_
8. [exceljs:](https://www.npmjs.com/package/exceljs) _*Biblioteca para leer, manipular y escribir archivos Excel.*_
9. [express:](https://www.npmjs.com/package/express) _*Framework web minimalista para Node.js.*_
10. [jsonwebtoken:](https://www.npmjs.com/package/jsonwebtoken) _*Implementación de JSON Web Tokens (JWT).*_
11. [nodemailer:](https://www.npmjs.com/package/nodemailer) _*Herramienta para enviar correos electrónicos con Node.js.*_
12. [qrcode:](https://www.npmjs.com/package/qrcode#createtext-options) _\_Generador de códigos QR en Node.js._\_

---

## Paquetes de Desarrollo

1. [@types/bcryptjs:] _Tipos de TypeScript para bcryptjs._
2. [@types/compression:] _Tipos de TypeScript para compression._
3. [@types/cors:] _Tipos de TypeScript para cors._
4. [@types/express:] _Tipos de TypeScript para Express._
5. [@types/jsonwebtoken:] _Tipos de TypeScript para jsonwebtoken._
6. [@types/node:] _Tipos de TypeScript para Node.js._
7. [@types/nodemailer:] _Tipos de TypeScript para nodemailer._
8. [dotenv-cli:] _CLI para cargar variables de entorno desde un archivo .env._
9. [prisma:] _CLI de Prisma para administrar esquemas de bases de datos._
10. [rimraf:] _Comando rm -rf para Node._
11. [ts-node:] _Ejecutar scripts TypeScript directamente._
12. [ts-node-dev:] _Reinicio en caliente para scripts TypeScript._
13. [typescript:] _Lenguaje de programación que se basa en JavaScript y añade tipos estáticos._

---

## Contribución

`Para contribuir al proyecto, es necesario realizar validaciones en los siguientes módulos:`

-[controlAsis:] Validaciones para el control de asistencia. -[alumno:] Validaciones específicas para el módulo de alumnos. -[asunto:] Validaciones para los asuntos relacionados con el sistema. -[autosAlumnos:] Validaciones para la gestión de autos de alumnos. -[autosDoces:] Validaciones para la gestión de autos de docentes.

---

## Licencia

`El proyecto utiliza una licencia ISC. Para más detalles, consulta el archivo LICENSE.`

---

## Autores

`Personal y participantes del ITSSNP.`

---

## Tecnologías

`El proyecto utiliza las siguientes tecnologías:`

1. [VSCode:] _Un editor de código fuente desarrollado por Microsoft._
2. [Node.js:] _Un entorno de ejecución para JavaScript fuera del navegador._
3. [Express.js:] _Un framework para aplicaciones web basado en Node.js._
4. [SQLServer:] _Un sistema de gestión de bases de datos relacional desarrollado por Microsoft._
5. [MongoDB_Compass:] _Una interfaz gráfica para MongoDB que permite explorar y manipular los datos de forma visual._

---

## Hardware:

- [ESP32:] _Un microcontrolador de bajo costo y alta integración con conectividad Wi-Fi y Bluetooth._
- [Lector_GM65:] _Un lector de códigos de barras compacto y de alto rendimiento._

---

## Estado del Proyecto

`El proyecto está en desarrollo y actualmente se encuentra funcionando en un 70%.`

---

## Requisitos del Sistema

`Para las versiones futuras, los requisitos del sistema incluirán:`

- [Node.js:] _Versión 14 o superior._
- [SQLServer:] _Cualquier versión reciente._
- [MongoDB:] _Versión 4.4 o superior._

---

## Estructura del Proyecto

`El proyecto se ha desarrollado utilizando arquitectura limpia y está organizado de la siguiente manera:`

# logs _(Carpeta donde se registran los errores del sistema)_

# node*modules *(Generada al instalar paquetes y frameworks externos)\_

# prisma _(Carpeta donde se generan los modelos de las bases de datos para diversas bases como Postgres, SQL Server, MySQL, etc.)_

# src _(Carpeta que contiene todo el funcionamiento del sistema)_

## config _(Carpeta para paquetes y variables de entorno)_

## data _(Información a importar con patrón adaptador de bases de datos, utilizado por Prisma)_

## domain _(Carpeta para la lógica del proyecto)_

### datasources _(Métodos abstractos a implementar)_

### dtos _(Lógica para enviar objetos, ya sea para create, update, etc.)_

### entities _(Plantillas de los datos en la base)_

### errors _(Gestión de errores del sistema)_

### repositories _(Métodos abstractos a implementar)_

### use-cases _(Resultados de los dtos y métodos)_

## infraestructure _(Lógica de bases de datos)_

### datasources _(Prisma para aplicar cambios en la base de datos)_

### repositories _(Resultado de los datasources)_

## presentation _(Rutas, API, y peticiones del usuario)_

### routes _(Rutas con Express)_

### server _(Servidor)_

# app.ts _(Archivo de inicio del proyecto)_

# envs _(Variables de entorno)_
