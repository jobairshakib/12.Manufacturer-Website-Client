import { faHeadset, faShieldAlt, faTentArrowTurnLeft, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DeliveryInfo = () => {
    return (
        <div>
            <div className='row d-flex p-3 mt-5 w-100 mx-auto'>
                <div className='d-lg-flex w-[90%] justify-content-between align-items-center mx-auto border-[1px]  border-primary-focus'>
                    <div className='d-flex m-3 align-items-center' >
                        <h2 className='text-primary-focus text-3xl'><FontAwesomeIcon icon={faTruckFast} /></h2>
                        <div className='mx-3'>
                            <h5 className='text-lg font-bold'>Free Shipping</h5>
                            <p className='text-secondary'>On all orders over country 75৳</p>
                        </div>
                    </div>
                    <div className='d-flex m-3 align-items-center'>
                        <h2 className='text-primary-focus text-3xl'><FontAwesomeIcon icon={faTentArrowTurnLeft} /></h2>
                        <div className='mx-3'>
                            <h5 className='text-lg font-bold'>Free Returns</h5>
                            <p className='text-secondary'>Returns are free within 9 days</p>
                        </div>
                    </div>
                    <div className='d-flex m-3 align-items-center'>
                        <h2 className='text-primary-focus text-3xl'> <FontAwesomeIcon icon={faShieldAlt} /></h2>
                        <div className='mx-3'>
                            <h5 className='text-lg font-bold'>100% Payment Secure</h5>
                            <p className='text-secondary'>Your payment are safe with us.</p>
                        </div>
                    </div>
                    <div className='d-flex m-3 align-items-center'>
                        <h2 className='text-primary-focus text-3xl'><FontAwesomeIcon icon={faHeadset} /></h2>
                        <div className='mx-3'>
                            <h5 className='text-lg font-bold'>Support 24/7</h5>
                            <p className='text-secondary'>Contact us 24 hours a day</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryInfo;