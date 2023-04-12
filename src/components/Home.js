import React from 'react';
import homeImg from '../Assests/3dpay5 1.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div   className='w-full h-screen flex justify-center items-center'>
            <div className='shadow-2xl p-16 flex flex-col justify-center items-center'>
                <img src={homeImg} alt="" />
                <div className='text-white space-x-16'>
                    <Link to={`/category/${'a'}`} className='p-10 inline-block text-[40px] font-bold leading-[51px] rounded-md bg-[#3785FA]'>Category A</Link>
                    <Link to={`/category/${'b'}`} className='p-10 inline-block text-[40px] font-bold leading-[51px] rounded-md bg-[#2BB79E]'>Category B</Link>

                </div>
            </div>
        </div>
    );
};

export default Home;