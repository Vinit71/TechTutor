import PropTypes from 'prop-types';

const CourseCard = ({ image, name, desc, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 border border-[#003366]">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#003366]">
          {name}
        </div>
        <p className="text-gray-700 text-base">
          {desc}
        </p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#003366] text-white font-bold py-2 px-4 rounded-full hover:bg-[#002a5c] transition duration-300 ease-in-out mt-4 inline-block text-center"
        >
          Start Learning
        </a>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CourseCard;
