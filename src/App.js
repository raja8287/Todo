import style from './App.css'
import { useEffect, useState } from "react";


function App() {
const [todo,settodo]=useState('');
const [end,setend]=useState('');
const [todos,settodos]=useState([]);
const [img,setimg]=useState(' ');

const icons=[{img:"https://cdn-icons-png.flaticon.com/128/16439/16439873.png"},
{img:"https://cdn-icons-png.flaticon.com/128/11869/11869064.png"},
{img:"https://cdn-icons-png.flaticon.com/128/685/685352.png"},{
  img:"https://cdn-icons-png.flaticon.com/128/7981/7981230.png"},
  {img:"https://cdn-icons-png.flaticon.com/128/13/13973.png"},
  {img:"https://cdn-icons-png.flaticon.com/128/13612/13612134.png"},
  {img:"https://cdn-icons-png.flaticon.com/128/86/86563.png"},
  {img:"https://cdn-icons-png.flaticon.com/128/1429/1429487.png"},
  {img:"https://cdn-icons-png.flaticon.com/128/2838/2838895.png"},
  {img:'https://cdn-icons-png.flaticon.com/128/26/26969.png'}];


const handleSubmit=()=>{
if(!todo==''){
  todos.push({id:`${Date.now()}`,name:todo,completed:false,imgs:img});
  console.log(todos);
 settodo(' ');
 document.getElementById('todoinput').value=" ";

  return;
}
}
const handledelet=(id)=>{
  settodos([]);
 settodos(todos.filter(item=>item.id!==id))
  console.log("After Deletion:",todos);
  return;

}
const handleicons=()=>{
var pop=document.getElementById('pop').style.display="inline-block";


}
const Handleimg=(e)=>{
  console.log(e.target.src)
  setimg(e.target.src);
  var pop=document.getElementById('pop').style.display="none";

}
const handlview=()=>{
  var view=document.getElementById('view').style;
  if(view.display=="block"){
    view.display="none ";
    return;
  }
  else{
    view.display='block';
    return;
  }

  return;
}
localStorage.setItem('item',todos)

  return (
    <>
    
    <div class="mt-1 p-10 h-40 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r">
    
    <div className="min-h-15 max-h-30 bg-transparent flex items-center justify-center p-4">

    <div className="min-h-15 max-h-3/4  w-10/12 bg-gray-100  items-center justify-center p-4 absolute" id='pop'>
      <h2 className='text-center text-1xl font-bold mb-4 text-center md:text-left uppercase'>select icons</h2>
      
      <div className='flex flex-wrap item-center justify-center w-8/12 m-auto'   >
        <img src='https://cdn-icons-png.flaticon.com/128/2413/2413179.png' className='w-10 m-2 hover:shadow-md transition-transform duration-300 hover:opacity-75 hover:scale-105 hover:shadow-lg' onClick={(e)=>{Handleimg(e)}}/>
      {icons.map((data,index)=>{
        return(<>
                <img src={data.img} className='w-10 m-2 hover:shadow-md transition-transform duration-300 hover:opacity-75 hover:scale-105 hover:shadow-lg' onClick={(e)=>{Handleimg(e)}}/>
                

        </>)
      })}
    

        
      </div>
</div>

    <div className="bg-white p-6 rounded shadow-md w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-2xl font-bold mb-4 text-center md:text-left">TODO List</h1>
        <div className='min-h-15 max-h-30 bg-transparent flex items-center justify-center p-4'>
        {img==" " ? <h2 className='text-3xl font-bold mb-4 text-center md:text-left' onClick={()=>handleicons()}>+</h2>:<img src={img} className="w-12" onClick={()=>handleicons()}/>
}
        </div>
        <div className="mb-4 flex flex-col md:flex-row">
          <input
            type="text"
            className="border p-2 rounded w-full md:mr-2 mb-2 md:mb-0"
            placeholder="Add a new task"
            onChange={(e)=>{settodo(e.target.value)}}
            id='todoinput'
            
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full md:w-auto hover:shadow-md transition-transform duration-300 hover:opacity-75 hover:scale-105 hover:shadow-lg" onClick={(e)=>{handleSubmit()}}>
            Add
          </button>
        </div>
      
      </div>
    </div>


    <div className="m-auto bg-white p-6 rounded shadow-md w-full max-w-md md:max-w-lg lg:max-w-xl " >
    <button
                className="ml-1 bg-sky-500 text-white p-2 text-sm font-bold rounded hover:shadow-md transition-transform duration-300 hover:opacity-75 hover:scale-105 hover:shadow-lg right "
                onClick={()=>{handlview()}}
              >
                View
              </button>
    <ul id='view'>
      {todos.length==0?<h2 className='text-2xl font-bold mb-4 text-center md:text-left'>Create new Task</h2>:<h2 className="text-2xl font-bold mb-4 text-center md:text-left">Your todos</h2>}
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-between items-center mb-2  p-2 rounded border border-black-10 ">
              <span
                className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''} flex m-1 items-center hover:shadow-md`}
                
              ><input type="checkbox"  className='mr-2' />
               {<img src={todo.imgs} className='w-8 center m-2 '/>} { <span className='text-1xl antialiased font-bold slashed-zero uppercase  '>{todo.name}</span>}
              </span>
              <button
                className="ml-2 bg-red-500 text-white p-2 text-sm font-bold rounded hover:shadow-md transition-transform duration-300 hover:opacity-75 hover:scale-105 hover:shadow-lg"
                onClick={()=>{handledelet(todo.id)}}
              >
                Delete
              </button>
             
            </li>
          ))}
        </ul>
</div>

</div>






 
</>
  );
}

export default App;


/*   <div className=' m-auto bg-gray-300 ' >
      <headers >Todo List</headers>
      <div className='bg-gray-600'>
        <input placeholder='Todo' id='todo' onChange={(e)=>{settodo(e.target.value)}}/><input type='date' onChange={(e)=>{setend(e.target.value)}}/>
        <button onClick={(e)=>{handleSubmit()}}>Add</button>
      </div>
      <div>
        {todos.map((data,index)=>{
          return(<>
          <div className='bg-red-600'>
          
        <h3 key={data.id}>{index+1}.{data.name}</h3><spna>{data.End}</spna>
        <button>Edit</button>
        <button onClick={()=>{handledelet(data.id)}}>Delete</button>
        </div>

          </>)
        })}
      </div>
    </div>
 * 
 */