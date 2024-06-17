// import { useState } from "react";
import Information from "./Information.jsx"
import {Education} from "./Education.jsx"
import Experience from "./Experience.jsx"
import { useState } from "react";
import { FormInformation } from "./Information.jsx";
import FormEducation from "./Education.jsx";
import DisplayEducation from "./DisplayEducation.jsx";

// import { FormExperience } from "./Experience.jsx";

export default function App(){
   const [inputs, setInputs]=useState({
      education:[{
         schoolName:"",
         studyTitle:"",
         studyYears:"",

      }]
   });
   // const [formData, setFormData]=useState([]);
   // function handleAdd(){
   //    console.log("handleAdd");
   //    setForms([...forms, {}]);
   // }
   // function handleSubmit(event){
   //    event.preventDefault();
   //    console.log("form submitted");

   //    // const collectedData=[];
   //    // forms.forEach((form, index )=> {
   //    //    const inputName=form.querySelector("input").name;
   //    //    const inputValue=form.querySelector("input").value;
   //    //    collectedData.push({[inputName]:inputValue});   
   //    // });
   //    // setFormData(collectedData);
   //    // localStorage.setItem("collectedData",JSON.stringify(collectedData));
   // }
   function handleAdd(){
      document.getElementsByClassName("education-input").style.display="flex";
   }
   function handleOutput(schoolName, studyTitle, studyYears){
      // const inputsCopy={...inputs};
      // const schoolName=inputsCopy.education.schoolName;
      // inputsCopy.education.push({schoolName:schoolName});
      // setInputs(inputsCopy);
      const inputsCopy={...inputs};
      inputsCopy.education.push({schoolName:schoolName, studyTitle:studyTitle, studyYears:studyYears});
      setInputs(inputsCopy);
      console.log(inputs);
      
      // const outputSchoolName=document.querySelector(".school-name");
      // outputSchoolName.textContent=schoolName;
      // const outputStudyTitle=document.querySelector(".study-title");
      // outputStudyTitle.textContent=studyTitle;
      // const outputStudyYears=document.querySelector(".study-years");
      // outputStudyYears.textContent=studyYears;

      // const outputDiv= document.querySelector(".school-output");
      // const outputStudy=document.createElement("div");
      // const btnDiv= document.createElement("div");
      // outputDiv.appendChild(outputStudy);
      // outputStudy.appendChild(btnDiv);
      // const para=document.createElement("p");
      // para.textContent=studyTitle;
      // outputStudy.appendChild(para);
      // const btnEdit=document.createElement("button");
      // btnEdit.textContent="Edit";
      // btnDiv.appendChild(btnEdit);
      // const btnDelete=document.createElement("button");
      // btnDelete.textContent="Delete";
      // btnDiv.appendChild(btnDelete);
      // btnEdit.addEventListener("click", ()=>{
      //    const EditSchoolName=document.querySelector(".schoolName");
      //    EditSchoolName.textContent=inputs.education.schoolName;
      // })
      // btnDelete.addEventListener("click",(e)=>{
      //    const index=e.target.tabIndex;
      //    console.log(e.target);
      //    // outputStudy.remove();
      //    for(let i=0; i<inputs.education.length; i++){
      //       if(inputs.education[i].index==index){
      //          inputs.education.splice(i, 1);
               
      //       }
      //       console.log(inputs);
      //    }
         
      // })
   }

   // function handleChange(event){
   //    const name=event.target.name;
   //    const value=event.target.value;
   //    // const newInputs={...inputs, education.schoolName:value}
   //    // setInputs(newInputs);

   //    setInputs((values)=>({...values, [name]:value}));
   //    console.log(inputs);
   // }
   return(
      <>
      <header>
         <h1>My curriculum</h1>
      </header>
      <hr/>
      <main>
         <div className="form-inputs">
            <Information />
            <FormEducation inputs={inputs} setInputs={setInputs} educations={inputs.education} handleOutput={handleOutput} /* handleChange={handleChange} */ />
            <Experience />
         </div>
         <div className="form-output">
            <DisplayEducation educations={inputs.education}/>

         </div>
      </main>
      </>
   )

}