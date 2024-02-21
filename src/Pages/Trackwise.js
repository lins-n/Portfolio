import React from "react";
import HeaderComp from "../Components/HeaderComp";
import Footer from "../Footer";
import header from "../images/header.jpg";
import tr1 from "../images/tr1.jpg";
import tr2 from "../images/tr2.jpg";
import tr3 from "../images/tr3.jpg";
import tr4 from "../images/tr4.jpg";
import main from "../images/Main.mp4";
const Trackwise = () => {
  return (
    <div>
      <HeaderComp>Trackwise NFC</HeaderComp>
      <main className="container p-5 max-w-screen-2xl">
        <div>
          <img src={header} alt="placeholder" />
        </div>
        <div className="divide-y divide-accent-color/30 p-4 ">
          <div className="w-full py-14">
            <div className="lg:flex justify-between">
              <h1 className="font-satoshi uppercase tracking-widest py-3 text-accent-color">
                BACKGROUND
              </h1>
              <div className="w-full lg:w-2/3">
                <p className="font-satoshi text-base text-accent-color">
                  Attendance is important for student success. Students who
                  attend school regularly are more likely to achieve
                  academically, graduate from high school, and go on to college.
                  However, many students struggle to attend school regularly due
                  to a variety of factors. <br /> Traditional attendance
                  tracking methods are inefficient and inaccurate. Paper
                  attendance sheets are time-consuming to collect and can be
                  easily lost or damaged. In addition, they do not provide
                  real-time data on attendance, which makes it difficult to
                  identify and address attendance problems early on. <br />
                  <br />
                  Our project proposes to use NFC technology to improve
                  attendance tracking. NFC technology allows devices to
                  communicate with each other over short distances. This makes
                  it ideal for tracking attendance, as students can simply tap
                  their ID cards on a reader to mark their attendance. Our
                  system would have a number of advantages over traditional
                  attendance tracking methods. It would be more efficient,
                  accurate, and secure. It would also provide real-time data on
                  attendance, which would make it easier to identify and address
                  attendance problems early on.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full py-14">
            <div className="lg:flex justify-between">
              <h1 className="font-satoshi uppercase tracking-widest py-3 text-accent-color">
                THE Problem
              </h1>
              <div className="w-full lg:w-2/3">
                <p className="font-satoshi text-base text-accent-color">
                  A decline in student attendance as well as an appropriate
                  method of recording student attendance without the issue of
                  students entering attendance for colleagues who are not in
                  class. According to certain lecturers and teaching assistants,
                  student attendance lists frequently become mixed up with other
                  papers, or the number of students on the lists exceeds the
                  number of students currently enrolled in the class. <br />
                  <br /> In certain circumstances, only a few students show up
                  for lectures, which is cause for alarm. Because regular
                  attendance increases a student's chances of academic success,
                  the attendance rate is crucial. If a significant portion of
                  the class is consistently absent, it is challenging for the
                  lecturer and the class to advance and develop their skills.
                  Our objective is to create a system that can reliably manage
                  student attendance while also giving lecturers a convenient
                  way to monitor the attendance lists. By using this technique,
                  we intend to improve attendance tracking and increase the
                  number of students who show up for class.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full py-14">
            <div className="lg:flex justify-between">
              <h1 className="font-satoshi uppercase tracking-widest py-4 text-accent-color">
                Aims & Objectives
              </h1>
              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-4 justify-center  max-w-screen-2xl container">
                  <div className="bg-secondary-bg p-4 border border-accent-color/25  hover:border-accent-color/75 ease-in">
                    <p className="font-satoshi tracking-wide text-base leading-7 text-accent-color">
                      Create an NFC-based attendance app for schools that
                      automates attendance recording.
                    </p>
                  </div>
                  <div className="bg-secondary-bg p-4  border border-accent-color/25 hover:border-accent-color/75 ease-in">
                    <p className="font-satoshi tracking-wide text-base leading-7 text-accent-color">
                      Ensure 90% accuracy in attendance tracking, reducing
                      errors and unauthorized registrations.
                    </p>
                  </div>
                  <div className="bg-secondary-bg p-4  border border-accent-color/25 hover:border-accent-color/75">
                    <p className="font-satoshi tracking-wide text-base leading-7 text-accent-color">
                      Ensure app compatibility with diverse NFC-enabled devices
                      used by students and can be adopted by both students and
                      faculty.
                    </p>
                  </div>
                  <div className="bg-secondary-bg p-4  border border-accent-color/25 hover:border-accent-color/75">
                    <p className="font-satoshi tracking-wide text-base leading-7 text-accent-color">
                      Increase student attendance by promoting NFC app usage.
                      Develop, test, and integrate the app within the semester.
                    </p>
                  </div>
                  <div className="bg-secondary-bg p-4  border border-accent-color/25 hover:border-accent-color/75">
                    <p className="font-satoshi tracking-wide text-base leading-7 text-accent-color">
                      Integrate the app with the existing student ID system to
                      ensure a smooth transition from manual attendance methods
                      to the NFC-based app.
                    </p>
                  </div>
                  <div className="bg-secondary-bg p-4  border border-accent-color/25 hover:border-accent-color/75">
                    <p className="font-satoshi tracking-wide text-base leading-7 text-accent-color">
                      Utilize NFC-enabled devices for real-time tracking and
                      accurate storage of student attendance data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-14">
            <div className="lg:flex justify-between">
              <h1 className="font-satoshi uppercase tracking-widest py-3 text-accent-color">
                THE SOLUTION
              </h1>
              <div className="lg:w-2/3">
                <p className="font-satoshi text-base text-accent-color">
                  Trackwise provides a comprehensive replacement for paper
                  attendance records, offering a more robust and efficient
                  system to track and manage student attendance records. The
                  shift to NFC technology streamlines the entire process,
                  enhancing efficiency and accuracy. <br />
                  <br />
                  Emphasizing the practicality of daily device usage,
                  "Trackwise" seamlessly integrates with students' personal
                  mobile devices, eliminating the hassle of carrying additional
                  identification cards. Through this seamless integration,
                  students can effortlessly register attendance and conveniently
                  keep track of all attended lectures throughout the semester.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  container ">
          <div className=" bg-secondary-bg/70 ">
            <img src={tr1} className=" object-cover " alt="design1" />
          </div>
          <div className=" bg-secondary-bg/70  ">
            <img src={tr2} className=" object-cover " alt="design2" />
          </div>
          <div className=" bg-secondary-bg/70 ">
            <img src={tr3} className=" object-cover " alt="design3" />
          </div>
          <div className=" bg-secondary-bg/70 ">
            <img src={tr4} className=" object-cover " alt="design4" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-max-screen-2xl w-full">
          <div className="p-14 md:p-24">
            <p className="font-satoshi text-3xl md:text-8xl text-accent-color  ">
              Project Demo
            </p>
          </div>
          <video
            controls
            autostart
            autoPlay
            src={main}
            type="video/mp4"
            width="1200"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Trackwise;
