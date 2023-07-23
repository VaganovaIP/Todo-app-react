
import React from "react"

const Todolist = ({list, remove})=> {
    return(
        <>
            {list?.length > 0 ? (
               <ul className="todo-list"> 
                  {list.map((entry, index) => (
                    <div className="todo">
                        <li key={index}> {entry} </li>
                        <button className="delete-button"
                                onClick={() => {remove(entry)}}>
                                Удалить
                        </button>
                    </div>
                  ))}

               </ul>
            ): (<div className="empty">
                    <p>Добавьте задачу</p>
                </div>
            )}
        </>
    );

};

export default Todolist;