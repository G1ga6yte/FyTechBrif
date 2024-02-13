import { memo, useCallback, useState } from "react";
import { useInView } from "react-intersection-observer";

import { supabase } from "../utils/supabase";

import { useCartContext } from "../CartContext";

const possiblePrices = [
  "Under $5K",
  "$10K-20K",
  "$20K-50K",
  "$50K-100K",
  "Over $100K",
];
const possibleDeadlineAnswers = ["Yes", "No, No Rush", "No, but ASAP"];

const maxLength = 3000;

function Page2() {
  const { checkedServices } = useCartContext();

  const { ref: myRef1, inView: visible1 } = useInView();
  const { ref: myRef2, inView: visible2 } = useInView();
  const { ref: myRef3, inView: visible3 } = useInView();
  const { ref: myRef4, inView: visible4 } = useInView();
  const { ref: myRef5, inView: visible5 } = useInView();
  const { ref: myRef6, inView: visible6 } = useInView();
  const { ref: myRef7, inView: visible7 } = useInView();
  const { ref: myRef8, inView: visible8 } = useInView();

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
        <label className={`${visible1 ? "scrollAnimXLeft" : ""}`} ref={myRef1}>
          What is the aim of the project? What are you trying to solve? Please
          provide as much detail as possible.
        </label>
        <textarea
          cols="30"
          rows="10"
          value={projectAim}
          onChange={onChangeProjectAim}
        ></textarea>
      </div>

      <div className="requirementsBlock block">
        <label className={`${visible2 ? "scrollAnimXLeft" : ""}`} ref={myRef2}>
          What are the project requirements and the expected functionality?
          Please provide as much detail as possible.
        </label>
        <textarea
          cols="30"
          rows="10"
          value={projectRequirements}
          onChange={onChangeProjectRequirements}
        ></textarea>
      </div>

      <div className="systemsBlock block">
        <label className={`${visible3 ? "scrollAnimXLeft" : ""}`} ref={myRef3}>
          Please include details of any existing systems you know you'll need to
          integrate with.
        </label>
        <textarea
          cols="30"
          rows="10"
          value={projectAdditionalNeeds}
          onChange={onChangeProjectAdditionalNeeds}
        ></textarea>
      </div>

      <div className="examplesBlock block">
        <label className={`${visible4 ? "scrollAnimXLeft" : ""}`} ref={myRef4}>
          Please provide any examples or references that are relevant to this
          project.
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
            className={`prg ${visible5 ? "scrollAnimXLeft" : ""}`}
            ref={myRef5}
          >
            What's is Your Budget
          </p>
          <div className="line">
            {possiblePrices.map((price) => (
              <div
                className={`circle ${price === selectedPrice ? "active" : ""}`}
                onClick={() => setSelectedPrice(price)}
                key={price}
              >
                <span className="price">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="deadLineBlock block">
        <div className="deadLine">
          <p
            className={`prg ${visible6 ? "scrollAnimation" : ""}`}
            ref={myRef6}
          >
            Do You Have a Deadline?
          </p>
          <div className="buttons">
            {possibleDeadlineAnswers.map((answer) => (
              <div
                className={`button ${
                  answer === selectedDeadlineAnswer ? "active" : ""
                }`}
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
          className={`contactUsBtn ${visible7 ? "scrollAnimXLeft" : ""}`}
          onClick={onClickSubmit}
          ref={myRef7}
        >
          <div className="textBlock">
            <div className="textLine G-alignItems-center">
              {"Submit".split("").map((letter, index) => (
                <div className="letter" key={index}>
                  {letter}
                </div>
              ))}
            </div>
            <div className="textLine G-alignItems-center">
              {"Submit".split("").map((letter, index) => (
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
          Or You Can Email Us here:
          <a href="mailto:office@fytechnology.eu">office@fytechnology.eu</a>
        </p>
      </div>
      <div
        style={{
          display: submittedSuccessfully ? undefined : "none",
        }}
        className="submitSuccessful"
      >
        Submitted Successfully
      </div>
    </div>
  );
}

export default memo(Page2);
