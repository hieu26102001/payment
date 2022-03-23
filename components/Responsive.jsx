import useWindowSize from "../hooks/useWindowSize"
import Box from "./partials/Box"
import { cloneElement } from "react"

export default function Responsive({ Computer, Mobile, children,sizeWindow }) {
  
  
  return (
    <>
      {sizeWindow.width >= 768 ?
        // <MyComputer />
        cloneElement(Computer, { children: children, ...Computer.props })
        :
        <Box className="px-0 py-3" >
          {/* <MyMobile/> */}
          {cloneElement(Mobile, { children: children, ...Mobile.props })}
        </Box>
      }
    </>
  )
}