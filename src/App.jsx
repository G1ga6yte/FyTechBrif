import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import { useCartContext } from "./CartContext";
import Page1 from "./page1/page1";
import Page2 from "./page2/page2";

import bigStar from "./images/bigstar.png";

import "./App.scss";

function App() {
  const { page } = useCartContext();

  const { ref: myRef1, inView: visible1 } = useInView();
  const { ref: myRef2, inView: visible2 } = useInView();
  const { ref: myRef3, inView: visible3 } = useInView();

  const [isScrolled, setScrolled] = useState(false);

  const onClickLogo = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);
  const onClickContactUsButton = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className={`nav G-flex-between ${isScrolled ? "scrolled" : ""}`}>
        <Link to="/" className="logoLink scrollAnimXLeft" onClick={onClickLogo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="134"
            height="67"
            viewBox="0 0 134 67"
            fill="none"
          >
            <path
              d="M0.701778 66.5H20.6427L26.9253 48.3179L26.9255 48.3174L28.9069 42.6005L29.0235 42.2643H29.3794H62.9733L69.0509 24.7454H25.8965C19.4787 24.7454 13.8248 28.5953 11.8696 34.2297L8.85165 42.9279L8.85157 42.9282L6.87159 48.6444L6.87146 48.6448L0.701778 66.5Z"
              stroke="black"
            />
            <path
              d="M99.8605 38.8185L99.8604 38.8186C97.756 44.8929 91.6942 48.9812 84.8861 48.9812H34.6883L28.6349 66.5H88.3843C101.421 66.5 112.938 58.6747 116.917 47.178L133.067 0.510887H113.125L99.8605 38.8185Z"
              stroke="black"
            />
            <path
              d="M70.962 42.2738H79.9651C86.383 42.2738 92.038 38.4239 93.992 32.7897C93.992 32.7897 93.992 32.7896 93.992 32.7896L97.0081 24.0919L97.0088 24.09L98.9641 18.3762L98.9648 18.3742L105.159 0.519226H85.396L79.1133 18.7014L79.1131 18.7018L77.1318 24.4171L77.1317 24.4175L70.962 42.2738Z"
              stroke="black"
            />
            <path
              d="M17.4644 18.0189H71.3559L77.4334 0.500074H34.2791C27.8612 0.500074 22.2074 4.34992 20.2521 9.9843C20.2521 9.98431 20.2521 9.98432 20.2521 9.98432L17.4644 18.0189Z"
              stroke="black"
            />
          </svg>
        </Link>

        <div className="buttons G-alignItems-center">
          {/* <div className="changeLng">
            <div className="checkedLng"></div>
            <div className="menuLng">
              <p className="language">Bulgarian</p>
              <p className="language">English</p>
            </div>
          </div> */}

          <Link
            to="/"
            className="contactUsBtn scrollAnimXRight G-alignItems-center"
            onClick={onClickContactUsButton}
          >
            <div className="textBlock">
              <div className="textLine G-alignItems-center">
                {"Contact us".split("").map((letter, index) =>
                  letter === " " ? (
                    <div className="space" key={index}></div>
                  ) : (
                    <div className="letter" key={index}>
                      {letter}
                    </div>
                  )
                )}
              </div>
              <div className="textLine G-alignItems-center">
                {"Contact us".split("").map((letter, index) =>
                  letter === " " ? (
                    <div className="space" key={index}></div>
                  ) : (
                    <div className="letter" key={index}>
                      {letter}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="middleLine"></div>

            <div className="arrowBlock">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="8"
                  viewBox="0 0 20 8"
                  fill="none"
                >
                  <path
                    d="M19.3536 4.35355C19.5488 4.15829 19.5488 3.84171 19.3536 3.64645L16.1716 0.464466C15.9763 0.269204 15.6597 0.269204 15.4645 0.464466C15.2692 0.659728 15.2692 0.976311 15.4645 1.17157L18.2929 4L15.4645 6.82843C15.2692 7.02369 15.2692 7.34027 15.4645 7.53553C15.6597 7.7308 15.9763 7.7308 16.1716 7.53553L19.3536 4.35355ZM0 4.5H19V3.5H0V4.5Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="8"
                  viewBox="0 0 20 8"
                  fill="none"
                >
                  <path
                    d="M19.3536 4.35355C19.5488 4.15829 19.5488 3.84171 19.3536 3.64645L16.1716 0.464466C15.9763 0.269204 15.6597 0.269204 15.4645 0.464466C15.2692 0.659728 15.2692 0.976311 15.4645 1.17157L18.2929 4L15.4645 6.82843C15.2692 7.02369 15.2692 7.34027 15.4645 7.53553C15.6597 7.7308 15.9763 7.7308 16.1716 7.53553L19.3536 4.35355ZM0 4.5H19V3.5H0V4.5Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="headerContent">
        <p
          className={`header ${visible1 ? "scrollAnimXLeft2" : ""}`}
          ref={myRef1}
        >
          LETS
        </p>
        <p
          className={`header ${visible1 ? "scrollAnimXRight2" : ""}`}
          ref={myRef2}
        >
          TALK
        </p>
        <img
          src={bigStar}
          className={`${visible3 ? "ImgRotate" : ""}`}
          ref={myRef3}
        />
      </div>

      <div className="mainCont">
        <div className="countPages">{page}/2</div>
        {page === 1 ? <Page1 /> : page === 2 ? <Page2 /> : "not Found"}
      </div>
    </div>
  );
}

export default App;
