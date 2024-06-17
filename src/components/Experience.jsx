import { useState } from "react";

export default function Experience(){
   
   // const [newInputs, setNewInputs]= useState("");
   const [forms, setForms]=useState([{}]);

   function handleAdd(){
      console.log("handleAdd");
      setForms([...forms, {}]);
   }
   return (
      <>
      {forms.map((form, index)=>(<FormExperience key={index} forms={forms} setForms={setForms}/>))}
      <div className="btn-edit">
         <button type="button" onClick={handleAdd}>Add more</button>
         <button type="button" disabled>Edit</button>
      </div>

      
      </>
   )
}
function FormExperience({forms, setForms}){
   const [inputs, setInputs]=useState({});

   function handleChange(event){
      const name=event.target.name;
      const value=event.target.value;
      setInputs((values)=>({...values, [name]:value}));
      console.log(inputs);
   }
   function handleRemove(index){
      const formsCopy=[...forms];
      formsCopy.splice(index, 1);
      setForms(formsCopy);
   }
   return(
      <>
      <section className="experience-form">
         <h1>EXPERIENCE</h1>
         <form action="" /* onsSubmit={handleSubmit} */>
            <label htmlFor="companyName">
               <p>Company Name</p>
               <input type="text" name="companyName" value={inputs.companyName} onChange={handleChange} id="companyName"/>
            </label>
            <label htmlFor="positionTitle">
               <p>Position</p>
               <input type="text" name="positionTitle" value={inputs.positionTitle} onChange={handleChange} id="positionTitle"/>
            </label>
            <label htmlFor="missions">
               <p>Missions</p>
               <textarea name="missions" value={inputs.missions} onChange={handleChange} id="missions" cols="30" rows="10"></textarea>
            </label>
            <label htmlFor="startDate">
               <p>Start date</p>
               <input type="date" name="startDate" value={inputs.startDate} onChange={handleChange} id="startDate"/>
            </label>
            <label htmlFor="endDate">
               <p>End date</p>
               <input type="date" name="endDate" value={inputs.endDate} onChange={handleChange} id="endDate" />
            </label>
            <div className="removeBtn">
               <button type="button" onClick={()=>handleRemove(forms.index)}>Remove</button>
            </div>
         </form>

      </section>

      </>
   );

}
export {FormExperience};




