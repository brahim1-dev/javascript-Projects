const addBtn = document.querySelector('#add')

const notes = JSON.parse(localStorage.getItem('notes'))
if (notes) {
    for (const node of notes) {
        addNewNote(node)
    }
}

addBtn.addEventListener('click', () => addNewNote(""))

function addNewNote(text = "") {
    const note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `
    const editBtn = note.querySelector('.edit'),
        deleteBtn = note.querySelector('.delete'),
        main = note.querySelector('.main'),
        textArea = note.querySelector('textarea');

    //displaying text from local storage
    textArea.value = text
    main.innerHTML = marked.parse(text)

    //deleting the note
    deleteBtn.addEventListener('click', () => {
        note.remove()
        updateLocalStorage()
    })

    //toggling the edit mode 
    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    //copying text to the .main element
    textArea.addEventListener('input', (event) => {
        const value = event.target.value
        main.innerHTML = marked.parse(value)

        updateLocalStorage()
    })

    document.body.appendChild(note)
}

function updateLocalStorage() {
    const textAreas = document.querySelectorAll('textarea')
    const notes = []

    for (const textArea of textAreas) {
        notes.push(textArea.value)
    }
    localStorage.setItem('notes', JSON.stringify(notes))
}

/* MY EXERCISE AND I TRY IT.

const addBtn = document.querySelector('#add')
// Reading data from the local Storage.
const notes = JSON.parse(localStorage.getItem('notes'))
// console.log(notes)
if(notes){
    for (const node of notes) {
        addNewBtn(node)
    }
}


addBtn.addEventListener('click', ()=> addNewBtn(""))
function addNewBtn(text =""){
    const note = document.createElement
    ('div')
    note.classList.add('note')
    note.innerHTML = `
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
    </div> `

    const editBtn = note.querySelector('.edit')
        deleteBtn = note.querySelector('.delete')
        main = note.querySelector('.main')
        textarea = note.querySelector('textarea') 

        //displaying the text from the local Storage
        textarea.value = text
        main.innerHTML = marked.parse(text)

        deleteBtn.addEventListener('click',()=>{
            note.remove()

            updateLocalStorage()
            
        })

        
        editBtn.addEventListener('click', ()=>{
            main.classList.toggle('hidden')
            textarea.classList.toggle('hidden')
        })

        textarea.addEventListener('input', (event)=>{
            const somValue = event.target.value
            main.innerHTML = marked.parse(somValue)

            updateLocalStorage()
        })
    document.body.appendChild(note)

}
// Explanation 

localStorage.setItem("ibraName", "Ibraahim Abdullaahi Ibraahim")
console.log(localStorage.getItem("ibraName"))

let faculties = ["softwareEngineer", "doctor","cybersecurity","DataCleaning"] 
// localStorage.setItem("faculties", faculties) // ass sting look your application in browser
localStorage.setItem("faculties", JSON.stringify(faculties) ) //it is array in application
console.log(localStorage.getItem("faculties")) //like array but not array , it's like string and look your console
console.log( JSON.parse(localStorage.getItem("faculties"))) // this is array 
//

function updateLocalStorage(){
    const textAreas = document.querySelectorAll('textarea')
    const notes = []

    for (const textarea of textAreas) {
        // console.log(textarea)
        notes.push(textarea.value)
        // console.log(notes)
    }

    localStorage.setItem('notes', JSON.stringify(notes))
}
*/