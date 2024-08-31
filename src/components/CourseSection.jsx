import CourseCard from './CourseCard';
import coursesData from '../components/data/coursesData';

const CoursesList = () => {
  return (
    <section id='courses' className="bg-[#F5F5F5] py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-semibold text-[#003366] mb-12 text-center">Courses</h2> {/* Enhanced Heading */}
        <div className="flex flex-wrap justify-center">
          {coursesData.map((course, index) => (
            <CourseCard 
              key={index}
              image={course.image}
              name={course.name}
              desc={course.desc}
              link={course.link} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesList;
