import { Outlet } from 'react-router-dom';
import EventsSidebar from '../components/layout/EventsSidebar';

const EventsLayout = () => {

    return (
        <>
            <div className="flex flex-row min-h-screen bg-[#ffffff]">
                <div className="w-[18%] flex ">
                    <EventsSidebar title={'Events'} />
                </div>
                <div className="content w-[80%]">
                    <Outlet />
                   <div className='mt-20'>
                    
                   </div>
                </div>
            </div>
        </>
    )
}

export default EventsLayout
