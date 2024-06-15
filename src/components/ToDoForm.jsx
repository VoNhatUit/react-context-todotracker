import { useForm } from 'react-hook-form';
import { useState, useEffect, useContext } from 'react';
import { Input, Button, Tabs, Checkbox } from "antd";
export default function ToDoForm(){
    const [ toDos, setToDos ] = useState([]);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const items = [
        {
          key: "1",
          label: "All",
          children: "",
        },
        {
          key: "2",
          label: "Completed",
          children: "",
        },
      ];
      const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };
        function onDelete(){
            setToDos(prevState => [""])
          }
              
          
    return (
        <>
          <h2 className="ml-10 text-3xl mt-5 text-left font-serif">Todo Tracker</h2>
            {/* <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                
                {[...Array(2)].map((_, i) => (
                    
                    <li 
                        key={i}
                        className="text-xl me-2 inline-block px-4 py-3 rounded-lg text-black mt-5 text-left font-serif dark:hover:bg-gray-500 dark:hover:text-white"
                        onClick={() => handleTabChange(i)}
                    >
                        {textTab[i]}
                    </li>
            ))}
      </ul> */}    
      <Tabs className='m-6 font-medium text-2xl' defaultActiveKey='1' items={items} />
            <form 
              onSubmit={handleSubmit((data)=>{
              console.log(data);
              const { id, todo} = data;
              const toDo = {
                  id,
                  todo,
                  
              }
              setToDos(prevState => [...prevState, toDo])
         })}>
        
            <div className=" flex  flex-col gap-8">
              <div className="m-2 flex gap-8">
                <input 
                    type="text" 
                    name="todo" 
                    id="todo"
                    placeholder="Enter a new task"  
                    className="ml-6 w-80 border-2  rounded-md px-2 py-2 "
                    {...register("todo", {
                      required: true,
                      minLength: 3
                    })}
                />
                {errors?.todo && <span className="">Must over 3 characters</span>}

                <button 
                        type="submit" 
                        className="flex p-2 bg-[#0264F6] text-white font-medium rounded-md">
                        Save
                </button>
              </div>
                
            </div>
         
      </form>

      <div>
      {toDos.length > 0 ? toDos.map(todoItem => {
                return (                
                  <div key={todoItem.id} >
                    <Checkbox className="ml-10 my-6 w-72" onChange={onChange}>{todoItem.todo}</Checkbox>
                      
                  
                  </div>
                  
                   
                )
              }) : (          
                     <div className='m-10'>
                      No data to show
                     </div>
              )}
              <button 
                     type="button" 
                     className="ml-80 font-medium rounded-lg text-sm p-2 me-2 mb-2 text-white bg-red-600 hover:bg-red-800"
                     onClick={() => onDelete()}
                   >
                         Delete all
                   </button>
      </div>
                    


        </>
    )
}