import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import imageURL from "./assets/profile.png";
import { trackButtonClick } from "./utils/ga4Utils";
import { HomeSection } from "./components/HomeSection";
import { SECTIONS } from "../src/utils/constants";
import { useState } from "react";
import { ContactSection } from "./components/ContactSection";
import { textArray } from "./utils/constants";
import { pdfUrl } from "./utils/constants";

export function App() {
  const [currentSection, setCurrentSection] = useState(SECTIONS.HOME);

  const handleButtonDownload = () => {
    trackButtonClick("resumeButton", 1);
    window.open(pdfUrl, "_blank");
  };

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
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
              <li
                onClick={() => handleSectionChange(SECTIONS.HOME)}
                className={
                  currentSection === SECTIONS.HOME
                    ? "text-[#A855F7] font-bold"
                    : ""
                }
              >
                Home
              </li>
              {/* <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
              */}
              <li
                onClick={() => handleSectionChange(SECTIONS.CONTACT)}
                className={
                  currentSection === SECTIONS.CONTACT
                    ? "text-[#A855F7] font-bold"
                    : ""
                }
              >
                Contact
              </li>
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

      {currentSection === SECTIONS.HOME && (
        <HomeSection
          handleButtonDownload={handleButtonDownload}
          textArray={textArray}
          imageURL={imageURL}
          nextSection={() => handleSectionChange(SECTIONS.CONTACT)}
        />
      )}
      {currentSection === SECTIONS.CONTACT && (
        <ContactSection
          previousSection={() => handleSectionChange(SECTIONS.HOME)}
        />
      )}
    </div>
  );
}
