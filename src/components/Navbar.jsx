import Logo from "../assets/Logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-[#003366] p-1"> {/* Navy Blue Navbar */}
      <div className="container mx-auto flex items-center">
        {/* Logo on the left */}
        <div className="flex items-center flex-shrink-0 cursor-pointer">
          <img
            src={Logo}
            alt="Logo"
            className="h-16 w-16 rounded-full"
          />
        </div>

        {/* Centered Links */}
        <div className="flex-grow flex justify-center space-x-6">
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="text-lg text-[#FFFFFF] hover:text-gray-400 cursor-pointer"
          >
            Home
          </Link>
          <Link 
            to="courses" 
            smooth={true} 
            duration={500} 
            className="text-lg text-[#FFFFFF] hover:text-gray-400 cursor-pointer"
          >
            Courses
          </Link>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="text-lg text-[#FFFFFF] hover:text-gray-400 cursor-pointer"
          >
            About
          </Link>
          <a
            href="https://github.com/Vinit71"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-[#FFFFFF] hover:text-gray-400 cursor-pointer"
          >
            Github
          </a>



          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
