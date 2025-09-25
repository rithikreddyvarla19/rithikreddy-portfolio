const Skills = () => {
  const programmingLanguages = [
    { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
    { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
    { name: "C", icon: "https://skillicons.dev/icons?i=c" },
    { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
    { name: "SQL", icon: "https://skillicons.dev/icons?i=mysql" },
  ];

  const cloudDevOpsSkills = [
    { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
    {name: "Google Cloud Platform", icon: "https://skillicons.dev/icons?i=gcp" },
    { name: "Azure", icon: "https://skillicons.dev/icons?i=azure" },
    { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
    { name: "Kubernetes", icon: "https://skillicons.dev/icons?i=kubernetes" },
    { name: "Podman", icon: "https://img.icons8.com/?size=512&id=tnHZywoCk3hW&format=png" }, // custom icon
    { name: "Terraform", icon: "https://skillicons.dev/icons?i=terraform" },
    { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
  ];

  const databaseSkills = [
    { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgresql" },
    { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
  ];

  const dataEngineeringSkills = [
    { name: "Apache Airflow", icon: "https://img.icons8.com/?size=512&id=gK2eg3PjmjD5&format=png" }, // custom
    { name: "PySpark", icon: "https://spark.apache.org/images/spark-logo-rev.svg" }, // official logo
    { name: "Azure Data Factory", icon: "https://img.icons8.com/?size=512&id=ahJez3J2k0lR&format=png" }, // custom
    { name: "Synapse Analytics", icon: "https://img.icons8.com/?size=512&id=YtMhGItQeapO&format=png" }, // custom
  ];

  const frameworksTools = [
    { name: "FastAPI", icon: "https://skillicons.dev/icons?i=fastapi" },
    { name: "Spring MVC", icon: "https://skillicons.dev/icons?i=spring" },
    { name: "TensorFlow", icon: "https://skillicons.dev/icons?i=tensorflow" },
    { name: "Grafana", icon: "https://skillicons.dev/icons?i=grafana" },
    { name: "Prometheus", icon: "https://img.icons8.com/?size=512&id=F10J0X1IWs2h&format=png" }, // custom
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
