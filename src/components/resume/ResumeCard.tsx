import React from "react";

interface Props {
  date: string;
  title: string;
  organization: string;
}

const ResumeCard = ({ date, title, organization }: Props) => {
  return (
    <div className="p-4 border border-common-gray rounded-xl">
      <p className="text-xs mb-[6px] text-body-text">{date}</p>
      <h3 className="text-lg text-common-black">{title}</h3>
      <p className="text-sm text-body-text">{organization}</p>
    </div>
  );
};

export default ResumeCard;
