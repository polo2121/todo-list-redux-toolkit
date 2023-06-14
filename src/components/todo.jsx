import React from 'react'

// - components
import TodoTypeList from './todo-type-list'
import Logo from './logo'
import TodoCard from './todo-card'
import Button from "./button"

// - redux 
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodo } from '../stores/todoSlice'

const Todo = ({ children }) => {

    const { isLoading, todos, isError } = useSelector((state) => state.todo)
    const dispatch = useDispatch();
    console.log(todos)

    const getTodos = () => {
        dispatch(fetchTodo());
    }
    const isTodoEmpty = () => {
        if (todos.length <= 0)
            return true
        else return false
    }

    return (
        <section className='relative h-screen p-8 bg-gry-300'>
            <Logo />
            <div>
                <div className='mt-10 md:justify-between md:flex'>
                    <TodoTypeList />
                    <section className='md:ml-[18rem] mt-10 h-1/2 md:w-2/3 xl:w-full xl:flex xl:flex-wrap justify-between'>
                        {
                            todos.length > 0 ?
                                todos.map(todo =>
                                (<TodoCard key={todo.id}>
                                    <TodoCard.Title title={todo.todo} />
                                    <TodoCard.Action />
                                    <TodoCard.Text />
                                    <TodoCard.Type type={todo.type} />
                                    <TodoCard.Checkbox />
                                </TodoCard>)
                                ) : <p className='w-full p-6 mb-10 rounded-md xl:w-[48%] h-fit bg-yellow-normal'>No todo at the movement...<br /></p>
                        }
                    </section>
                </div>
            </div>
            <Button getTodos={getTodos} isLoading={isLoading} isTodoEmpty={isTodoEmpty} />
        </section>
    )
}

export default Todo