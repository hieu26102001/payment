import { sponsor } from "../data/globals"
export default function Sponsor() {

    return (
        <div className = "grid grid-cols-4 justify-items-center my-8 flex-wrap  ">
            { sponsor.map( item => {
                return(
                   <div>
                       <img className = "justify-center" src= {item} />
                       </div> 
                    )
            })


            }

        </div>

    )
}