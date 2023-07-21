import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 py-4 px-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <Link href="/">
            My Logo
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4 text-white">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
