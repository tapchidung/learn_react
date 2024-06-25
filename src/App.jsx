import TodoData from './components/todo/todoData.jsx';
import TodoNew from './components/todo/todoNew.jsx';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
import Header from './components/layout/header.jsx';
import Footer from './components/layout/footer.jsx';
import { Outlet } from 'react-router-dom';


const App = () => {

  const [todoList, setTodoList] = useState([
  ])


  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }

    setTodoList([...todoList, newTodo])
  }

  const deleteTodo = (id) => {
    console.log(">>> run F deleteTodo: ")
    console.log(">>> check id: ", id)
    const todoListPlus = todoList.filter((Todo) => Todo.id !== id)
    console.log(">>> check todoListPlus: ", todoListPlus)
    setTodoList([...todoListPlus])


  }

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //{key:value}
  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />
        {todoList.length > 0 ?
          <TodoData
            todoList={todoList}
            deleteTodo={deleteTodo}
          />
          :
          todoList.length === 0 &&
          <div className='todo-image'>
            <img src={reactLogo} className='logo' />
          </div>
        }

        {/* {todoList.length > 0 &&
        <TodoData
          todoList={todoList}
        />
      }
      {todoList.length === 0 &&
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>
      } */}

      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
