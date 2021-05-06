import React from 'react'
import {FiChevronDown} from 'react-icons/fi'
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
function Tasks({tasks, removeTask, updatingTask}) {
    
    return (
       
        <div>
            <div className="task__container">
            
                    {tasks.length > 0 ? 
                        (
                        tasks.map(task => (
                            <div className="task" key={task.id}>
                            <div className="task__header">
                                <p className="task__title">{task.topicname} <span className="tag">{task.location}</span></p>
                                <p className="task__title"><FiChevronDown/></p>
                            </div>
                                <div className="task__content">
                                <p>{task.description}</p>
                            </div>
                            <div className="task__footer">
                            <p>
                                <span className="date">{task.time}</span>
                            </p>
                            <div className="footer__icons">
                                <p>
                                <span onClick={()=> removeTask(task.id)}><AiOutlineDelete/></span>
                                </p>
                                <p>
                                <span onClick={()=> updatingTask(task)}><AiOutlineEdit/></span>
                                </p>
                            </div>
                        </div>
                     </div>
                        ))
                       )
                       :
                       (<div className="emptytask"><p>Need to add the task</p></div>)
                    }
            </div>
        </div>
    )
}

export default Tasks
