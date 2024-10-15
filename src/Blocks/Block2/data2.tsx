import { SVGcontainer } from "../../Components/SVGcontainer/SVGcontainer"
import { courierIcon, supportIcon, suitcaseIcon } from "../../assets/iconsSVG"

import { ISquareCard } from "../../Components/SquareCard/SquareCard"


let first: ISquareCard = {
    id: 1,
    titleText: 'Become a Courier',
    desc: 'You choose a schedule. You decide how much and when to earn. Earnings from day one',
    svgIcon: <SVGcontainer svgIcon={courierIcon} specialColor="blue" />,
    isShowRoute: true
}

let second: ISquareCard = {
    id: 2,
    titleText: 'Help & Support',
    desc: "Door-to-door delivery in 90 minutes or at your convenience",
    svgIcon: <SVGcontainer svgIcon={supportIcon} specialColor="yellow" />,
    isShowRoute: false
}
let third: ISquareCard = {
    id: 3,
    titleText: 'Affiliate Program',
    desc: 'Use our service and feel new quality of this traditional service!',
    svgIcon: <SVGcontainer svgIcon={suitcaseIcon} specialColor="red" />,
    isShowRoute: false
}


const data2: ISquareCard[] = [first, second, third]

export { data2 }

