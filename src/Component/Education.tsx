import {EducationInfo} from "../data/EducationInfo"

export default function Education(){
    return(
       <main  id="experience"   className="min-h-screen px-3 py-16  md:px-10 mt-6 border-2">
            <h1 className="mb-10 text-5xl font-serif md:text-6xl lg:text-7xl">Education</h1>


        


      {
        EducationInfo.map((item)=>(
            <div key={item.id} >

                <h1>{item.qualification}</h1>
                <h1>{item.institution}</h1>
                <h1>{item.duration}</h1>

                <hr />

            </div>
        ))
      }
           
        </main>
    )
}