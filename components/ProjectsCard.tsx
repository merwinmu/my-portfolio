import React from "react";
import { Icon } from "@iconify/react";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, desc, github, link, duration, imageUrl, videoUrl }: ProjectType) => {
  return (
    <div className="bg-white rounded-lg shadow-xl">
      {/* Image Section */}
      {imageUrl && (
        <div className="relative overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {videoUrl && (
        <div className="relative overflow-hidden">
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Text Content */}
      <div className="p-4 md:h-56">
        <h1 className="font-sans text-xl">{name}</h1>
        <h1 className="font-sans">{duration}</h1>
        <p className="mt-2 text-sm">{desc}</p>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          {link && (
            <div className="flex items-center">
              <a
                href={link}
                className="text-white bg-gray-900 p-2 rounded-xl hover:bg-gray-500 hover:text-white"
              >
                <div className="flex items-center justify-around gap-2">
                  <i className="fa fa-lg fa-globe" />

                  <span>Website</span>
                </div>
              </a>
            </div>
          )}

          {github && (
            <div className="flex items-center">
              <a
                href={github}
                className="bg-gray-100 hover:bg-gray-300 p-2 rounded-xl text-black"
              >
                <div className="flex items-center justify-around gap-2">
                  <i className="fa fa-lg fa-github" />
                  <span>Github</span>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
