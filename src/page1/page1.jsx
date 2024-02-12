import React, {useState} from "react";
import {useInView} from "react-intersection-observer";
import {ServiceData} from "./data";
import {use} from "i18next";
import {useCartContext} from "../CartContext";

function Page1 (){
  const { ref: myRef1, inView: visible1 } = useInView()
  const { ref: myRef2, inView: visible2 } = useInView()
  const { ref: myRef3, inView: visible3 } = useInView()
  const { ref: myRef4, inView: visible4 } = useInView()
  const { ref: myRef5, inView: visible5 } = useInView()
  const { ref: myRef6, inView: visible6 } = useInView()
  const { ref: myRef7, inView: visible7 } = useInView()
  const { ref: myRef8, inView: visible8 } = useInView()
  const { ref: myRef9, inView: visible9 } = useInView()
  const { ref: myRef10, inView: visible10 } = useInView()
  
  const {setPage} = useCartContext()
  let Continue = "Continue".split('')
  const [name, setName] = useState("")
  const handleName = (event) => {
    setName(event.target.value);
  };
  
  const [projectName, setProjectName] = useState("")
  const handleProjectName = (event) => {
    setProjectName(event.target.value)
  }
  
  const [email, setEmail] = useState("")
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  
  const [brandName, setBrandName] = useState("")
  const handleBrandName = (event) => {
    setBrandName(event.target.value)
  }
  
  const [about, setAbout] = useState("")
  const handleAbout = (event) => {
    setAbout(event.target.value)
  }
  
  
  function Service (el, index){
    const [height, setHeight] = useState(0)
    let heightY = el.content.length * 36
    const { ref: myRef1, inView: visible1 } = useInView()
    const [render, setRender] = useState(false)
    
    const {checkedServices, setCheckedServices} = useCartContext()

    function handleMouseOver (){
      setHeight(heightY)
    }
    function handleMouseLeave (){
      setHeight(0)
    }
    
    return(
       <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} key={index} className="serviceBlock">
         <p ref={myRef1} className="serviceName">{el.name}</p>
         <div style={{height: `${height}px`}} className="services">
           {el.content.map((ell, index)=>{
             if (checkedServices.includes(ell)){
               return(<p onClick={()=>{
                 let x = checkedServices.filter((el)=>{
                   return el !== ell
                 })
                 setCheckedServices(x)
                 setRender(prev => !prev)
               }} className="serviceItem checked" key={index}>{ell}</p>)
  
             } else {
               return(<p onClick={()=>{
                 let x = checkedServices
                 x.push(ell)
                 setCheckedServices(x)
                 setRender(prev => !prev)
               }} className="serviceItem" key={index}>{ell}</p>)
  
             }
             
           })}
         </div>
       </div>
    )
  }
  
  return(
     <div className="page1 page">
       <div className="nameLine">
         <div className="nameBlock">
           <label ref={myRef1} className={`${visible1 ? "scrollAnimXLeft" : ""}`} htmlFor="name">What’s your name</label>
           <input
              type="text"
              id="name"
              value={name}
              onChange={handleName}
           />
         </div>
         <div className="projectNameBlock">
           <label ref={myRef2} className={`${visible2 ? "scrollAnimXLeft" : ""}`} htmlFor="projectName">What’s your Project/Idea Name</label>
           <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={handleProjectName}
           />
         </div>
       </div>
       
       <div className="emailLine">
         <div className="emailBlock">
           <label ref={myRef4} className={`${visible4 ? "scrollAnimXLeft" : ""}`} htmlFor="email">What’s your Email</label>
           <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmail}
           />
         </div>
         <div className="companyBlock">
           <label ref={myRef5} className={`${visible5 ? "scrollAnimXLeft" : ""}`} htmlFor="brandName">Company/brand Name</label>
           <input
              type="text"
              id="brandName"
              value={brandName}
              onChange={handleBrandName}
           />
         </div>
       </div>
       
       <div className="aboutLine">
         <label ref={myRef3} className={`${visible3 ? "scrollAnimXLeft" : ""}`} htmlFor="about">Tell us more about Project/Idea</label>
         <textarea value={about} onChange={handleAbout} name="about" id="about" cols="30" rows="10"></textarea>
       </div>
       
       <div className="ServicesCont">
          <p ref={myRef6} className={`headerServices ${visible6 ? "scrollAnimXLeft" : ""}`}>What Our Service do you need ?</p>
         
         <div className="serviceCont">
           {ServiceData.map((el, index)=>{
              return Service(el, index)
             
           })}
         </div>
       </div>
       
       <div className="bottomContent G-flex-between G-alignItems-center">
          <button onClick={()=>{
            window.scrollTo(0, 500)
            setPage(2)
          }} ref={myRef7} className={`contactUsBtn ${visible7 ? "scrollAnimXLeft" : ""}`}>
            <div className='textBlock'>
              <div className='textLine G-alignItems-center'>
                {Continue.map((el) => {
                  if (el !== ' ') {
                    return (<div  className='letter'>{el}</div>)
                  } else {
                    return (<div className='space'></div>)
                  }
                })}
              </div>
              <div className='textLine G-alignItems-center'>
                {Continue.map((el) => {
                  if (el !== ' ') {
                    return (<div  className='letter'>{el}</div>)
                  } else {
                    return (<div className='space'></div>)
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
  )
}
export default Page1