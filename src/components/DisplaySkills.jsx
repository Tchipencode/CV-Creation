export default function DisplaySkills({allSkills}){
   return(
      <>
      <ul className="cv-skills-list">
         
         {allSkills.map((skills, index)=>{
            return skills? <li key={index} className="skill-item" >
               {skills.skill}
               
            </li>:null;
         })}
      </ul>
      </>
   )
}