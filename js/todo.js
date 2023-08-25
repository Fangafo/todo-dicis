const formulario = document.getElementById('formulario')
const listaTareas = document.getElementById('lista-tareas')
const template = document.getElementById('template').content // content es para obtener el contenido
const fragment = document.createDocumentFragment()

// Variable global para las tareas como objeto
let tareas = {}

// Agregamos eventos
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('tareas')){
        tareas.JSON.parse(localStorage.getItem('tareas')) 
    }
    pintarTareas()
})

const pintarTareas = () => {
    localStorage.setItem('tareas', JSON.stringify(tareas)) //set item guarda variables en la storage
    if (Object.values(tareas).length === 0){ //mapea dentro del objeto
        listaTareas.innerHTML = `
        <div class="alert alert-dark">
                No task pending
            </div>
        ` //pega codigo html en una variable
        return 
    } 
    listaTareas.innerHTML = '' // innerhtml borra todo lo previo 

    Object.values(tareas).forEach((tarea) => {
        const clone = template.cloneNode(true)
        clone.querySelector('p').textContent = terea.texto 
        if(terea.estado) {
            clone.querySelectorAll('.fas')[0].classlist.replace('fa-cirle-check', 'fa-undo-alt')
            clone.querySelector('.alert').classlist.replace('alert-warning', 'alert-primary')
            clone.querySelector('p').style.textDecoration = 'line-through'
        }
        clone.querySelectorAll('.fas')[0].dataset.id = tarea.id
        clone.querySelectorAll('.fas')[1].dataset.id = tarea.id
        fragment.appendChild(clone)
    })
    listaTareas.appendChild(fragment)
}