import React from 'react';
import { IoMdAdd } from 'react-icons/io';

const Hero = () => {
    return (
        <div className=' mt-20 space-y-4 container mx-auto'>
            <h2 className=' text-5xl text-center font-bold text-[#1F2937] '>Friends to keep close in your life</h2>
            <p className=' text-[#64748B] text-center '>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
<div className=' flex justify-center items-center'>
  <button className=' btn bg-[#244D3F] text-white'> <IoMdAdd />Add a Friend</button>
</div>
<div className=' mt-10 w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 '>
<div className="stats bg-base-100 border-base-300 border w-64.75 h-34.25  overflow-hidden  ">
  <div className="stat">
    
    <div className="stat-value text-[#244D3F] text-center">10</div>
    <p className=' text-[#64748B] text-center'>Total Friends</p>
    
  </div>

  
</div>   
<div className="stats bg-base-100 border-base-300 border w-64.75 h-34.25  overflow-hidden ">
  <div className="stat">
    
    <div className="stat-value text-[#244D3F] text-center">3</div>
    <p className=' text-[#64748B] text-center'>On Track</p>
    
  </div>

  
</div>   
<div className="stats bg-base-100 border-base-300 border w-64.75 h-34.25 overflow-hidden ">
  <div className="stat">
    
    <div className="stat-value text-[#244D3F] text-center">6</div>
    <p className=' text-[#64748B] text-center'>Need Attention</p>
    
  </div>

  
</div>   
<div className="stats bg-base-100 border-base-300 border w-64.75 h-34.25  overflow-hidden ">
  <div className="stat ">
    
    <div className="stat-value text-[#244D3F] text-center">12</div>
    <p className=' text-[#64748B] text-center'>Interactions This Month</p>
    
  </div>

  
</div>   




</div>







        </div>
    );
};

export default Hero;