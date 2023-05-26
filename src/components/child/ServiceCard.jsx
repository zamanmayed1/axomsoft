import React from 'react'

const ServiceCard = ({data}) => {
  return (
    <div className="border p-2 h-[350px] m-4 bg-white shadow-sm rounded-sm cursor-pointer shadow-[#89cefb] hover:shadow-2xl duration-300  relative bg-[url('https://i.ibb.co/rMy7GwV/watermark-1.png')] bg-no-repeat bg-right-bottom">
        <img className='w-[140px] h-[140px]' src={data.image} alt="" />
        <div className='mt-2'>
            <h1 className='text-2xl '>{data.title}</h1>
            <p className='text-[16px] mt-3'>{data.subtitle}</p>
        </div>


    </div>
  )
}

export default ServiceCard