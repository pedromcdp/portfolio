import { SectionContainer } from "@/components/SectionContainer";
import Image from "next/image";
import { education, skills } from "@/data";
import { Fragment } from "react";
import { differenceInYears } from "date-fns";

export default async function Home(): Promise<JSX.Element> {
  return (
    <Fragment>
      <main className="relative mx-auto max-w-screen-sm pt-10 px-6 flex min-h-[100vh] gap-6 flex-col bg-white text-black">
        <section id="head" className="flex flex-col gap-4">
          <div className="h-14 w-14 relative">
            <Image
              className="object-cover"
              src="/1x1.jpg"
              fill
              alt="Pedro Pereira"
            />
          </div>
          <div className="flex flex-row gap-5 items-center w-full justify-start">
            <div className="flex flex-col gap-2 w-[28%] text-xl">
              <h1 className="leading-4 font-semibold">Pedro Pereira</h1>
              <h2 className="leading-4">Frontend Dev.</h2>
            </div>
            <div className="flex flex-col gap-[3px] relative text-xs">
              <a href="mailto:pedromcdp@gmail.com">pedromcdp@gmail.com</a>
              <a href="https://github.com/pedromcdp" target="_blank">
                github.com/pedromcdp
              </a>
            </div>
          </div>
        </section>
        <SectionContainer id="about" title="About Me">
          <p className="text-xs leading-3">
            My name is Pedro Miguel Pereira, I&#039;m{" "}
            {
              differenceInYears("02/11/1998", new Date())
                .toString()
                .split("-")[1]
            }{" "}
            years old, I live in the city of Aveiro and I have a Master&#039;s
            degree in Communication and Web Technologies from the University of
            Aveiro. From a very young age I&#039;ve been curious about
            technology and what it offers to our lives, which has led me to get
            interested in application development, with a special focus on web
            development. I&#039;m motivated and committed, I’m a good team
            worker(?), I like to exchange ideas with colleagues and I always
            give my best in every project I&#039;m involved in. Im fluent in
            portuguese and english.{" "}
          </p>
        </SectionContainer>
        <SectionContainer id="experience" title="Experience">
          tbd
        </SectionContainer>
        <SectionContainer id="education" title="Education">
          <div className="flex flex-col gap-3">
            {education.map((item) => (
              <div key={item.title} className="flex flex-col gap-0.5">
                <h4 className="text-xs capitalize font-semibold leading-none">
                  {item.title}
                </h4>
                <span className="text-[0.65rem] leading-3 text-black/60">
                  {item.subtitle}
                </span>
                <span className="text-[0.60rem] leading-5 text-black/60">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </SectionContainer>
        <SectionContainer id="skills" title="Skills">
          <div className="grid grid-cols-4 grid-rows-3 grid-flow-col gap-x-6">
            {skills.map((skill) => (
              <span key={skill} className="text-[0.65rem] col-span-1 leading-4">
                {skill}
              </span>
            ))}
          </div>
        </SectionContainer>
        {/* <div className="flex flex-row gap-5 items-start justify-start shrink-0 w-[549px] relative">
          <div className="flex flex-row gap-5 items-start justify-start shrink-0 w-[137px] relative">
            <div className="text-[#000000] text-left font-['SpaceGrotesk-SemiBold',_sans-serif] text-sm leading-[15.12px] font-semibold relative w-[139px]">
              Experience{" "}
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-[392px] relative">
            <div className="flex flex-row gap-5 items-start justify-start shrink-0 w-[392px] relative">
              <div className="flex flex-col gap-3 items-start justify-start shrink-0 w-[133px] relative">
                <div className="flex flex-col gap-0.5 items-start justify-start shrink-0 relative">
                  <div className="text-[#000000] text-left font-['SpaceGrotesk-SemiBold',_sans-serif] text-[10px] leading-[10px] font-semibold relative w-[133px]">
                    Research Grant - Augmanity
                  </div>
                  <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[10px] font-normal relative w-[133px]">
                    Frontend{" "}
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 items-start justify-start shrink-0 relative">
                  <div
                    className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[7px] leading-[7px] font-normal relative w-[133px]"
                    style={{ opacity: "0.6000000238418579" }}
                  >
                    University of Aveiro{" "}
                  </div>
                  <div
                    className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[7px] leading-[7px] font-normal relative w-[133px]"
                    style={{ opacity: "0.6000000238418579" }}
                  >
                    October 2022 - July 2023
                  </div>
                </div>
              </div>
              <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[8px] leading-[8px] font-normal relative w-[239px]">
                Responsible for selecting technologies and developing a web
                platform focused on workforce engagement
                <br />
                Selection of technologies for the platform
                <br />
                Development of the workforce engagement web platform using React
                <br />
                Documentation of the solutions developed{" "}
              </div>
            </div>
            <div className="flex flex-row gap-5 items-start justify-start shrink-0 w-[392px] relative">
              <div className="flex flex-col gap-3 items-start justify-start shrink-0 w-[133px] relative">
                <div className="flex flex-col gap-0.5 items-start justify-start shrink-0 relative">
                  <div className="text-[#000000] text-left font-['SpaceGrotesk-SemiBold',_sans-serif] text-[10px] leading-[10px] font-semibold relative w-[133px]">
                    Curricular Internship{" "}
                  </div>
                  <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[10px] font-normal relative w-[133px]">
                    Usability &amp; User Experience{" "}
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 items-start justify-start shrink-0 relative">
                  <div
                    className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[7px] leading-[7px] font-normal relative w-[133px]"
                    style={{ opacity: "0.6000000238418579" }}
                  >
                    Altice Labs - Aveiro{" "}
                  </div>
                  <div
                    className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[7px] leading-[7px] font-normal relative w-[133px]"
                    style={{ opacity: "0.6000000238418579" }}
                  >
                    May 2020 - July 2020{" "}
                  </div>
                </div>
              </div>
              <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[8px] leading-[8px] font-normal relative w-[239px]">
                Responsible for selecting technologies and developing a web
                platform focused on workforce engagement
                <br />
                Selection of technologies for the platform
                <br />
                Development of the workforce engagement web platform using React
                <br />
                Documentation of the solutions developed{" "}
              </div>
            </div>
            <div className="flex flex-row gap-5 items-start justify-start shrink-0 w-[392px] relative">
              <div className="flex flex-col gap-3 items-start justify-start shrink-0 w-[133px] relative">
                <div className="flex flex-col gap-0.5 items-start justify-start shrink-0 relative">
                  <div className="text-[#000000] text-left font-['SpaceGrotesk-SemiBold',_sans-serif] text-[10px] leading-[10px] font-semibold relative w-[133px]">
                    Academic Internship{" "}
                  </div>
                  <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[10px] font-normal relative w-[133px]">
                    Web Developer{" "}
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 items-start justify-start shrink-0 relative">
                  <div
                    className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[7px] leading-[7px] font-normal relative w-[133px]"
                    style={{ opacity: "0.6000000238418579" }}
                  >
                    Decimal Informática e Gestão, Lda - Aveiro{" "}
                  </div>
                  <div
                    className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[7px] leading-[7px] font-normal relative w-[133px]"
                    style={{ opacity: "0.6000000238418579" }}
                  >
                    October 2022 - July 2023
                  </div>
                </div>
              </div>
              <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[8px] leading-[8px] font-normal relative w-[239px]">
                During the course of the intership, I developed a web component
                and completed various tasks, including:
                <br />• Needs and requirements analysis
                <br />• Technological analysis associated with the component{" "}
                <br />• Development of the Angular component
                <br />• Usability tests{" "}
              </div>
            </div>
            <div className="flex flex-row gap-5 items-start justify-start shrink-0 w-[392px] relative">
              <div className="flex flex-col gap-3 items-start justify-start shrink-0 w-[133px] relative">
                <div className="flex flex-col gap-0.5 items-start justify-start shrink-0 relative">
                  <div className="text-[#000000] text-left font-['SpaceGrotesk-SemiBold',_sans-serif] text-[10px] leading-[10px] font-semibold relative w-[133px]">
                    Academic Internship{" "}
                  </div>
                  <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[10px] font-normal relative w-[133px]">
                    Web developer{" "}
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 items-start justify-start shrink-0 relative">
                  <div
                    className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[7px] leading-[7px] font-normal relative w-[133px]"
                    style={{ opacity: "0.6000000238418579" }}
                  >
                    University of Aveiro{" "}
                  </div>
                  <div
                    className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[7px] leading-[7px] font-normal relative w-[133px]"
                    style={{ opacity: "0.6000000238418579" }}
                  >
                    October 2022 - July 2023
                  </div>
                </div>
              </div>
              <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[8px] leading-[8px] font-normal relative w-[239px]">
                During the course of the intership, I developed a web component
                and completed various tasks, including:
                <br />• Needs and requirements analysis
                <br />• Technological analysis associated with the component{" "}
                <br />• Development of the Angular component
                <br />• Usability tests{" "}
              </div>
            </div>
          </div>
        </div> */}
      </main>
      <footer className="w-full text-center">
        <span className="text-xs">
          Pedro Miguel Pereira &copy; {new Date().getFullYear()}{" "}
        </span>
      </footer>
    </Fragment>
  );
}
