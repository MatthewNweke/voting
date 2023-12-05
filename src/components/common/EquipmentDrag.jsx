import { useDrop } from "react-dnd";
import { MdCancel } from "react-icons/md";
import { ItemTypes } from "../../lib/constants/itemTyps";
export default function EquipmentDrag({ items,  onDrop }) {
    // let index = key
    const [, drop] = useDrop({
        accept: ItemTypes.EQUIPMENT,
        drop: (item) => {
            onDrop(item.id);
        },
    });
    return (
        <div ref={drop} key={items.id} className='bg-[#fff] rounded-lg p-2 flex flex-col md:flex-row gap-2 items-center relative'>
            <img src={items.img} className='h-16 w-16 rounded-lg' alt="" />
            <h3 className='text-[15px] font-[700] text-[#35480D]'>{items.name}</h3>
            <p className='absolute top-0 right-0'>

                <MdCancel />
            </p>
        </div>
    )
}
