import { useDrag } from "react-dnd";
import { ItemTypes } from "../../lib/constants/itemTyps";

function Equipments({ items, key }) {
  let index = key
  // const [, ref] = useDrag({
  //   type: ItemTypes.EQUIPMENT,
  //   items: { id: items.id },
  // });

  const [{ isDragging }, ref] = useDrag({
    type: ItemTypes.EQUIPMENT,
    item: { id: items.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (

    <div ref={ref} style={{
      opacity: isDragging ? 0.5 : 1,
      cursor: "move",
      padding: "10px",
      border: "1px solid #ccc",
      // margin: "10px",
    }} key={index} className='bg-[#fff] rounded-lg px-4 py-3 flex md:flex-row flex-col gap-3 items-center'>
      <img src={items.img} className='h-16 w-16 rounded-lg' alt="" />
      <h3 className='text-[15px] font-[700] text-[#35480D]'>{items.name}</h3>
    </div>
  )
}

export default Equipments