// import App from "./App"
// import { FormEducation } from "./Education"

export default function DisplayEducation({educations}){
   return(
      <>
      <div className="cv-education">
         <h2>Education</h2>
         {educations.map((education, index)=>{
            return education? <div key={index}>
               <h4 className="school-name" >{education.schoolName}</h4>
               <h4 className="school-title">{education.studyTitle}</h4>
               <h4 className="study-years">{education.studyYears}</h4>
            </div>:null

         })}

      </div>
      </>
   )
}