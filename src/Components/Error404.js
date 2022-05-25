import React from 'react';
import { Link } from 'react-router-dom';
import error404 from '../images/err404.png'

const Error404 = () => {
    return (
        <>
            <section className="bg-base-100">
                <div className="flex justify-center items-center">
                    <img src={error404} alt="" />
                </div>
                <h2 className="tex-3xl text-center font-bold">404 ERROR. Page Not Found</h2>
                <div className='w-screen text-center mt-4'>
                    <Link to="/">
                        <button className="btn uppercase btn-primary">
                            Back to The home
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Error404;