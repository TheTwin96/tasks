import React from 'react';
import '../style_sheets/Task.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task ({ id, text, completed, complete_task, delete_task }) {
    return (
        <div className={ completed ? "task_container completed" : "task_container" }>
            <div className="task_text" onClick={() => complete_task(id)}>
                { text }
            </div>
            <div className="task_container_icons" onClick={() => delete_task(id)}>
                <AiOutlineCloseCircle className="task_icon" />
            </div>
        </div>
    );
}

export default Task;