import React from "react";
import { Dialog } from "primereact/dialog";
import { FaUser, FaCode, FaCheck, FaServer } from 'react-icons/fa';

const HowweWorks = ({ actions }) => {
  let { processvisible, setProcessvisible } = actions;

  return (
    <Dialog
      header="How We Works?"
      visible={processvisible}
      style={{ width: "40vw" }}
      onHide={() => setProcessvisible(false)}
    >
      <div className="p-4  rounded-md">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 text-white rounded-full p-3">
              <FaUser className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium">
                Requirement Gathering and Analysis
              </h3>
              <p className="text-gray-600">
                Understanding client needs, gathering requirements, and
                analyzing them to define project scope. Meetings, discussions,
                and documentation ensure a clear understanding of the desired
                software solution.
              </p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 text-white rounded-full p-3">
              <FaCode className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium">Software Development</h3>
              <p className="text-gray-600">
                Coding and developing the software solution. Tasks include
                architecture design, coding, module integration, and testing to
                meet requirements and quality standards.
              </p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 text-white rounded-full p-3">
              <FaCheck className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium">
                Quality Assurance and Testing
              </h3>
              <p className="text-gray-600">
                Testing software for defects, functionality, and performance.
                Activities include creating test cases, executing tests, issue
                reporting, tracking, and regression testing.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-blue-500 text-white rounded-full p-3">
              <FaServer className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium">
                Deployment and Maintenance
              </h3>
              <p className="text-gray-600">
                Installing and making the software operational for end-users.
                Maintenance involves monitoring, bug fixing, updates, patches,
                and ongoing user support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default HowweWorks;
