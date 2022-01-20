import "./AppDesign/design.css";
import Typewriter from "typewriter-effect";
import { AiOutlineArrowRight } from "react-icons/ai";
import classNames from "classnames";
import { useState, useEffect } from "react";
function App() {
  const [pressed, setPressed] = useState("");
  
  useEffect(() => {
    const cursors = document.querySelector(".cursor");
    window.addEventListener("mousemove", (e) => {
      cursors.style.left = e.clientX + "px";
      cursors.style.top = e.clientY + "px";
    });
    return () => {};
  }, []);

  const [content, setContent] = useState();

  return (
  
    <div className="App">
      <div className="first-part">
        <img src="./myself.jpeg"></img>
        <Typewriter
          options={{
            strings: [
              '<h1 className="text">Hello my name is Muhammad Lubbil Mushoffa</h1>',
              '<h1 className="text">A motivated and educated high school student</h1>',
              '<h1 className="text">I am looking for new oppurtunities for me to learn and achieve more</h1>',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="second-part">
        <div className="cursor"></div>

        <p className="intro">
          <hr />
          My name is Muhammad Mushoffa, and I am a student at Kings Academy. I
          wish to study Computer Science and Business. I love to create things,
          which is why I am incredibly motivated to learn to code. My passion
          for legos inspired my current aspirations. Beginning with legos as a
          child. I love to build anything to my heart's content. However, I also
          love Businesses and learn more about them and ponder the question,
          "what makes a succesfull business." Currently, I am taking a
          tremendous amount of interest in Blockchain Technology. I am
          interested in its wide range of applications in our world. I believe
          Blockchain can change our world, and I wish to be at the forefront of
          that.
        </p>
        <div className="learn-more">
          <a href="https://docs.google.com/document/d/1Ys1_tT4ODS8DQG3_fRZQynFsaF8nADSr51cNm2OKhiA/edit?usp=sharing">
            <h3>personal statement</h3>
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
                "Proficient in HTML & CSS. Able to make Responsive and Static Web applications using HTML and CSS. Utilizing HTML and CSS and a javascript library, I can build a full-fledged website from scratch. For example, I created this personal website using React and CSS. Moreover, I learned a CSS framework named SCSS, which I used to build this website."
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
                "Possesess a wide range of knowledge with Javascript. Understands the basic and some advanced topics of Javascript, such as arrow functions, error handling, mongoDB data retrieval, and creating full fledged backend  " +
                  "However it is worth noting that my knowledge of Javascript is still limited and potentially partial, as I learned it al on " +
                  "Udemy all on my own accord. Due to my acknowledgement of my partial knowledge in Javascript, I wish to learn more javascript to implement into my future projects."  +
                  "Moreover, I have extensive knowledge in java programming.  "
              );
            }}
            className={classNames({
              javascript:true,
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
                "Understands the concept of blockchain and its technicalities. Able to create a blockchain smart contrat; however to a limited" +
                  " extent. I am working hard everyday to improve on my knowledge of blockchain and implement these newly acquired knowledge in the projects that is to come. "
              );
            }}
            className={classNames({
              Skills: true,
              clicked: pressed ==="Blockchain",
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
            <a href="https://github.com/noobylub/PersonalFrontend">
              <h4>Connection Website</h4>
              <hr />
              <p>
                A work in progress website that allows you to list your favorite
                things . After listing out your favorite website you are then
                able to find people that has similar interest to your list.
              </p>
            </a>
          </div>
          <div className="one">
           
              <h4>Story Organization</h4>
              <hr />
              <p>
                Still in the planning process; however, we plan to make
                substantial progress soon. However, we wist to create a website
                in which palestinian refugees are able to share their stories
                freely, and the other side can make remarks also.
              </p>
          
          </div>
          <div className="one">
            <a href="https://github.com/noobylub/Lottery-Solidity">
              <h4>Blockchain Lottery</h4>
              <hr />
              <p>
                A completed simple Blockchain lottery project. Essentially
                people enter a lottery and the owner of the lottery chooses a
                winner. I have tested, tried and played with the lottery. This
                was done for training purposes.
              </p>
            </a>
          </div>
          <div className="one">
           
              <h4>Blockchain Warranty Management </h4>
              <hr />
              <p>
                Still in the planning process; however, I plan to implement
                a more efficient warranty management service. The app would essentially keep track of your warranty in 
                one place, so that it is easier for you to keep track of your warranties. Furthermore, this warranty will
                be implemented in the blockhchain.  
              </p>
           
          </div>
        </div>
        <div className="grades-header">
          <h1>Education</h1>
          <hr />
          <p>
            Due to my status of being a student, I do not have much experience;
            however, I would like to acquire experience if oppurtunities arise.
            For example, if you are aware of any experience work I could
            acquire, please contact me.
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
            <h3 className="grade">A grade 2nd Year college</h3>
          </div>
          <div className="course">
            <h3 className="name">Advanced Comparative Government</h3>
            <h3 className="grade">A grade </h3>
          </div>
          <div className="course">
            <h3 className="name">Advanced Calculus</h3>
            <h3 className="grade">B+ grade</h3>
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
