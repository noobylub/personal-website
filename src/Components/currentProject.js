import { useState } from "react";
function CurrentProject() {
  const [hover, setHover] = useState("");

  const onLeave = () => {
    setHover("");
  };
  return (
    <div>
      <hr className="border" />
      <h1 className="proje">Current projects</h1>

      <div className="projects">
        <div
          className="one"
          onMouseEnter={() => {
            setHover("first");
          }}
          onMouseLeave={onLeave}
        >
          {hover === "first" ? (
            <div>
              <h4>Investment Club</h4>
              <hr />
              <div className="links">
                <a href="https://docs.google.com/document/d/1eKclFaBDFCUF6jIcPrTbNzztVUwtVTnKpeX4sOyIo5s/edit">
                  <p>Investment Thesis</p>
                </a>
              </div>
            </div>
          ) : (
            <div>
              <h4>Investment Club</h4>

              <hr />
              <p>
                Started an Investment Club, a club that teaches students
                investment strategies. We also compete in Investment
                competitions and apply our investment strategies in these
                Investment Competitions. In the end we wrote a paper detailing
                our investment strategy.
              </p>
              <div className="more-info">
                <hr />
                <p>Click or hover to find out more</p>
              </div>
            </div>
          )}
        </div>

        <div
          className="one"
          onMouseEnter={() => {
            setHover("second");
          }}
          onMouseLeave={onLeave}
        >
          {hover === "second" ? (
            <div>
              <h4>Gaming Website</h4>
              <hr />
              <div className="links">
                <a href="https://6229c306baf6e9609483f851--yal3ab.netlify.app">
                  <p>Project Website</p>
                </a>
                <a href="https://github.com/noobylub/deploy-website">
                  <p>Github link</p>
                </a>
              </div>
            </div>
          ) : (
            <div>
              <h4>Gaming Website</h4>
              <hr />
              <p>
                Website that allows the player to play hangman and Memory Card.
                Utilized complex javascript in order to implement the logics of
                the game itself. At the same time, utilized react technology in
                order to implement the frontend of the website.
              </p>
              <div className="more-info">
                <hr />
                <p>Click or hover to find out more</p>
              </div>
            </div>
          )}
        </div>

        <div
          className="one"
          onMouseEnter={() => {
            setHover("third");
          }}
          onMouseLeave={onLeave}
        >
          {hover === "third" ? (
            <div>
              <h4>Vr-application</h4>
              <hr />
              <div className="links">
                <a href="https://noobylub.github.io/Topic-VR-Project/">
                  <p>Project Website</p>
                </a>
                <a href="https://github.com/noobylub/Topic-VR-Project">
                  <p>Github Link</p>
                </a>
              </div>
            </div>
          ) : (
            <div>
              <h4>Vr-application</h4>
              <hr />
              <p>
                Pushed the limits of React technology, and created a Virtual
                Reality application. The application utilized A-frame technology
                in combination with React.
              </p>
              <div className="more-info">
                <hr />
                <p>Click or hover to find out more</p>
              </div>
            </div>
          )}
        </div>

        <div
          className="one"
          onMouseEnter={() => {
            setHover("fourth");
          }}
          onMouseLeave={onLeave}
        >
          {hover === "fourth" ? (
            <div>
              <h4>Blockchain NFT Marketplace</h4>
              <hr />
              <div className="links">
                <a href="https://github.com/noobylub/nft-marketplace">
                  <p>Github</p>
                </a>

                <h4>Still in progress</h4>
                <hr />
              </div>
            </div>
          ) : (
            <div>
              <h4>Blockchain NFT Marketplace</h4>
              <hr />
              <p>
                A completed NFT marketplace implementation. Utilized Hardhat for
                blockchain integration ,React for the frontend, displaying the
                data, Solidity languange for the smart contract Blockhain.
              </p>
              <div className="more-info">
                <hr />
                <p>Click or hover to find out more</p>
              </div>
            </div>
          )}
        </div>

        <div
          className="one"
          onMouseEnter={() => {
            setHover("fifth");
          }}
          onMouseLeave={onLeave}
        >
          {hover === "fifth" ? (
            <div>
              <h4>Blockchain Loyalty Startup </h4>
              <hr />
              <div className="links">
                <a href="https://github.com/noobylub/loyalty-startup">
                  <p>Github</p>
                </a>
                <h4>Still in progress</h4>
                <hr />
              </div>
            </div>
          ) : (
            <div>
              <h4>Blockchain Loyalty Startup </h4>
              <hr />
              <p>
                Still in the planning process; however, I plan to implement a
                loyalty program utilizing Blockchain Technology. It will be the
                first of its kind, a loyalty program entirely on a new and
                revolutinary technology, Blockchain.
              </p>
              <div className="more-info">
                <hr />
                <p>Click or hover to find out more</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CurrentProject;
