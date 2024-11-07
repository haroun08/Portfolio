import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);

const ProjectLayout = ({ name, description, date, demoLink, technologies }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target="_blank"
      className={clsx(
        "custom-bg p-6 rounded-xl flex flex-col w-full items-start text-white space-y-4 border border-gray-500 transition-all",
        "hover:bg-gray-800 hover:border-gray-400"
      )}
    >
      <h2 className="text-lg font-semibold text-gray-200">{name}</h2>
      <p className="font-light text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-700 text-gray-200 px-2 py-0.5 rounded text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="w-full border-b border-dashed border-gray-500 my-4" />
      <p className="text-xs text-gray-400">{formattedDate}</p>
    </ProjectLink>
  );
};

export default ProjectLayout;
