import { useState } from "react";

export default function Information(){
   const [forms, setForms]=useState([{}]);

   return (
      <>
      {forms.map((form, index)=>(<FormInformation key={index} forms={forms} setForms={setForms}/>))}
      <div className="btn-edit">
         <button type="button" disabled>Edit</button>
      </div>
      </>

   )
}
function FormInformation(){
   const [inputs, setInputs]=useState({});
   function handleChange(event){
      const name=event.target.name;
      const value=event.target.value;
      setInputs((values)=>({...values, [name]:value}));
      console.log(inputs);
   }
   return(
      <>
      <section className="information-form">
         <h2>PERSONAL INFORMATION</h2>
         <form action="" /* onSubmit={handleSubmit} */>
            <label htmlFor="firstName">
            <p>FirstName</p>
            <input type="text" name="firstName" value={inputs.firstName} onChange={handleChange} id="firstName"/>
            </label>
         
            <label htmlFor="LastName">
               <p>LastName</p>
               <input type="text" name="lastName" value={inputs.lastName} onChange={handleChange} id="lastName"/>
            </label>
            <label htmlFor="email">
               <p>Email</p>
               <input type="email" name="email" value={inputs.email} onChange={handleChange} id="email"/>
            </label>
            <label htmlFor="telephone">
               <p>Telephone</p>
               <input type="phone" name="telephone" value={inputs.telephone} onChange={handleChange} id="telephone"/>                  
            </label> 
         </form>
      </section>


      </>
   )
}
export{FormInformation};