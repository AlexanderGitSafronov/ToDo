const buttonToDo = document.querySelector('.push_button');
const input = document.querySelector('#get__text');
const pushToDo = document.querySelector('.flex_push');
const form = document.querySelector('.form');
let toDo = [
    {
        id:1,
        isText: 'Добавил туду',
        isDone: true,
        isImportant: false,
        isChange: false
    }
    
]
function eachToDo () {
    pushToDo.innerHTML = '';
    toDo.forEach((item) => {
        pushToDo.innerHTML += ` <div class="todo_push">
        <div class="todo__flex">
            <div class="complete">
                <input class="custom__checkbox" type="checkbox" id="check" >
                <label class="custom__checkbox_check" for="check"></label>
        </div>
        <div class="todo_content">
            <p>${item.isText}</p>
            
        </div>
        <div>
            <button data-id="${item.id}" class="delete_todo">Удалить</button>
        </div>
        </div>
        
        </div>`
    })
    let allCheck = document.querySelectorAll('.delete_todo');
    Array.from(allCheck).forEach((item) => {
        item.addEventListener('click', () => {
            toDo = toDo.filter((el) => {
               return  el.id !== +item.getAttribute('data-id')
                
            })
            eachToDo()
        })
        console.log(item.getAttribute('data-id'))
        
        
    })
}
eachToDo();



form.addEventListener('submit', (e) => {
   e.preventDefault();
   
   toDo = [...toDo, {
    id: toDo.length ? toDo.at(-1).id + 1 : 1,
    isText: input.value,
    isDone: false,
    isImportant: false,
    isChange: false
   }]

   input.value = '';
   eachToDo();
   console.log(toDo);
})

