import React, { ReactNode } from "react";

interface Props {
  Icon: ReactNode;
  heading: string;
  body: string[];
}

const ServiceCard = ({ Icon, heading, body }: Props) => {
  return (
    <div className="p-4 border border-common-gray rounded-xl">
      <h4 className="flex items-center mb-2 text-common-black">
        <span className="pr-2 text-theme-primary text-3xl">{Icon}</span>
        {heading}
      </h4>
      <ul className="list-disc pl-5">
        {body.map((item, index) => (
          <li className="text-body-text" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
