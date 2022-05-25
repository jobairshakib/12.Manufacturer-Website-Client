import React from 'react';
import banner from '../../images/banner.jpg'
const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class="lg:max-w-md rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold text-primary-focus">PC Manaia</h1>
                    <p class="py-6">PC Mania is a multinational technology company specializing in designing, manufacturing, and marketing consumer personal computers, software. Products manufactured by the company include desktop computers parts, laptops parts,  supercomputers, electronic storage devices.</p>
                    <button class="btn btn-primary">Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;