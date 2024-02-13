import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import {useNavigate} from "react-router-dom"
import { serviceData } from "./data";

import { useCartContext } from "../CartContext";
import {useTranslation} from "react-i18next";

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
  const {t, i18n} = useTranslation();
  const { setPage, font , lng, setLng} = useCartContext();
  const Navigate = useNavigate()

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
    window.scrollTo(0, 200);
    Navigate(`/finalStep/${lng}`)
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
    setPage(1)
    localStorage.clear();
  }, []);

  return (
    <div className="page1 page">
      <div className="nameLine">
        <div className="nameBlock">
          <label
            className={`${visible1 ? "scrollAnimXLeft" : ""} ${font ? "font" : ""}`}
            ref={myRef1}
          >
            {t('perssonName')}
          </label>
          <input type="text" value={name} onChange={onChangeName} />
        </div>
        <div className="projectNameBlock">
          <label
            className={`${visible2 ? "scrollAnimXLeft" : ""} ${font ? "font" : ""}`}
            ref={myRef2}
          >
            {t('projectName')}
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
            className={`${visible4 ? "scrollAnimXLeft" : ""} ${font ? "font" : ""} `}
            ref={myRef4}
          >
            {t('email')}
          </label>
          <input type="text" value={email} onChange={onChangeEmail} />
        </div>
        <div className="companyBlock">
          <label
            className={`${visible5 ? "scrollAnimXLeft" : ""} ${font ? "font" : ""} `}
            ref={myRef5}
          >
            {t('brandName')}
          </label>
          <input
            type="text"
            value={companyName}
            onChange={onChangeCompanyName}
          />
        </div>
      </div>

      <div className="aboutLine">
        <label ref={myRef3} className={`${visible3 ? "scrollAnimXLeft" : ""} ${font ? "font" : ""} `}>
          {t('aboutProject')}
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
          className={`headerServices ${visible6 ? "scrollAnimXLeft" : ""} ${font ? "font" : ""} `}
          ref={myRef6}
        >
          {t('servicesHeader')}
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
              {t('Continue').split("").map((letter, index) => (
                <div className={`letter ${font ? "font" : ""}`} key={index}>
                  {letter}
                </div>
              ))}
            </div>
            <div className="textLine G-alignItems-center">
              {t('Continue').split("").map((letter, index) => (
                <div className={`letter ${font ? "font" : ""}`} key={index}>
                  {letter}
                </div>
              ))}
            </div>
          </div>
        </button>
        <p
          className={`descEmail ${visible8 ? "scrollAnimXRight" : ""} ${font ? "font" : ""}`}
          ref={myRef8}
        >
          {t('ourEmail')}
          <a href="mailto:office@fytechnology.eu">office@fytechnology.eu</a>
        </p>
      </div>
    </div>
  );
}
export default memo(Page1);
