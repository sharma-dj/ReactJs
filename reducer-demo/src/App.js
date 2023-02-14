import './App.css';
import { useReducer } from 'react';

const initial_todos = [
  {
    id:1,
    title:"Title1",
    completed:false
  },
  {
    id:2,
    title:"Title2",
    completed:false
  }
]
//console.log(initial_todos)

const reducer = (state,action) => {
  if (action.type === 'COMPLETE') {
    return state.map((todo) => {
      if (todo.id === action.id) {
        return {...todo, completed:!todo.completed}
      } else {
        return todo
      }
    })
  }
}

const App = () => {
  const [todos,dispatch] = useReducer(reducer,initial_todos)
  const handleEvent = (todo) => {
    dispatch({type:'COMPLETE',id:todo.id})
  }
  return (
    <div className="App">
      { todos && todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input 
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleEvent(todo)}
            />
          {todo.completed ? <h1 style={{color:'green'}}>{todo.title}</h1> : <h1 style={{color:'red'}}>{todo.title}</h1>}
          </label>
        </div>
        ))
      }
    </div> 
  );
}

export default App;
