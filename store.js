const store ={
    todos:[
        {
            id : "1"
            ,title:"comlate Task A",
            complated: false,
            
        },
        {
            id : "2"
            ,title:"Read Book",
            complated: true,
            
        },
        {
            id : "3"
            ,title:"Write Code",
            complated: true,
            
        },
    ],
};
const  storeHandler = {
get(target,property){
    
    return target[property] ;
},

  set (target,property,value)
{
//     console.log(target,property,value)
// console.log("you are trying to set", property)

target[property] = value;
if(property == "todos"){
    window.dispatchEvent(new Event("todoschange"));
}
localStorage.setItem("store", JSON.stringify(store))
return true;
},

};


// traps

const storeProxy = new Proxy(store,  storeHandler);



function  addTodo(newTodo){
    storeProxy.todos =[...storeProxy.todos, newTodo]
}
function deletetodo(id){
     storeProxy.todos = storeProxy.todos.filter(todo => todo.id !== id)
}
function togglecompalted(id, complated){
    storeProxy.todos =storeProxy.todos.map(todo=>{
        if(todo.id === id){
            return{...todo, complated: complated}
        }
        else{
            return todo;
        }
    })
}
export {addTodo ,togglecompalted};
export{deletetodo};
export default storeProxy;