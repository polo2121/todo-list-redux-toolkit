import React, { Children } from 'react'

const TodoCard = ({ children }) => {
    const [title, Action, Text, Type, Checkbox] = Children.toArray(children);

    return (

        <div className='relative z-10 w-full p-6 mb-10 rounded-md xl:w-[48%] h-fit bg-yellow-normal'>
            <div className='flex items-center justify-between mb-6'>
                {title}
                {Action}
            </div>
            {Text}
            <div className='flex justify-between'>
                {Type}
                {Checkbox}
            </div>

        </div>


    )
}

const TodoTile = ({ title }) => {
    return (
        <h1 className='text-xl font-semibold text-yellow-dark'>{title}</h1>
    )
}
const TodoAction = () => {
    return (
        <div className='relative'>
            <svg className="cursor-pointer hover:stroke-yellow-dark" width="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="gray" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <div className='hidden flex-col justify-start w-[200px] bg-white absolute right-0 p-4 rounded-md mt-2 z-20'>
                <a className='p-2 opacity-50 cursor-pointer hover:opacity-100'>Edit ...</a>
                <a className='p-2 opacity-50 cursor-pointer hover:opacity-100'>Delete</a>
            </div>
        </div>
    )
}
const TodoText = () => {
    return (
        <p className='mb-6 text-yellow-dark text-md line-clamp-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, assumenda quasi minima cum sit eligendi cupiditate aut architecto sapiente rerum esse aliquam excepturi quibusdam corrupti quae, nulla, odio delectus perferendis.</p>
    )

}
const TodoType = ({ type }) => {

    const typeColors = { work: "bg-blue", study: "bg-green", entertainment: "bg-crisom", family: "bg-purple" }
    const typeClass = `w-8 h-8 mr-2 rounded-full shadow-sm ${typeColors[type]}`
    return (
        <div className='flex'>
            <div className={typeClass}></div>
        </div>
    )
}
const TodoCheckbox = () => {
    return (
        <div className='opacity-50'>
            <label className="flex items-center cursor-pointer checkbox" htmlFor="done">
                <input className="mr-2 text-sm" type="checkbox" id="done" />
                Done
            </label>
        </div>

    )
}

TodoCard.Title = TodoTile;
TodoCard.Action = TodoAction;
TodoCard.Text = TodoText;
TodoCard.Type = TodoType;
TodoCard.Checkbox = TodoCheckbox;

export default TodoCard
