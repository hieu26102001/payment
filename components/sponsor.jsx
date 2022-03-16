import { sponsor } from "../data/globals"
export default function Sponsor() {

    return (
        <div className = " grid grid-cols-4   gap-8 md:justify-items-center my-3 xs:my-6 sm:my-14 mx-3 xs:mx-6 md:mx-16 ">
            { sponsor.map( item => {
                return(
                   <div>
                       <img  src= {item} />
                       </div> 
                    )
            })


            }

        </div>

    )
}