// 
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';


function Experience() {
  return (
    <div className="experience bg-[#C0C0C0]">
            <h1 className="experience Title text-center text-yellow-800 text-5xl font-bold mb-8">My On Going Journey.....</h1>

      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2018-2021"
          iconStyle={{ background: "#92400E", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <div className="border-2 border-blue-800 p-4 rounded-md">
            <h3 className="vertical-timeline-element-title mb-2">
              My HighSchool, Vision Academy, Ethiopia: A.A
            </h3>
            <p>
              High School Diploma
            </p>
          </div>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2021-2022"
          iconStyle={{ background: "#92400E", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <div className="border-2 border-blue-800 p-4 rounded-md">
            <h3 className="vertical-timeline-element-title mb-2">
              My Higher Education, Addis Ababa Universtiy, Ethiopia: A.A
            </h3>
            <p>
              Developed an HR-Managnment System
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2022-2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <div className="border-2 border-blue-800 p-4 rounded-md">
            <h3 className="vertical-timeline-element-title mb-2">
              My Higher Education, Addis Ababa Universtiy, Ethiopia: A.A
            </h3>
            <p>
             Developed Student Tracking System
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2023-2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <div className="border-2 border-blue-800 p-4 rounded-md">
            <h3 className="vertical-timeline-element-title mb-2">
              My Higher Education , Addis Ababa Universtiy, Ethiopia: A.A
            </h3>
            <p>
              Developed Student Transferal managment System and Higher Education Admission Tracking System
            </p>
          </div>
        </VerticalTimelineElement>




        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2024-2025"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <div className="border-2 border-blue-800 p-4 rounded-md">
            <h3 className="vertical-timeline-element-title mb-2">
              My Higher Education , Addis Ababa Universtiy, Ethiopia: A.A
            </h3>
            <p>
              Developed HouseBroker System (Website) 
            </p>
          </div>
        </VerticalTimelineElement>

        



      </VerticalTimeline>
    </div>
  );
}

export default Experience;
