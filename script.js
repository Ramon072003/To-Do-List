function addTask(){

    let task = document.createElement("div")
    let buttonRemove = document.createElement("button")
    let buttonEdit = document.createElement("button")
    let textButtoEdit = document.createTextNode("Editar")
    let textButtonRemove = document.createTextNode("x")

    buttonEdit.appendChild(textButtoEdit)
    buttonRemove.appendChild(textButtonRemove)

    let sectionList = document.querySelector(".section-list")
    let mainSection = document.createElement("div")

    mainSection.className = "task-area"
    task.className = "task-section"
    buttonEdit.className = "edit-task"
    buttonRemove.className = "remove-task"
    sectionList.appendChild(mainSection)
    mainSection.appendChild(task)
    mainSection.appendChild(buttonEdit)
    mainSection.appendChild(buttonRemove)
    
    let input = document.querySelector(".insert-task").value
    let text = document.createTextNode(input)
    let paragrafo = document.createElement("p")
    paragrafo.className = "task-text"
    paragrafo.appendChild(text)
    task.appendChild(paragrafo)

    buttonRemove.addEventListener("click", () =>{
        removeTask(sectionList, mainSection)
    })

    buttonEdit.addEventListener("click", ()=>{
        taskEdit(paragrafo,mainSection)
    })
}


function removeTask(elementDad, elementChild){

    elementDad.removeChild(elementChild)
    
}

function taskEdit(task,section){
    let buttonConfirmEdit = document.createElement("button")
    let textButtonConfirm = document.createTextNode("Confirmar")
    buttonConfirmEdit.appendChild(textButtonConfirm)
    buttonConfirmEdit.className = "confirm-edit"
    section.appendChild(buttonConfirmEdit)
    task.contentEditable = true

    buttonConfirmEdit.addEventListener("click", () =>{
        confirmEdit(task,section,buttonConfirmEdit)
    })

}

function confirmEdit(task,section,button){
    task.contentEditable = false
    section.removeChild(button)
}


let botao = document.querySelector(".addElement")
botao.addEventListener("click",addTask)
