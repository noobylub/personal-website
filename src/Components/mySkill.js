function Skills(){
    const [pressed, setPressed] = useState("");

 

  const [content, setContent] = useState();
    return(
        <div>
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
        </div>
    )
}

export default Skills; 