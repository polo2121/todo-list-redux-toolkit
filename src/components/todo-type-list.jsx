import React from 'react'

const TodoTypeList = () => {
    return (
        <div>
            <section className='md:fixed mt-10 md:w-[18rem] mb-10'>
                <div className="overflow-auto rounded-lg w-fit">
                    <ul className='flex flex-wrap text-sm md:gap-6 md:flex-col md:text-base'>
                        <li className='flex items-center mr-3 w-fit'>
                            <div className='w-8 h-8 mr-2 rounded-full bg-blue'></div>
                            work
                        </li>
                        <li className='flex items-center mr-3 w-fit'>
                            <div className='w-8 h-8 mr-2 rounded-full bg-green '></div>
                            study
                        </li>

                        <li className='flex items-center mr-3 w-fit'>
                            <div className='w-8 h-8 mr-2 rounded-full bg-purple'></div>
                            family
                        </li>

                        <li className='flex items-center mr-3 w-fit'>
                            <div className='w-8 h-8 mr-2 rounded-full bg-crisom'></div>
                            entertainment
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default TodoTypeList