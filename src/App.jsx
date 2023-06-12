import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <section className='relative h-screen p-8 bg-gry-300'>
        <div>
          <h1 className='text-2xl font-semibold'>todo</h1>

          <div className='absolute bottom-8 right-6'>
            <button className='flex items-center justify-center rounded-full shadow-lg w-14 h-14 bg-blue'>
              <svg width="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>

          <section className='mt-10'>
            <div className="overflow-auto rounded-lg w-fit">
              <ul className='flex flex-wrap'>
                <li className='flex items-center mr-3 text-sm rounded-full w-fit'>
                  <div className='w-8 h-8 mr-2 rounded-full bg-blue'></div>
                  work
                </li>
                <li className='flex items-center mr-3 text-sm rounded-full w-fit'>
                  <div className='w-8 h-8 mr-2 rounded-full bg-green '></div>
                  study
                </li>

                <li className='flex items-center mr-3 text-sm rounded-full w-fit'>
                  <div className='w-8 h-8 mr-2 rounded-full bg-purple'></div>
                  family
                </li>

                <li className='flex items-center mr-3 text-sm rounded-full w-fit'>
                  <div className='w-8 h-8 mr-2 rounded-full bg-crisom'></div>
                  entertainment
                </li>
              </ul>
            </div>
            <div></div>
          </section>

          <section className='mt-10'>
            <div className='relative z-10 w-full p-6 rounded-md h-fit bg-yellow-normal'>
              <div className='flex items-center justify-between mb-6'>
                <h1 className='text-xl font-semibold text-yellow-dark'>First Title Here</h1>

                <div className='relative'>
                  <svg className="cursor-pointer hover:stroke-yellow-dark" width="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="gray" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  <div className='hidden flex-col justify-start w-[200px] bg-white absolute right-0 p-4 rounded-md mt-2 z-20'>
                    <a className='p-2 opacity-50 cursor-pointer hover:opacity-100'>Edit ...</a>
                    <a className='p-2 opacity-50 cursor-pointer hover:opacity-100'>Delete</a>
                  </div>
                </div>


              </div>
              <p className='mb-6 text-yellow-dark text-md line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia debitis iusto, dolorem delectus velit dolor aliquid explicabo illo consequatur porro atque laboriosam dolore nesciunt sunt repellendus incidunt molestiae culpa. Nesciunt.</p>

              <div className='flex justify-between'>
                <div className='flex'>
                  <div className='w-8 h-8 mr-2 rounded-full bg-blue'></div>
                  <div className='w-8 h-8 mr-2 rounded-full bg-crisom'></div>
                </div>

                <div className='opacity-50'>
                  <label className="flex items-center cursor-pointer checkbox" htmlFor="done">
                    <input className="mr-2 text-sm" type="checkbox" id="done" />
                    Done
                  </label>
                </div>


              </div>


            </div>
          </section>

        </div>

      </section>
    </>
  )
}

export default App
