import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({ friend }) => {
    const {id,picture,name,days_since_contact,tags,status} = friend;

const statusClass =
  status === "overdue"
    ? "bg-[#EF4444] text-[#FFFFFF]"
    : status === "almost due"
    ? "bg-[#EFAD44] text-[#FFFFFF]"
    : "bg-[#244D3F] text-[#FFFFFF]";


    return (
        <Link to={`/FriendsDetails/${id}`} className="card mx-auto bg-base-100 w-96 shadow-sm mt-4 space-y-5">
  <figure className="px-10 pt-10 ">
    <img 
      src={picture}
      alt="Shoes"
      className="rounded-[50%] w-20 h-20" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-semibold text-[20px] text-[#1F2937]">{name}</h2>
    <p className=' text-[#64748B]'>{days_since_contact}</p>
    <p className=' text-[#244D3F] bg-[#CBFADB] font-semibold rounded-[20px] p-1'>{tags}</p>
    <p className={`font-semibold px-3 py-1 rounded-full ${statusClass}`}>{status}</p>
    
    
  </div>
</Link>
    );
};

export default FriendsCard;