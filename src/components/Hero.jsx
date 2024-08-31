import heroBg from "../assets/heroBg.mp4";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroBg}
        autoPlay
        muted
        loop
      />
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> {/* Dark Overlay */}
      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Tech Tutor</h1>
        <p className="text-lg">Your gateway to quality education</p>
      </div>
    </section>
  );
};

export default HeroSection;
