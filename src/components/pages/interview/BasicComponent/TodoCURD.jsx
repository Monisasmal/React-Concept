import React, { useState } from "react";

const ReactTodoCRUDGuide = () => {

  const [task,setTask] = useState("")
  const [todos,setTodos] = useState([])
  const [editId,setEditId] = useState(null)

  const addTodo = () => {

    if(task.trim()==="") return

    if(editId !== null){

      const updated = todos.map((todo,index)=>
        index === editId ? task : todo
      )

      setTodos(updated)
      setEditId(null)

    }else{

      setTodos([...todos,task])

    }

    setTask("")
  }

  const editTodo = (index) => {

    setTask(todos[index])
    setEditId(index)

  }

  const deleteTodo = (index) => {

    const filtered = todos.filter((_,i)=> i !== index)
    setTodos(filtered)

  }

  return (

    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* TITLE */}
      <div className="text-center mb-16">

        <h1 className="text-5xl font-black text-slate-900 mb-4">
          Build a <span className="text-indigo-600">Todo List with CRUD</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

      </div>

      {/* QUESTION */}

      <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 mb-12">

        <h2 className="text-2xl font-bold underline italic mb-4">
          Question
        </h2>

        <p className="text-lg text-slate-700 leading-relaxed">

          Build a Todo List application using React where a user can:

          <br/><br/>

          ✔ Add a task  
          ✔ Edit a task  
          ✔ Delete a task  
          ✔ Display all tasks  

        </p>

      </div>

      {/* EXPLANATION */}

      <div className="grid md:grid-cols-2 gap-8 mb-12">

        <div className="bg-emerald-50 p-8 rounded-3xl shadow-lg border-l-8 border-emerald-500">

          <h3 className="text-2xl font-bold mb-4">
            🚀 Why is it important?
          </h3>

          <ul className="text-sm space-y-2">
            <li>✔ Demonstrates CRUD operations</li>
            <li>✔ Uses React state management</li>
            <li>✔ Shows array manipulation</li>
            <li>✔ Common frontend interview question</li>
          </ul>

        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">

          <h3 className="text-2xl font-bold mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-xs space-y-2">
            <li>1. User enters a task</li>
            <li>2. Task is stored in state</li>
            <li>3. Tasks render in a list</li>
            <li>4. User can edit or delete tasks</li>
          </ul>

        </div>

      </div>

      {/* CODE */}

      <div className="bg-slate-900 p-10 rounded-[3rem] text-green-400 mb-12 shadow-2xl overflow-x-auto">

<pre>{`import React, { useState } from "react";

function TodoApp(){

 const [task,setTask] = useState("")
 const [todos,setTodos] = useState([])

 const addTodo = () => {
   if(task==="") return
   setTodos([...todos,task])
   setTask("")
 }

 const deleteTodo = (index)=>{
   const updated = todos.filter((_,i)=>i!==index)
   setTodos(updated)
 }

 return(

  <div>

   <input
    value={task}
    onChange={(e)=>setTask(e.target.value)}
   />

   <button onClick={addTodo}>
    Add
   </button>

   {todos.map((todo,index)=>(
     <div key={index}>
       {todo}
       <button onClick={()=>deleteTodo(index)}>
        Delete
       </button>
     </div>
   ))}

  </div>

 )

}

export default TodoApp`}</pre>

      </div>

      {/* LIVE PREVIEW */}

      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100">

        <h2 className="text-3xl font-black text-center mb-8">
          Live Preview
        </h2>

        <div className="flex gap-4 mb-6">

          <input
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            placeholder="Enter task"
            className="border p-2 rounded w-full"
          />

          <button
            onClick={addTodo}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            {editId !== null ? "Update" : "Add"}
          </button>

        </div>

        <ul className="space-y-4">

          {todos.map((todo,index)=>(

            <li
            key={index}
            className="flex justify-between bg-slate-100 p-3 rounded"
            >

              {todo}

              <div className="flex gap-2">

                <button
                onClick={()=>editTodo(index)}
                className="text-blue-600"
                >
                  Edit
                </button>

                <button
                onClick={()=>deleteTodo(index)}
                className="text-red-600"
                >
                  Delete
                </button>

              </div>

            </li>

          ))}

        </ul>

      </div>

    </div>

  )

}

export default ReactTodoCRUDGuide