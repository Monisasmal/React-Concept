import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Brand Name */}
      <div className="text-xl font-bold text-gray-800">
        <Link to="/">React Guide</Link>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 text-gray-600 font-medium">
        <Link to="/" className="hover:text-black transition">Home</Link>
        <Link to="/concepts" className="hover:text-black transition">Concepts</Link>
        <Link to="/projects" className="hover:text-black transition">Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;