import "./AppDesign/design.css";
import Typewriter from "typewriter-effect";
import Skills from "./Components/mySkill";
import { AiOutlineArrowRight } from "react-icons/ai";
import Education from "./Components/education";
import CurrentProject from "./Components/currentProject";
import Gpa from "./Components/gpa";
import Contact from "./Components/contact-me";
import Line from "./Components/line";
function App() {
  return (
    <div className="App">
      <div className="first-part">
        <Typewriter
          options={{
            strings: [
              '<h1 className="text">Hello my name is Muhammad Lubbil Mushoffa</h1>',
              '<h1 className="text">A motivated and educated first year university student</h1>',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <div className="second-part">
        <p className="intro">
          <hr />I am a <span>passionate, motivated, and ambitious</span>{" "}
          first-year student at Loughborough University,{" "}
          <span>willing to go further</span>  {" "}
           to achieve the desired goal. Once I set my mind to a plan, nothing can
          and will stop me from <span>reaching that goal</span>. At the same
          time, my thirst of knowledge can never be quenched, as I{" "}
          <span>continiously hone new and old skils.</span>
        </p>
        <div className="learn-more">
          <a href="https://docs.google.com/document/d/1Ys1_tT4ODS8DQG3_fRZQynFsaF8nADSr51cNm2OKhiA/edit?usp=sharing">
            <h3>CV letter</h3>
          </a>
        </div>

        {/* The second part which contain my skill */}
        <Line></Line>
        <Skills></Skills>
        <CurrentProject></CurrentProject>
        <Education></Education>
        <Gpa></Gpa>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
