import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import imageURL from "./assets/profile.png";
import { TypedAnimation } from "./components/TypedAnimation";
import { Button } from "./components/ui/button";

export function App() {
  const textArray = ["Developer.", "Freelancer.", "Designer.", "Photographer."];
  const pdfUrl =
    "https://drive.google.com/file/d/1b1XGWlwcwAF5EIYttntD4vEIpRx2QvbB/view?usp=drive_link";

  const handleButtonDownload = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="flex flex-row justify-center items-center h-screen w-screen">
      <aside className="hidden lg:flex flex-col justify-between  text-white h-screen w-2/12 items-center bg-[#111418] ">
        <div className="py-5 ">
          <div className="flex justify-center items-center pb-2">
            <img
              className="rounded-full w-40 h-40 border-spacing-10 border-8 border-[#343A40]"
              src={imageURL}
              alt=""
            />
          </div>
          <p className="text-lg font-bold text-center mt-2 border-t-2 border-[#343A40] pt-2">
            Thays Casado
          </p>
          <p className="text-sm font-bold text-center mt-2 pt-2">
            Full Stack Developer
          </p>
        </div>

        {/* navbar */}
        <div className="w-full p-5">
          <nav className="text-white w-full">
            <ul className="text-center w-full flex flex-col gap-6">
              <li>Home</li>
              {/* <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li> */}
            </ul>
          </nav>
        </div>
        <div className="w-full p-5">
          <ul className="flex w-full justify-center items-center gap-6">
            <li>
              <a href="https://github.com/tatacsd" target="_blank">
                <GithubLogo size={24} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/thayscasado" target="_blank">
                <LinkedinLogo size={24} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thayscasado/" target="_blank">
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
      </aside>

      {/*HOME*/}
      <section className="flex flex-col justify-center items-center h-screen w-full bg-[#1E2227]">
        <div className="lg:hidden flex flex-row justify-between  text-white items-center bg-[#111418] px-4 w-full gap-4">
          <p className="text-lg font-bold text-center inline-block">
            Thays Casado
          </p>

          <div className="inline-block">
            <ul className=" flex">
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
      </section>
    </div>
  );
}
