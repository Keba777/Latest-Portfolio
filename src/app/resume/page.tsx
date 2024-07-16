import ResumeCard from "@/components/resume/ResumeCard";
import { FaGraduationCap } from "react-icons/fa6";
import { MdWorkOutline } from "react-icons/md";

const ResumePage = () => {
  return (
    <div>
      <div className="flex items-center space-x-4">
        <h2 className="text-common-black">Resume</h2>
        <hr className="w-1/3 border-t-2 border-theme-secondary" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl text-common-black flex items-center">
            <FaGraduationCap className="text-theme-secondary w-10 h-10 pr-2" />
            Education
          </h2>
          <div className="flex flex-col space-y-4">
            <ResumeCard
              date="2021 - 2025"
              title="Computer Engineering"
              organization="Addis Ababa University"
            />
            <ResumeCard
              date="2023 - present"
              title="Competitive Programming"
              organization="Africa to Silicon Valley"
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl text-common-black flex items-center">
            <MdWorkOutline className="text-theme-secondary w-10 h-10 pr-2" />
            Exprience
          </h2>
          <div className="flex flex-col space-y-4">
            <ResumeCard
              date="Dec, 2023 - present"
              title="Backend Intern"
              organization="Eskelate"
            />
            <ResumeCard
              date="Aug, 2023 - Sep, 2023"
              title="Frontend Intern"
              organization="A2SV"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
