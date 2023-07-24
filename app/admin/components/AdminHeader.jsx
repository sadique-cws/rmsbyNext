// components/AdminHeader.js

import Link from "next/link";

const AdminHeader = ({ isLoggedIn }) => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-slate-900">
      <Link href="/" className="text-white text-xl font-bold">Admin Panel</Link>
      <nav>
        {isLoggedIn ? (
          <button className="text-white font-semibold">Logout</button>
        ) : (
          <Link href="/login" className="text-white font-semibold">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default AdminHeader;
