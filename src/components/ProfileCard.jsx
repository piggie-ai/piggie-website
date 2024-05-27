// src/components/ProfileCard.jsx
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ProfileCard({ profile_image, name, role, description, linkedin, github, x, email, website }) {
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 cursor-pointer"
      onClick={() => window.open(website, '_blank')}
    >
      <div className="flex flex-col items-center">
        <img
          className="w-32 h-32 rounded-full object-cover mb-4"
          src={profile_image}
          alt="Profile of the team member"
        />
        <h2 className="text-xl font-medium text-gray-900">{name}</h2>
        <p className="text-blue-600 font-normal">{role}</p>
        {description && <p className="mt-2 text-gray-500 text-sm text-center">{description}</p>}
        <div className="mt-4 space-x-3 flex">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-600" onClick={(e) => e.stopPropagation()}>
              <FaLinkedin size={24} />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-600" onClick={(e) => e.stopPropagation()}>
              <FaGithub size={24} />
            </a>
          )}
          {x && (
            <a href={x} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-600" onClick={(e) => e.stopPropagation()}>
              <FaXTwitter size={24} />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} className="text-gray-400 hover:text-gray-600" onClick={(e) => e.stopPropagation()}>
              <FaEnvelope size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}