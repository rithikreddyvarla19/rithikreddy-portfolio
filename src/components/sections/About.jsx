const About = () => {
  const mastersCourses = [
    "CDA 5106 - ADV COMPUTER ARCHITECTURE",
    "CIS 6395 - INCIDENT RESPONSE TECHNOLOGIES",
    "COT 5405 - DESIGN & ANALYSIS ALGORITHMS",
    // Add more courses as needed
  ]

const bachelorsCourses = [
  "DATA STRUCTURES & ALGORITHMS",
  "SOFTWARE ENGINEERING",
  "WEB TECHNOLOGIES",
  "DATABASE MANAGEMENT SYSTEMS",
  "ARTIFICIAL INTELLIGENCE",
  "DISTRIBUTED SYSTEMS",
  // ADD MORE COURSES AS NEEDED
]

  return (
    <section id="about" className="py-12 flex items-center justify-center">
      <div className="max-w-3xl flex flex-col items-center gap-6 p-4">
        <h2 className="text-lg md:text-xl font-bold">About Me</h2>
        <div className="flex flex-col gap-12">
          <p className="text-sm md:text-base font-medium text-gray-400">
            I'm a{" "}
            <span className="font-bold text-white">Fullstack Developer</span>{" "}
            with expertise in building scalable web applications and creating
            innovative solutions. I am excited about building saas apps that has
            real-world use cases.
          </p>

          {/* Education and Experience */}
          <div className="grid grid-cols-1 gap-12">
            <div>
              <p className="text-base md:text-lg font-bold mb-4">
                Education
              </p>
              <div className="text-sm flex flex-col gap-4 border-2 border-gray-700 rounded-2xl p-4">
                <div className="flex items-center gap-2">
                <img src="https://1000logos.net/wp-content/uploads/2017/11/University-of-Central-Florida-Logo.png" alt="ucf" className="size-12 object-cover rounded-full" />

                  <div className="flex flex-col justify-center">
                    <span className="font-bold">
                    M.S. in Computer Science - University of Central Florida
                  </span>
                  <span>
                    (August 2025 - May 2027)
                  </span>
                  </div>
                </div>
                <span className="italic font-medium">Related Course Work: </span>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {
                  mastersCourses.map((course, index) => (
                    <span className="px-4 py-2 rounded bg-stone-900 text-white text-xs font-bold" key={index}>{course}</span>
                  ))
               }
               </div>
              </div>
              <br />
              <div className="text-sm flex flex-col border-2 border-gray-700 rounded-2xl p-4 gap-4">
                <div className="flex items-center gap-2">
                  <img src="https://scontent.ftpa1-1.fna.fbcdn.net/v/t39.30808-6/455278986_935305731942867_221155067158021700_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XdJziXm7neUQ7kNvwE1vlrj&_nc_oc=AdmZf3Wn2QvcDO4ngJcPUqT72B-akRt1DnKIYpr8ouKtq6dn3p6Hlv1rHHSZfQqXZYOeevDkyq1jDvzjsqgeushS&_nc_zt=23&_nc_ht=scontent.ftpa1-1.fna&_nc_gid=iIdQ8iWmvK18Asp-ClvoNg&oh=00_AfVoTPXNgRZIUNT3u2D7OL7yZzI-N4XCArGAmLKPxjZjkg&oe=68BD3F9C" alt="kits" className="size-12 object-cover rounded-full" />
                  <div className="flex flex-col justify-center">
                    <span className="font-bold">
                    B. Tech in Computer Science
                  - KKR & KSR INSTITUTE OF TECHNOLOGY AND SCIENCES 
                  </span>
                  <span>
                    (2020 - 2024)
                  </span>
                  </div>
                </div>
          
                  <span className="italic font-medium">Related Course Work:</span> 
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
    {
                    bachelorsCourses.map((course, index) => (
                      <span className="px-4 py-2 rounded bg-stone-900 text-white text-xs font-bold" key={index}>{course}</span>
                    ))
                  }
                                 </div>
              
               
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-base md:text-lg font-bold">
                Experience
              </p>
            <div className="text-sm flex flex-col border-2 border-gray-700 rounded-2xl p-4 gap-4">
                <div className="flex items-center gap-2">
                <img src="https://1000logos.net/wp-content/uploads/2017/11/University-of-Central-Florida-Logo.png" alt="ucf" className="size-12 object-cover rounded-full" />
                  <div className="flex flex-col justify-center">
                    <span className="font-bold">
                     Graduate Teaching Assistant - University of Central Florida
                  </span>
                  <span>
                    (Sep 2025 - Present)
                  </span>
                  </div>
                </div>
                  <span className="italic font-medium">Related Work:</span> 

                <ul className="list-disc ml-4 space-y-2">
                  <li>
                 Assisted in the Mobile Device Software Development course (CEN4360) by grading assignments and projects.
                </li>
                <li>
                  Supported faculty in evaluating Android/iOS development coursework and providing structured feedback to
students.
                </li>
                <li>
                  Reinforced understanding of mobile application frameworks and front-end concepts while guiding student
learning.
                </li>
                </ul>
              </div>
              <div className="text-sm flex flex-col border-2 border-gray-700 rounded-2xl p-4 gap-4">
                <div className="flex items-center gap-2">
                <img src="https://media.licdn.com/dms/image/v2/C4D0BAQGhKnKDh2Z0BA/company-logo_200_200/company-logo_200_200/0/1630537978812?e=1759968000&v=beta&t=DhzFfetvxgUkfMZUZOiwshZdXg42P-iywKTaXfOhr-E" alt="infosol" className="size-12 object-cover rounded-full" />
                  <div className="flex flex-col justify-center">
                    <span className="font-bold">
                     Full Stack Developer Intern - INFOSOL
                  </span>
                  <span>
                    (Oct 2024 - Mar 2025)
                  </span>
                  </div>
                </div>
                  <span className="italic font-medium">Related Work:</span> 

                <ul className="list-disc ml-4 space-y-2">
                  <li>
                  Developed Admin Dashboards and AI Integrated Chatbots for
                  businesses.
                </li>
                <li>
                  Gained expertise in building and scaling web applications.
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
