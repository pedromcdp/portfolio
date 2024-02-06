import { SectionContainer } from "@/components/SectionContainer";
import Image from "next/image";
import { education, experiences, skills } from "@/data";
import { differenceInYears } from "date-fns";

export default async function Home(): Promise<JSX.Element> {
  return (
    <div className="relative flex flex-col min-h-[100dvh]">
      <main className="relative p-6 flex grow gap-8 flex-col mx-auto max-w-screen-lg">
        <section id="head" className="flex flex-col gap-4 relative">
          <a
            download
            href="/Pedro_Miguel_Pereira_2024.pdf"
            className="absolute right-0 top-0 sm:top-auto sm:bottom-0 border p-2 transition-all ease-in-out duration-200"
          >
            Download CV
          </a>
          <div className="h-14 w-14 relative">
            <Image
              className="object-cover"
              src="/1x1.jpg"
              fill
              alt="Pedro Pereira"
            />
          </div>
          <div className="flex flex-row gap-5 sm:space-x-14 items-center w-full justify-start">
            <div className="flex flex-col gap-2 text-xl">
              <h1 className="leading-5 font-semibold">Pedro Pereira</h1>
              <h2 className="leading-5 text-[1.20rem]">Frontend Dev.</h2>
            </div>
            <div className="flex flex-col gap-[3px] relative text-sm leading-4">
              <a href="tel:+351919300228">+351 919 300 228</a>
              <a href="mailto:pedromcdp@gmail.com">pedromcdp@gmail.com</a>
              <a href="https://github.com/pedromcdp" target="_blank">
                github.com/pedromcdp
              </a>
            </div>
          </div>
        </section>
        <SectionContainer id="about" title="About Me">
          <p className="text-sm leading-4 text-justify hyphens-auto">
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
            development. I&#039;m motivated, committed, and I enjoy
            collaborating with others, exchanging ideas with coworkers, and I
            always give my best in every project I&#039;m involved in. Im also
            fluent in both Portuguese and English.
          </p>
        </SectionContainer>
        <SectionContainer id="experience" title="Experience">
          <div className="flex flex-col gap-5">
            {experiences.map((experience) => (
              <div
                key={experience.type}
                className="grid grid-flow-col grid-cols-6 w-full"
              >
                <div className="flex flex-col justify-between col-span-2 gap-y-10">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold leading-4 text-wrap">
                      {experience.type}
                    </span>
                    <span className="text-sm">{experience.title}</span>
                  </div>
                  <div className="flex flex-col leading-4 text-xs">
                    <span className="text-black/60 dark:text-white/60 text-pretty">
                      {experience.identity}
                    </span>
                    <span className="text-black/60 dark:text-white/60">
                      {experience.timeline}
                    </span>
                  </div>
                </div>
                <div className="grid-cols-subgrid col-span-1 sm:hidden" />
                <div className="flex flex-col col-span-4">
                  {experience.activities.map((activity) => (
                    <span
                      key={activity}
                      className="text-xs leading-4 text-justify hyphens-auto"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
        <SectionContainer id="education" title="Education">
          <div className="flex flex-col gap-3">
            {education.map((item) => (
              <div key={item.title} className="flex flex-col gap-0.5">
                <h4 className="text-sm capitalize font-semibold leading-none">
                  {item.title}
                </h4>
                <span className="text-sm leading-3">{item.subtitle}</span>
                <span className="text-xs leading-5 text-black/60 dark:text-white/60">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </SectionContainer>
        <SectionContainer id="skills" title="Skills">
          <div className="grid grid-cols-1 sm:grid-cols-4 grid-rows-6 sm:grid-rows-3 grid-flow-col gap-6">
            {skills.map((skill) => (
              <span key={skill} className="text-sm col-span-1 leading-4">
                {skill}
              </span>
            ))}
          </div>
        </SectionContainer>
      </main>
      <footer className="w-full text-center my-4">
        <span className="text-sm">
          Pedro Miguel Pereira &copy; {new Date().getFullYear()}{" "}
        </span>
      </footer>
    </div>
  );
}
