function addTask(){

    let task = document.createElement("div")
    let buttonRemove = document.createElement("button")
    let textButtonRemove = document.createTextNode("x")
    buttonRemove.appendChild(textButtonRemove)
    let sectionList = document.querySelector(".section-list")
    let mainSection = document.createElement("div")
    mainSection.className = "task-area"
    task.className = "task-section"
    buttonRemove.className = "remove-task"
    sectionList.appendChild(mainSection)
    mainSection.appendChild(task)
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
}


function removeTask(elementDad, elementChild){

    elementDad.removeChild(elementChild)
    
}


let botao = document.querySelector(".addElement")
botao.addEventListener("click",addTask)
