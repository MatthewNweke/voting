
export default function Calendar({ item, key }) {
  return (

    <div key={key} className='bg-[#DAE3C6] rounded-lg  w-9  flex flex-col items-center'>
      <h3 className='text-[#35480D]'>{item.day}</h3>
      <p className='text-[#35480D] font-[700] '>{item.value}</p>
    </div>
  )
}
