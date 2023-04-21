//import useLocalStorage from './hooks/useLocalStorage'
import TodoList from './components/TodoList'

function App() {
  // const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  // const [previousFocusEl, setPreviousFocusEl] = useState(null);
  // const [editedTask, setEditedTask] = useState(null);
  // const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="container">
      <header>
        <h1>Agregar Nueva Tarea</h1>
      </header>
      <TodoList />
    </div>
  )
}

export default App