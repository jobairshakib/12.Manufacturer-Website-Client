import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading,refetch } = useQuery('users', () => fetch(`http://localhost:5000/user`, {
        headers: {
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())); 
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2>Users : {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th className='text-primary-focus text-base'>Name</th>
                            <th className='text-primary-focus text-base'>ROle</th>
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