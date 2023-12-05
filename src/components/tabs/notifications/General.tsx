import React from 'react'

export default function General({ img, notify, time, name, key }) {
    return (
        <div key={key} className='bg-[#fff] flex items-center  rounded-lg p-4 mb-1'>
            <img src={img} alt="" className='w-24 rounded-[50%]' />
            <div className="flex gap-3 ml-[150px] items-center text-start">
                <h3 className='text-[#35480D] font-bold'>{name}</h3>
                <p>{notify}</p>
            </div>
            <h3 className='ml-auto'>{time}</h3>
        </div>
    )
}
