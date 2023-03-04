import React from 'react';
import '../style_sheets/Form.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Form (props) {
    const [input, setInput] = useState("");
    
    const manageChange = e => {
        setInput(e.target.value);
    }
    
    const manageSent = e => {
        //Para que la página no recargue al enviar el formulario.
        e.preventDefault();
        const taskNew = {
            id: uuidv4(),
            text: input,
            completed: false
        };
        props.onSubmit(taskNew);
    }

    return (
        <form className="task_form" onSubmit={manageSent}>
            <input
                className="task_input" 
                type="text" 
                placeholder="Escribe una tarea" 
                name="text"
                onChange={manageChange}
            />
            <button className='task_button'>Agregar Tarea</button>
        </form>
    );
}

export default Form;