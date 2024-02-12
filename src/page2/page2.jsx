import React, {useState} from "react";
import {useInView} from "react-intersection-observer";

function Page2() {
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  const {ref: myRef4, inView: visible4} = useInView();
  const {ref: myRef5, inView: visible5} = useInView();
  const {ref: myRef6, inView: visible6} = useInView();
  const {ref: myRef7, inView: visible7} = useInView();
  const {ref: myRef8, inView: visible8} = useInView();
  const {ref: myRef9, inView: visible9} = useInView();
  const {ref: myRef10, inView: visible10} = useInView();
  const Submit = "Submit".split("");
  const [activating, setActivating] = useState(false)
  
  
  const [aim, setAim] = useState("");
  const handleAim = (event) => {
    setAim(event.target.value);
  };
  
  const [requirements, setRequirements] = useState("");
  const handleRequirements = (event) => {
    setRequirements(event.target.value);
  };
  
  const [systems, setSystems] = useState("");
  const handleSystems = (event) => {
    setSystems(event.target.value);
  };
  
  const [examples, setExamples] = useState("");
  const handleExamples = (event) => {
    setExamples(event.target.value);
  };
  
  
  const [price, setPrice] = useState([
    {name: "Under $5K", val: true},
    {name: "$10K-20K", val: false},
    {name: "$20K-50K", val: false},
    {name: "$50K-100K", val: false},
    {name: "Over $100K", val: false},
  ])
  const [deadLine, setDeadLine] = useState("no deadline")
  
  return (
     <div className="page2 page">
       
       
       <div className="aimBlock block">
         <label ref={myRef1} className={`${visible1 ? "scrollAnimXLeft" : ""}`} htmlFor="aim">What is the aim of the
           project? What are you trying to solve? Please provide as much detail as possible.</label>
         <textarea name="aim" id="aim" value={aim} onChange={handleAim} cols="30" rows="10"></textarea>
       </div>
       
       <div className="requirementsBlock block">
         <label ref={myRef2} className={`${visible2 ? "scrollAnimXLeft" : ""}`} htmlFor="requirements">What are the
           project requirements and the expected functionality?
           Please provide as much detail as possible.</label>
         <textarea name="requirements" id="requirements" value={requirements} onChange={handleRequirements} cols="30"
                   rows="10"></textarea>
       </div>
       
       <div className="systemsBlock block">
         <label ref={myRef3} className={`${visible3 ? "scrollAnimXLeft" : ""}`} htmlFor="systems">Please include details
           of any existing systems you know you’ll need to integrate with.</label>
         <textarea name="systems" id="systems" value={systems} onChange={handleSystems} cols="30" rows="10"></textarea>
       </div>
       
       <div className="examplesBlock block">
         <label ref={myRef4} className={`${visible4 ? "scrollAnimXLeft" : ""}`} htmlFor="examples">Please provide any
           examples or references that are relevant
           to this project.</label>
         <input type="text"
                value={examples}
                id={examples}
                onChange={handleExamples}
         />
       </div>
       
       <div className="budgetBlock block">
  
         <div className="budgetBlock">
           <p ref={myRef5} className={`prg ${visible5 ? "scrollAnimXLeft" : ""}`}>What’s is your budget</p>
           <div className="line">
             {price.map((el)=>{
               return(
                  <div onClick={()=>{
                    let data = price
                    data.map((ell)=>ell.val = false)
                    function changeVal (ell){
                      if (ell.name === el.name){
                        ell.val = !ell.val
                      }
                    }
                    data.find(changeVal)
                    setPrice(data)
                    setActivating(prev => !prev)
                  }} className={`circle ${el.val ? "active" : ""}`}>
                    <span className="price">{el.name}</span>
                  </div>
               )
             })}
           </div>
  
         </div>
       </div>
       
       <div className="deadLineBlock block">
  
         <div className="deadLine">
           <p ref={myRef6} className={`prg ${visible6 ? "scrollAnimation" : ""}`}>Do you have a deadline?</p>
           <div className="buttons">
             <div onClick={()=>setDeadLine("yes")} className={`button ${deadLine === "yes" ? "active" : ""}`}>Yes</div>
             <div onClick={()=>setDeadLine("No, no rush")} className={`button ${deadLine === "No, no rush" ? "active" : ""}`}>No, no rush</div>
             <div onClick={()=>setDeadLine("No, but Asap")} className={`button ${deadLine === "No, but Asap" ? "active" : ""}`}>No, but Asap</div>
           </div>
         </div>
       </div>
       
       
       <div className="bottomContent G-flex-between G-alignItems-center">
         <button onClick={() => {
           window.scrollTo(0, 0);
         }} ref={myRef7} className={`contactUsBtn ${visible7 ? "scrollAnimXLeft" : ""}`}>
           <div className="textBlock">
             <div className="textLine G-alignItems-center">
               {Submit.map((el) => {
                 if (el !== " ") {
                   return (<div className="letter">{el}</div>);
                 } else {
                   return (<div className="space"></div>);
                 }
               })}
             </div>
             <div className="textLine G-alignItems-center">
               {Submit.map((el) => {
                 if (el !== " ") {
                   return (<div className="letter">{el}</div>);
                 } else {
                   return (<div className="space"></div>);
                 }
               })}
             </div>
           </div>
         </button>
         <p ref={myRef8} className={`descEmail ${visible8 ? "scrollAnimXRight" : ""}`}>Or you can Email us here:
           <a href="mailto:office@fytechnology.eu">office@fytechnology.eu</a>
         </p>
       </div>
     
     </div>
  );
}

export default Page2;
