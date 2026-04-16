import React, { useContext, useState } from 'react';
import TimelineContext from '../context/TimelineContext '; 
import { BiPhoneCall } from 'react-icons/bi';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { IoVideocamOutline } from 'react-icons/io5';

const Timeline = () => {
    const { timeline } = useContext(TimelineContext);
    const [activeFilter, setActiveFilter] = useState('All');

    const iconMap = {
        Call: <BiPhoneCall className="text-gray-600 text-xl" />,
        Text: <BsFillChatLeftTextFill className="text-gray-600 text-lg" />,
        Video: <IoVideocamOutline className="text-gray-600 text-xl" />,
    };

    const filteredTimeline =
        activeFilter === 'All'
            ? timeline
            : timeline.filter(item => item.interactionType === activeFilter);

    return (
        <div className="bg-[#F9FAFB] min-h-screen py-10">
            <div className="max-w-3xl mx-auto px-4">

                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-bold text-[#1F2937]">Timeline</h1>

                    <select
                        value={activeFilter}
                        onChange={(e) => setActiveFilter(e.target.value)}
                        className="select select-bordered select-sm text-[13px] text-gray-500 w-40 focus:outline-none"
                    >
                        <option value="All">Filter timeline</option>
                        <option value="Call">Call</option>
                        <option value="Text">Text</option>
                        <option value="Video">Video</option>
                    </select>
                </div>

                {filteredTimeline.length === 0 ? (
                    <div className="bg-white border border-gray-200 rounded-2xl p-16 text-center shadow-sm">
                        <p className="text-gray-400 text-lg font-medium">No interactions recorded yet.</p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {filteredTimeline.map((item, index) => (
                            <div 
                                key={index} 
                                className="flex items-center gap-5 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 "
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