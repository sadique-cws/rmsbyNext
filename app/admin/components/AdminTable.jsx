"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const AdminPanel = () => {
  const [data, setData] = useState([]);

  return (
    
      <>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Manage Result</h2>
        <Link href="/admin/result/add" className='bg-teal-700 text-white px-3 py-2 rounded'>Add New Result</Link>
      </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Student</th>
              <th className="py-2 px-4">Maths</th>
              <th className="py-2 px-4">Sci</th>
              <th className="py-2 px-4">Hindi</th>
              <th className="py-2 px-4">Eng</th>
              <th className="py-2 px-4">SST</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.subject}</td>
                <td className="py-2 px-4">{item.fields.join(', ')}</td>
                <td className="py-2 px-4">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded mr-2">Edit</button>
                  <button className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </>
     
  );
};

export default AdminPanel;
