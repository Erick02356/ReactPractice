import { TodoItem } from "./TodoItem"

export const TodoList = ({todos,deleteTodo,toggleTodo}) =>{
    return(
    <ul className='list'>
    {todos.length === 0 && 'No task to do'}
    {todos.map(todo =>{
      return (
        <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
     )
    })}
    
  </ul>
    )
}