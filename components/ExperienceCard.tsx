import React from "react";
import { ExperienceType } from "../types/sections";

const ExperienceCard = ({ role, company, companyLogo, duration, desc, descBullets }: ExperienceType) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <div className="md:w-1/3 flex justify-end">
        <a className="text-gray-600 text-sm md:text-base ">{duration}</a>
      </div>

      <li className="border-l-2 border-gray-600 w-full md:w-2/3 bg-white relative">
        <div className="absolute -left-3.5 top-0 transform -translate-y-1/2">
          <div className="bg-gray-600 w-6 h-6 flex items-center justify-center rounded-full">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
            </svg>
          </div>
        </div>

        <div className="flex items-start">
          <div className="md:p-6 p-4 gap-3 rounded-lg shadow-xl flex flex-col items-start md:ml-6 ml-4 mb-10 w-full">
            <div className="flex w-full md:justify-between items-center mb-4 md:mb-0">
              <img src={companyLogo} width={120} alt="" className="mr-4" />
              <span className="text-sm md:text-base">{company}</span>
            </div>

            <div className="w-full">
              <p className="text-xl md:text-2xl text-gray-700 mb-4">{role}</p>
              <div className="space-y-2">
                {descBullets.map((desc, i) => {
                  return (
                    <div key={i}>
                      <p>{desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default ExperienceCard;
