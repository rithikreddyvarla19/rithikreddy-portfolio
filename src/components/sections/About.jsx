import ucfLogo from "../../assets/ucf-logo.png";
import gitamLogo from "../../assets/gitam-logo.webp"; 
import synycsLogo from "../../assets/synycs-logo.jpeg";
import diyosLogo from "../../assets/diyos-logo.png";

const About = () => {
const mastersCourses = [
  "Data Structures and Algorithms",
  "Computer Architecture",
  "Cloud Security",
  "Malware Software Vulnerability",
  "Machine Learning",
  "Computer Vision",
  "Data Engineering",
  "DevOps Practices",
  "Object-Oriented Programming",
];

const bachelorsCourses = [
  "Object-Oriented Programming (OOP)",
  "Data Structures & Algorithms",
  "Networking (TCP/IP, DNS, DHCP)",
  "Database Management Systems (DBMS)",
  "Internet of Things (IoT)",
  "Software Engineering",
  "Data Mining",
  "Web Technologies",
  "Cloud Computing",
];

  return (
    <section id="about" className="py-12 flex items-center justify-center">
      <div className="max-w-3xl flex flex-col items-center gap-6 p-4">
        <h2 className="text-lg md:text-xl font-bold">About Me</h2>
<div className="flex flex-col gap-12">
  <p className="text-sm md:text-base font-medium text-gray-400">
    I'm a <span className="font-bold text-white">Software Engineer & Graduate Teaching Assistant</span> pursuing an
    M.S. in Computer Science at UCF (GPA 4.0). I design and ship
    backend and cloud systems in <span className="font-semibold">Java/Python</span> (FastAPI, Spring Boot, Node/React),
    building microservices and REST APIs that handle <span className="font-semibold">1M+ requests/day</span>,
    cut DB latency by <span className="font-semibold">40%</span>, and maintain <span className="font-semibold">99.9% uptime</span> using
    <span className="font-semibold"> Docker, Kubernetes, GitHub Actions, and AWS/GCP</span>. I enjoy data-intensive
    systems with <span className="font-semibold">PostgreSQL, Redis, MongoDB</span> and strong observability
    (Grafana, Kibana/Splunk). Recent work: <span className="font-semibold">DevBoard</span> (collaborative coding notes),
    <span className="font-semibold"> CloudTasker</span> (job queue on GCP), and an ECG classifier reaching
    <span className="font-semibold"> 94% accuracy</span>.
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

  {/* Graduate Teaching Assistant */}
  <div className="text-sm flex flex-col border-2 border-gray-700 rounded-2xl p-4 gap-4">
    <div className="flex items-center gap-2">
      <img
        src={ucfLogo}
        alt="ucf"
        className="size-12 object-cover rounded-full"
      />
      <div className="flex flex-col justify-center">
        <span className="font-bold">Graduate Teaching Assistant - University of Central Florida</span>
        <span>Orlando, FL (Aug 2024 – Present)</span>
      </div>
    </div>
    <span className="italic font-medium">Related Work:</span>
    <ul className="list-disc ml-4 space-y-2">
      <li>
        Mentored 150+ students in{" "}
        <span className="font-semibold">algorithms and cloud system design</span> using Docker & GCP.
      </li>
      <li>
        Led labs on{" "}
        <span className="font-semibold">scalable APIs and Linux environments</span> for deployment.
      </li>
    </ul>
  </div>

  {/* Software Engineer - Synycs Group */}
  <div className="text-sm flex flex-col border-2 border-gray-700 rounded-2xl p-4 gap-4">
    <div className="flex items-center gap-2">
      <img
        src={synycsLogo}
        alt="synycs"
        className="size-12 object-cover rounded-full"
      />
      <div className="flex flex-col justify-center">
        <span className="font-bold">Software Engineer - Synycs Group</span>
        <span>Hyderabad, India (Feb 2024 – Jul 2024)</span>
      </div>
    </div>
    <span className="italic font-medium">Related Work:</span>
    <ul className="list-disc ml-4 space-y-2">
      <li>
        Designed and deployed microservices in{" "}
        <span className="font-semibold">Java/Python</span> handling REST APIs for 1M+ requests/day.
      </li>
      <li>
        Improved database performance by 35% via{" "}
        <span className="font-semibold">query optimization and caching</span>; reduced latency by 40%.
      </li>
      <li>
        Automated deployments using{" "}
        <span className="font-semibold">Docker & GitHub Actions</span>, achieving 99.9% uptime.
      </li>
      <li>
        <span className="font-semibold">Stack:</span> Java · Python · Node.js · SQL · Docker · AWS
      </li>
    </ul>
  </div>

  {/* Software Development Intern - DIYOS Infotech */}
  <div className="text-sm flex flex-col border-2 border-gray-700 rounded-2xl p-4 gap-4">
    <div className="flex items-center gap-2">
      <img
        src={diyosLogo}
        alt="diyos"
        className="size-12 object-cover rounded-full"
      />
      <div className="flex flex-col justify-center">
        <span className="font-bold">Software Development Intern - DIYOS Infotech</span>
        <span>Hyderabad, India (Sep 2023 – Jan 2024)</span>
      </div>
    </div>
    <span className="italic font-medium">Related Work:</span>
    <ul className="list-disc ml-4 space-y-2">
      <li>
        Built REST APIs in{" "}
        <span className="font-semibold">Python (FastAPI)</span> for insurance and logistics systems serving 20K+ users.
      </li>
      <li>
        Enhanced query efficiency by 28% using{" "}
        <span className="font-semibold">database indexing</span>; automated ETL workflows reducing errors by 30%.
      </li>
      <li>
        <span className="font-semibold">Stack:</span> Python · FastAPI · PostgreSQL · Redis · Docker
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
