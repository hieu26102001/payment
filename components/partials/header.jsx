
export default function Header({styleCustom}) {
    const {opacity,position} = styleCustom
    return (
        <header className={`bg-[rgba(255,255,255,${opacity})] w-full px-[20px] ${position} top-0 py-[24px]`}>
            <div className="max-w-[1600px] mx-auto" >
                <img src="/LOGO PAYMENT.png" />
            </div>
        </header>
    )

}