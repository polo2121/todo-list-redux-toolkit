import React from 'react'

const Button = ({ getTodos, isLoading, isTodoEmpty }) => {

    const btnClass = `flex items-center justify-center rounded-full shadow-lg w-14 h-14 bg-blue transition-transform active:scale-75 ${isTodoEmpty() ? "animate-bounce" : ""}`
    return (
        <div className='fixed z-50 bottom-8 right-[10%]'>
            <button className={btnClass} onClick={getTodos} disabled={isLoading && true}>
                <svg width="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
    )
}

export default Button