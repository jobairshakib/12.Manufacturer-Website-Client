import { faMessage, faPeopleCarry, faSackDollar, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CountUp from 'react-countup';

const Summary = () => {
    return (
        <>
            <h2 className='text-3xl font-bold text-center'>Business Summary</h2>
        <div className='px-8 d-lg-grid grid-cols-4'>
            <div class="m-4  card card-compact border-none">
                
                <div class="card-body gap-0 text-center">
                    <p className='text-4xl'><FontAwesomeIcon icon={faPeopleCarry} /></p>
                    <h2 class="card-title justify-center">Customers</h2>
                    <p className='text-2xl font-bold'><CountUp end={100} />+</p>
                    
                </div>
            </div>
            <div class="m-4 card card-compact border-none">
                
                <div class="card-body gap-0 text-center">
                    <p className='text-4xl'><FontAwesomeIcon icon={faSackDollar} /></p>
                    <h2 class="card-title justify-center">Annual revenue</h2>
                    <p className='text-2xl font-bold'><CountUp end={120} />M+</p>
                    
                </div>
            </div>
            <div class="m-4 card card-compact border-none">
                
                <div class="card-body gap-0 text-center">
                    <p className='text-4xl'><FontAwesomeIcon icon={faMessage} /></p>
                    <h2 class="card-title justify-center">Reviews</h2>
                    <p className='text-2xl font-bold'><CountUp end={33} />K+</p>
                    
                </div>
            </div>
            <div class="m-4 card card-compact border-none">
                
                <div class="card-body text-center">
                    <p className='text-4xl'><FontAwesomeIcon icon={faToolbox} /></p>
                    <h2 class="card-title justify-center">Parts</h2>
                    <p className='text-2xl font-bold'><CountUp end={50} />+</p>
                    
                </div>
            </div>
            
        </div>
        </>
    );
};

export default Summary;