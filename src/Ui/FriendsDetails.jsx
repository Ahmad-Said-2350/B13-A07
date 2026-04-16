import React from 'react';
import { useParams } from 'react-router';
import useFriends from '../hooks/useFriends';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaArchive } from 'react-icons/fa';
import { MdOutlineDelete } from 'react-icons/md';
import { BiPhoneCall } from 'react-icons/bi';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { IoVideocamOutline } from 'react-icons/io5';

const FriendsDetails = () => {
    const { id } = useParams();
    const friends = useFriends();
    const singleFriend = friends.find(friend => friend.id == id);

    if (!singleFriend) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-md"></span>
            </div>
        );
    }

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

                {/* ── Left Column ── */}
                <div className="flex flex-col gap-3">

                    {/* Profile Card */}
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
                    <IoMdNotificationsOutline />Snooze 2 Weeks</button>

                    <button className="flex items-center gap-2 px-4 py-3 text-[13px] text-gray-500 bg-white border border-gray-200 rounded-lg w-full hover:bg-gray-50 transition-colors">
                        <FaArchive />Archive</button>

                    <button className="flex items-center gap-2 px-4 py-3 text-[13px] text-red-600 bg-white border border-gray-200 rounded-lg w-full hover:bg-red-50 transition-colors">
                        <MdOutlineDelete />Delete</button>
                </div>

                <div className="flex flex-col gap-3">

                    <div className="flex gap-3">
                        <div className="bg-gray-50 rounded-lg p-4 text-center flex-1">
                  <p className="text-[26px] font-medium text-[#1F2937]">{days_since_contact }</p>
                            <p className="text-[12px] text-gray-500 mt-1">Days Since Contact</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 text-center flex-1">
                            <p className="text-[26px] font-medium text-[#1F2937]">{goal }</p>
                            <p className="text-[12px] text-gray-500 mt-1">Goal </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 text-center flex-1">
                            <p className="text-[17px] font-medium text-[#1F2937]">{next_due_date}</p>
                            <p className="text-[12px] text-gray-500 mt-1">Next Due</p>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-[14px] font-medium text-[#1F2937]">Relationship Goal</p>
                            <button className="text-[12px] text-gray-500 bg-gray-100 border border-gray-200 rounded-md px-3 py-1 hover:bg-gray-200 transition-colors">
                                Edit
                            </button>
                        </div>
                        <p className="text-[13px] text-gray-500">
                            Connect every <span className="font-medium text-[#1F2937]">{goal } days</span>
                        </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <p className="text-[14px] font-medium text-[#1F2937] mb-3">Quick Check-In</p>
                        <div className="flex gap-3">

                           

                            <button className="flex flex-col items-center gap-2 py-4 px-5 border border-gray-200 rounded-lg flex-1 hover:bg-gray-50 transition-colors">
                               
                               <BiPhoneCall /> Call
                            </button>
                            <button className="flex flex-col items-center gap-2 py-4 px-5 border border-gray-200 rounded-lg flex-1 hover:bg-gray-50 transition-colors">
                             <BsFillChatLeftTextFill />  Text
                            </button>
                            <button className="flex flex-col items-center gap-2 py-4 px-5 border border-gray-200 rounded-lg flex-1 hover:bg-gray-50 transition-colors">
                             <IoVideocamOutline />   Video
                            </button>

                        </div>
                    </div>

                   

                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;