import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";

import { serviceData } from "./data";

import { useCartContext } from "../CartContext";

const Service = memo(function Service({ name, content }) {
  const { checkedServices, setCheckedServices } = useCartContext();

  const { ref: myRef1, inView: visible1 } = useInView();

  const [height, setHeight] = useState(0);

  const handleMouseOver = useCallback(() => {
    setHeight(content.length * 36);
  }, [content]);
  const handleMouseLeave = useCallback(() => {
    setHeight(0);
  }, []);

  const style = useMemo(
    () => ({
      height: `${height}px`,
    }),
    [height]
  );

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="serviceBlock"
    >
      <p className="serviceName" ref={myRef1}>
        {name}
      </p>
      <div style={style} className="services">
        {content.map((sectionName, index) =>
          checkedServices.includes(sectionName) ? (
            <p
              className="serviceItem checked"
              onClick={() => {
                setCheckedServices(
                  checkedServices.filter((service) => service !== sectionName)
                );
              }}
              key={index}
            >
              {sectionName}
            </p>
          ) : (
            <p
              className="serviceItem"
              onClick={() => {
                setCheckedServices([...checkedServices, sectionName]);
              }}
              key={index}
            >
              {sectionName}
            </p>
          )
        )}
      </div>
    </div>
  );
});

function Page1() {
  const { setPage } = useCartContext();

  const { ref: myRef1, inView: visible1 } = useInView();
  const { ref: myRef2, inView: visible2 } = useInView();
  const { ref: myRef3, inView: visible3 } = useInView();
  const { ref: myRef4, inView: visible4 } = useInView();
  const { ref: myRef5, inView: visible5 } = useInView();
  const { ref: myRef6, inView: visible6 } = useInView();
  const { ref: myRef7, inView: visible7 } = useInView();
  const { ref: myRef8, inView: visible8 } = useInView();

  const [name, setName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [projectAbout, setProjectAbout] = useState("");

  const onChangeName = useCallback((event) => setName(event.target.value));
  const onChangeProjectName = useCallback((event) =>
    setProjectName(event.target.value)
  );
  const onChangeEmail = useCallback((event) => setEmail(event.target.value));
  const onChangeCompanyName = useCallback((event) =>
    setCompanyName(event.target.value)
  );
  const onChangeProjectAbout = useCallback((event) =>
    setProjectAbout(event.target.value)
  );
  const onClickContinue = useCallback(() => {
    window.scrollTo(0, 500);

    localStorage.setItem(
      "formItemsPart1",
      JSON.stringify({
        name,
        projectName,
        email,
        companyName,
        projectAbout,
      })
    );

    setPage(2);
  }, [name, projectName, email, companyName, projectAbout]);

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="page1 page">
      <div className="nameLine">
        <div className="nameBlock">
          <label
            className={`${visible1 ? "scrollAnimXLeft" : ""}`}
            ref={myRef1}
          >
            What's Your Name
          </label>
          <input type="text" value={name} onChange={onChangeName} />
        </div>
        <div className="projectNameBlock">
          <label
            className={`${visible2 ? "scrollAnimXLeft" : ""}`}
            ref={myRef2}
          >
            What's Your Project/Idea Name
          </label>
          <input
            type="text"
            value={projectName}
            onChange={onChangeProjectName}
          />
        </div>
      </div>

      <div className="emailLine">
        <div className="emailBlock">
          <label
            className={`${visible4 ? "scrollAnimXLeft" : ""}`}
            ref={myRef4}
          >
            What's Your Email
          </label>
          <input type="text" value={email} onChange={onChangeEmail} />
        </div>
        <div className="companyBlock">
          <label
            className={`${visible5 ? "scrollAnimXLeft" : ""}`}
            ref={myRef5}
          >
            Company/Brand Name
          </label>
          <input
            type="text"
            value={companyName}
            onChange={onChangeCompanyName}
          />
        </div>
      </div>

      <div className="aboutLine">
        <label ref={myRef3} className={`${visible3 ? "scrollAnimXLeft" : ""}`}>
          Tell Us More About the Project/Idea
        </label>
        <textarea
          cols="30"
          rows="10"
          value={projectAbout}
          onChange={onChangeProjectAbout}
        ></textarea>
      </div>

      <div className="ServicesCont">
        <p
          className={`headerServices ${visible6 ? "scrollAnimXLeft" : ""}`}
          ref={myRef6}
        >
          What Service Do You Need?
        </p>

        <div className="serviceCont">
          {serviceData.map((service, index) => (
            <Service {...service} key={index} />
          ))}
        </div>
      </div>

      <div className="bottomContent G-flex-between G-alignItems-center">
        <button
          className={`contactUsBtn ${visible7 ? "scrollAnimXLeft" : ""}`}
          onClick={onClickContinue}
          ref={myRef7}
        >
          <div className="textBlock">
            <div className="textLine G-alignItems-center">
              {"Continue".split("").map((letter, index) => (
                <div className="letter" key={index}>
                  {letter}
                </div>
              ))}
            </div>
            <div className="textLine G-alignItems-center">
              {"Continue".split("").map((letter, index) => (
                <div className="letter" key={index}>
                  {letter}
                </div>
              ))}
            </div>
          </div>
        </button>
        <p
          className={`descEmail ${visible8 ? "scrollAnimXRight" : ""}`}
          ref={myRef8}
        >
          Or You Can Email Us Here:
          <a href="mailto:office@fytechnology.eu">office@fytechnology.eu</a>
        </p>
      </div>
    </div>
  );
}
export default memo(Page1);
