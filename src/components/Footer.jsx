import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-[#FFFFFF] mt-20 pt-20 pb-10">
            <div className="container mx-auto px-4 lg:px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12 mb-16 border-b border-whit pb-16">
                    
                   <div className=' space-y-4'>
    <h1 className=' text-center font-bold text-6xl text-white '>KeenKeeper</h1>
    <p className=' text-center text-[#FFFFFF]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>


    
</div>


<h6 className="text-xl font-bold text-center">Social Links</h6>
                    <div>
                        
                        <div className="flex justify-center items-center gap-4">
                            <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-200 transition">
                                <svg xmlns="https://i.ibb.co.com/rJ0vHsd/3d74f98793e06e413eb658b769633cd7.jpg" width="24" height="24" viewBox="0 0 24 24" className="fill-[#101727]"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            </a>
                            <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-200 transition">
                                <svg xmlns="https://i.ibb.co.com/9mwTLnQx/20673.png" width="24" height="24" viewBox="0 0 24 24" className="fill-[#101727]"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                            </a>
                            <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-200 transition">
                                <svg xmlns="https://i.ibb.co.com/JjzZLNx1/twitter-x-logo-png-seeklogo-492393.png" width="24" height="24" viewBox="0 0 24 24" className="fill-[#101727]"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[#A0AEC0] text-sm">
                    <p>  &copy; 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Cookies</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;