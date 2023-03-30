import React from 'react'
import List from '../assets/list.png'

export const VoidList = () => {
    return (
        <div className='w-1/2 m-auto flex flex-col gap-4 justify-center items-center pt-8'>
            <div>
                <img src={List} alt="" />
            </div>
            <div>
                <p className='font-bold text-gray-400 text-center'>you still don't have tasks registered</p>
                <p className='text-gray-600'>Create tasks and organize your to-do items</p>
            </div>
        </div>
    )
}