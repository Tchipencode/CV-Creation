export default function DisplayInformation({informations}){
   return(
      <>
      <div className="cv-information">
         <h3 className="info-firstName" >{informations.firstName}</h3>
         <h3 className="info-lastName">{informations.lastName}</h3>
         <h3 className="info-qualification">{informations.qualification}</h3>
         <p className="info-email">{informations.email}</p>
         <p className="info-telephone">{informations.telephone}</p>
      </div>
      </>
   )
}