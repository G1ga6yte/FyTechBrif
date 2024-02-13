import { memo, useCallback, useState } from "react";
import { useInView } from "react-intersection-observer";

import { supabase } from "../utils/supabase";

import { useCartContext } from "../CartContext";
import {useTranslation} from "react-i18next";



const maxLength = 3000;

function Page2() {
  const { checkedServices , font} = useCartContext();
  const {t, i18n} = useTranslation();
  const { ref: myRef1, inView: visible1 } = useInView();
  const { ref: myRef2, inView: visible2 } = useInView();
  const { ref: myRef3, inView: visible3 } = useInView();
  const { ref: myRef4, inView: visible4 } = useInView();
  const { ref: myRef5, inView: visible5 } = useInView();
  const { ref: myRef6, inView: visible6 } = useInView();
  const { ref: myRef7, inView: visible7 } = useInView();
  const { ref: myRef8, inView: visible8 } = useInView();
  
  const possiblePrices = [
    `${t('under')} $5K`,
    "$10K-20K",
    "$20K-50K",
    "$50K-100K",
    `${t('over')} $100K`,
  ];
  const possibleDeadlineAnswers = [t('yes'), t('noRush'), t('noASAP')];
  

  const [projectAim, setProjectAim] = useState("");
  const [projectRequirements, setProjectRequirements] = useState("");
  const [projectAdditionalNeeds, setProjectAdditionalNeeds] = useState("");
  const [projectExamples, setProjectExamples] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(possiblePrices[0]);
  const [selectedDeadlineAnswer, setSelectedDeadlineAnswer] = useState(
    possibleDeadlineAnswers[0]
  );
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);

  const onChangeProjectAim = useCallback(
    (event) => setProjectAim(event.target.value),
    []
  );
  
  const onChangeProjectRequirements = useCallback(
    (event) => setProjectRequirements(event.target.value),
    []
  );
  
  const onChangeProjectAdditionalNeeds = useCallback(
    (event) => setProjectAdditionalNeeds(event.target.value),
    []
  );
  
  const onChangeProjectExamples = useCallback(
    (event) => setProjectExamples(event.target.value),
    []
  );
  
  const onClickSubmit = useCallback(async () => {
    const { name, projectName, email, companyName, projectAbout } = JSON.parse(
      localStorage.getItem("formItemsPart1")
    );

    const formData = {
      name,
      projectName,
      email,
      companyName,
      projectAbout: projectAbout.slice(0, maxLength),
      neededServices: checkedServices,
      projectAim: projectAim.slice(0, maxLength),
      projectRequirements: projectRequirements.slice(0, maxLength),
      projectAdditionalNeeds: projectAdditionalNeeds.slice(0, maxLength),
      projectExamples: projectExamples.slice(0, maxLength),
      priceRange: selectedPrice,
      deadline: selectedDeadlineAnswer,
    };

    const { error } = await supabase.from("contactForm").insert([formData]);

    if (error) {
      console.error("Something when wrong:", error);
      return;
    }

    setSubmittedSuccessfully(true);
    console.log("Form data saved successfully");
  }, [
    checkedServices,
    projectAim,
    projectRequirements,
    projectAdditionalNeeds,
    projectExamples,
    selectedPrice,
    selectedDeadlineAnswer,
  ]);

  return (
    <div className="page2 page">
      <div className="aimBlock block">
        <label className={`${visible1 ? "scrollAnimXLeft" : ""} ${font ? "font" : ""}`} ref={myRef1}>
          {t('projectAim')}
        </label>
        <textarea
          cols="30"
          rows="10"
          value={projectAim}
          onChange={onChangeProjectAim}
        ></textarea>
      </div>

      <div className="requirementsBlock block">
        <label className={`${visible2 ? "scrollAnimXLeft" : ""} ${font ? "font" : ""}`} ref={myRef2}>
          {t('projectRequirements')}
        </label>
        <textarea
          cols="30"
          rows="10"
          value={projectRequirements}
          onChange={onChangeProjectRequirements}
        ></textarea>
      </div>

      <div className="systemsBlock block">
        <label className={`${visible3 ? "scrollAnimXLeft" : ""} ${font ? "font" : ""}`} ref={myRef3}>
          {t('projectAdditionalNeeds')}
        </label>
        <textarea
          cols="30"
          rows="10"
          value={projectAdditionalNeeds}
          onChange={onChangeProjectAdditionalNeeds}
        ></textarea>
      </div>

      <div className="examplesBlock block">
        <label className={`${visible4 ? "scrollAnimXLeft" : ""} ${font ? "font" : ""}`} ref={myRef4}>
          {t('projectExamples')}
        </label>
        <textarea
          cols="30"
          rows="10"
          value={projectExamples}
          onChange={onChangeProjectExamples}
        ></textarea>
      </div>

      <div className="budgetBlock block">
        <div className="budgetBlock">
          <p
            className={`prg ${visible5 ? "scrollAnimXLeft" : ""}  ${font ? "font" : ""}`}
            ref={myRef5}
          >
            {t('budget')}
          </p>
          <div className="line">
            {possiblePrices.map((price) => (
              <div
                className={`circle ${price === selectedPrice ? "active" : ""}`}
                onClick={() => setSelectedPrice(price)}
                key={price}
              >
                <span className={`price  ${font ? "font" : ""}`}>{price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="deadLineBlock block">
        <div className="deadLine">
          <p
            className={`prg ${visible6 ? "scrollAnimation" : ""}  ${font ? "font" : ""}`}
            ref={myRef6}
          >
            {t('deadLine')}
          </p>
          <div className="buttons">
            {possibleDeadlineAnswers.map((answer) => (
              <div
                className={`button ${
                  answer === selectedDeadlineAnswer ? "active" : ""
                }  ${font ? "font" : ""}`}
                onClick={() => setSelectedDeadlineAnswer(answer)}
                key={answer}
              >
                {answer}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bottomContent G-flex-between G-alignItems-center">
        <button
          className={`contactUsBtn ${visible7 ? "scrollAnimXLeft" : ""} `}
          onClick={onClickSubmit}
          ref={myRef7}
        >
          <div className="textBlock">
            <div className="textLine G-alignItems-center">
              {t('submit').split("").map((letter, index) => (
                <div className={`letter  ${font ? "font" : ""}`} key={index}>
                  {letter}
                </div>
              ))}
            </div>
            <div className="textLine G-alignItems-center">
              {t('submit').split("").map((letter, index) => (
                <div className={`letter  ${font ? "font" : ""}`} key={index}>
                  {letter}
                </div>
              ))}
            </div>
          </div>
        </button>
        <p
          className={`descEmail ${visible8 ? "scrollAnimXRight" : ""}  ${font ? "font" : ""}`}
          ref={myRef8}
        >
          {t('ourEmail')}
          <a href="mailto:office@fytechnology.eu">office@fytechnology.eu</a>
        </p>
      </div>
      <div
        style={{
          display: submittedSuccessfully ? undefined : "none",
        }}
        className={`submitSuccessful  ${font ? "font" : ""}`}
      >
        {t('successfully')}
      </div>
    </div>
  );
}

export default memo(Page2);
