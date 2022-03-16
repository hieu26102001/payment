
export default function Header({styleCustom}) {
    const {opacity,position} = styleCustom
    return (
        <header className={`bg-[rgba(255,255,255,${opacity})] stroke-white w-full md:px-[20px] z-50 pl-4 ${position} top-0 py-[24px]`}>
            <div className="max-w-[1600px] mx-auto" >
                <div className="flex w-1/3  justify-between">
                    <img src="/Logo.svg" />
                </div>
            </div>
            
        </header>
    )

}