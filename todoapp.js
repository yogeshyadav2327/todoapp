const Btnclick=document.getElementById('button-Click');

const TodoInput=document.getElementById('Todo-input');
// const clickButton=document.getElementById('button-Click');
const TodoItemContainer=document.getElementById('item-container');

Btnclick.addEventListener('click',() =>{
const value=TodoInput.value;


const li=document.createElement('li');
li.innerText=value;


const remobutton=document.createElement('button');
remobutton.innerText='X';

remobutton.addEventListener('click',()=>{
    li.remove();
});



li.appendChild(remobutton);
TodoItemContainer.appendChild(li);
// console.log(TodoItemContainer);
TodoInput.value='';
});