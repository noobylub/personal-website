import { AiOutlineArrowRight } from "react-icons/ai";
import Typewriter from "typewriter-effect";
export default function Contact(){
    return(
        <div>
              <div className="contact-header">
          <Typewriter
            options={{
              wrapperClassName: "text",
              strings: [
                "Contact Muhammad Lubbil Mushoffa",
                "I am currently looking oppurtunities that will allow me to learn more",
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
    )
}