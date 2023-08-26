const draggables_todo = document.querySelectorAll('.todo')
const draggables_doing = document.querySelectorAll('.doing')
const draggables_done = document.querySelectorAll('.done')
// const todo_container = document.querySelectorAll('.todolist-container')
// const doing_container = document.querySelectorAll('.doing-container')
// const done_container = document.querySelectorAll('.done-container')

const containers = document.querySelectorAll('.item-list')

draggables_todo.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        console.log('drag')
        draggable.classList.add('dragging')
    })
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
})

containers.forEach(container =>{
    container.addEventListener('dragover', ()=>{
        console.log('dragover')
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable)
    })
})