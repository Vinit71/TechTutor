import { toast, Toaster } from 'react-hot-toast';
function Footer() {
    const handleClick = (event) => {
      event.preventDefault(); 
      toast('Terms and conditions? Nah, we’re not showing them. We know you’re not gonna read them anyway! 😄');
    };
    return (
      <footer className="bg-[#003366] text-[#FFFFFF] py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold hidden md:block">Tech Tutor</h3>
              <p className="text-sm">© 2024 Tech Tutor. All rights reserved.</p>
            </div>
            <div className="text-[#FFFFFF] text-lg flex space-x-4">
              <a href="https://www.linkedin.com/in/vinitkumar-intech-dev71" className="hover:text-gray-400">
                Contact
              </a>
              <a href="#" onClick={handleClick} className="hover:text-gray-400">
                Term and Conditions
              </a>
              <Toaster position="bottom-center" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  