import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList =({data})=>{
    return(
        <div id="tasklist" className="h-[55%] overflow-x-auto  flex items-center justify-start  gap-5 flew-nowrap w-full mt-10 py-5">
           {data.tasks.map((elem ,idx)=>{
            if(elem.active){
                return <AcceptTask key={idx} data={elem}/>
            }if(elem.NewTask){
                return <NewTask key={idx} data={elem}/>
            }if(elem.completed){
                return <CompleteTask key={idx} data={elem}/>
            }
            if(elem.FailedTask){
                return <FailedTask key={idx} data={elem}/>
            }
           })}
            
        </div>
    )
}
export default TaskList