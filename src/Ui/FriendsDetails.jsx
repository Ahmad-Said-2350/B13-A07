/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useFriends from '../hooks/useFriends';
import { FaArchive } from 'react-icons/fa';
import { MdOutlineDelete } from 'react-icons/md';
import { BiPhoneCall } from 'react-icons/bi';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { IoVideocamOutline } from 'react-icons/io5';
import TimelineContext from '../context/TimelineContext ';
import { toast } from 'react-toastify';
import { RiNotificationSnoozeLine } from 'react-icons/ri';

const FriendsDetails = () => {
    const { id } = useParams();
    const friends = useFriends();
    const singleFriend = friends.find(friend => friend.id == id);


const {timeline,settimeline} = useContext(TimelineContext)

    if (!singleFriend) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-md"></span>
            </div>
        );
    }

const handleFriends = (type) => {
    const interactionData = {
        id: singleFriend.id,
        name: singleFriend.name,
        picture: singleFriend.picture,
        interactionType:  type,
        date: new Date().toLocaleDateString()
    };
    
    settimeline((prevTimeline) => [...prevTimeline, interactionData]);
    toast.success(`${singleFriend.name} added to timeline!`);
};

    const { picture, name, status, tags, email, days_since_contact, goal, next_due_date,bio } = singleFriend;

    const statusClass =
        status === "overdue"
            ? "bg-[#FCEBEB] text-[#A32D2D]"
            : status === "almost due"
            ? "bg-[#FAEEDA] text-[#854F0B]"
            : "bg-[#EAF3DE] text-[#3B6D11]";




    return (
        <div className="container mx-auto px-4 py-10 max-w-4xl">
            <div className="grid grid-cols-[220px_1fr] gap-3">

                <div className="flex flex-col gap-3">

                    <div className="card bg-white border border-gray-200 rounded-xl p-5 flex flex-col items-center gap-3 text-center">
                        <img
                            src={picture}
                            alt={name}
                            className="w-20 h-20 rounded-full object-cover"
                        />
                        <div>
                            <h2 className="text-[15px] font-medium text-[#1F2937] mb-2">{name}</h2>
                            <div className="flex gap-2 justify-center flex-wrap">
                                <span className={`text-[11px] font-medium px-3 py-1 rounded-full ${statusClass}`}>
                                    {status}
                                </span>

                                <p className="text-[11px] font-medium px-3 py-1 rounded-full bg-[#EAF3DE] text-[#3B6D11]">{tags}</p>
                                  <p className=' text-[#64748B] text-[13px]'>{bio}</p>
                                  <p className=' text-[#64748B] text-[12px]'> {email}</p>

                            </div>
                            
                        </div>
                    </div>

                    <button className="flex items-center gap-2 px-4 py-3 text-[13px] text-gray-500 bg-white border border-gray-200 rounded-lg w-full hover:bg-gray-50 transition-colors">
                   <RiNotificationSnoozeLine />Snooze 2 Weeks</button>

                    <button className="flex items-center gap-2 px-4 py-3 text-[13px] text-gray-500 bg-white border border-gray-200 rounded-lg w-full hover:bg-gray-50 transition-colors">
                        <FaArchive />Archive</button>

                    <button className="flex items-center gap-2 px-4 py-3 text-[13px] text-red-600 bg-white border border-gray-200 rounded-lg w-full hover:bg-red-50 transition-colors">
                        <MdOutlineDelete />Delete</button>
                </div>

                
<div className="flex flex-col gap-4 w-full max-w-2xl mx-auto ">

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
    <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
      <p className="text-[22px] sm:text-[26px] font-bold text-[#1F2937]">
        {days_since_contact}
      </p>
      <p className="text-[12px] text-gray-500 mt-1 uppercase tracking-wide">
        Days Since Contact
      </p>
    </div>
    
    <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
      <p className="text-[22px] sm:text-[26px] font-bold text-[#1F2937]">
        {goal}
      </p>
      <p className="text-[12px] text-gray-500 mt-1 uppercase tracking-wide">
        Goal
      </p>
    </div>
    
    <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
      <p className="text-[16px] sm:text-[17px] font-bold text-[#1F2937] truncate">
        {next_due_date}
      </p>
      <p className="text-[12px] text-gray-500 mt-1 uppercase tracking-wide">
        Next Due
      </p>
    </div>
  </div>


  <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
    <div className="flex justify-between items-center gap-4 mb-2">
      <p className="text-[14px] font-semibold text-[#1F2937]">Relationship Goal</p>
      <button className="text-[12px] font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-md px-4 py-1.5 hover:bg-gray-100 active:scale-95 transition-all">
        Edit
      </button>
    </div>
    <p className="text-[13px] text-gray-500">
      Connect every <span className="font-semibold text-[#1F2937]">{goal} days</span>
    </p>
  </div>


  <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
    <p className="text-[14px] font-semibold text-[#1F2937] mb-4">Quick Check-In</p>
    

    <div className="flex flex-col sm:flex-row gap-3">
      <button onClick={()=> handleFriends('Call')} className="flex flex-row sm:flex-col items-center justify-center gap-3 py-3 sm:py-5 px-5 border border-gray-200 rounded-xl flex-1 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all active:bg-blue-100">
        <BiPhoneCall className="text-xl" />
        <span className="text-sm font-medium">Call</span>
      </button>
      
      <button onClick={()=> handleFriends('Text')} className="flex flex-row sm:flex-col items-center justify-center gap-3 py-3 sm:py-5 px-5 border border-gray-200 rounded-xl flex-1 hover:bg-green-50 hover:border-green-200 hover:text-green-600 transition-all active:bg-green-100">
        <BsFillChatLeftTextFill className="text-xl" />
        <span className="text-sm font-medium">Text</span>
      </button>
      
      <button onClick={()=> handleFriends('Video')} className="flex flex-row sm:flex-col items-center justify-center gap-3 py-3 sm:py-5 px-5 border border-gray-200 rounded-xl flex-1 hover:bg-purple-50 hover:border-purple-200 hover:text-purple-600 transition-all active:bg-purple-100">
        <IoVideocamOutline className="text-xl" />
        <span className="text-sm font-medium">Video</span>
      </button>
    </div>
  </div>
</div>

            </div>
        </div>
    );
};

export default FriendsDetails;