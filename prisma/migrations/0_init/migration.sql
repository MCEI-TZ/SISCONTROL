BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[ActividadesApoyoDocentes] (
    [Id] BIGINT NOT NULL,
    [IdDocente] INT NOT NULL,
    [IdPeriodo] SMALLINT NOT NULL,
    [IdActividad] TINYINT NOT NULL,
    [HoraLun] NVARCHAR(8) NOT NULL,
    [HoraMar] NVARCHAR(8) NOT NULL,
    [HoraMie] NVARCHAR(8) NOT NULL,
    [HoraJue] NVARCHAR(8) NOT NULL,
    [HoraVie] NVARCHAR(8) NOT NULL,
    [HoraSab] NVARCHAR(8) NOT NULL,
    CONSTRAINT [PK_ActividadesApoyoDocentes] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[Alumno] (
    [NumControl] INT NOT NULL,
    [NumFicha] NVARCHAR(9),
    [APaterno] NVARCHAR(20) NOT NULL,
    [AMaterno] NVARCHAR(20) NOT NULL,
    [Nombre] NVARCHAR(25) NOT NULL,
    [NombreCompleto] NVARCHAR(67) NOT NULL,
    [Genero] CHAR(1) NOT NULL,
    [FNacimiento] DATE NOT NULL,
    [CURP] NVARCHAR(18) NOT NULL,
    [Situacion] TINYINT NOT NULL,
    [Clave] BINARY(20) NOT NULL,
    [Edad] INT,
    [AnioIngreso] INT,
    [Semestre] TINYINT NOT NULL,
    [IdCarre] TINYINT NOT NULL,
    [PeriodoIngreso] SMALLINT NOT NULL,
    [CorreoE] NVARCHAR(255),
    [PeriodoEgreso] SMALLINT,
    [PeriodosConvalidados] TINYINT NOT NULL,
    [IdPlanEstudio] SMALLINT NOT NULL,
    [IdModuloEspecialidad] SMALLINT,
    [IdModalidadEstudio] TINYINT NOT NULL,
    [IdTipoIngreso] TINYINT NOT NULL,
    [IdBachillerato] INT NOT NULL,
    [IdEspecialidadBachillerato] TINYINT NOT NULL,
    [PromedioBachillerato] FLOAT(53) NOT NULL,
    [AnioEgresoBachillerato] SMALLINT NOT NULL,
    CONSTRAINT [PK__Alumno__8699667EE196FB91] PRIMARY KEY CLUSTERED ([NumControl])
);

-- CreateTable
CREATE TABLE [dbo].[AsesorExterno] (
    [Id] INT NOT NULL,
    [Nombre] NVARCHAR(20),
    [ApellidoPaterno] NVARCHAR(20),
    [ApellidoMAterno] NVARCHAR(20),
    [Grado] NVARCHAR(8),
    [Puesto] NVARCHAR(40),
    [IdEmpresa] INT,
    CONSTRAINT [PK_AsesorExterno] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[AsistenciaAlumno] (
    [IdAsistenciaAlumno] BIGINT NOT NULL IDENTITY(1,1),
    [MateriaGrupo] NCHAR(12) NOT NULL,
    [Unidad] TINYINT NOT NULL,
    [Fecha] DATE NOT NULL,
    [Situacion] CHAR(1) NOT NULL,
    [NumControl] INT NOT NULL,
    [IdPerio] SMALLINT NOT NULL,
    CONSTRAINT [PK__Asistenc__6EC67F0581671AAF] PRIMARY KEY CLUSTERED ([IdAsistenciaAlumno])
);

-- CreateTable
CREATE TABLE [dbo].[Asunto] (
    [IdAsunto] INT NOT NULL IDENTITY(1,1),
    [Descripcion] NVARCHAR(50) NOT NULL,
    [IdEvento] INT NOT NULL,
    CONSTRAINT [PK__Asunto__78CEE589B787A562] PRIMARY KEY CLUSTERED ([IdAsunto])
);

-- CreateTable
CREATE TABLE [dbo].[AulasExamenAdmision] (
    [Id] TINYINT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(15) NOT NULL,
    [Capacidad] TINYINT NOT NULL,
    [Acumulado] TINYINT NOT NULL,
    [IdCarrera] TINYINT NOT NULL,
    CONSTRAINT [PK__AulasExa__3214EC07DFD3077D] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[AutosAlumnos] (
    [NumControl] INT NOT NULL,
    [IdVehiculo] INT NOT NULL,
    CONSTRAINT [PK__AutosAlu__C191075FB66910E6] PRIMARY KEY CLUSTERED ([NumControl],[IdVehiculo])
);

-- CreateTable
CREATE TABLE [dbo].[AutosDoce] (
    [IdDoce] INT NOT NULL,
    [IdVehiculo] INT NOT NULL,
    CONSTRAINT [PK__AutosDoc__4972F0219938F072] PRIMARY KEY CLUSTERED ([IdDoce],[IdVehiculo])
);

-- CreateTable
CREATE TABLE [dbo].[AutosVisitante] (
    [idVisitante] INT NOT NULL,
    [IdVehiculo] INT NOT NULL,
    CONSTRAINT [PK__AutosVis__D36E3EFE092BCFC5] PRIMARY KEY CLUSTERED ([idVisitante],[IdVehiculo])
);

-- CreateTable
CREATE TABLE [dbo].[Bachilleratos] (
    [Id] INT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(120) NOT NULL,
    [ClaveOficial] NCHAR(11),
    [IdLocalidad] INT NOT NULL,
    CONSTRAINT [PK__Bachille__3214EC078DE9F9BE] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[CalificacionPorCriterio] (
    [IdCalificacionPorCriterio] BIGINT NOT NULL IDENTITY(1,1),
    [IdCriterioPorUnidad] BIGINT NOT NULL,
    [Calificacion] FLOAT(53) NOT NULL,
    [IdDetalleCarga] BIGINT,
    CONSTRAINT [PK__Califica__C0F24E2EC98E57F4] PRIMARY KEY CLUSTERED ([IdCalificacionPorCriterio])
);

-- CreateTable
CREATE TABLE [dbo].[CargaAlumno] (
    [IdCarga] BIGINT NOT NULL IDENTITY(1,1),
    [CalFinal] FLOAT(53) NOT NULL,
    [OpcionInicial] TINYINT NOT NULL,
    [OpcionFinal] TINYINT NOT NULL,
    [FaltasTotales] TINYINT NOT NULL,
    [Desertor] BIT NOT NULL,
    [IdGrupo] INT NOT NULL,
    [NumControl] INT NOT NULL,
    [SemestreAlumno] TINYINT NOT NULL,
    CONSTRAINT [PK__CargaAlu__6C985617A2C7B912] PRIMARY KEY CLUSTERED ([IdCarga])
);

-- CreateTable
CREATE TABLE [dbo].[Carrera] (
    [IdCarre] TINYINT NOT NULL,
    [Nombre] NVARCHAR(70) NOT NULL,
    [NombreCorto] NVARCHAR(25) NOT NULL,
    [Letra] CHAR(2),
    [Situacion] TINYINT NOT NULL,
    [IdDepa] SMALLINT NOT NULL,
    [IdJefe] INT NOT NULL,
    [IdNivelEstudio] TINYINT NOT NULL,
    [FechaInicio] DATE NOT NULL,
    [FechaTerminacion] DATE NOT NULL,
    [PeriodoModulo] INT NOT NULL,
    CONSTRAINT [PK__Carrera__6C9FE071B8D5A7B4] PRIMARY KEY CLUSTERED ([IdCarre])
);

-- CreateTable
CREATE TABLE [dbo].[CategoríasDocentes] (
    [Id] TINYINT NOT NULL,
    [Nombre] NVARCHAR(40) NOT NULL,
    [NombreCorto] NVARCHAR(25) NOT NULL,
    [Tipo] TINYINT NOT NULL,
    CONSTRAINT [PK_CategoríasDocentes] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[Certificados] (
    [Folio] NVARCHAR(10) NOT NULL,
    [NumControl] INT NOT NULL,
    [Libro] NVARCHAR(10) NOT NULL,
    [Fojas] INT NOT NULL,
    [Fecha] DATE NOT NULL,
    CONSTRAINT [PK_Certificados] PRIMARY KEY CLUSTERED ([Folio])
);

-- CreateTable
CREATE TABLE [dbo].[ControlAsis] (
    [IdControlAsis] INT NOT NULL IDENTITY(1,1),
    [NumControl] INT,
    [IdDoce] INT,
    [idVisitante] INT,
    [idTipo] INT NOT NULL,
    [IdEspacio] SMALLINT NOT NULL,
    [idVehiculo] INT,
    [HoraEntrada] DATETIME,
    [HoraSalida] DATETIME,
    [IdTpTransport] INT,
    CONSTRAINT [PK__ControlA__0ADBE0AC69C5D770] PRIMARY KEY CLUSTERED ([IdControlAsis])
);

-- CreateTable
CREATE TABLE [dbo].[CriterioEvaluacion] (
    [IdCriterio] TINYINT NOT NULL IDENTITY(1,1),
    [Nombre] VARCHAR(25) NOT NULL,
    [Activo] BIT,
    CONSTRAINT [PK__Criterio__71394482CC6A9C3C] PRIMARY KEY CLUSTERED ([IdCriterio])
);

-- CreateTable
CREATE TABLE [dbo].[CriterioPorUnidad] (
    [IdCriterioPorUnidad] BIGINT NOT NULL IDENTITY(1,1),
    [IdGrupo] INT,
    [IdCriterio] TINYINT NOT NULL,
    [Porcentaje] FLOAT(53) NOT NULL,
    [Unidad] TINYINT NOT NULL,
    CONSTRAINT [PK__Criterio__A16A6FD7680436C2] PRIMARY KEY CLUSTERED ([IdCriterioPorUnidad])
);

-- CreateTable
CREATE TABLE [dbo].[CuentasAspirantes] (
    [Id] BIGINT NOT NULL IDENTITY(1,1),
    [CorreoE] NVARCHAR(255) NOT NULL,
    [ClaveAcceso] BINARY(20) NOT NULL,
    [APaterno] NVARCHAR(20) NOT NULL,
    [AMaterno] NVARCHAR(20) NOT NULL,
    [Nombre] NVARCHAR(35) NOT NULL,
    [NombreCompleto] NVARCHAR(77) NOT NULL,
    [FechaRegistro] DATE NOT NULL,
    [FechaUltimoAcceso] DATE NOT NULL,
    [IdPeriodoRegistro] SMALLINT,
    CONSTRAINT [PK__CuentasA__3214EC076A236FE1] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[DatosAcademicosAspirantes] (
    [IdCuentaAspirante] BIGINT NOT NULL,
    [IdBachilleratoOrigen] INT,
    [IdEspecialidadBachillerato] TINYINT,
    [AnioEgreso] SMALLINT NOT NULL,
    [Promedio] REAL NOT NULL,
    [IdBeca] TINYINT NOT NULL,
    [IdCarreraOp1] TINYINT NOT NULL,
    [IdCarreraOp2] TINYINT NOT NULL,
    [IdModalidad] TINYINT NOT NULL,
    CONSTRAINT [PK__DatosAca__F800061F777A9DD1] PRIMARY KEY CLUSTERED ([IdCuentaAspirante])
);

-- CreateTable
CREATE TABLE [dbo].[DatosFamiliaresAspirantes] (
    [IdCuentaAspirante] BIGINT NOT NULL,
    [NombrePadre] NVARCHAR(60),
    [PadreVive] BIT,
    [TelefonoPadre] CHAR(10),
    [NombreMadre] NVARCHAR(60),
    [MadreVive] BIT,
    [TelefonoMadre] CHAR(10),
    [NombreTutor] NVARCHAR(60),
    [CalleDomicilioTutor] NVARCHAR(80) NOT NULL,
    [NumeroDomicilioTutor] NVARCHAR(8),
    [IdLocalidadTutor] INT NOT NULL,
    [TelCelularTutor] CHAR(10),
    [TelCasaTutor] CHAR(10),
    [CorreoETutor] NVARCHAR(255),
    CONSTRAINT [PK__DatosFam__F800061F87725D74] PRIMARY KEY CLUSTERED ([IdCuentaAspirante])
);

-- CreateTable
CREATE TABLE [dbo].[DatosPersonalesAlumnos] (
    [NumControl] INT NOT NULL,
    [IdEstadoNacimiento] INT NOT NULL,
    [CalleDomicilio] NVARCHAR(80) NOT NULL,
    [NumeroDomicilio] NVARCHAR(8),
    [IdLocalidad] INT NOT NULL,
    [IdEstadoCivil] TINYINT NOT NULL,
    [TelCelular] CHAR(10),
    [TelCasa] CHAR(10),
    [IdServicioMedico] TINYINT NOT NULL,
    [NumeroSeguridadSocial] BIGINT NOT NULL,
    [GrupoSanguineo] NVARCHAR(8) NOT NULL,
    [IdLenguaIndigena] TINYINT NOT NULL,
    [IdTipoDiscapacidad] TINYINT NOT NULL,
    [NumeroHijos] TINYINT,
    [Peso] TINYINT,
    [Estatura] SMALLMONEY,
    [NombrePadre] NVARCHAR(60),
    [PadreVive] BIT,
    [TelefonoPadre] CHAR(10),
    [IdLocalidadPadre] INT,
    [CalleDomicilioPadre] NVARCHAR(80),
    [NumeroDomicilioPadre] NVARCHAR(8),
    [IdEscolaridadPadre] TINYINT,
    [CarreraPadre] NVARCHAR(25),
    [LugarTrabajoPadre] NVARCHAR(25),
    [MontoSueldoPadre] SMALLMONEY,
    [IdPeriodoPagoSueldoPadre] TINYINT,
    [NombreMadre] NVARCHAR(60),
    [MadreVive] BIT,
    [TelefonoMadre] CHAR(10),
    [IdLocalidadMadre] INT,
    [CalleDomicilioMadre] NVARCHAR(80),
    [NumeroDomicilioMadre] NVARCHAR(8),
    [IdEscolaridadMadre] TINYINT,
    [CarreraMadre] NVARCHAR(25),
    [LugarTrabajoMadre] NVARCHAR(25),
    [MontoSueldoMadre] SMALLMONEY,
    [IdPeriodoPagoSueldoMadre] TINYINT,
    [NombreTutor] NVARCHAR(60),
    [CalleDomicilioTutor] NVARCHAR(80),
    [NumeroDomicilioTutor] NVARCHAR(8),
    [IdLocalidadTutor] INT,
    [TelCelularTutor] CHAR(10),
    [TelCasaTutor] CHAR(10),
    [CorreoETutor] NVARCHAR(255),
    [OcupacionTutor] NVARCHAR(50),
    [HorarioTrabajoTutor] NVARCHAR(30),
    [DependeEconomicamenteDe] NVARCHAR(50),
    [AlumnoTrabaja] BIT,
    [LugarTrabajoAlumno] NVARCHAR(50),
    [HorarioTrabajoAlumno] NVARCHAR(25),
    [MontoSueldoAlumno] SMALLMONEY,
    [IdPeriodoPagoSueldoAlumno] TINYINT,
    [MontoIngresosFamiliares] SMALLMONEY,
    [EnAccidenteAvisarAPersona] NVARCHAR(50),
    [EnAccidenteAvisarATelefono] NVARCHAR(10),
    [IdEspacioViviendaEstudios] TINYINT,
    [IdTipoVivienda] TINYINT,
    [IdOrigenVivienda] TINYINT,
    [NumPersonasConQueVive] TINYINT,
    [ParentescoPersonasConQueVive] NVARCHAR(15),
    [FechaUltimaActualizacion] DATETIME,
    CONSTRAINT [PK_DatosPersonalesAlumnos] PRIMARY KEY CLUSTERED ([NumControl])
);

-- CreateTable
CREATE TABLE [dbo].[DatosPersonalesAspirantes] (
    [IdCuentaAspirante] BIGINT NOT NULL,
    [CURP] CHAR(18) NOT NULL,
    [HomoclaveRFC] CHAR(3),
    [RFC] VARCHAR(13),
    [FechaNacimiento] DATE,
    [Genero] VARCHAR(1),
    [IdMunicipioNacimiento] INT NOT NULL,
    [CalleDomicilio] NVARCHAR(80) NOT NULL,
    [NumeroDomicilio] NVARCHAR(8),
    [IdLocalidad] INT NOT NULL,
    [IdEstadoCivil] TINYINT NOT NULL,
    [TelCelular] CHAR(10),
    [TelCasa] CHAR(10),
    [Facebook] NVARCHAR(50),
    [Twitter] NVARCHAR(50),
    [IdServicioMedico] TINYINT NOT NULL,
    [NumeroSeguridadSocial] BIGINT NOT NULL,
    [GrupoSanguineo] NVARCHAR(8) NOT NULL,
    [IdLenguaIndigena] TINYINT NOT NULL,
    [IdTipoDiscapacidad] TINYINT NOT NULL,
    CONSTRAINT [PK__DatosPer__F800061F536BA9AA] PRIMARY KEY CLUSTERED ([IdCuentaAspirante])
);

-- CreateTable
CREATE TABLE [dbo].[DatosTempAlumnos] (
    [NumControl] INT NOT NULL,
    [NumFicha] CHAR(6) NOT NULL,
    [NombreCompleto] NVARCHAR(67) NOT NULL,
    [IdBachilleratoOrigen] INT,
    [IdEspecialidadBachillerato] TINYINT,
    [AnioEgreso] SMALLINT NOT NULL,
    [Promedio] REAL NOT NULL
);

-- CreateTable
CREATE TABLE [dbo].[Departamento] (
    [IdDepa] SMALLINT NOT NULL,
    [Nombre] NVARCHAR(60) NOT NULL,
    [NombreCorto] NVARCHAR(20) NOT NULL,
    CONSTRAINT [PK__Departam__F0682C8CAD4350B6] PRIMARY KEY CLUSTERED ([IdDepa])
);

-- CreateTable
CREATE TABLE [dbo].[DetalleCarga] (
    [IdDetalleCarga] BIGINT NOT NULL IDENTITY(1,1),
    [Parcial] FLOAT(53) NOT NULL,
    [Unidad] TINYINT NOT NULL,
    [Opcion] TINYINT NOT NULL,
    [Faltas] TINYINT NOT NULL,
    [IdCarga] BIGINT,
    CONSTRAINT [PK__DetalleC__EC519E04887CC3F9] PRIMARY KEY CLUSTERED ([IdDetalleCarga])
);

-- CreateTable
CREATE TABLE [dbo].[Discapacidades] (
    [Id] TINYINT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(50) NOT NULL,
    CONSTRAINT [PK__Discapac__3214EC073220DD1A] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[Docente] (
    [IdDoce] INT NOT NULL,
    [Apellidos] NVARCHAR(30) NOT NULL,
    [Nombre] NVARCHAR(30) NOT NULL,
    [NombreCompleto] NVARCHAR(61) NOT NULL,
    [Genero] CHAR(1) NOT NULL,
    [Grado] NVARCHAR(6) NOT NULL,
    [NumNomina] INT NOT NULL,
    [Vigente] BIT,
    [IdDepa] SMALLINT,
    CONSTRAINT [PK__Docente__0E7A91001FFF3770] PRIMARY KEY CLUSTERED ([IdDoce])
);

-- CreateTable
CREATE TABLE [dbo].[Empleado] (
    [NoNomina] INT NOT NULL,
    [Nombre] NVARCHAR(50) NOT NULL,
    [ApellidoPaterno] NVARCHAR(50) NOT NULL,
    [ApellidoMaterno] NVARCHAR(50),
    [NombreCompleto] NVARCHAR(152),
    [Genero] CHAR(1) NOT NULL,
    [CURP] CHAR(18) NOT NULL,
    [RFC] CHAR(13) NOT NULL,
    [Estatus] TINYINT NOT NULL,
    [IdEstadoCivil] TINYINT,
    [Direccion] VARCHAR(50),
    [IdLocalidad] INT NOT NULL,
    [NumAfiliacionISSSTEP] INT,
    [TipoSangre] CHAR(5),
    [CorreoElectronico] VARCHAR(100),
    [TelefonoCasa] VARCHAR(10),
    [Celular] VARCHAR(10),
    [FechaNacimiento] DATE,
    [ClaveAcceso] BINARY(20),
    [IdDepartamento] SMALLINT NOT NULL,
    CONSTRAINT [PK__Empleado__00E81081E72FF680] PRIMARY KEY CLUSTERED ([NoNomina])
);

-- CreateTable
CREATE TABLE [dbo].[Empresas] (
    [Id] INT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(80),
    [Telefono] NVARCHAR(10),
    [Calle] NVARCHAR(50),
    [Numero] NVARCHAR(5),
    [IdLocalidad] INT,
    CONSTRAINT [PK_Empresas] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[EquivalenciaDeMaterias] (
    [Id] INT NOT NULL IDENTITY(1,1),
    [IdMateria] NVARCHAR(10) NOT NULL,
    [IdCarga] BIGINT NOT NULL,
    CONSTRAINT [PK_GruposExtendidos] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[Escolaridad] (
    [Id] TINYINT NOT NULL,
    [Nombre] NVARCHAR(15) NOT NULL,
    CONSTRAINT [PK_Escolaridad] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[EspaciosDeClase] (
    [Id] SMALLINT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(30) NOT NULL,
    [Abreviatura] NVARCHAR(4) NOT NULL,
    [Capacidad] TINYINT NOT NULL,
    [IdSituacion] TINYINT NOT NULL,
    CONSTRAINT [PK_EspaciosDeClase] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[EspacioViviendaEstudios] (
    [Id] TINYINT NOT NULL,
    [Nombre] NVARCHAR(25) NOT NULL,
    CONSTRAINT [PK_EspacioViviendaEstudios] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[EspecialidadesBachilleratos] (
    [Id] TINYINT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(120) NOT NULL,
    CONSTRAINT [PK__Especial__3214EC07E16F9759] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[EstadoCivil] (
    [Id] TINYINT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(50) NOT NULL,
    CONSTRAINT [PK__EstadoCi__3214EC078864ED16] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[EstadosRepublica] (
    [Id] INT NOT NULL IDENTITY(1,1),
    [Nombre] VARCHAR(80) NOT NULL,
    [AbreviadoCURP] CHAR(2),
    CONSTRAINT [PK__EstadoRe__3214EC071A002441] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[Evento] (
    [IdEvento] INT NOT NULL IDENTITY(1,1),
    [Nombre_Evento] NVARCHAR(70) NOT NULL,
    [fecha_inicio] DATETIME NOT NULL,
    [fecha_fin] DATETIME NOT NULL,
    [Habilitado] BIT NOT NULL,
    CONSTRAINT [Evento_pkey] PRIMARY KEY CLUSTERED ([IdEvento])
);

-- CreateTable
CREATE TABLE [dbo].[FichasAspirantes] (
    [IdCuentaAspirante] BIGINT NOT NULL,
    [NumFicha] CHAR(6) NOT NULL,
    [IdCotejo] INT NOT NULL,
    [IdAula] TINYINT NOT NULL,
    [FechaCotejo] DATE,
    [Etapa] TINYINT,
    CONSTRAINT [PK__FichasAs__F800061F7AD7379F] PRIMARY KEY CLUSTERED ([IdCuentaAspirante])
);

-- CreateTable
CREATE TABLE [dbo].[FoliosConstancias] (
    [IdPeriodo] SMALLINT NOT NULL,
    [Folio] SMALLINT NOT NULL,
    [NumControl] INT NOT NULL,
    [Tipo] CHAR(3) NOT NULL,
    [Fecha] DATE NOT NULL
);

-- CreateTable
CREATE TABLE [dbo].[FotosEmpleados] (
    [NoNomina] INT NOT NULL,
    [Imagen] VARBINARY(max) NOT NULL,
    CONSTRAINT [PK_FotosEmpleados] PRIMARY KEY CLUSTERED ([NoNomina])
);

-- CreateTable
CREATE TABLE [dbo].[Grupo] (
    [IdGrupo] INT NOT NULL IDENTITY(1,1),
    [Clave] NVARCHAR(4) NOT NULL,
    [CvePlan] CHAR(1) NOT NULL,
    [Cupo] TINYINT NOT NULL,
    [Inscritos] TINYINT NOT NULL,
    [Semestre] TINYINT,
    [HoraLun] NVARCHAR(8) NOT NULL,
    [AulaLun] NVARCHAR(4) NOT NULL,
    [HoraMar] NVARCHAR(8) NOT NULL,
    [AulaMar] NVARCHAR(4) NOT NULL,
    [HoraMie] NVARCHAR(8) NOT NULL,
    [AulaMie] NVARCHAR(4) NOT NULL,
    [HoraJue] NVARCHAR(8) NOT NULL,
    [AulaJue] NVARCHAR(4) NOT NULL,
    [HoraVie] NVARCHAR(8) NOT NULL,
    [AulaVie] NVARCHAR(4) NOT NULL,
    [HoraSab] NVARCHAR(8) NOT NULL,
    [AulaSab] NVARCHAR(4) NOT NULL,
    [Aprobados] TINYINT NOT NULL,
    [Reprobados] TINYINT NOT NULL,
    [Desertores] TINYINT NOT NULL,
    [IdMate] NVARCHAR(10),
    [IdDoce] INT,
    [IdPerio] SMALLINT,
    [IdCarre] TINYINT,
    [Abierto] BIT NOT NULL,
    [IdPlanEstudio] INT,
    [Vigente] BIT NOT NULL,
    [FolioActa] INT,
    CONSTRAINT [PK__Grupo__303F6FD9589A64D1] PRIMARY KEY CLUSTERED ([IdGrupo])
);

-- CreateTable
CREATE TABLE [dbo].[GruposSanguineos] (
    [Id] TINYINT NOT NULL,
    [Nombre] NVARCHAR(10) NOT NULL,
    CONSTRAINT [PK_GruposSanguineos] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[HorasApoyoDocentes] (
    [IdPeriodo] SMALLINT NOT NULL,
    [IdDocente] INT NOT NULL,
    [DiaSemana] TINYINT NOT NULL,
    [Hora] TINYINT NOT NULL,
    [IdOtraActividadDocente] TINYINT NOT NULL,
    [Espacio] NVARCHAR(15) NOT NULL,
    CONSTRAINT [PK_HorasApoyoDocentes] PRIMARY KEY CLUSTERED ([IdPeriodo],[IdDocente],[DiaSemana],[Hora])
);

-- CreateTable
CREATE TABLE [dbo].[HorasDocente] (
    [IdCargaDoce] INT NOT NULL IDENTITY(1,1),
    [HorasTotal] TINYINT NOT NULL,
    [HorasFrenteAGrupo] TINYINT,
    [HorasOtrasActividades] TINYINT,
    [IdDoce] INT,
    [IdPerio] SMALLINT,
    CONSTRAINT [PK__HorasDoc__DB2656E7079CED93] PRIMARY KEY CLUSTERED ([IdCargaDoce])
);

-- CreateTable
CREATE TABLE [dbo].[Kardex] (
    [NumControl] INT NOT NULL,
    [IdMateria] NVARCHAR(10) NOT NULL,
    [Calificacion] FLOAT(53) NOT NULL,
    [OpcionFinal] TINYINT NOT NULL,
    [IdPeriodo1] SMALLINT,
    [Semestre1] SMALLINT,
    [IdPeriodo2] SMALLINT,
    [Semestre2] SMALLINT,
    [IdPeriodo3] SMALLINT,
    [Semestre3] SMALLINT,
    [Fecha] DATE,
    CONSTRAINT [PK_Kardex] PRIMARY KEY CLUSTERED ([NumControl],[IdMateria])
);

-- CreateTable
CREATE TABLE [dbo].[LenguasIndigenas] (
    [Id] TINYINT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(50) NOT NULL,
    CONSTRAINT [PK__LenguasI__3214EC07218C665E] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[Localidades] (
    [Id] INT NOT NULL IDENTITY(1,1),
    [Municipio_Id] INT NOT NULL,
    [Nombre] VARCHAR(120) NOT NULL,
    [CP] INT,
    [Zona] VARCHAR(32) NOT NULL,
    CONSTRAINT [PK__Localida__3214EC0778220544] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[Materia] (
    [IdMate] NVARCHAR(10) NOT NULL,
    [Nombre] NVARCHAR(80) NOT NULL,
    [NombreCorto] NVARCHAR(20) NOT NULL,
    [Creditos] TINYINT NOT NULL,
    [HorasTeoria] TINYINT NOT NULL,
    [HorasPractica] TINYINT NOT NULL,
    [Unidades] TINYINT NOT NULL,
    [HorasCurso] SMALLINT,
    [IdDepa] SMALLINT,
    [Objetivo] NTEXT,
    [Caracterizacion] NTEXT,
    CONSTRAINT [PK__Materia__4E664992D3DDDC47] PRIMARY KEY CLUSTERED ([IdMate])
);

-- CreateTable
CREATE TABLE [dbo].[MateriasPlan] (
    [IdPlan] SMALLINT NOT NULL,
    [IdMateria] NVARCHAR(10) NOT NULL,
    [UbicacionReticula] TINYINT NOT NULL,
    [IdModuloEspecialidad] SMALLINT NOT NULL,
    CONSTRAINT [PK_MateriasPlan_1] PRIMARY KEY CLUSTERED ([IdPlan],[IdMateria],[IdModuloEspecialidad])
);

-- CreateTable
CREATE TABLE [dbo].[ModalidadesEstudio] (
    [Id] TINYINT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(50) NOT NULL,
    CONSTRAINT [PK__Modalida__3214EC0773424A78] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[ModalidadesEstudioCarreras] (
    [IdModalidadEstudio] TINYINT NOT NULL,
    [IdCarrera] TINYINT NOT NULL,
    CONSTRAINT [PK_ModalidadesEstudioCarreras] PRIMARY KEY CLUSTERED ([IdCarrera],[IdModalidadEstudio])
);

-- CreateTable
CREATE TABLE [dbo].[ModulosEscritorio] (
    [Id] TINYINT NOT NULL,
    [Nombre] NVARCHAR(50) NOT NULL,
    [NombreCodigo] NVARCHAR(50) NOT NULL,
    CONSTRAINT [PK_ModulosEscritorio] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[ModulosEspecialidad] (
    [Id] SMALLINT NOT NULL IDENTITY(1,1),
    [IdPlanEstudios] SMALLINT NOT NULL,
    [Clave] NVARCHAR(3),
    [Nombre] NVARCHAR(60) NOT NULL,
    [NombreCorto] NVARCHAR(20) NOT NULL,
    [Creditos] TINYINT NOT NULL,
    [FechaInicio] DATE NOT NULL,
    [FechaTerminacion] DATE NOT NULL,
    [ClaveOficial] NVARCHAR(20) NOT NULL,
    [IdSituacion] TINYINT NOT NULL,
    CONSTRAINT [PK_ModulosEspecialidad] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[Municipios] (
    [Id] INT NOT NULL IDENTITY(1,1),
    [Numero_Mpio] INT NOT NULL,
    [Estado_Id] INT NOT NULL,
    [Nombre] VARCHAR(120) NOT NULL,
    CONSTRAINT [PK__Municipi__3214EC07B4EB2F9C] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[NivelesEstudio] (
    [Id] TINYINT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(50) NOT NULL,
    CONSTRAINT [PK_NivelesEstudio] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[Notas] (
    [Clave] VARCHAR(20) NOT NULL,
    [Texto] TEXT NOT NULL,
    CONSTRAINT [PK_Notas] PRIMARY KEY CLUSTERED ([Clave])
);

-- CreateTable
CREATE TABLE [dbo].[OpcionesAcreditacionAsignaturas] (
    [Id] TINYINT NOT NULL,
    [Nombre] NVARCHAR(30) NOT NULL,
    [Abreviatura] NVARCHAR(3) NOT NULL,
    [Disponible] BIT NOT NULL,
    CONSTRAINT [PK_OpcionesAcreditacionAsignaturas] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[OrigenVivienda] (
    [Id] TINYINT NOT NULL,
    [Nombre] NVARCHAR(10) NOT NULL,
    CONSTRAINT [PK_OrigenVivienda] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[OtrasActividadesDocentes] (
    [Id] TINYINT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(60) NOT NULL,
    [NombreCorto] NCHAR(15) NOT NULL,
    CONSTRAINT [PK_OtrasActividadesDocentes] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[PagosInscripciones] (
    [NumControl] INT NOT NULL,
    [IdPeriodo] SMALLINT NOT NULL,
    [NoNominaCoteja] INT NOT NULL,
    [FechaHora] DATETIME NOT NULL,
    CONSTRAINT [PK_PagosInscripciones] PRIMARY KEY CLUSTERED ([NumControl],[IdPeriodo])
);

-- CreateTable
CREATE TABLE [dbo].[Parametros] (
    [Id] VARCHAR(25) NOT NULL,
    [Valor] VARCHAR(80) NOT NULL,
    CONSTRAINT [PK__Parametr__3214EC076024F1FD] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[Pb1] (
    [idpb] INT NOT NULL,
    [descripcion] VARCHAR(50)
);

-- CreateTable
CREATE TABLE [dbo].[PeriodicidadPlanEstudios] (
    [Id] TINYINT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(50) NOT NULL,
    CONSTRAINT [PK_PeriodicidadPlanEstudios] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[PeriodoEscolar] (
    [IdPerio] SMALLINT NOT NULL,
    [Nombre] NVARCHAR(25) NOT NULL,
    [NombreCorto] NVARCHAR(10) NOT NULL,
    [Situación] BIT NOT NULL,
    [Inicio] DATE,
    [Fin] DATE,
    [InicioVacaciones] DATE,
    [FinVacaciones] DATE,
    CONSTRAINT [PK__PeriodoE__FCCC0D04D2C7F9FD] PRIMARY KEY CLUSTERED ([IdPerio])
);

-- CreateTable
CREATE TABLE [dbo].[PeriodoPagoSueldo] (
    [Id] TINYINT NOT NULL,
    [Nombre] NVARCHAR(10) NOT NULL,
    CONSTRAINT [PK_PeriodoPagoSueldo] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[PermisosEscritorio] (
    [IdRol] TINYINT NOT NULL,
    [IdModulo] TINYINT NOT NULL,
    CONSTRAINT [PK_PermisosEscritorio] PRIMARY KEY CLUSTERED ([IdRol],[IdModulo])
);

-- CreateTable
CREATE TABLE [dbo].[PlanesEstudio] (
    [Id] SMALLINT NOT NULL IDENTITY(1,1),
    [IdCarrera] TINYINT NOT NULL,
    [ClaveOficial] NVARCHAR(20) NOT NULL,
    [ClaveSimple] NVARCHAR(50),
    [IdSituacion] TINYINT NOT NULL,
    [IdPeriodicidad] TINYINT NOT NULL,
    [IdSistemaAcreditacion] TINYINT NOT NULL,
    [CreditosTotales] SMALLINT NOT NULL,
    [CreditosPlanReticular] SMALLINT NOT NULL,
    [CreditosEspecialidad] SMALLINT NOT NULL,
    [NumeroMaterias] TINYINT NOT NULL,
    [NumeroPeriodosDuracion] TINYINT NOT NULL,
    [NumeroPeriodosMaximos] TINYINT NOT NULL,
    [FechaInicio] DATE NOT NULL,
    [FechaTerminacion] DATE NOT NULL,
    [CreditosMaximos1Reprobada] TINYINT NOT NULL,
    [CreditosMaximos2OMasReprobadas] TINYINT NOT NULL,
    [CalificacionMinimaParcial] FLOAT(53) NOT NULL,
    [CalificacionMinimaFinal] FLOAT(53) NOT NULL,
    [CreditosCargaMinima] TINYINT NOT NULL,
    [CreditosCargaMaxima] TINYINT NOT NULL,
    CONSTRAINT [PK_PlanesEstudio] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[ProgramasBecas] (
    [Id] TINYINT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(50) NOT NULL,
    CONSTRAINT [PK__Programa__3214EC0767E5106A] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[ProyectosResidencias] (
    [Id] INT NOT NULL,
    [Nombre] NVARCHAR(100),
    [Descripcion] NVARCHAR(100),
    [NumeroResidentes] TINYINT,
    [FechaInicio] DATE,
    [FechaTerminacion] DATE,
    [Horario] NVARCHAR(40),
    [IdPeriodo] SMALLINT,
    [IdAsesorExterno] INT,
    [IdAsesorInterno1] INT,
    [IdAsesorInterno2] INT,
    CONSTRAINT [PK_Proyectos] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[RepresentantesEmpresa] (
    [Id] INT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(60) NOT NULL,
    [Grado] NVARCHAR(10) NOT NULL,
    [Puesto] NVARCHAR(40) NOT NULL,
    [IdEmpresa] INT NOT NULL,
    [Email] NVARCHAR(80),
    CONSTRAINT [PK_AgentesEmpresas] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[ResidenciasProfesionales] (
    [Id] INT NOT NULL,
    [IdCarga] BIGINT NOT NULL,
    [IdProyecto] INT NOT NULL,
    CONSTRAINT [PK_Residencias] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[RolesEscritorio] (
    [Id] TINYINT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(25) NOT NULL,
    CONSTRAINT [PK_RolesEscritorio] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[ServiciosMedicos] (
    [Id] TINYINT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(80) NOT NULL,
    CONSTRAINT [PK__Servicio__3214EC07A528C1E1] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[SistemasAcreditacion] (
    [Id] TINYINT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(50) NOT NULL,
    CONSTRAINT [PK_SistemasAcreditacion] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[Situacion] (
    [Id] TINYINT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(50) NOT NULL,
    CONSTRAINT [PK_Situacion] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[SituacionAlumno] (
    [Id] TINYINT NOT NULL,
    [Nombre] NVARCHAR(50) NOT NULL,
    CONSTRAINT [PK_SituacionAlumno] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[sysdiagrams] (
    [name] NVARCHAR(128) NOT NULL,
    [principal_id] INT NOT NULL,
    [diagram_id] INT NOT NULL IDENTITY(1,1),
    [version] INT,
    [definition] VARBINARY(max),
    CONSTRAINT [PK__sysdiagr__C2B05B6132213FD8] PRIMARY KEY CLUSTERED ([diagram_id]),
    CONSTRAINT [UK_principal_name] UNIQUE NONCLUSTERED ([principal_id],[name])
);

-- CreateTable
CREATE TABLE [dbo].[TipoPersona] (
    [IdTipo] INT NOT NULL IDENTITY(1,1),
    [Descripcion] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK__TipoPers__9E3A29A5AFDCF682] PRIMARY KEY CLUSTERED ([IdTipo])
);

-- CreateTable
CREATE TABLE [dbo].[TiposIngresoAlumno] (
    [Id] TINYINT NOT NULL,
    [Nombre] NVARCHAR(25) NOT NULL,
    CONSTRAINT [PK_TipoIngresoAlumno] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[tipoTransport] (
    [IdTpTransp] INT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(50) NOT NULL,
    CONSTRAINT [PK__tipoTran__F6DB01FBCEE92F55] PRIMARY KEY CLUSTERED ([IdTpTransp])
);

-- CreateTable
CREATE TABLE [dbo].[TipoVivienda] (
    [Id] TINYINT NOT NULL,
    [Nombre] NVARCHAR(15) NOT NULL,
    CONSTRAINT [PK_TipoVivienda] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[UsuariosEscritorio] (
    [Id] INT NOT NULL IDENTITY(1,1),
    [Alias] VARCHAR(30) NOT NULL,
    [IdEmpleado] INT NOT NULL,
    [IdRol] TINYINT NOT NULL,
    [ClaveAcceso] BINARY(20) NOT NULL,
    [Estatus] SMALLINT NOT NULL,
    CONSTRAINT [PK__Usuarios__3214EC0752E947EB] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[Vehiculo] (
    [IdVehiculo] INT NOT NULL IDENTITY(1,1),
    [Marca] NVARCHAR(50) NOT NULL,
    [Modelo] NVARCHAR(50) NOT NULL,
    [Color] NVARCHAR(50) NOT NULL,
    [Placas] NVARCHAR(50) NOT NULL,
    [Anio] INT NOT NULL,
    [idTipo] INT NOT NULL,
    [IdDoce] INT,
    [idVisitante] INT,
    [NumControl] INT,
    CONSTRAINT [PK__Vehiculo__7086121537D67246] PRIMARY KEY CLUSTERED ([IdVehiculo])
);

-- CreateTable
CREATE TABLE [dbo].[Visitante] (
    [idVisitante] INT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(50) NOT NULL,
    [Ape_Mat] NVARCHAR(25) NOT NULL,
    [Ape_Pa] NVARCHAR(25) NOT NULL,
    [IdAsunto] INT NOT NULL,
    [Genero] CHAR(1) NOT NULL,
    [FechaNacimiento] DATE,
    [Direccion] NVARCHAR(100),
    [Email] NVARCHAR(50),
    [Telefono] NVARCHAR(20),
    CONSTRAINT [PK__Visitant__94665FDF97097EF1] PRIMARY KEY CLUSTERED ([idVisitante])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IX_PermisosEscritorio] ON [dbo].[PermisosEscritorio]([IdRol]);

-- AddForeignKey
ALTER TABLE [dbo].[ActividadesApoyoDocentes] ADD CONSTRAINT [FK_ActividadesApoyoDocentes_Docente] FOREIGN KEY ([IdDocente]) REFERENCES [dbo].[Docente]([IdDoce]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ActividadesApoyoDocentes] ADD CONSTRAINT [FK_ActividadesApoyoDocentes_OtrasActividadesDocentes] FOREIGN KEY ([IdActividad]) REFERENCES [dbo].[OtrasActividadesDocentes]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Alumno] ADD CONSTRAINT [FK_Alumno_Bachilleratos] FOREIGN KEY ([IdBachillerato]) REFERENCES [dbo].[Bachilleratos]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Alumno] ADD CONSTRAINT [FK_Alumno_Carrera] FOREIGN KEY ([IdCarre]) REFERENCES [dbo].[Carrera]([IdCarre]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Alumno] ADD CONSTRAINT [FK_Alumno_EspecialidadesBachilleratos] FOREIGN KEY ([IdEspecialidadBachillerato]) REFERENCES [dbo].[EspecialidadesBachilleratos]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Alumno] ADD CONSTRAINT [FK_Alumno_ModalidadesEstudio] FOREIGN KEY ([IdModalidadEstudio]) REFERENCES [dbo].[ModalidadesEstudio]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Alumno] ADD CONSTRAINT [FK_Alumno_PlanesEstudio] FOREIGN KEY ([IdPlanEstudio]) REFERENCES [dbo].[PlanesEstudio]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Alumno] ADD CONSTRAINT [FK_Alumno_TiposIngresoAlumno] FOREIGN KEY ([IdTipoIngreso]) REFERENCES [dbo].[TiposIngresoAlumno]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AsesorExterno] ADD CONSTRAINT [FK_AsesorExterno_Empresas] FOREIGN KEY ([IdEmpresa]) REFERENCES [dbo].[Empresas]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Asunto] ADD CONSTRAINT [FK_Asunto_Evento] FOREIGN KEY ([IdEvento]) REFERENCES [dbo].[Evento]([IdEvento]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AulasExamenAdmision] ADD CONSTRAINT [FK__AulasExam__IdCar__27CF9CBD] FOREIGN KEY ([IdCarrera]) REFERENCES [dbo].[Carrera]([IdCarre]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AutosAlumnos] ADD CONSTRAINT [FK_AutosAlumnos_Alumno] FOREIGN KEY ([NumControl]) REFERENCES [dbo].[Alumno]([NumControl]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AutosAlumnos] ADD CONSTRAINT [FK_AutosAlumnos_Vehiculo] FOREIGN KEY ([IdVehiculo]) REFERENCES [dbo].[Vehiculo]([IdVehiculo]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AutosDoce] ADD CONSTRAINT [FK_AutosDoce_Docente] FOREIGN KEY ([IdDoce]) REFERENCES [dbo].[Docente]([IdDoce]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AutosDoce] ADD CONSTRAINT [FK_AutosDoce_Vehiculo] FOREIGN KEY ([IdVehiculo]) REFERENCES [dbo].[Vehiculo]([IdVehiculo]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AutosVisitante] ADD CONSTRAINT [FK_AutosVisitante_Vehiculo] FOREIGN KEY ([IdVehiculo]) REFERENCES [dbo].[Vehiculo]([IdVehiculo]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AutosVisitante] ADD CONSTRAINT [FK_AutosVisitante_Visitante] FOREIGN KEY ([idVisitante]) REFERENCES [dbo].[Visitante]([idVisitante]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Bachilleratos] ADD CONSTRAINT [FK__Bachiller__IdLoc__477D5240] FOREIGN KEY ([IdLocalidad]) REFERENCES [dbo].[Localidades]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CalificacionPorCriterio] ADD CONSTRAINT [FK__Calificac__IdCri__7A8729A3] FOREIGN KEY ([IdCriterioPorUnidad]) REFERENCES [dbo].[CriterioPorUnidad]([IdCriterioPorUnidad]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CalificacionPorCriterio] ADD CONSTRAINT [FK__Calificac__IdDet__7B7B4DDC] FOREIGN KEY ([IdDetalleCarga]) REFERENCES [dbo].[DetalleCarga]([IdDetalleCarga]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CargaAlumno] ADD CONSTRAINT [FK__CargaAlum__IdGru__3B75D760] FOREIGN KEY ([IdGrupo]) REFERENCES [dbo].[Grupo]([IdGrupo]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CargaAlumno] ADD CONSTRAINT [FK__CargaAlum__NumCo__3C69FB99] FOREIGN KEY ([NumControl]) REFERENCES [dbo].[Alumno]([NumControl]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[CargaAlumno] ADD CONSTRAINT [FK_CargaAlumno_OpcionesAcreditacionAsignaturas] FOREIGN KEY ([OpcionInicial]) REFERENCES [dbo].[OpcionesAcreditacionAsignaturas]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CargaAlumno] ADD CONSTRAINT [FK_CargaAlumno_OpcionesAcreditacionAsignaturas1] FOREIGN KEY ([OpcionFinal]) REFERENCES [dbo].[OpcionesAcreditacionAsignaturas]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Carrera] ADD CONSTRAINT [FK__Carrera__IdDepa__145C0A3F] FOREIGN KEY ([IdDepa]) REFERENCES [dbo].[Departamento]([IdDepa]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Carrera] ADD CONSTRAINT [FK_Carrera_Empleado] FOREIGN KEY ([IdJefe]) REFERENCES [dbo].[Empleado]([NoNomina]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Carrera] ADD CONSTRAINT [FK_Carrera_NivelesEstudio] FOREIGN KEY ([IdNivelEstudio]) REFERENCES [dbo].[NivelesEstudio]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Certificados] ADD CONSTRAINT [FK_Certificados_Alumno] FOREIGN KEY ([NumControl]) REFERENCES [dbo].[Alumno]([NumControl]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ControlAsis] ADD CONSTRAINT [FK_ControlAsis_Alumno] FOREIGN KEY ([NumControl]) REFERENCES [dbo].[Alumno]([NumControl]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ControlAsis] ADD CONSTRAINT [FK_ControlAsis_Docente] FOREIGN KEY ([IdDoce]) REFERENCES [dbo].[Docente]([IdDoce]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ControlAsis] ADD CONSTRAINT [FK_ControlAsis_Espacio] FOREIGN KEY ([IdEspacio]) REFERENCES [dbo].[EspaciosDeClase]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ControlAsis] ADD CONSTRAINT [FK_ControlAsis_TipoPersona] FOREIGN KEY ([idTipo]) REFERENCES [dbo].[TipoPersona]([IdTipo]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ControlAsis] ADD CONSTRAINT [FK_ControlAsis_tipoTransport] FOREIGN KEY ([IdTpTransport]) REFERENCES [dbo].[tipoTransport]([IdTpTransp]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ControlAsis] ADD CONSTRAINT [FK_ControlAsis_Vehiculo] FOREIGN KEY ([idVehiculo]) REFERENCES [dbo].[Vehiculo]([IdVehiculo]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ControlAsis] ADD CONSTRAINT [FK_ControlAsis_Visitante] FOREIGN KEY ([idVisitante]) REFERENCES [dbo].[Visitante]([idVisitante]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CriterioPorUnidad] ADD CONSTRAINT [FK__CriterioP__IdCri__3C89F72A] FOREIGN KEY ([IdCriterio]) REFERENCES [dbo].[CriterioEvaluacion]([IdCriterio]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CuentasAspirantes] ADD CONSTRAINT [FK_CuentasAspirantes_PeriodoEscolar] FOREIGN KEY ([IdPeriodoRegistro]) REFERENCES [dbo].[PeriodoEscolar]([IdPerio]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosAcademicosAspirantes] ADD CONSTRAINT [FK__DatosAcad__IdBac__09160B73] FOREIGN KEY ([IdBachilleratoOrigen]) REFERENCES [dbo].[Bachilleratos]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosAcademicosAspirantes] ADD CONSTRAINT [FK__DatosAcad__IdBec__0AFE53E5] FOREIGN KEY ([IdBeca]) REFERENCES [dbo].[ProgramasBecas]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosAcademicosAspirantes] ADD CONSTRAINT [FK__DatosAcad__IdCar__0BF2781E] FOREIGN KEY ([IdCarreraOp1]) REFERENCES [dbo].[Carrera]([IdCarre]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosAcademicosAspirantes] ADD CONSTRAINT [FK__DatosAcad__IdCar__0CE69C57] FOREIGN KEY ([IdCarreraOp2]) REFERENCES [dbo].[Carrera]([IdCarre]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosAcademicosAspirantes] ADD CONSTRAINT [FK__DatosAcad__IdCue__0821E73A] FOREIGN KEY ([IdCuentaAspirante]) REFERENCES [dbo].[CuentasAspirantes]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosAcademicosAspirantes] ADD CONSTRAINT [FK__DatosAcad__IdEsp__0A0A2FAC] FOREIGN KEY ([IdEspecialidadBachillerato]) REFERENCES [dbo].[EspecialidadesBachilleratos]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosAcademicosAspirantes] ADD CONSTRAINT [FK__DatosAcad__IdMod__0DDAC090] FOREIGN KEY ([IdModalidad]) REFERENCES [dbo].[ModalidadesEstudio]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosFamiliaresAspirantes] ADD CONSTRAINT [FK__DatosFami__IdCue__2B6B2377] FOREIGN KEY ([IdCuentaAspirante]) REFERENCES [dbo].[CuentasAspirantes]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosFamiliaresAspirantes] ADD CONSTRAINT [FK__DatosFami__IdLoc__302FD894] FOREIGN KEY ([IdLocalidadTutor]) REFERENCES [dbo].[Localidades]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAlumnos] ADD CONSTRAINT [FK_DatosPersonalesAlumnos_Alumno] FOREIGN KEY ([NumControl]) REFERENCES [dbo].[Alumno]([NumControl]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAlumnos] ADD CONSTRAINT [FK_DatosPersonalesAlumnos_Discapacidades] FOREIGN KEY ([IdTipoDiscapacidad]) REFERENCES [dbo].[Discapacidades]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAlumnos] ADD CONSTRAINT [FK_DatosPersonalesAlumnos_Escolaridad] FOREIGN KEY ([IdEscolaridadMadre]) REFERENCES [dbo].[Escolaridad]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAlumnos] ADD CONSTRAINT [FK_DatosPersonalesAlumnos_Escolaridad1] FOREIGN KEY ([IdEscolaridadPadre]) REFERENCES [dbo].[Escolaridad]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAlumnos] ADD CONSTRAINT [FK_DatosPersonalesAlumnos_EspacioViviendaEstudios] FOREIGN KEY ([IdEspacioViviendaEstudios]) REFERENCES [dbo].[EspacioViviendaEstudios]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAlumnos] ADD CONSTRAINT [FK_DatosPersonalesAlumnos_EstadoCivil] FOREIGN KEY ([IdEstadoCivil]) REFERENCES [dbo].[EstadoCivil]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAlumnos] ADD CONSTRAINT [FK_DatosPersonalesAlumnos_EstadosRepublica] FOREIGN KEY ([IdEstadoNacimiento]) REFERENCES [dbo].[EstadosRepublica]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAlumnos] ADD CONSTRAINT [FK_DatosPersonalesAlumnos_LenguasIndigenas] FOREIGN KEY ([IdLenguaIndigena]) REFERENCES [dbo].[LenguasIndigenas]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAlumnos] ADD CONSTRAINT [FK_DatosPersonalesAlumnos_Localidades] FOREIGN KEY ([IdLocalidad]) REFERENCES [dbo].[Localidades]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAlumnos] ADD CONSTRAINT [FK_DatosPersonalesAlumnos_Localidades1] FOREIGN KEY ([IdLocalidadTutor]) REFERENCES [dbo].[Localidades]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAlumnos] ADD CONSTRAINT [FK_DatosPersonalesAlumnos_Localidades2] FOREIGN KEY ([IdLocalidadPadre]) REFERENCES [dbo].[Localidades]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAlumnos] ADD CONSTRAINT [FK_DatosPersonalesAlumnos_Localidades3] FOREIGN KEY ([IdLocalidadMadre]) REFERENCES [dbo].[Localidades]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAlumnos] ADD CONSTRAINT [FK_DatosPersonalesAlumnos_OrigenVivienda] FOREIGN KEY ([IdOrigenVivienda]) REFERENCES [dbo].[OrigenVivienda]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAlumnos] ADD CONSTRAINT [FK_DatosPersonalesAlumnos_PeriodoPagoSueldo] FOREIGN KEY ([IdPeriodoPagoSueldoPadre]) REFERENCES [dbo].[PeriodoPagoSueldo]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAlumnos] ADD CONSTRAINT [FK_DatosPersonalesAlumnos_PeriodoPagoSueldo1] FOREIGN KEY ([IdPeriodoPagoSueldoMadre]) REFERENCES [dbo].[PeriodoPagoSueldo]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAlumnos] ADD CONSTRAINT [FK_DatosPersonalesAlumnos_PeriodoPagoSueldo2] FOREIGN KEY ([IdPeriodoPagoSueldoAlumno]) REFERENCES [dbo].[PeriodoPagoSueldo]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAlumnos] ADD CONSTRAINT [FK_DatosPersonalesAlumnos_ServiciosMedicos] FOREIGN KEY ([IdServicioMedico]) REFERENCES [dbo].[ServiciosMedicos]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAlumnos] ADD CONSTRAINT [FK_DatosPersonalesAlumnos_TipoVivienda] FOREIGN KEY ([IdTipoVivienda]) REFERENCES [dbo].[TipoVivienda]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAspirantes] ADD CONSTRAINT [FK__DatosPers__IdCue__18584F03] FOREIGN KEY ([IdCuentaAspirante]) REFERENCES [dbo].[CuentasAspirantes]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAspirantes] ADD CONSTRAINT [FK__DatosPers__IdEst__1D1D0420] FOREIGN KEY ([IdEstadoCivil]) REFERENCES [dbo].[EstadoCivil]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAspirantes] ADD CONSTRAINT [FK__DatosPers__IdLen__1F054C92] FOREIGN KEY ([IdLenguaIndigena]) REFERENCES [dbo].[LenguasIndigenas]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAspirantes] ADD CONSTRAINT [FK__DatosPers__IdLoc__1C28DFE7] FOREIGN KEY ([IdLocalidad]) REFERENCES [dbo].[Localidades]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAspirantes] ADD CONSTRAINT [FK__DatosPers__IdMun__1A409775] FOREIGN KEY ([IdMunicipioNacimiento]) REFERENCES [dbo].[Municipios]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAspirantes] ADD CONSTRAINT [FK__DatosPers__IdSer__1E112859] FOREIGN KEY ([IdServicioMedico]) REFERENCES [dbo].[ServiciosMedicos]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DatosPersonalesAspirantes] ADD CONSTRAINT [FK__DatosPers__IdTip__1FF970CB] FOREIGN KEY ([IdTipoDiscapacidad]) REFERENCES [dbo].[Discapacidades]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DetalleCarga] ADD CONSTRAINT [FK__DetalleCa__IdCar__412EB0B6] FOREIGN KEY ([IdCarga]) REFERENCES [dbo].[CargaAlumno]([IdCarga]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Docente] ADD CONSTRAINT [FK__Docente__IdDepa__1DE57479] FOREIGN KEY ([IdDepa]) REFERENCES [dbo].[Departamento]([IdDepa]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Docente] ADD CONSTRAINT [FK_Docente_Docente] FOREIGN KEY ([IdDoce]) REFERENCES [dbo].[Docente]([IdDoce]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Empleado] ADD CONSTRAINT [FK_Empleado_Departamento] FOREIGN KEY ([IdDepartamento]) REFERENCES [dbo].[Departamento]([IdDepa]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Empleado] ADD CONSTRAINT [FK_Empleado_EstadoCivil] FOREIGN KEY ([IdEstadoCivil]) REFERENCES [dbo].[EstadoCivil]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Empleado] ADD CONSTRAINT [FK_Empleado_Localidades] FOREIGN KEY ([IdLocalidad]) REFERENCES [dbo].[Localidades]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Empresas] ADD CONSTRAINT [FK_Empresas_Localidades] FOREIGN KEY ([IdLocalidad]) REFERENCES [dbo].[Localidades]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[EquivalenciaDeMaterias] ADD CONSTRAINT [FK_CursosEquivalentes_CursosEquivalentes] FOREIGN KEY ([IdCarga]) REFERENCES [dbo].[CargaAlumno]([IdCarga]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[EquivalenciaDeMaterias] ADD CONSTRAINT [FK_GruposEquivalentes_Materia] FOREIGN KEY ([IdMateria]) REFERENCES [dbo].[Materia]([IdMate]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[EspaciosDeClase] ADD CONSTRAINT [FK_EspaciosDeClase_Situacion] FOREIGN KEY ([IdSituacion]) REFERENCES [dbo].[Situacion]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[FichasAspirantes] ADD CONSTRAINT [FK__FichasAsp__IdAul__5C0E5AD2] FOREIGN KEY ([IdAula]) REFERENCES [dbo].[AulasExamenAdmision]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[FichasAspirantes] ADD CONSTRAINT [FK__FichasAsp__IdCue__5A261260] FOREIGN KEY ([IdCuentaAspirante]) REFERENCES [dbo].[CuentasAspirantes]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[FichasAspirantes] ADD CONSTRAINT [FK__UsuariosEscritorio_FichasAsp] FOREIGN KEY ([IdCotejo]) REFERENCES [dbo].[UsuariosEscritorio]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[FotosEmpleados] ADD CONSTRAINT [FK_FotosEmpleados_Empleado] FOREIGN KEY ([NoNomina]) REFERENCES [dbo].[Empleado]([NoNomina]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Grupo] ADD CONSTRAINT [FK__Grupo__IdDoce__34C8D9D1] FOREIGN KEY ([IdDoce]) REFERENCES [dbo].[Docente]([IdDoce]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Grupo] ADD CONSTRAINT [FK__Grupo__IdMate__33D4B598] FOREIGN KEY ([IdMate]) REFERENCES [dbo].[Materia]([IdMate]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Grupo] ADD CONSTRAINT [FK__Grupo__IdPerio__35BCFE0A] FOREIGN KEY ([IdPerio]) REFERENCES [dbo].[PeriodoEscolar]([IdPerio]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Grupo] ADD CONSTRAINT [FK_Grupo_Carrera] FOREIGN KEY ([IdCarre]) REFERENCES [dbo].[Carrera]([IdCarre]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[HorasApoyoDocentes] ADD CONSTRAINT [FK_HorasApoyoDocentes_Docente] FOREIGN KEY ([IdDocente]) REFERENCES [dbo].[Docente]([IdDoce]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[HorasApoyoDocentes] ADD CONSTRAINT [FK_HorasApoyoDocentes_OtrasActividadesDocentes] FOREIGN KEY ([IdOtraActividadDocente]) REFERENCES [dbo].[OtrasActividadesDocentes]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[HorasApoyoDocentes] ADD CONSTRAINT [FK_HorasApoyoDocentes_PeriodoEscolar] FOREIGN KEY ([IdPeriodo]) REFERENCES [dbo].[PeriodoEscolar]([IdPerio]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[HorasDocente] ADD CONSTRAINT [FK__HorasDoce__IdDoc__20C1E124] FOREIGN KEY ([IdDoce]) REFERENCES [dbo].[Docente]([IdDoce]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[HorasDocente] ADD CONSTRAINT [FK__HorasDoce__IdPer__21B6055D] FOREIGN KEY ([IdPerio]) REFERENCES [dbo].[PeriodoEscolar]([IdPerio]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Kardex] ADD CONSTRAINT [FK_Kardex_Materia] FOREIGN KEY ([IdMateria]) REFERENCES [dbo].[Materia]([IdMate]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Localidades] ADD CONSTRAINT [FK_Localidad_Municipio] FOREIGN KEY ([Municipio_Id]) REFERENCES [dbo].[Municipios]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Materia] ADD CONSTRAINT [FK_Materia_Departamento] FOREIGN KEY ([IdDepa]) REFERENCES [dbo].[Departamento]([IdDepa]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[MateriasPlan] ADD CONSTRAINT [FK_MateriasPlan_Materia] FOREIGN KEY ([IdMateria]) REFERENCES [dbo].[Materia]([IdMate]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[MateriasPlan] ADD CONSTRAINT [FK_MateriasPlan_ModulosEspecialidad] FOREIGN KEY ([IdModuloEspecialidad]) REFERENCES [dbo].[ModulosEspecialidad]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[MateriasPlan] ADD CONSTRAINT [FK_MateriasPlan_PlanesEstudio] FOREIGN KEY ([IdPlan]) REFERENCES [dbo].[PlanesEstudio]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ModalidadesEstudioCarreras] ADD CONSTRAINT [FK_ModalidadesEstudioCarreras_Carrera] FOREIGN KEY ([IdCarrera]) REFERENCES [dbo].[Carrera]([IdCarre]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ModalidadesEstudioCarreras] ADD CONSTRAINT [FK_ModalidadesEstudioCarreras_ModalidadesEstudio] FOREIGN KEY ([IdModalidadEstudio]) REFERENCES [dbo].[ModalidadesEstudio]([Id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ModulosEspecialidad] ADD CONSTRAINT [FK_ModulosEspecialidad_PlanesEstudio] FOREIGN KEY ([IdPlanEstudios]) REFERENCES [dbo].[PlanesEstudio]([Id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ModulosEspecialidad] ADD CONSTRAINT [FK_ModulosEspecialidad_Situacion] FOREIGN KEY ([IdSituacion]) REFERENCES [dbo].[Situacion]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Municipios] ADD CONSTRAINT [FK_Municipio_EstadoRepublica] FOREIGN KEY ([Estado_Id]) REFERENCES [dbo].[EstadosRepublica]([Id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PagosInscripciones] ADD CONSTRAINT [FK_PagosInscripciones_Alumno] FOREIGN KEY ([NumControl]) REFERENCES [dbo].[Alumno]([NumControl]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[PagosInscripciones] ADD CONSTRAINT [FK_PagosInscripciones_Empleado] FOREIGN KEY ([NoNominaCoteja]) REFERENCES [dbo].[Empleado]([NoNomina]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[PagosInscripciones] ADD CONSTRAINT [FK_PagosInscripciones_PeriodoEscolar] FOREIGN KEY ([IdPeriodo]) REFERENCES [dbo].[PeriodoEscolar]([IdPerio]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[PermisosEscritorio] ADD CONSTRAINT [FK_PermisosEscritorio_ModulosEscritorio] FOREIGN KEY ([IdModulo]) REFERENCES [dbo].[ModulosEscritorio]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[PermisosEscritorio] ADD CONSTRAINT [FK_PermisosEscritorio_RolesEscritorio] FOREIGN KEY ([IdRol]) REFERENCES [dbo].[RolesEscritorio]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[PlanesEstudio] ADD CONSTRAINT [FK_PlanesEstudio_Carrera] FOREIGN KEY ([IdCarrera]) REFERENCES [dbo].[Carrera]([IdCarre]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[PlanesEstudio] ADD CONSTRAINT [FK_PlanesEstudio_PeriodicidadPlanEstudios] FOREIGN KEY ([IdPeriodicidad]) REFERENCES [dbo].[PeriodicidadPlanEstudios]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[PlanesEstudio] ADD CONSTRAINT [FK_PlanesEstudio_SistemasAcreditacion] FOREIGN KEY ([IdSistemaAcreditacion]) REFERENCES [dbo].[SistemasAcreditacion]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[PlanesEstudio] ADD CONSTRAINT [FK_PlanesEstudio_Situacion] FOREIGN KEY ([IdSituacion]) REFERENCES [dbo].[Situacion]([Id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ProyectosResidencias] ADD CONSTRAINT [FK_Proyectos_AsesorExterno] FOREIGN KEY ([IdAsesorExterno]) REFERENCES [dbo].[AsesorExterno]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ProyectosResidencias] ADD CONSTRAINT [FK_Proyectos_Docente] FOREIGN KEY ([IdAsesorInterno1]) REFERENCES [dbo].[Docente]([IdDoce]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ProyectosResidencias] ADD CONSTRAINT [FK_Proyectos_Docente1] FOREIGN KEY ([IdAsesorInterno2]) REFERENCES [dbo].[Docente]([IdDoce]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[RepresentantesEmpresa] ADD CONSTRAINT [FK_AgentesEmpresas_Empresas] FOREIGN KEY ([IdEmpresa]) REFERENCES [dbo].[Empresas]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ResidenciasProfesionales] ADD CONSTRAINT [FK_Residencias_CargaAlumno] FOREIGN KEY ([IdCarga]) REFERENCES [dbo].[CargaAlumno]([IdCarga]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ResidenciasProfesionales] ADD CONSTRAINT [FK_Residencias_Proyectos] FOREIGN KEY ([IdProyecto]) REFERENCES [dbo].[ProyectosResidencias]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[UsuariosEscritorio] ADD CONSTRAINT [FK_RolesEscritorio_UsuariosEscritorio] FOREIGN KEY ([IdRol]) REFERENCES [dbo].[RolesEscritorio]([Id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[UsuariosEscritorio] ADD CONSTRAINT [FK_UsuariosEscritorio_Empleado] FOREIGN KEY ([IdEmpleado]) REFERENCES [dbo].[Empleado]([NoNomina]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehiculo] ADD CONSTRAINT [FK_Vehiculo_AutoAlumnos] FOREIGN KEY ([NumControl]) REFERENCES [dbo].[Alumno]([NumControl]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehiculo] ADD CONSTRAINT [FK_Vehiculo_Docente] FOREIGN KEY ([IdDoce]) REFERENCES [dbo].[Docente]([IdDoce]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehiculo] ADD CONSTRAINT [FK_Vehiculo_TipoPersona] FOREIGN KEY ([idTipo]) REFERENCES [dbo].[TipoPersona]([IdTipo]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Vehiculo] ADD CONSTRAINT [FK_Vehiculo_Visitante] FOREIGN KEY ([idVisitante]) REFERENCES [dbo].[Visitante]([idVisitante]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Visitante] ADD CONSTRAINT [FK_Visitante_Asunto] FOREIGN KEY ([IdAsunto]) REFERENCES [dbo].[Asunto]([IdAsunto]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

