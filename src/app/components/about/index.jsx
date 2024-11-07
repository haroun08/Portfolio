import clsx from "clsx";
import React from "react";

const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "custom-bg p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </div>
  );
};

const AboutDetails = () => {
  return (
    <section className="py-1 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">

      
      <ItemLayout className="col-span-full row-span-2 flex-col items-start text-white">
        <h2 className="text-2 text-left w-full capitalize">
          Software Engineering Student
        </h2>
        <p className="font-light">
          Final-year Software Engineering student at the National School of Engineers of Tunis (ENIT), with a strong interest in software
          development. Experienced in working on various projects and problem-solving, with frequent practice on platforms like LeetCode and
          Codeforces.
        </p>
      </ItemLayout>

      <ItemLayout className="col-span-8 row-span-1 flex-col items-start text-white">
        <h2 className="text-2 text-left w-full capitalize">
          Professional Experience
        </h2>
        <div className="font-light text-left w-full">
          <h3 className="font-semibold">Talan Innovation Factory Engineering Internship</h3>
          <p>
            • Developed a platform centered around the innovative concept of DNA Data Storage.<br />
            • Secured first place among 10 teams for project excellence and innovation.<br />
            <strong>Frameworks and Tools:</strong> Next.js, Artificial Intelligence, Blockchain, DNA Data Storage
          </p>
          <br />
          <h3 className="font-semibold">Capgemini Engineering Internship</h3>
          <p>
            • Developed a Java application for detecting and recognizing faces using OpenCV.<br />
            • Enhanced emotion recognition by analyzing facial expressions in Python with the CV2 library.<br />
            <strong>Frameworks and Tools:</strong> Java, Python, OpenCV, Maven
          </p>
        </div>
      </ItemLayout>

      <ItemLayout className="col-span-4 row-span-1 flex-col items-start text-white">
        <h2 className="text-2 text-left w-full capitalize">
          Education
        </h2>
        <div className="font-light text-left w-full">
          <h3 className="font-semibold">National School of Engineers of Tunis (ENIT) <br /> 09/2022–present</h3>
          <p>Software Engineering</p>
          <br />
          <h3 className="font-semibold">Faculty of Sciences of Tunis (Preparatory School) : 09/2020–06/2022</h3>
          <p>National Engineering School Entry Exam (Ranked 126 out of 1408)</p>
        </div>
      </ItemLayout>



        
        <ItemLayout className={"col-span-4 !p-0"}>
            <img className="w-full h-auto" 
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=haroun08&langs_count=8&theme=transparent&icon_color=74A3FE&hide_border=true&title_color=74A3FE&text_color=FFFFFF&text_bold=false" alt="Haroun08" loading="lazy" />
        </ItemLayout>

        <ItemLayout className={"col-span-8 !p-0"}>
            <img className="w-full h-auto" 
            src="https://github-readme-stats.vercel.app/api?username=haroun08&theme=transparent&icon_color=74A3FE&hide_border=true&title_color=74A3FE&text_color=FFFFFF&text_bold=false" alt="Haroun08" loading="lazy" />
        </ItemLayout>

       

        <ItemLayout className={"col-span-full "}>
            <img className="w-full h-auto" 
            src="https://skillicons.dev/icons?i=spring,angular,bootstrap,typescript,c,cpp,css,dart,discord,docker,dotnet,figma,firebase,flutter,github,git,gradle,graphql,html,java,js,kafka,kali,latex,mongodb,mysql,netlify,nextjs,nodejs,npm,opencv,ps,php,postgres,postman,py,react,bash,symfony,threejs,unity,blender" alt="Haroun08" loading="lazy" />
        </ItemLayout>

        
        <ItemLayout className={"col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://codeforces-readme-stats.vercel.app/api/card?username=Haroun_brh.ar&theme=transparent&icon_color=74A3FE&hide_border=true&title_color=74A3FE&text_color=FFFFFF&text_bold=false"
            alt="Codeforces Stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://leetcode-badge-showcase.vercel.app/api?username=haroun_brh&theme=tokyonight&ansimated=true"
            alt="LeetCode Badges"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full !p-0"}>
          <img
            className="w-full h-auto"
            src="https://leetcode-stats.vercel.app/api?username=haroun_brh&theme=dark"
            alt="LeetCode Stats"
            loading="lazy"
          />
        </ItemLayout>


     

        <ItemLayout className={"col-span-6 !p-0 "}>
            <img className="w-full h-auto" 
            src="https://github-readme-stats.vercel.app/api/pin/?username=haroun08&repo=TransportMVC&theme=transparent&icon_color=74A3FE&hide_border=true&title_color=74A3FE&text_color=FFFFFF&text_bold=false&description_lines_count=2" alt="Haroun08" loading="lazy" />
        </ItemLayout>

        <ItemLayout className={"col-span-6 !p-0 "}>
            <img className="w-full h-auto" 
            src="https://github-readme-stats.vercel.app/api/pin/?username=haroun08&repo=Book-Social-Network&description_lines_count=2&theme=transparent&icon_color=74A3FE&hide_border=true&title_color=74A3FE&text_color=FFFFFF&text_bold=false" alt="Haroun08" loading="lazy" />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
