import React from 'react';
import Form from './Form';
import '../style_sheets/Task_List.css';
import { useState } from 'react';
import Task from './Task';

function Task_List() {
    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if (task.text.trim()) {
            task.text = task.text.trim();
        }
        //El operador "..." combierte todas las tareas conjuntas a tareas individuales.
        const current_tasks = [task, ...tasks];
        setTasks(current_tasks);
    }

    const deleteTask = id => {
        const updated_tasks = tasks.filter(task => task.id !== id);
        setTasks(updated_tasks);
    }

    const completeTask = id => {
        const updated_tasks = tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(updated_tasks);
    }

    return (
       <>
        <Form onSubmit={addTask} />
        <div className="task_list_container">
            {
                tasks.map((task) => 
                    <Task 
                        //React necesita este atributo para que sepa el orden de las tareas al listarlas.
                        //No se puede acceder a key como un props. SOlo se usa para lo explicado antes.
                        key={task.id} 
                        id={task.id}
                        text={task.text}
                        completed={task.completed}
                        complete_task={completeTask}
                        delete_task={deleteTask}
                    />
                )
            }
        </div>
       </> 
    );
}

export default Task_List;