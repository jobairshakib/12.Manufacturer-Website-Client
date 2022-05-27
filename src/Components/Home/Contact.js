import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Lets talk about everything!</h1>
                        <p className="py-6">Hate forms? Send us an email instead.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <div className="card-body">
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="label-text font-bold">Full Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="label-text font-bold">Message</span>
                                </label>
                                <textarea type="text" placeholder="Message" className="w-full h-32 input input-bordered" />
                            </div>
                            
                            <div className="form-control mt-6 border-0">
                                <button
                                    className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;