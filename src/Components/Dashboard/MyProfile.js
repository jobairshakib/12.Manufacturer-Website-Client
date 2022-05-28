import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../.firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <>
            <section>
                <div className="">
                    <h1 className="text-center text-2xl lg:text-3xl font-koulen font-semibold uppercase my-4">
                        {" "}
                        My <span className="text-primary-focus">Profile</span>
                    </h1>
                    <div className=" flex flex-col px-8 gap-5 lg:px-16 py-14 lg:flex-row justify-between ">
                        <div className=" w-3/3 shadow-md rounded-lg lg:w-3/5 bg-base-100">
                            <div className="flex flex-col items-center py-10 px-5">
                                {user.photoURL && <div className="avatar">
                                    <div className=" w-full lg:w-72 rounded-full ring ring-primary ring-offset-base-200 ring-offset-2">
                                        <img src={user.photoURL} alt="" />
                                    </div>
                                </div>}

                                <div className=" card-body">
                                    <h1 className="font-semibold text-3xl ">{}</h1>
                                    <h1 className="font-bold">
                                        Name :{" "}
                                        <span className="font-bold text-primary-focus text-xl">
                                            {user.displayName}
                                        </span>{" "}
                                    </h1>
                                    <h1 className="font-bold">
                                        Email :{" "}
                                        <span className="font-bold text-primary-focus text-xl">{user.email}</span>
                                    </h1>
                                    
                                </div>
                            </div>
                        </div>

                        <div className=" w-full lg:w-96 mt-8 lg:mt-0 shadow-md px-5 bg-base-100 pb-5  rounded-xl ">
                            <h1 className="text-center text-2xl font-semibold  py-5  text-primary-focus">
                               Upadate Profile
                            </h1>

                            <form>
                                <div className="flex flex-col ">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        name="yourName"
                                        value={user.displayName}
                                        className="input w-full placeholder:text-[15px] py-2 mb-3 "
                                        disabled
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={user.email}
                                        className="input w-full placeholder:text-[15px] py-2 my-3"
                                        disabled
                                    />
                                    <input
                                        type="text"
                                        name="education"
                                        placeholder="Education"
                                        className="input input-bordered w-full placeholder:text-[15px] py-2 my-3"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="City"
                                        name="location"
                                        className="input input-bordered  placeholder:text-[15px] py-2 my-3"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone Number"
                                        className="input input-bordered w-full placeholder:text-[15px] py-2 my-3"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="linkedIn"
                                        placeholder="Your LinkedIN Profile"
                                        className="input input-bordered w-full placeholder:text-[15px] py-2 my-3"
                                        required
                                    />
                                    
                                </div>

                                <button
                                    type="submit"
                                    className="px-8 mt-5 btn btn-primary w-full"
                                >
                                    Update
                                </button>

                            </form>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyProfile;