import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading,refetch } = useQuery('users', () => fetch(`https://pc-mania.herokuapp.com/user`, {
        headers: {
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())); 
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th className='text-primary-focus text-base'>Name</th>
                            <th className='text-primary-focus text-base'>Role</th>
                            <th className='text-primary-focus text-base'>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;