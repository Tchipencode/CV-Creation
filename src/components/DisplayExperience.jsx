export default function DisplayExperience({experiences}){
   return(
      <>
      <div className="cv-experience">
         <h3>EXPERIENCE</h3>
         {experiences.map((experience, index)=>{
            return experience? <div className="cv-experience-item" key={index}>
               <p className="work-years">{experience.startDate} - {experience.endDate}</p>
               <span>
                  <p className="position-Title">{experience.companyName}:</p>
                  <h4 className="company-name" >{experience.positionTitle}</h4>
               </span>
               <p className="missions-items"> <b>Missions:</b> {experience.missions}</p>

            </div>:null;
         })}
      </div>
      </>
   )
}