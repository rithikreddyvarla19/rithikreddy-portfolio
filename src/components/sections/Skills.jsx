const Skills = () => {
// Programming Languages
const programmingLanguages = [
  { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
  { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
  { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
  { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
  { name: "TypeScript", icon: "https://skillicons.dev/icons?i=typescript" },
  { name: "SQL", icon: "https://skillicons.dev/icons?i=mysql" },
  { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
];

// Cloud & DevOps
const cloudDevOpsSkills = [
  { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
  { name: "Google Cloud Platform", icon: "https://skillicons.dev/icons?i=gcp" },
  { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
  { name: "Kubernetes", icon: "https://skillicons.dev/icons?i=kubernetes" },
  { name: "GitHub Actions", icon: "https://skillicons.dev/icons?i=githubactions" },
  { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
  { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
];

// Databases & Caches
const databaseSkills = [
  { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgresql" },
  { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
  { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
  { name: "Redis", icon: "https://skillicons.dev/icons?i=redis" },
];

// Data / Backend Engineering
const dataEngineeringSkills = [
  { name: "FastAPI", icon: "https://skillicons.dev/icons?i=fastapi" },
  { name: "Flask", icon: "https://skillicons.dev/icons?i=flask" },
  { name: "Celery", icon: "https://cdn.simpleicons.org/celery" }, // task queue used in CloudTasker
];

// Frameworks & Tools
const frameworksTools = [
  { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
  { name: "React.js", icon: "https://skillicons.dev/icons?i=react" },
  { name: "Spring Boot", icon: "https://skillicons.dev/icons?i=spring" },
  { name: "TensorFlow", icon: "https://skillicons.dev/icons?i=tensorflow" },
  { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv" },
  { name: "Grafana", icon: "https://skillicons.dev/icons?i=grafana" },
  { name: "Prometheus", icon: "https://img.icons8.com/?size=512&id=F10J0X1IWs2h&format=png" }, // custom
  { name: "Kibana", icon: "https://cdn.simpleicons.org/kibana" },
  { name: "Splunk", icon: "https://cdn.simpleicons.org/splunk" },
  { name: "JWT (Auth)", icon: "https://cdn.simpleicons.org/jsonwebtokens" }, // for your DevBoard APIs
  { name: "REST APIs", icon: "https://cdn.simpleicons.org/apachespark" }, // placeholder icon; feel free to swap
];


  return (
    <section id="skills" className="py-12 flex items-center justify-center">
      <div className="max-w-4xl flex flex-col items-center gap-6 p-4">
        <h2 className="text-lg md:text-xl font-bold">My Skills</h2>
        <div className="grid grid-cols-1 gap-12">

          {/* Languages */}
          <div>
            <p className="text-base md:text-lg font-bold mb-4">Programming Languages</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
              {programmingLanguages.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center bg-stone-900 rounded px-4 py-2 gap-2"
                >
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div>
            <p className="text-base md:text-lg font-bold mb-4">Cloud & DevOps</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
              {cloudDevOpsSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center bg-stone-900 rounded px-4 py-2 gap-2"
                >
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div>
            <p className="text-base md:text-lg font-bold mb-4">Databases</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
              {databaseSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center bg-stone-900 rounded px-4 py-2 gap-2"
                >
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Data Engineering */}
          <div>
            <p className="text-base md:text-lg font-bold mb-4">Data Engineering</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
              {dataEngineeringSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center bg-stone-900 rounded px-4 py-2 gap-2"
                >
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & Tools */}
          <div>
            <p className="text-base md:text-lg font-bold mb-4">Frameworks & Tools</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
              {frameworksTools.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center bg-stone-900 rounded px-4 py-2 gap-2"
                >
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
