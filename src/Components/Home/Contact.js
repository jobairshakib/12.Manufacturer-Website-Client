import React from 'react';

const Contact = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Lets talk about everything!</h1>
                        <p class="py-6">Hate forms? Send us an email instead.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <div class="card-body">
                            <div class="form-control border-0">
                                <label class="label">
                                    <span class="label-text font-bold">Full Name</span>
                                </label>
                                <input type="text" placeholder="Name" class="input input-bordered" />
                            </div>
                            <div class="form-control border-0">
                                <label class="label">
                                    <span class="label-text font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="Email" class="input input-bordered" />
                            </div>
                            <div class="form-control border-0">
                                <label class="label">
                                    <span class="label-text font-bold">Email</span>
                                </label>
                                <textarea type="text" placeholder="Message" class="w-full h-32 input input-bordered" />
                            </div>
                            
                            <div class="form-control mt-6 border-0">
                                <button
                                    class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
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