import { useState } from "react";
// import DisplayEducation from "./DisplayEducation";

function Education(){

   const [forms, setForms]=useState([{}]);

   function handleAdd(){
      console.log("handleAdd");
      // setForms([...forms, {}]);
      // document.getElementsByClassName("eduction-form").style.display="flex";
   }
   return(
      <>
      {/* {forms.map((form, index)=>(<FormEducation key={index} forms={forms} setForms={setForms}/>))} */}
      <div className="btn-add">
         <button type="button" onClick={handleAdd}>Add more</button>
         {/* <button type="button" disabled>Edit</button> */}
      </div>



      </>
   )
}
export default function FormEducation({forms, setForms, handleOutput}){
   const [newInputs, setNewInputs]=useState({});
   // const education=[
   //    {
   //       schoolName:"",
   //       studyTitle:"",
   //       studyYears:"",
   //    }
   // ]

   function handleChange(event){
      const name=event.target.name;
      const value=event.target.value;
      setNewInputs((values)=>({...values, [name]:value}));
      console.log(newInputs);
   }
   function handleSubmit(event){
      event.preventDefault();
      console.log("form submitted");
      // const schoolName=newInputs.schoolName;
      // education.push({schoolName:schoolName});
      const schoolName=newInputs.schoolName;
      const studyTitle=newInputs.studyTitle;
      const studyYears=newInputs.studyYears;
      handleOutput(schoolName, studyTitle, studyYears);
      setNewInputs({schoolName:"",studyTitle:"",studyYears:""});

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
      //    EditSchoolName.textContent=schoolName;
      // })
      // btnDelete.addEventListener("click",()=>{
      //    outputStudy.remove();
      // })
   
   }
   function handleAdd(){
      document.querySelector(".education-form").style.display="flex";
      document.querySelector(".btn-add-edu").style.display="none";
   }
   function handleCancel(){
      document.querySelector(".education-form").style.display="none";
      document.querySelector(".btn-add-edu").style.display="flex";

   }
   function EducationList(schoolName){
      return(
         <div className="education-list">

            <div className="educationList-item">
               <h3 className="educationList-studyTitle" value={schoolName}></h3>
               <div className="educationList-btn">
                  <button className="educationList-btn" type="button" onClick={handleEdit}>Edit</button>
                  <button className="educationList-btn" type="button" onClick={handleDelete}>Delete</button>
               </div>
            </div>
         </div>
      )
   }
   function handleEdit(){}
   function handleDelete(){}
   return(
      <>

      <section className="education-section">
         <h2>EDUCATION</h2>
         {/* <EducationList  schoolName={newInputs.schoolName}/> */}
         <form className="education-form" onSubmit={handleSubmit}>
            <div className="education-input">
               <label htmlFor="schoolName">
                  <p>School Name</p>
                  <input type="text" name="schoolName" value={newInputs.schoolName} className="schoolName" onChange={handleChange} id="schoolName"/>
               </label>
               <label htmlFor="studyTitle">
                  <p>Study title</p>
                  <input type="text"name="studyTitle" value={newInputs.studyTitle} onChange={handleChange} id="studyTitle"/>
               </label>
               <label htmlFor="studyYears">
                  <p>Years graduated</p>
                  <input type="number" name="studyYears" value={newInputs.studyYears} onChange={handleChange} id="studyYears"/>
               </label>
            </div>

            <div className="removeBtn">
               <button type="submit">Submit</button>
               <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
         </form>
         <button className="btn-add-edu" type="button" onClick={handleAdd}>Add</button>
         <div className="school-output"></div>
      </section>
      {/* {education.map((input, index)=>(<DisplayEducation key={index} schoolName={input.schoolName}/>))} */}

      {/* <DisplayEducation schoolName={inputs.schoolName}/> */}


         {/* {inputs.map((input, index) => (<DisplayEducation key={index} schoolName={inputs.schoolName}/>
            
         ))} */}
      </>
   )
}
function DisplayEducation({schoolName, studyTitle, studyYears}){
   return(
      <>
      <div className="cv-education">
         <h2>Education</h2>
         <h4 className="school-name" value={schoolName}></h4>
         <h4 className="study-title" value={studyTitle}></h4>
         <h4 className="study-years" value={studyYears}></h4>
      </div>
      </>
   )
}
export {Education, DisplayEducation};
