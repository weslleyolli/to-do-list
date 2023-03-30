import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'

export const Task = ({title, onDeleteTask, task, handleToggleTaskComplet}) => {
    return (
        <>
            <ul className={`w-3/6 m-auto rounded-md p-5 bg-box mb-2`}>
                <li className='flex justify-between items-center'>
                    <div className='space-x-2 flex gap-3 items-center'> 
                        <input
                            type="checkbox" 
                            defaultChecked={task.isCompleted}
                            onClick={() => handleToggleTaskComplet(task.id)}
                            className="h-4 w-4 cursor-pointer appearance-none border border-blue rounded-full checked:bg-blue"
                        />
                        <span
                            className={`text-white ${!task.isCompleted === false ? "line-through opacity-30" : "no-underline opacity-100"}`} >
                            {title}
                        </span>
                    </div>
                    <button
                        onClick={() => onDeleteTask(task.id)}
                        type='button'
                    >
                        <div className=' hover:text-red-800 transition-colors text-gray-700'>
                            <RiDeleteBin6Line />
                        </div>
                    </button>
                </li>
            </ul>
        </>
    )
}