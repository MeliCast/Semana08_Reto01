class Tareas {

    constructor(tarea){
        this.tarea = tarea
        this.agregarLista();
         this.reset();
        //this.estados();

        // this.borrar();
      
    }


 
    agregarLista(){
        let listaTareas = document.getElementById("listaTareas")
        let div = document.createElement("div")
        div.classList.add("row")
        div.innerHTML = `<strong class="col-3 mt-2"><input type="checkbox" class="m-1">${this.tarea}</strong>
                         <button id="select"  onclick="estados()" class="btn btn-ligth         col-2 mb-3 mx-2">Seleccione</button>
                         <button id="urgency" onclick="estados()" class="btn btn-outline-ligth col-2 mb-3 mx-2">Seleccione</button>
                         <button id="tiempo"  onclick="estados()" class="btn btn-outline-ligth col-2 mb-3 mx-2">Seleccione</button>
                         `
                            // <button id="borrar" class="btn btn-info col-3 mb-3 mx-2">BORRAR</button>
        listaTareas.appendChild(div)
    }



    reset(){
        document.getElementById("formulario").reset()
    }






    borrar(){

        document.getElementById("listaTareas").addEventListener("click",(e)=> {
            if(e.target.id === "borrar"){
                e.target.parentElement.remove()
            }
        })
    }





}


function estados(){

    document.getElementById("listaTareas").addEventListener("click",(e) => {

        e.preventDefault();
        e.stopImmediatePropagation();

        if(e.target.id === "select"){
            e.target.classList.replace("btn-ligth","btn-success");
            e.target.innerText = "MENOR";
            e.target.setAttribute("id","prioridad");
          

        }else if(e.target.id === "prioridad"){
            e.target.classList.replace("btn-success","btn-warning");
            e.target.innerText = "MEDIO";
            e.target.setAttribute("id","prioridad1");

        }else if(e.target.id === "prioridad1"){
            e.target.classList.replace("btn-warning","btn-danger");
            e.target.innerText = "MAYOR";
            e.target.setAttribute("id","prioridad2");

        }else if(e.target.id === "prioridad2"){
            e.target.classList.replace("btn-danger","btn-ligth");
            e.target.innerText = "Seleccione";
            e.target.setAttribute("id","select");
        
        
        
        }else if(e.target.id === "urgency"){
            e.target.classList.replace("btn-outline-ligth","btn-outline-success")
            e.target.innerText = "TIENE TIEMPO"
            e.target.setAttribute("id","urgencia")

        }else if(e.target.id === "urgencia"){
            e.target.classList.replace("btn-outline-success","btn-outline-warning")
            e.target.innerText = "MAÑANA"
            e.target.setAttribute("id","urgencia1")

        }else if(e.target.id === "urgencia1"){
            e.target.classList.replace("btn-outline-warning","btn-outline-danger")
            e.target.innerText = "HOY DIA"
            e.target.setAttribute("id","urgencia2")

        }else if(e.target.id === "urgencia2"){
            e.target.classList.replace("btn-outline-danger","btn-outline-ligth")
            e.target.innerText = "Seleccione"
            e.target.setAttribute("id","urgency")
        
        
        
        
        }else if(e.target.id === "tiempo"){
            e.target.classList.replace("btn-outline-ligth","btn-outline-success")
            e.target.innerText = "30 min"
            e.target.setAttribute("id","hora")

        }else if(e.target.id === "hora"){
            e.target.classList.replace("btn-outline-success","btn-outline-warning")
            e.target.innerText = "1h"
            e.target.setAttribute("id","hora1")

        }else if(e.target.id === "hora1"){
            e.target.classList.replace("btn-outline-warning","btn-outline-danger")
            e.target.innerText = "Break!"
            e.target.setAttribute("id","hora2")

        }else if(e.target.id === "hora2"){
            e.target.classList.replace("btn-outline-danger","btn-outline-ligth")
            e.target.innerText = "Seleccione"
            e.target.setAttribute("id","tiempo")
        }

        
    })

}

document.getElementById("formulario").addEventListener("submit",(e) => {
    e.preventDefault()
    const tarea = document.getElementById("input").value
    new Tareas(tarea.toUpperCase()) 
})




const obtenerTareas = async () => {

    try {

        let tareasApi = await fetch('https://616f46d2715a630017b39c0d.mockapi.io/tareas');
        let tareasJson = await tareasApi.json();
        tareasJson.forEach(task => {            
            new Tareas(task.tareas.toUpperCase())
        })
    } 
    catch (err) {
        console.log(err);
    }
}


 obtenerTareas()