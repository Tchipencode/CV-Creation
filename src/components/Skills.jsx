import { useState } from "react";

// function Skills(){
   
//    // const [newInputs, setNewInputs]= useState("");
//    const [forms, setForms]=useState([{}]);

//    function handleAdd(){
//       console.log("handleAdd");
//       setForms([...forms, {}]);
//    }
//    return (
//       <>
//       {/* {forms.map((form, index)=>(<FormSkills key={index} forms={forms} setForms={setForms}/>))} */}
//       <div className="btn-edit">
//          <button type="button" onClick={handleAdd}>Add more</button>
//          <button type="button" disabled>Edit</button>
//       </div>

      
//       </>
//    )
// }
export default function SkillsForm({inputs, setInputs, handleOutputSkills, allSkills}){
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
      const software=newInputs.software;
      const skill=newInputs.skill;
      handleOutputSkills(software, skill);
      setNewInputs({software:"",skill:""});

   }
   function handleAdd(){
      document.querySelector(".skills-form").style.display="flex";
      document.querySelector(".btn-add-skills").style.display="none";
      setInputs(inputs);
   }
   function handleCancel(){
      document.querySelector(".skills-form").style.display="none";
      document.querySelector(".btn-add-skills").style.display="flex";

   }
   function SkillsList(){
      return(
         <ul id="skills-list" className="skills-list">
            {allSkills.map((skills, index)=>{
               return skills? <li key={index} >
                  <h4 className="skillsList-skills" >{skills.skill}</h4>
                  <div className="skillsList-btns">
                     <button className="skillsList-btn" type="button" onClick={handleEdit}>Edit</button>
                     <button className="skillsList-btn" type="button" id={index} onClick={handleDelete}>Delete</button>
                  </div>
               </li>:null;
            })}
         </ul>


      )
   }
   function handleEdit(){}
   function handleDelete(e){
      const index=e.target.id;
      console.log(index);
      allSkills.splice(index, 1);
      console.log(allSkills);
      const inputsCopy={...inputs, allSkills: allSkills};
      setInputs(inputsCopy);
   }
   function handleButtonDisplay(allSkills){
      for(let i=0; allSkills.length; i++){
         if(allSkills[i].skill===null){
            allSkills.splice(i, 1);
            document.querySelector(".skillsList-skills").style.display="none";
            console.log(document.querySelector(".skillsList-skills"));
         } else{
            document.querySelector(".skillsList-skills").style.display="inline-block";
         }
      }
      

   }
   return(
      <>
      <section className="skills-section">
         <h2>SKILLS</h2>
         <SkillsList  allSkills={allSkills} onLoad={handleButtonDisplay}/>
         <form className="skills-form" onSubmit={handleSubmit}>
            <div className="skills-input">
               <label htmlFor="software">
                  <p>Software</p>
                  <input type="text" name="software" value={newInputs.software} onChange={handleChange} id="software"/>
               </label>
               <label htmlFor="skill">
                  <p>Skill</p>
                  <input type="text" name="skill" value={newInputs.skill} onChange={handleChange} id="skill"/>
               </label>
               <div className="removeBtn">
                  <button type="submit">Submit</button>
                  <button type="button" onClick={handleCancel}>Cancel</button>
               </div>
            </div>
         </form>
         <button className="btn-add-skills" type="button" onClick={handleAdd}>Add More</button>
      </section>

      </>
   );

}





