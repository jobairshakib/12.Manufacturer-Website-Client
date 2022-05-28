import { faPeopleArrows, faPerson, faTrash, faTrashAlt, faTrashArrowUp, faTrashCan, faUnlockKeyhole, faUserLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user,refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://pc-mania.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("You don't have Permission to make Admin")
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Admin added Successfully');
                }
        })
    }
    return (
        <tr>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs btn-success text-white gap-2'>Make Admin<FontAwesomeIcon icon={faUserLock} /></button>}</td>
            <td><button className='btn btn-xs btn-error gap-2 text-white'>Remove<FontAwesomeIcon icon={faTrash} /></button></td>
        </tr>
    );
};

export default UserRow;