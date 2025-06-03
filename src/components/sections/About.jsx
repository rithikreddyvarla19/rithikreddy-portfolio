const About = () => {
  return (
    <section id="about" className="py-12 flex items-center justify-center">
      <div className="max-w-3xl flex flex-col items-center gap-6 p-4">
        <h2 className="text-lg md:text-xl font-bold">About Me</h2>
        <div className="flex flex-col gap-12">
          <p className="text-sm md:text-base font-medium text-gray-400">
            I'm a{" "}
            <span className="font-bold text-white">Frontend Developer</span>{" "}
            with expertise in building scalable web applications and creating
            innovative solutions. I am excited about building saas apps that has
            real-world use cases.
          </p>

          {/* Education and Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="font-mono text-base md:text-lg font-bold mb-4">
                🏫 Education
              </p>
              <ul className="text-sm flex flex-col gap-2">
                <li>
                  <span className="font-bold">B. Tech in Computer Science</span>{" "}
                  - KKR & KSR INSTITUTE OF TECHNOLOGY AND SCIENCES (2020 - 2024)
                </li>
                <li>
                  <span className="font-bold">Related Course Work</span> - Data
                  Structures & Algorithms, Software Engineering, Web
                  Technologies, Database Management Systems, Artificial
                  Intelligence, Distributed Systems, etc.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-base md:text-lg font-bold mb-4">
                💼 Experience
              </p>
              <ul className="text-sm flex flex-col gap-2">
                <li>
                  <span className="font-bold">Full Stack Developer Intern</span>{" "}
                  - INFOSOL (Oct 2024 - Mar 2025)
                </li>
                <li>
                  - Developed Admin Dashboards and AI Integrated Chatbots for
                  businesses.
                </li>
                <li>
                  - Gained expertise in building and scaling web applications.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
