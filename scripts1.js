function AlumnosController($scope){
		$scope.alumnos=[
			{nombre:"Juan Blanco", telefono: "2337373274", curso: "Segundo de ESO"},
			{nombre:"Rosa Luxemburgo", telefono: "234555342234", curso: "Primero de ESO"},
			{nombre:"Alberto Herrera", telefono: "23444522", curso: "Segundo de ESO"},
			{nombre:"Ana Murillo", telefono: "234455223", curso: "Tercero de ESO"}
		];

		$scope.Save=function(){
			$scope.alumnos.push({nombre:$scope.nuevoAlumno.nombre, telefono:$scope.nuevoAlumno.telefono, curso:$scope.nuevoAlumno.curso});
			$scope.formVisibility=false;
			console.log($scope.formVisibility)
		}

		$scope.formVisibility=false;

		$scope.ShowForm=function(){
			$scope.formVisibility=true;
			console.log($scope.formVisibility)
		}
	}
