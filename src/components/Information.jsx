import { useState } from "react";

// function Information(){
//    const [forms, setForms]=useState([{}]);

//    return (
//       <>
//       {forms.map((form, index)=>(<FormInformation key={index} forms={forms} setForms={setForms}/>))}
//       <div className="btn-edit">
//          <button type="button" disabled>Edit</button>
//       </div>
//       </>

//    )
// }
export default function InformationForm({inputs, setInputs, handleOutputInformation, informations}){
   const [newInputs, setNewInputs]=useState({});

   function handleChange(event){
      const name=event.target.name;
      const value=event.target.value;
      setNewInputs((values)=>({...values, [name]:value}));
      console.log(newInputs);
   }
   function handleSubmit(event){
      event.preventDefault();
      console.log("form submitted");
      const firstName=newInputs.firstName;
      const lastName=newInputs.lastName;
      const qualification=newInputs.qualification;
      const email=newInputs.email;
      const telephone=newInputs.telephone;
      const location=newInputs.location;
      const linkedIn=newInputs.linkedIn;
      const summary=newInputs.summary;
      handleOutputInformation(firstName, lastName, qualification, email, telephone, location,linkedIn, summary);
      setNewInputs({firstName:"",lastName:"", qualification:"", email:"", telephone:"", location:"",linkedIn:"", summary:""});

   }
   // function handleAdd(){
   //    document.querySelector(".information-form").style.display="flex";
   //    document.querySelector(".btn-add-info").style.display="none";
   //    setInputs(inputs);
   // }
   function handleCancel(){
      document.querySelector(".information-form").style.display="none";
      document.querySelector(".btn-add-info").style.display="flex";

   }
   // function EducationList(){
   //    return(
   //       <ul id="information-list" className="information-list">
   //          {educations.map((education, index)=>{
   //             return education? <li key={index} >
   //                <h3 className="educationList-studyTitle" >{education.studyTitle}</h3>
   //                <div className="educationList-btns">
   //                   <button className="educationList-btn" type="button" onClick={handleEdit}>Edit</button>
   //                   <button className="educationList-btn" type="button" id={index} onClick={handleDelete}>Delete</button>
   //                </div>
   //             </li>:null;
   //          })}
   //       </ul>

   //    )
   // }
   // function handleEdit(){}
   // function handleDelete(e){
   //    const index=e.target.id;
   //    console.log(index);
   //    informations.splice(index, 1);
   //    console.log(informations);
   //    const inputsCopy={...inputs, information: informations};
   //    setInputs(inputsCopy);
   // }
   function handleButtonDisplay(educations){
      for(let i=0; educations.length; i++){
         if(educations[i].schoolName===null){
            educations.splice(i, 1);
            document.querySelector(".education-list").style.display="none";
            console.log(document.querySelector(".education-list"));
         } else{
            document.querySelector(".education-list").style.display="inline-block";
         }
      }
   }
   return(
      <>
      <section className="information-section">
         <h2>PERSONAL INFORMATION</h2>
         <form className="information-form" onSubmit={handleSubmit}>
            <div className="information-input">
               <label htmlFor="firstName">
               <p>First Name</p>
               <input type="text" name="firstName" value={newInputs.firstName} onChange={handleChange} id="firstName"/>
               </label>
            
               <label htmlFor="LastName">
                  <p>Last Name</p>
                  <input type="text" name="lastName" value={newInputs.lastName} onChange={handleChange} id="lastName"/>
               </label>
               <label htmlFor="qualification">
                  <p>Qualification</p>
                  <input type="text" name="qualification" value={newInputs.qualification} onChange={handleChange} id="qualification"/>
               </label>
               <label htmlFor="email">
                  <p>Email</p>
                  <input type="email" name="email" value={newInputs.email} onChange={handleChange} id="email"/>
               </label>
               <label htmlFor="telephone">
                  <p>Telephone</p>
                  <input type="phone" name="telephone" value={newInputs.telephone} onChange={handleChange} id="telephone"/>                  
               </label> 
               <label htmlFor="location">
                  <p>Location</p>
                  <input type="text" name="location" value={newInputs.location} onChange={handleChange} id="location"/>                  
               </label>  
               <label htmlFor="linkedIn">
                  <p>LinkedIn</p>
                  <input type="text" name="linkedIn" value={newInputs.linkedIn} onChange={handleChange} id="linkedIn"/>                  
               </label>
               <label htmlFor="summary">
                  <p>Summary</p>
                  <textarea name="summary" value={newInputs.summary} onChange={handleChange} id="summary" cols="30" rows="10"></textarea>
               </label>          
            </div> 
            <div className="removeBtn">
               <button type="submit">Submit</button>
               <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
         </form>
      </section>


      </>
   )
}
