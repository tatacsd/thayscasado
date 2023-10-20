import {
    ArrowCircleDown,
    GithubLogo,
    InstagramLogo,
    LinkedinLogo,
    TwitterLogo,
  } from "@phosphor-icons/react";
  import { TypedAnimation } from "../TypedAnimation";
  import { Button } from "../ui/button";


type HomeSectionProps = {
    textArray: string[];
    handleButtonDownload: () => void;
    imageURL: string;
    nextSection: () => void;
}

export const HomeSection = ({textArray, imageURL, handleButtonDownload, nextSection}: HomeSectionProps) => {
    
    return(
        <section className="flex flex-col justify-center items-center h-screen w-full bg-[#1E2227]">
        <div className="lg:hidden flex flex-row justify-between  text-white items-center bg-[#111418] px-4 w-full gap-4">
          <p className="text-lg font-bold text-center inline-block">
            Thays Casado
          </p>

          <div className="inline-block">
            <ul className=" flex gap-4">
              <li>
                <a href="https://github.com/tatacsd" target="_blank">
                  <GithubLogo size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/thayscasado"
                  target="_blank"
                >
                  <LinkedinLogo size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/thayscasado/"
                  target="_blank"
                >
                  <InstagramLogo size={24} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/CasadoThays" target="_blank">
                  <TwitterLogo size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-screen w-full bg-[#1E2227]">
        <div className="lg:hidden flex justify-center items-center pb-2">
            <img
              className="rounded-full w-40 h-40 border-spacing-10 border-8 border-[#343A40]"
              src={imageURL}
              alt=""
            />
          </div>
          <h1 className="text-white text-center lg:text-6xl font-bold mb-6 text-lg">
            Hi, I'm Thays Casado
          </h1>
          <div className="text-white text-center text-4xl">
            <TypedAnimation
              strings={textArray}
              typeSpeed={100}
              backSpeed={50}
              backDelay={700}
            />
          </div>
          <p className="text-white text-center text-lg mt-6">
            base in Vancouver, British Columbia
          </p>

          <Button
            variant={"outline"}
            className="mt-6 shadow-lg hover:bg-[#343A40] hover:text-white"
            onClick={handleButtonDownload}
          >
            Download CV
          </Button>
        </div>

        <div
            className="pb-6 flex flex-col justify-center items-center text-white cursor-pointer"
            onClick={() => {console.log('clicked')}}
        >
        <ArrowCircleDown 
        color="#fff"
        size={50} 
        onClick={nextSection}
        />
        </div>
      </section>
    )
}