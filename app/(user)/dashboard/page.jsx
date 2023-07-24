import React from 'react';

const UserDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Add your user dashboard content here */}
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>
        <p className="text-gray-600">
          This is the user dashboard where you can manage your account and view your information.
        </p>
        <div className='flex justify-center'>
        <table className='border-2 border-slate-900 w-1/2'>
            <thead>
                <tr className='bg-sky-600 text-white'>
                  <th className='border p-2' colSpan={4}>Personal Details</th>
                </tr>
                <tr>
                  <th className='border-2 p-2' colSpan={2}>Full Name</th>
                  <td className='border-2 p-2' colSpan={2}>Sadique</td>
                </tr>
                <tr>
                  <th className='border-2 p-2' colSpan={2}>Father Name</th>
                  <td className='border-2 p-2' colSpan={2}>Sadique</td>
                </tr>
                <tr>
                  <th className='border-2 p-2' colSpan={2}>Contact</th>
                  <td className='border-2 p-2' colSpan={2}>Sadique</td>
                </tr>
                <tr>
                  <th className='border-2 p-2' colSpan={2}>Email</th>
                  <td className='border-2 p-2' colSpan={2}>Sadique</td>
                </tr>
                <tr>
                  <th className='border-2 p-2' colSpan={2}>Roll No</th>
                  <td className='border-2 p-2' colSpan={2}>12</td>
                </tr>
                <tr>
                  <th className='border-2 p-2' colSpan={2}>Class </th>
                  <td className='border-2 p-2' colSpan={2}>12</td>
                </tr>
                <tr>
                  <th className='border-2 p-2' colSpan={2}>School</th>
                  <td className='border-2 p-2' colSpan={2}>12</td>
                </tr>
                <tr className='bg-red-600 text-white'>
                  <th className='border p-2' colSpan={4}>Marks Details</th>
                </tr>
                <tr>
                  <th className="border-2 p-2">Subject</th>
                  <th className="border-2 p-2">Total</th>
                  <th className="border-2 p-2">Pass</th>
                  <th className="border-2 p-2">Obtain</th>
                </tr>
                <tr>
                  <th className="border-2 p-2">Maths</th>
                  <td className="border-2 p-2">100</td>
                  <td className="border-2 p-2">33</td>
                  <td className="border-2 p-2">56</td>
                </tr>
                <tr>
                  <th className="border-2 p-2">Sci</th>
                  <td className="border-2 p-2">100</td>
                  <td className="border-2 p-2">33</td>
                  <td className="border-2 p-2">56</td>
                </tr>
                <tr>
                  <th className="border-2 p-2">Sst</th>
                  <td className="border-2 p-2">100</td>
                  <td className="border-2 p-2">33</td>
                  <td className="border-2 p-2">56</td>
                </tr>
                <tr>
                  <th className="border-2 p-2">Eng</th>
                  <td className="border-2 p-2">100</td>
                  <td className="border-2 p-2">33</td>
                  <td className="border-2 p-2">56</td>
                </tr>
                <tr>
                  <th className="border-2 p-2">Urdu</th>
                  <td className="border-2 p-2">100</td>
                  <td className="border-2 p-2">33</td>
                  <td className="border-2 p-2">56</td>
                </tr>
                <tr className='bg-green-600 text-white'>
                  <th className='border p-2' colSpan={4}>Result Details</th>
                </tr>
                <tr>
                <th className='border-2 p-2' colSpan={2}>Total Marks</th>
                  <td className='border-2 p-2' colSpan={2}>12</td>
                </tr>
                <tr>
                <th className='border-2 p-2' colSpan={2}>Division</th>
                  <td className='border-2 p-2' colSpan={2}>1st</td>
                </tr>
            </thead>
        </table>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
