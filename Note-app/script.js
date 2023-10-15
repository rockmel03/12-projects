const btnEl = document.getElementById('add_btn');
const appEl = document.getElementById('app');

getNotes().forEach(note => {
    const noteEl = createNoteEl(note.id, note.content)
    appEl.insertBefore(noteEl,btnEl);
});

function createNoteEl (id, content) {
    const element = document.createElement('textarea');
    element.classList.add('note');
    element.placeholder = "Empty Note";
    element.value = content
    element.id = id

    element.addEventListener('dblclick',()=>{
        const warning = confirm('Do you want to delete this note?');
        if(warning){
            deleteNote(id, element)
        }
    })
    element.addEventListener('input', ()=>{
        updateNote(id, element.value)
    })

    return element

}
function updateNote (id, content) {
    const notes = getNotes();
    const target = notes.filter(note => note.id == id)[0];
    target.content = content
    saveNote(notes)
}
function deleteNote(id, element){
    const notes = getNotes().filter((note) => note.id != id);
    saveNote(notes)
    appEl.removeChild(element)
}
function saveNote(notes){
    localStorage.setItem('note-app',JSON.stringify(notes))
}
function getNotes(){
    return JSON.parse(localStorage.getItem('note-app') || '[]')
}
function addNote() {
    const notes = getNotes()
    const noteObj = {
        id : Math.floor(Math.random()*Math.random() *10000),
        content : ""
    }
    const noteEl = createNoteEl(noteObj.id, noteObj.content)
    appEl.insertBefore(noteEl, btnEl)

    notes.push(noteObj);

    saveNote(notes)
};

btnEl.addEventListener('click',addNote)