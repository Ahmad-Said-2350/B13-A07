import React, { useContext } from 'react';
import TimelineContext from '../context/TimelineContext '; 
import { BiPhoneCall } from 'react-icons/bi';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { IoVideocamOutline } from 'react-icons/io5';

const Timeline = () => {
    const { timeline } = useContext(TimelineContext);

    const iconMap = {
        Call: <BiPhoneCall className="text-gray-600 text-xl" />,
        Text: <BsFillChatLeftTextFill className="text-gray-600 text-lg" />,
        Video: <IoVideocamOutline className="text-gray-600 text-xl" />,
    };

    return (
        <div className="bg-[#F9FAFB] min-h-screen py-10">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-2xl font-bold text-[#1F2937] mb-8">Interaction Timeline</h1>

                {timeline.length === 0 ? (
                    <div className="bg-white border border-gray-200 rounded-2xl p-16 text-center shadow-sm">
            <p className="text-gray-400 text-lg font-medium">No interactions recorded yet.</p>
             </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {timeline.map((item, index) => (
                            <div 
                                key={index} 
                                className="flex items-center gap-5 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full border border-gray-50 shrink-0">
                                    {iconMap[item.interactionType] || iconMap.Meetup}
                                </div>


                                <div className="flex-1">
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-bold text-[#374151] text-lg">
                                            {item.interactionType || 'Interaction'}
                                        </span>
                                        <span className="text-[#6B7280] text-md">
                                            with {item.name}
                                        </span>
                                    </div>
                                    <p className="text-[#9CA3AF] text-sm font-medium mt-1">
                                        {item.date || 'Today'}
                                    </p>
                                </div>

                                <div className="hidden sm:block">
                                    <span className="text-[11px] font-semibold px-3 py-1 bg-blue-50 text-blue-600 rounded-full uppercase">
                                        Recorded
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Timeline;