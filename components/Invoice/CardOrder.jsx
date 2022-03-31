import FormattedNumber from "../FormattedNumber"

const dataOrder = [
  {
    imageSrc:"/public/cardOrder.png",
    name:"Starbucks' mission is to inspire and nurture the human spirit ",
    newPrice: 245.78,
    oldPrice:245.78,
    quantity:10
  }
]

export default function () {

  return (
    <li>
      <div>
        <img/>
        <div>
          <div>{name}</div>
          <div>
            <FormattedNumber value={newPrice} currency="USD" className="text=[#2F88FF]" options={{ minimumFractionDigits: 2 }} />
            <FormattedNumber value={oldPrice} currency="USD" className="text=[#B2BCCA]" options={{ minimumFractionDigits: 2 }} />
          </div>
          <div>
            <button>-</button>
            <span></span>
            <button>+</button>
          </div>
        </div>
      </div>
    </li>
  )
}