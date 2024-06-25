
export default function DisplayEducation({educations}){
   return(
      <>
      <div className="cv-education">
         <h2>Education</h2>
         {educations.map((education, index)=>{
            return education? <div key={index}>
               <h4 className="school-name" >{education.schoolName}</h4>
               <p className="school-title">{education.studyTitle}</p>
               <p className="graduated-years">{education.graduatedYears}</p>
            </div>:null;
         })}
      </div>
      </>
   )
}