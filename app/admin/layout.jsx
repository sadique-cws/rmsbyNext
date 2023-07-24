import Link from "next/link";
import AdminHeader from "./components/AdminHeader";

export default function AdminLayout({ children }) {
  return (
    <section>
      <AdminHeader />

      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-2/12 bg-gray-800 text-white">
          <div className="p-4">
            <ul className="mt-4">
              <li className="py-2 hover:text-gray-300">
                <Link href="admin/">Dashboard</Link>
              </li>
              <li className="py-2 hover:text-gray-300">
                <Link href="/admin/result/manage">Manage Results</Link>
              </li>
              <li className="py-2 hover:text-gray-300">
              <Link href="/admin/user">Manage Users</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CRUD Table Form */}
        <div className="w-10/12 p-8">{children}</div>
      </div>
    </section>
  );
}
