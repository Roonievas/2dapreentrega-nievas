
class sistemaTareas {
    constructor() {
        this.tarea = []
    }

    agregar_tarea() {
        let descripcion = prompt("Ingrese la tarea a realizar")
        while (descripcion == "") {
            descripcion = prompt("Ingrese la tarea a realizar")
        }

        let dia = prompt("Ingrese el día de la semana en el que lo va a realizar")
        while (dia == "") {
            dia = prompt("Por favor ingrese el día de la semana la que lo va a realizar")

        }


        this.tarea.push(new tarea(descripcion, dia))




    }

    listar_tareas() {

        this.tarea.sort((a, b) => {
            if (a == b) {
                return 0;
            }
            if (a < b) {
                return -1;
            }
            return 1;
        });

        let lista = ""
        this.tarea.forEach((tarea) => {
lista += `${tarea.descripcion} - ${tarea.dia}\n`
            
        })

        alert(lista)

    }







}












