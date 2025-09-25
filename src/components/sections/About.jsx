import ucfLogo from "../../assets/ucf-logo.png";
import gitamLogo from "../../assets/gitam-logo.webp"; 
import synycsLogo from "../../assets/synycs-logo.jpeg";
import diyosLogo from "../../assets/diyos-logo.png";

const About = () => {
  const mastersCourses = [
    "Cloud Security",
    "Data Engineering",
    "Object-Oriented Programming",
    "DevOps Practices",
    // Add more relevant coursework if needed
  ];

  const bachelorsCourses = [
    "Internet of Things (IoT)",
    "Data Structures & Algorithms",
    "Networking (TCP/IP, DNS, DHCP)",
    "Database Management Systems",
    "Software Engineering",
    // Add more as needed
  ];

  return (
    <section id="about" className="py-12 flex items-center justify-center">
      <div className="max-w-3xl flex flex-col items-center gap-6 p-4">
        <h2 className="text-lg md:text-xl font-bold">About Me</h2>
        <div className="flex flex-col gap-12">
          <p className="text-sm md:text-base font-medium text-gray-400">
            I'm a{" "}
            <span className="font-bold text-white">Data Engineer & DevOps Engineer</span>{" "}
            with expertise in building cloud-native infrastructures, automating
            data workflows, and deploying scalable enterprise applications. I am
            passionate about delivering high-performance, cost-effective, and secure
            systems.
          </p>

          {/* Education and Experience */}
          <div className="grid grid-cols-1 gap-12">
            {/* Education */}
            <div>
              <p className="text-base md:text-lg font-bold mb-4">Education</p>
              <div className="text-sm flex flex-col gap-4 border-2 border-gray-700 rounded-2xl p-4">
                <div className="flex items-center gap-2">
                  <img
                    src={ucfLogo}
                    alt="ucf"
                    className="size-12 object-cover rounded-full"
                  />
                  <div className="flex flex-col justify-center">
                    <span className="font-bold">
                      M.S. in Computer Science - University of Central Florida
                    </span>
                    <span>GPA: 4.0 / 4.0</span>
                  </div>
                </div>
                <span className="italic font-medium">Related Coursework: </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {mastersCourses.map((course, index) => (
                    <span
                      className="px-4 py-2 rounded bg-stone-900 text-white text-xs font-bold"
                      key={index}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
              <br />
              <div className="text-sm flex flex-col border-2 border-gray-700 rounded-2xl p-4 gap-4">
                <div className="flex items-center gap-2">
                  <img
                    src={gitamLogo}
                    alt="gitam"
                    className="size-12 object-cover rounded-full"
                  />
                  <div className="flex flex-col justify-center">
                    <span className="font-bold">
                      B. Tech in Computer Science & Engineering (IoT) - GITAM
                      University
                    </span>
                    <span>GPA: 8.01 / 10.0</span>
                  </div>
                </div>

                <span className="italic font-medium">Related Coursework:</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {bachelorsCourses.map((course, index) => (
                    <span
                      className="px-4 py-2 rounded bg-stone-900 text-white text-xs font-bold"
                      key={index}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <p className="text-base md:text-lg font-bold">Experience</p>
              <div className="text-sm flex flex-col border-2 border-gray-700 rounded-2xl p-4 gap-4">
                <div className="flex items-center gap-2">
                  <img
                    src={ucfLogo}
                    alt="ucf"
                    className="size-12 object-cover rounded-full"
                  />
                  <div className="flex flex-col justify-center">
                    <span className="font-bold">
                      Graduate Teaching Assistant - University of Central Florida
                    </span>
                    <span>(Sep 2024 - Present)</span>
                  </div>
                </div>
                <span className="italic font-medium">Related Work:</span>
                <ul className="list-disc ml-4 space-y-2">
                  <li>
                    Delivered hands-on instruction to 170+ students in{" "}
                    <span className="font-semibold">DevOps, OOP, and Data Engineering</span>.
                  </li>
                  <li>
                    Conducted labs on{" "}
                    <span className="font-semibold">
                      networking, container orchestration, and cloud infrastructure
                    </span>
                    .
                  </li>
                  <li>
                    Improved student performance in practical assessments by 25%.
                  </li>
                </ul>
              </div>

              <div className="text-sm flex flex-col border-2 border-gray-700 rounded-2xl p-4 gap-4">
                <div className="flex items-center gap-2">
                  <img
                    src={synycsLogo}
                    alt="synycs"
                    className="size-12 object-cover rounded-full"
                  />
                  <div className="flex flex-col justify-center">
                    <span className="font-bold">Data Engineer - Synycs Group</span>
                    <span>Hyderabad, India</span>
                  </div>
                </div>
                <span className="italic font-medium">Related Work:</span>
                <ul className="list-disc ml-4 space-y-2">
                  <li>
                    Built ETL pipelines with{" "}
                    <span className="font-semibold">Azure Data Factory</span> for
                    enterprise-scale datasets.
                  </li>
                  <li>
                    Improved ETL efficiency by 30% through optimized partitioning
                    and caching.
                  </li>
                  <li>
                    Migrated infrastructure to cloud, reducing costs by 35%.
                  </li>
                </ul>
              </div>

              <div className="text-sm flex flex-col border-2 border-gray-700 rounded-2xl p-4 gap-4">
                <div className="flex items-center gap-2">
                  <img
                    src={diyosLogo}
                    alt="diyos"
                    className="size-12 object-cover rounded-full"
                  />
                  <div className="flex flex-col justify-center">
                    <span className="font-bold">DevOps Engineer - DIYOS Infotech</span>
                    <span>Hyderabad, India</span>
                  </div>
                </div>
                <span className="italic font-medium">Related Work:</span>
                <ul className="list-disc ml-4 space-y-2">
                  <li>
                    Deployed microservices on{" "}
                    <span className="font-semibold">Kubernetes (AKS)</span>, automating CI/CD pipelines.
                  </li>
                  <li>
                    Integrated monitoring with{" "}
                    <span className="font-semibold">Grafana & Prometheus</span> to ensure 99.99% uptime.
                  </li>
                  <li>
                    Automated infrastructure provisioning with{" "}
                    <span className="font-semibold">Terraform</span>, improving deployment speed by 50%.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
