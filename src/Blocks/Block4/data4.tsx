import { ISquareCard } from "../../Components/SquareCard/SquareCard"
import { SVGcontainer } from "../../Components/SVGcontainer/SVGcontainer"

import { recipeIcon, paperworkIcon, paymentIcon } from "../../assets/iconsSVG"

let first: ISquareCard = {
    id: 1,
    titleText: 'Become a Courier',
    desc: 'You choose a schedule. You decide how much and when to earn. Earnings from day one',
    svgIcon: <SVGcontainer svgIcon={recipeIcon} specialColor="blue" />,
    isShowRoute: false
}

let second: ISquareCard = {
    id: 2,
    titleText: 'Help & Support',
    desc: "Door-to-door delivery in 90 minutes or at your convenience",
    svgIcon: <SVGcontainer svgIcon={paperworkIcon} specialColor="red" />,
    isShowRoute: false
}
let third: ISquareCard = {
    id: 3,
    titleText: 'Affiliate Program',
    desc: 'Use our service and feel new quality of this traditional service!',
    svgIcon: <SVGcontainer svgIcon={paymentIcon} specialColor="yellow" />,
    isShowRoute: false
}


const data4: ISquareCard[] = [first, second, third]

export { data4 }


