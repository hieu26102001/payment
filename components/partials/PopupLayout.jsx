
export default function Popup({children}){
    return(
        <div className="md:w-[500px] flex align-center flex-col w-full p-4 text-sm border-2 md:h-[500px] md:m-4 mx-auto border-gray-300">
            {children}
        </div>
    )
}