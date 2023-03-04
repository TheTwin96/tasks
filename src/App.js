import './App.css';
import freecodecamp_logo from './images/Freecodecamp_Logo.png';
import Task_List from './components/Task_List';

function App() {
  return (
    <div className="task_app">
      <div className="freecodecamp_logo_container">
        <img className="freecodecamo_logo" src={freecodecamp_logo} alt="Freecodecamp's logo" />
      </div>
      <div className="task_main_list">
        <h1>Mis Tareas</h1>
        <Task_List />
      </div>
    </div>
  );
}

export default App;
