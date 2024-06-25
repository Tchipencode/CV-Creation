export default function DisplayExperience({experiences}){
   return(
      <>
      <div className="cv-experience">
         <h2>Experience</h2>
         {experiences.map((experience, index)=>{
            return experience? <div key={index}>
               <h4 className="company-name" >{experience.companyName}</h4>
               <p className="position-Title">{experience.positionTitle}</p>
               <p className="missions-items">{experience.missions}</p>
               <p className="work-years">{experience.startDate} {experience.endDate}</p>
            </div>:null;
         })}
      </div>
      </>
   )
}