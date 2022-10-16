import "./AppDesign/design.css";
import Typewriter from "typewriter-effect";
import myImage from "./myself.jpeg";
import { AiOutlineArrowRight } from "react-icons/ai";
import classNames from "classnames";
import { useState, useEffect } from "react";
function App() {
  const [pressed, setPressed] = useState("");

  // useEffect(() => {
  //   const cursors = document.querySelector(".cursor");
  //   window.addEventListener("mousemove", (e) => {
  //     cursors.style.left = e.clientX + "px";
  //     cursors.style.top = e.clientY + "px";
  //   });
  //   return () => {};
  // }, []);

  const [content, setContent] = useState();

  return (
    <div className="App">
      <div className="first-part">
        {/* <img src={myImage}></img> */}
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
        {/* <div className="cursor"></div> */}

        <p className="intro">
          <hr />I am a <span>passionate, motivated, and ambitious</span>{" "}
          first-year student at Loughborough University,{" "}
          <span>willing to go further</span>
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
        <div className="hrLine">
          <div class="horizontal">
            <div class="box-sm brown"></div>
            <div class="box-sm white"></div>
            <div class="box-sm black"></div>
            <div class="box-sm green"></div>
          </div>
        </div>
        <h1 className="header">My Skills</h1>
        <div className="skill-list">
          <div
            onClick={() => {
              setPressed("HTMLCSS");
              setContent(
                "Proficient in HTML & CSS. Utilizing HTML and CSS and javascript libraries, I can build a full-fledged website from scratch. For example, I created this personal website using React and CSS. Moreover, I learned a CSS framework named SCSS, which I used to build this website."
              );
            }}
            className={classNames({
              Skills: true,
              clicked: pressed === "HTMLCSS",
            })}
          >
            Website Building
          </div>
          <div
            onClick={() => {
              setPressed("General");
              setContent(
                "Possesess a wide range of knowledge with Javascript such as arrow functions, error handling, data retrieval. " +
                  "Able to construct a full fledged backend with Node.JS, and a frontend with Express or React.JS." +
                  " Moreover, I have extensive knowledge in java programming, able to solve complex java problems."
              );
            }}
            className={classNames({
              javascript: true,
              Skills: true,
              clicked: pressed === "General",
            })}
          >
            General Coding
          </div>
          <div
            onClick={() => {
              setPressed("Analyzing");
              setContent(
                "Capable of analyzing a publicly traded company’s financial statements and the company itself using ratios, like P/E and P/B ratio, and other measurements." +
                  "After reading from the financial transcript, I am able to construct a simple discounted cash flow to analyze" +
                  "the company's valuation. I would not only look at the company's financials, I am also able to analyze the company as a whole entirely"
              );
            }}
            className={classNames({
              Skills: true,
              clicked: pressed === "Analyzing",
            })}
          >
            Analyzing Companies
          </div>
          <div
            onClick={() => {
              setPressed("Blockchain");
              setContent(
                "Understands the concept of blockchain and its technicalities. Able to create a blockchain smart contract" +
                  ". Adept at connecting the smart contract with a web application using Hardhat. "
              );
            }}
            className={classNames({
              Skills: true,
              clicked: pressed === "Blockchain",
            })}
          >
            Blockchain Ethereum
          </div>
        </div>

        <p className="content">
          {content}
          <hr />
        </p>
        <hr className="border" />
        <h1 className="proje">Current project</h1>
        <div className="projects">
          <div className="one">
            <a href="https://docs.google.com/document/d/1eKclFaBDFCUF6jIcPrTbNzztVUwtVTnKpeX4sOyIo5s/edit">
              <h4>Investment Club</h4>

              <hr />
              <p>
                Started an Investment Club, a club that teaches students
                investment strategies. We also compete in Investment
                competitions and apply our investment strategies in these
                Investment Competitions. In the end we wrote a paper detailing
                our investment strategy.
              </p>
            </a>
          </div>

          <div className="one">
            <a href="https://6229c306baf6e9609483f851--yal3ab.netlify.app">
              <h4>Gaming Website</h4>
              <hr />
              <p>
                Website that allows the player to play hangman and Memory Card.
                Utilized complex javascript in order to implement the logics of
                the game itself. At the same time, utilized react technology in
                order to implement the frontend of the website.
              </p>
            </a>
          </div>
          <div className="one">
            <a href="https://noobylub.github.io/Topic-VR-Project/">
              <h4>Vr-application</h4>
              <hr />
              <p>
                Pushed the limits of React technology, and created a Virtual
                Reality application. The application utilized A-frame technology
                in combination with React.
              </p>
            </a>
          </div>
          <div className="one">
            <a href="https://github.com/noobylub/nft-marketplace">
              <h4>Blockchain NFT Marketplace</h4>
              <hr />
              <p>
                A completed NFT marketplace implementation. Utilized 
                Hardhat for blockchain integration
                ,React for the frontend, displaying the data, 
                Solidity languange for the smart contract Blockhain. 

              </p>
            </a>
          </div>
          <div className="one">
            <a href="https://github.com/noobylub/loyalty-startup">
              <h4>Blockchain Loyalty Startup </h4>
              <hr />
              <p>
                Still in the planning process; however, I plan to implement a
                loyalty program utilizing Blockchain Technology. It will be the
                first of its kind, a loyalty program entirely on a new and
                revolutinary technology, Blockchain. Linked is the current
                Github Repository showcasing the project's process.
              </p>
            </a>
          </div>
        </div>
        <div className="grades-header">
          <h1>Education</h1>
          <hr />
          <p>
            Listed below are the classes I took previously and classes I am taking. AP score, are the 
            final exam score. 
          </p>
        </div>
        <div className="grades">
          <div className="course">
            <h3 className="name">Advanced Computer Science</h3>
            <h3 className="grade">A- grade 4/5 AP score</h3>
          </div>
          <div className="course">
            <h3 className="name">Advanced Microeconomics</h3>
            <h3 className="grade">A- grade 5/5 AP score</h3>
          </div>
          <div className="course">
            <h3 className="name">Advanced Macroeconomics</h3>
            <h3 className="grade">A- grade 5/5 AP score</h3>
          </div>
          <div className="course">
            <h3 className="name">Topics in Programming</h3>
            <h3 className="grade">A grade 2nd Year college course</h3>
          </div>
          <div className="course">
            <h3 className="name">Advanced Calculus</h3>
            <h3 className="grade">B+ grade 4/5 AP score</h3>
          </div>
          <div className="course">
            <h3 className="name">Software Engineering 1</h3>
            <h3 className="grade">Currently taking the module</h3>
          </div>
          <div className="course">
            <h3 className="name">Introduction to Accounting</h3>
            <h3 className="grade">Currently taking the module</h3>
          </div>
          <div className="course">
            <h3 className="name">Computer Systems</h3>
            <h3 className="grade">Currently taking the module</h3>
          </div>
        </div>

        <h1 className="GPA-header">
          Grade Point Averange <hr />
        </h1>

        <div className="GPA">
          <a href="https://drive.google.com/file/d/1oJKOJDU9PmH2bgFIwkw6O2neuEGtqA4A/view?usp=sharing">
            <h1 className="year">Sophmore</h1>
          </a>
          <a href="https://drive.google.com/file/d/1PM6IN55BVnCMazCI_ge1G1p9tAcNI3WD/view?usp=sharing">
            <h1 className="year">Junior</h1>
          </a>
          <a href="https://drive.google.com/file/d/1eFm58wYcGm1rkEM_XJWyIWO1tdHHe0iB/view?usp=sharing">
            <h1 className="year">Senior</h1>
          </a>
        </div>
        <div className="contact-header">
          <Typewriter
            options={{
              wrapperClassName: "text",
              strings: [
                "Contact Muhammad Lubbil Mushoffa",
                "I am looking oppurtunities that will allow me to learn more",
              ],
              autoStart: true,
              loop: true,
              cursorClassName: "curs",
            }}
          />
          <hr />
        </div>
        <div className="contacts">
          <a
            className="contact linkedin"
            href="https://www.linkedin.com/in/muhammad-mushoffa-63721a207/"
          >
            <h3>Linked In</h3>
            <AiOutlineArrowRight className="icon"></AiOutlineArrowRight>
          </a>
          <a className="contact email" href="mailto: MuhammadLubbil@gmail.com">
            <h3>E-Mail</h3>
            <AiOutlineArrowRight className="icon"></AiOutlineArrowRight>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
