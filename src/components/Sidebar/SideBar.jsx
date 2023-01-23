import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiAlignLeft } from "react-icons/bi";
import { AiFillHome, AiOutlineCaretRight } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

import { useState } from "react";
// import{ setSelectedFile } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
// import SubPage from "../../SubPages/SubPage";
const routes = [
  {
    path: "/Dashboard",
    name: "Dashboard",
    icon: <AiFillHome /> ,
  },
  {
    path: "/menuMaster",
    name: "Menu Master",
    icon: <BiAlignLeft />,
    subRoutes: [
      {
        path: "/menuMaster/UserMaster",
        name: "User Master",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/menuMaster/AddEmployee",
        name: "Add Employee",
        icon: <AiOutlineCaretRight />,
      },

      {
        path: "/menuMaster/EmployeeMaster",
        name: "Employee Master",
        icon: <AiOutlineCaretRight />,
      },

      {
        path: "/menuMaster/DepartmentMaster",
        name: "Department Master",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/menuMaster/DesignationMaster",
        name: "Designation Master",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/menuMaster/EmploymentTypeMaster",
        name: "Employment Type Master",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/menuMaster/UserApproval",
        name: "User Approval",
        icon: <AiOutlineCaretRight />,
      },
    ],
  },
  {
    path: "/selfPortal",
    name: "Self Portal",
    icon: <BiAlignLeft />,
    subRoutes: [
      {
        path: "/selfPortal/AttendanceDetails",
        name: "Attendance Details",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/selfPortal/CreateLeave",
        name: "Create Leave Request",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/selfPortal/MonthlyPerformance",
        name: "Monthly Performance",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/selfPortal/RaiseGrievance",
        name: "Raise Grievances",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/selfPortal/SelfPortal",
        name: "Travel Overview",
        icon: <AiOutlineCaretRight />,
      },
    ],
  },
  {
    path: "/screening&Approval",
    name: "Screening & Approval",
    icon: <BiAlignLeft />,
    subRoutes: [
      {
        path: "/screening&Approval/Attendance Details",
        name: "Attendance Details",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/screening&Approval/LeaveAproval",
        name: "Leave Aproval",
        icon: <AiOutlineCaretRight />,
      },
    ],
  },
  {
    path: "/payroll",
    name: "Payroll",
    icon: <BiAlignLeft />,
    subRoutes: [
      {
        path: "/payroll/SalarySetup",
        name: "SalarySetup",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/payroll/PayRoll",
        name: "PayRoll",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/payroll/PayrollItem",
        name: "PayrollItem",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/allowance/Allowance",
        name: "Allowance",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/employeeallowance/EmployeeAllowance",
        name: "EmployeeAllowance",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/deduction/deduction",
        name: "Deduction",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/employeededuction/employeededuction",
        name: "EmployeeDeduction",
        icon: <AiOutlineCaretRight />,
      },
    ],
  },

  {
    path: "/organisationStructure",
    name: "Organisation Structure",
    icon: <BiAlignLeft />,
    subRoutes: [
      {
        path: "/organisationStructure/AddHoliday",
        name: "Add Holiday",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/organisationStructure/LeaveType",
        name: "Leave Type",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/organisationStructure/PayheadList",
        name: "Payhead List",
        icon: <AiOutlineCaretRight />,
      },
    ],
  },
  {
    path: "/requirementStructure",
    name: "Requirement Structure",
    icon: <BiAlignLeft />,
    subRoutes: [
      {
        path: "/Recruitment/AddjobTitle",
        name: "Add Job Title",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/Recruitment/ViewjobTitle",
        name: "View Job Title",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/Recruitment/AddJobVacancy",
        name: "Add Job Vacancies",
        icon: <AiOutlineCaretRight />,
      },

      {
        path: "/Recruitment/FixinInterviewOnline",
        name: "Fixing Interview Online",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/Recruitment/OnlineApplication",
        name: "Online Application",
        icon: <AiOutlineCaretRight />,
      },
    ],
  },
  {
    path: "/trainingModule",
    name: "Training Module",
    icon: <BiAlignLeft />,
    subRoutes: [
      {
        path: "/trainingModule/RegisterEmployee",
        name: "Registered Emp For Training",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/trainingModule/TainingMaster",
        name: "Training To Employee",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/trainingModule/TrainingToFeedback",
        name: "Training To Feedback",
        icon: <AiOutlineCaretRight />,
      },
    ],
  },
  {
    path: "/advanceOrLoan",
    name: "Advance or Loan",
    icon: <BiAlignLeft />,
    subRoutes: [
      {
        path: "/advanceOrLoan/LoanMaster",
        name: "Loan Master",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/advanceOrLoan/LoanApplication",
        name: "Loan Application",
        icon: <AiOutlineCaretRight />,
      },
    ],
  },
  {
    path: "/attendance",
    name: "Attendance",
    icon: <BiAlignLeft />,
    subRoutes: [
      {
        path: "/attendance/AddIndividualAttendance",
        name: "Add Individual Attendance",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/attendance/UploadBulkAttendance",
        name: "Upload Bulk Attendance",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/attendance/AddOverTime",
        name: "Add Over Time",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/attendance/ViewOtReport",
        name: "View Ot Report",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/attendance/MonthwiseAbsentReport",
        name: "Monthwise Absent Report",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/attendance/MonthwiseAttdReport",
        name: "Monthwise Attd Report",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "/attendance/LeaveReport",
        name: "Leave Report",
        icon: <AiOutlineCaretRight />,
      },
    ],
  },
  {
    path: "/ShiftManagement",
    name: "Shift Management",
    icon: <BiAlignLeft />,
    subRoutes: [
      {
        path: "Shift Management/Add Shift",
        name: "Add Shift",
        icon: <AiOutlineCaretRight />,
      },
      {
        path: "Shift Management/View Employee Shift",
        name: "View Employee Shift",
        icon: <AiOutlineCaretRight />,
      },
    ],
  },

  {
    path: "/Training",
    name: "Training",
    icon: <BiAlignLeft />,
    subRoutes: [
      {
        path: "Training/Training",
        name: "Training",
        icon: <AiOutlineCaretRight />,
      },
    ],
  },
  {
    path: "/Branch",
    name: "Branch",
    icon: <BiAlignLeft />,
    subRoutes: [
      {
        path: "Branch/Branch",
        name: "Branch",
        icon: <AiOutlineCaretRight />,
      },
    ],
  }
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "285px" : "55px",
            transition: { duration: 0.5, type: "spring", damping: 10 },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BsFillPersonFill />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.text
                  className="mx-3"
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  values="Administrator"
                  placeholder="Search"
                >
                  Administrator
                </motion.text>
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link "
                  activeClassName="active"
                >
                  <div className="icon ">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text pe-auto"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
