

let sistema_tareas = new sistemaTareas()

while (true) {


    let opcion = prompt("Ingrese una opcion  1. Agregar tarea 2. Enlistar tareas 3. Salir del sistema")

    if (opcion == "1") {
        sistema_tareas.agregar_tarea()

    }
    else if (opcion == "2") {
        sistema_tareas.listar_tareas()


    }
    else if (opcion == "3") {
            alert("Saliendo del sistema")
            break
        }
   


}

