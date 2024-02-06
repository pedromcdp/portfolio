import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-[100dvh] flex-col bg-white text-black">
      <div className="flex flex-col gap-6 items-start justify-start absolute left-[calc(50%_-_274.5px)] top-[21px]">
        <section
          id="head"
          className="flex flex-col gap-[15px] items-start justify-start self-stretch shrink-0 relative"
        >
          <div className="h-16 w-16 relative">
            <Image
              className="object-cover"
              src="/1x1.jpg"
              fill
              alt="Pedro Pereira"
            />
          </div>
          <div className="flex flex-row gap-5 items-center justify-start shrink-0 relative">
            <div className="flex flex-col gap-[5px] items-start justify-end shrink-0 w-[139px] relative">
              <div className="text-[#000000] text-left text-[17px] leading-[15.12px] font-semibold relative w-[190px]">
                Pedro Pereira{" "}
              </div>
              <div className="text-[#000000] text-left text-[17px] leading-[15.12px] font-normal relative w-[161px]">
                Frontend Dev.{" "}
              </div>
            </div>
            <div className="flex flex-col gap-[3px] items-start justify-center shrink-0 w-[115px] relative">
              <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[11px] font-normal relative w-[119px]">
                Phone
              </div>
              <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[11px] font-normal relative w-32">
                pedromcdp@gmail.com{" "}
              </div>
              <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[11px] font-normal relative w-32">
                github.com/pedromcdp{" "}
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-row gap-5 items-start justify-start shrink-0 w-[549px] relative">
          <div className="text-[#000000] text-left font-['SpaceGrotesk-SemiBold',_sans-serif] text-sm leading-[15.12px] font-semibold relative w-[139px]">
            About me{" "}
          </div>
          <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[9px] leading-[10px] font-normal relative w-[390px] h-20">
            My name is Pedro Miguel Pereira, I&#039;m 25 years old, I live in
            the city of Aveiro and I have a Master&#039;s degree in
            Communication and Web Technologies from the University of Aveiro.
            From a very young age I&#039;ve been curious about technology and
            what it offers to our lives, which has led me to get interested in
            application development, with a special focus on web development.
            I&#039;m motivated and committed, I’m a good team worker(?), I like
            to exchange ideas with colleagues and I always give my best in every
            project I&#039;m involved in.
            <br />
            Im fluent in portuguese and english.{" "}
          </div>
        </div>
        <div className="flex flex-row gap-5 items-start justify-start shrink-0 w-[549px] relative">
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
        </div>
        <div className="flex flex-row gap-5 items-start justify-start shrink-0 w-[549px] relative">
          <div className="flex flex-row gap-5 items-start justify-start shrink-0 w-[137px] relative">
            <div className="text-[#000000] text-left font-['SpaceGrotesk-SemiBold',_sans-serif] text-sm leading-[15.12px] font-semibold relative w-[139px]">
              Education{" "}
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start shrink-0 relative">
            <div className="flex flex-col gap-[5px] items-start justify-start shrink-0 w-[392px] relative">
              <div className="flex flex-col gap-0.5 items-start justify-start shrink-0 w-[392px] relative">
                <div className="text-[#000000] text-left font-['SpaceGrotesk-SemiBold',_sans-serif] text-[10px] leading-[10px] font-semibold relative w-[392px]">
                  Master’s in communication and web technologies{" "}
                </div>
                <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[10px] font-normal relative w-[392px]">
                  University of Aveiro{" "}
                </div>
              </div>
              <div className="flex flex-col gap-0.5 items-start justify-start shrink-0 relative">
                <div
                  className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[7px] leading-[7px] font-normal relative w-[133px]"
                  style={{ opacity: "0.6000000238418579" }}
                >
                  2021-2023{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[5px] items-start justify-start shrink-0 w-[392px] relative">
              <div className="flex flex-col gap-0.5 items-start justify-start shrink-0 w-[392px] relative">
                <div className="text-[#000000] text-left font-['SpaceGrotesk-SemiBold',_sans-serif] text-[10px] leading-[10px] font-semibold relative w-[392px]">
                  Degree in Multimedia Communication
                </div>
                <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[10px] font-normal relative w-[392px]">
                  Polytechnic Institute of Guarda{" "}
                </div>
              </div>
              <div className="flex flex-col gap-0.5 items-start justify-start shrink-0 relative">
                <div
                  className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[7px] leading-[7px] font-normal relative w-[133px]"
                  style={{ opacity: "0.6000000238418579" }}
                >
                  2017-2020
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[5px] items-start justify-start shrink-0 w-[392px] relative">
              <div className="flex flex-col gap-0.5 items-start justify-start shrink-0 w-[392px] relative">
                <div className="text-[#000000] text-left font-['SpaceGrotesk-SemiBold',_sans-serif] text-[10px] leading-[10px] font-semibold relative w-[392px]">
                  Professional course for computer systems management and
                  programming technicians{" "}
                </div>
                <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[10px] font-normal relative w-[392px]">
                  Escola Secundária José Estêvão{" "}
                </div>
              </div>
              <div className="flex flex-col gap-0.5 items-start justify-start shrink-0 relative">
                <div
                  className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[7px] leading-[7px] font-normal relative w-[133px]"
                  style={{ opacity: "0.6000000238418579" }}
                >
                  2013-2016{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 items-start justify-start shrink-0 w-[549px] relative">
          <div className="flex flex-row gap-5 items-start justify-start shrink-0 w-[137px] relative">
            <div className="text-[#000000] text-left font-['SpaceGrotesk-SemiBold',_sans-serif] text-sm leading-[15.12px] font-semibold relative w-[139px]">
              Skills{" "}
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start shrink-0 relative">
            <div className="flex flex-row gap-[13px] items-start justify-start shrink-0 w-[392px] relative">
              <div className="flex flex-col gap-0.5 items-start justify-start shrink-0 w-[76px] relative">
                <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[10px] font-normal relative w-[392px]">
                  JavaScript{" "}
                </div>
                <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[10px] font-normal relative w-[392px]">
                  Typescript{" "}
                </div>
                <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[10px] font-normal relative w-[392px]">
                  React{" "}
                </div>
              </div>
              <div className="flex flex-col gap-0.5 items-start justify-start shrink-0 w-[70px] relative">
                <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[10px] font-normal relative w-[392px]">
                  Next.js{" "}
                </div>
                <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[10px] font-normal relative w-[392px]">
                  Node.js{" "}
                </div>
                <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[10px] font-normal relative w-[392px]">
                  Express{" "}
                </div>
              </div>
              <div className="flex flex-col gap-0.5 items-start justify-start shrink-0 w-[70px] relative">
                <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[10px] font-normal relative w-[392px]">
                  MongoDB{" "}
                </div>
                <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[10px] font-normal relative w-[392px]">
                  TailwindCSS{" "}
                </div>
                <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[10px] font-normal relative w-[392px]">
                  React Native{" "}
                </div>
              </div>
              <div className="flex flex-col gap-0.5 items-start justify-start shrink-0 w-[70px] relative">
                <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[10px] font-normal relative w-[392px]">
                  Git{" "}
                </div>
                <div className="text-[#000000] text-left font-['SpaceGrotesk-Regular',_sans-serif] text-[10px] leading-[10px] font-normal relative w-[392px]">
                  Docker{" "}
                </div>
              </div>
              <div className="flex flex-col gap-0.5 items-start justify-start shrink-0 w-[133px] h-[7px] relative"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
