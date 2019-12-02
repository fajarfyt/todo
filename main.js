let todos =[
    {
        mytext : 'Makan',
        complete : false
    },
    {
        mytext : 'Tidur',
        complete : true
    }
];

const generateTodos = function(todos){
    const li = document.createElement('tr')
    const cek = document.createElement('input')
    cek.setAttribute("type", "checkbox")
    cek.setAttribute("id", todos.mytext)
    li.setAttribute("id", todos.mytext+'li')

    if(todos.complete == true){
    li.style.cssText = 'color:red;'
    li.textContent = todos.mytext 
    cek.checked = true   
    }else{
        li.style.cssText = 'color:black;'
        li.textContent = todos.mytext 
        cek.checked = false
    }
    return {li, cek};
}
const renderTodos = function(todos){
    document.getElementById("todos").innerHTML="";
    todos.forEach(function(todos) {
        document.querySelector("#todos")
        .appendChild(generateTodos(todos).li );
        document.querySelector("#todos")
        .appendChild(generateTodos(todos).cek);
    });
    
}

renderTodos(todos);

const complete = function (todos) {
    todos.forEach(function(todos){
    let mytext = todos.mytext
    let complete = todos.complete
    let checkbox = document.getElementById(mytext);
    checkbox.addEventListener( 'change', function() {
        if(this.checked) {
            complete = 'true'
            let li =  document.getElementById(mytext+'li')
            li.style.cssText = 'color:red;'
            console.log(complete)
        } else {
            complete = 'false'
            let li =  document.getElementById(mytext+'li')
            li.style.cssText = 'color:black;'
            console.log(complete)
        }
    });
});
} 

complete(todos)

document.querySelector('#new-todo')
.addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        mytext : e.target.elements.text.value,
        complete : false
    })
    renderTodos(todos);
    e.target.elements.text.value="";
    complete(todos)
    console.log(todos);
    
});