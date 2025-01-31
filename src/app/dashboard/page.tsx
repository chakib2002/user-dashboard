'use client'

import { useState } from 'react';

const initialUsers = [
    {
        id: 1,
        username: 'john_doe',
        surname: 'Doe',
        email: 'john.doe@example.com',
        phone: '+1234567890',
        address: '123 Main St, Springfield, IL',
    },
    {
        id: 2,
        username: 'jane_smith',
        surname: 'Smith',
        email: 'jane.smith@example.com',
        phone: '+0987654321',
        address: '456 Elm St, Springfield, IL',
    },
];

export default function Page() {
    const [users, setUsers] = useState(initialUsers);
    const [newUser, setNewUser] = useState({
        username: '',
        surname: '',
        email: '',
        phone: '',
        address: '',
    });

    const [editUser, setEditUser] = useState<any>(null); // for the modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddUser = (e: any) => {
        e.preventDefault();
        setUsers([
            ...users,
            { id: users.length + 1, ...newUser },
        ]);
        setNewUser({
            username: '',
            surname: '',
            email: '',
            phone: '',
            address: '',
        });
    };

    const handleRemoveUser = (id: number) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const handleEditUser = (user: any) => {
        setEditUser(user);
        setIsModalOpen(true);
    };

    const handleSaveEdit = () => {
        setUsers(users.map((user) =>
            user.id === editUser.id ? editUser : user
        ));
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-8">User Dashboard</h1>

            {/* Add New User Form */}
            <div className="mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-center">Add New User</h2>
                <form onSubmit={handleAddUser} className="space-y-4">
                    <input
                        type="text"
                        value={newUser.username}
                        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                        placeholder="Username"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <input
                        type="text"
                        value={newUser.surname}
                        onChange={(e) => setNewUser({ ...newUser, surname: e.target.value })}
                        placeholder="Surname"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <input
                        type="email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        placeholder="Email Address"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <input
                        type="text"
                        value={newUser.phone}
                        onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                        placeholder="Phone"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <input
                        type="text"
                        value={newUser.address}
                        onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
                        placeholder="Address"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                        Add User
                    </button>
                </form>
            </div>

            {/* User List Table */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">User List</h2>
                <table className="min-w-full bg-white shadow-md rounded-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-3 text-left">Username</th>
                            <th className="p-3 text-left">Surname</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Phone</th>
                            <th className="p-3 text-left">Address</th>
                            <th className="p-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b">
                                <td className="p-3">{user.username}</td>
                                <td className="p-3">{user.surname}</td>
                                <td className="p-3">{user.email}</td>
                                <td className="p-3">{user.phone}</td>
                                <td className="p-3">{user.address}</td>
                                <td className="p-3 text-center">
                                    <button
                                        onClick={() => handleEditUser(user)}
                                        className="text-blue-500 hover:text-blue-700 mr-3"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleRemoveUser(user.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Edit User Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-md shadow-md w-1/3">
                        <h2 className="text-xl font-semibold mb-4">Edit User</h2>
                        <form onSubmit={(e) => { e.preventDefault(); handleSaveEdit(); }} className="space-y-4">
                            <input
                                type="text"
                                value={editUser.username}
                                onChange={(e) => setEditUser({ ...editUser, username: e.target.value })}
                                placeholder="Username"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                            <input
                                type="text"
                                value={editUser.surname}
                                onChange={(e) => setEditUser({ ...editUser, surname: e.target.value })}
                                placeholder="Surname"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                            <input
                                type="email"
                                value={editUser.email}
                                onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                                placeholder="Email Address"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                            <input
                                type="text"
                                value={editUser.phone}
                                onChange={(e) => setEditUser({ ...editUser, phone: e.target.value })}
                                placeholder="Phone"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                            <input
                                type="text"
                                value={editUser.address}
                                onChange={(e) => setEditUser({ ...editUser, address: e.target.value })}
                                placeholder="Address"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
