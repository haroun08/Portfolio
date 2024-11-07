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

      

        <ItemLayout className={'col-span-8 row-span-2 flex-col items-start' }>
        <h2 className="text-2 text-left w-full capitalize">
          Software Engineering Student
        </h2>

        <p className="font-light">
        Final-year Software Engineering student at the National School of Engineers of Tunis (ENIT), with a strong interest in software
        development. Experienced in working on various projects and problem-solving, with frequent practice on platforms like LeetCode and
        Codeforces.
        </p>
        </ItemLayout>


        <ItemLayout className={'col-span-4 text-accent' }>
        <p className="font-semibold w-full text-left text-5xl ">
          25+<sub className="font-semibold text-base">clients</sub> 
        </p>
        </ItemLayout>

        <ItemLayout className={'col-span-4 text-accent' }>
        

        <p className="font-semibold w-full text-left text-5xl ">
          4<sub className="font-semibold text-base">Years of experience</sub> 
        </p>
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
