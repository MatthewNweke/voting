import { BsThreeDots } from "react-icons/bs";

const ClientCard = ({ name, type, img, key }) => {
    let textColor = '';

    // Determine text color based on the user type
    if (type.includes('Gold')) {
        textColor = 'text-[#FFBD02]';
    } else if (type.includes('Regular')) {
        textColor = 'text-[#35480D]';
    } else if (type.includes('Platinum')) {
        textColor = 'text-[#9C9C9C]';
    } else if (type.includes('Bronze')) {
        textColor = 'text-[#BD5E00]';
    }

    return (
        <div className={`drop-shadow-xl flex gap-1  rounded-lg p-2 bg-[#fff] rounded-xl`} key={key}>
            <img src={img} alt="" className='h-24 w-24 rounded-lg' />
            <div className="">
                <h2 className='text-[15px] font-[700] text-[#35480D]'>{name}</h2>
                <p className={`text-[13px] font-[500] ${textColor} `}>{type}</p>
            </div>
            <p className='ml-auto'>
                <BsThreeDots style={{ fontSize: "20px" }} />

            </p>

        </div>

    );
};

export default ClientCard;
