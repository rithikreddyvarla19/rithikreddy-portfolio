import { Github } from "lucide-react";
import projectImg from "../../assets/project.jpg"; 

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Pollution Tracker",
      image: projectImg,
      code: "https://github.com/rithikreddyvarla19/pollutionTracker",
      technologies: ["HTML", "CSS", "JavaScript", "APIs", "Deployment"],
      description:
        "A web-based application that monitors and displays real-time pollution levels using public APIs. Designed with scalability and deployment in mind, it emphasizes clean data visualization and environmental awareness.",
    },
    {
      id: 2,
      name: "E-Waste Management System",
      image: projectImg,
      code: "https://github.com/rithikreddyvarla19/e-waste",
      technologies: ["Python", "Jupyter Notebook", "Data Analysis", "Visualization"],
      description:
        "A data-driven project analyzing patterns of electronic waste generation and recycling. Focuses on handling large datasets, cleaning, and visualization — skills valuable for data engineering and sustainable tech solutions.",
    },
    {
      id: 3,
      name: "Stock Market Prediction with Flask",
      image: projectImg,
      code: "https://github.com/rithikreddyvarla19/stock_market_prediction_withFlask",
      technologies: ["Python", "Flask", "Machine Learning", "Pandas", "Scikit-learn"],
      description:
        "An end-to-end ML pipeline that predicts stock market trends from historical data. Integrated with Flask for deployment, demonstrating how to package ML models into production-ready web applications.",
    },
  ];

  return (
    <section id="projects" className="py-12 flex items-center justify-center">
      <div className="max-w-3xl flex flex-col items-center gap-6 p-4">
        <h2 className="text-lg md:text-xl font-bold">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-12 w-full">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col gap-4 border-2 border-gray-700 rounded-2xl relative pb-12"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-t-2xl object-cover"
              />
              <div className="flex flex-col gap-4 p-4">
                <h3 className="text-base md:text-lg font-bold">
                  {project.name}
                </h3>
                <p className="text-xs md:text-sm font-medium text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-stone-800 text-white px-3 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-start absolute bottom-0 left-0 right-0 p-4">
                  <a
                    href={project.code}
                    target="_blank"
                    className="bg-white text-black text-xs flex items-center gap-2 font-medium px-4 py-2 rounded"
                  >
                    <Github className="size-4" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
