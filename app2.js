// Iniciamos arreglo para poder almacenar tareas
let tareas = [];

// Función para mostrar opciones
function mostrarMenu() {
    return parseInt(prompt(`
        "Opciones disponibles:"
        1.- Agregar tarea
        2.- Ver todas las tareas
        3.- Marcar mis tareas como completadas
        4.- Salir
    `));
}

// Función para agregar tarea
function agregarTarea() {
    let nombre = prompt("Ingrese el nombre de la tarea");
    if (nombre) {
        let tarea = {
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);
        alert("Tarea agregada con éxito");
    } else {
        alert("El nombre de la tarea no puede estar vacío");
    }
}
//Funcion para ver tareas
function verTareas(){
    if(tareas.length ===0){
        alert("No hay ninguna tarea");
    }else{
        let mensaje = "Lista de tareas:  \n ";
        tareas.forEach((tarea, index)=>{

        });

        
    }
}
// Función principal para poder manejar nuestro programa
function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareasCompletadas();
                break;
            case 4:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("Opción no válida, intenta nuevamente");
        }
    }
    alert("Programa finalizado");
}

// Ejecutar el programa directamente cuando se cargue el script
iniciarPrograma();
