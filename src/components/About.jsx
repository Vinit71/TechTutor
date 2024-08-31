import collegeImage from "../assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="bg-[#E0F2F1] py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img 
              src={collegeImage} 
              alt="College Assignments" 
              className="w-full h-80 rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              About Us
            </h2>
            <p className="text-lg text-[#333333]">
            These websites were developed as part of our college semester assignments, showcasing our comprehensive understanding of various web development concepts and technologies. Each project reflects what we learned, including HTML, CSS, JavaScript, and backend technologies, to create functional and visually appealing web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
