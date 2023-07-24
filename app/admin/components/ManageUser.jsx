"use client"
import React, { useState, useEffect } from 'react';

const ManageUsersTable = () => {
  // State to hold the list of users
  const [users, setUsers] = useState([]);

  // Fetch users data using the Fetch API
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/user'); // Replace with your API endpoint
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Father's Name</th>
            <th className="py-2 px-4">School</th>
            <th className="py-2 px-4">Class Name</th>
            <th className="py-2 px-4">Roll</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Contact</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.fathername}</td>
              <td className="py-2 px-4">{user.school}</td>
              <td className="py-2 px-4">{user.className}</td>
              <td className="py-2 px-4">{user.roll}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsersTable;
