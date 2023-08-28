import gamepad from '../../assets/lochinImages/gamepad.png'
import keyboard from '../../assets/lochinImages/keyboard.png'
import televizor from '../../assets/lochinImages/televizor.png'
import fotoshop from '../../assets/lochinImages/fotoshop.png'
import heartSmallSvg from '../../assets/lochinImages/heart small.svg'
import eyeSvg from '../../assets/lochinImages/eye.svg'
import car from '../../assets/lochinImages/car.png'
import noutbuk from '../../assets/lochinImages/noutbuk.png'
import kalonka from '../../assets/lochinImages/kalonka.png'
import gp11 from '../../assets/lochinImages/gp11.png'

export const ELEKTRONIK = [
    {
        id: 1,
        buttonChegirma: '-40%',
        img: gamepad,
        heartSmall: heartSmallSvg,
        eye: eyeSvg,
        title: "HAVIT HV-G92 Gamepad",
        newPrice: 120,
        oldPrice: 160,
        star: 2,
        addtocart: 'Add To Cart'
    },
    {
        id: 2,
        buttonChegirma: '-35%',
        img: keyboard,
        heartSmall: heartSmallSvg,
        eye: eyeSvg,
        title: "AK-900 Wired Keyboard",
        newPrice: 960,
        oldPrice: 1160,
        star: 3,
        addtocart: 'Add To Cart'
    },
    {
        id: 3,
        buttonChegirma: '-30%',
        img: televizor,
        heartSmall: heartSmallSvg,
        eye: eyeSvg,
        title: "HAVIT HV-G92 Gamepad",
        newPrice: 370,
        oldPrice: 400,
        star: 5,
        addtocart: 'Add To Cart'
    },
    {
        id: 4,
        buttonChegirma: '-30%',
        img: fotoshop,
        heartSmall: heartSmallSvg,
        eye: eyeSvg,
        title: "CANON EOS DSLR Camera",
        newPrice: 360,
        oldPrice: 400,
        star: 5,
        addtocart: 'Add To Cart'
    }
]

export const EXPLORE = [
    {
        id: 1,
        new: 'New',
        expImg: car,
        title: 'Kids Electric Car',
        heartSmall: heartSmallSvg,
        eye: eyeSvg,
        price: 960,
        star: 5,
        addtocart: 'Add To Cart'
    },
    {
        id: 2,
        new: 'New',
        expImg: kalonka,
        title: 'RGB liquid CPU Cooler',
        heartSmall: heartSmallSvg,
        eye: eyeSvg,
        price: 960,
        star: 3,
        addtocart: 'Add To Cart',
    },
    {
        id: 3,
        new: 'New',
        expImg: noutbuk,
        title: 'ASUS FHD Gaming Laptop',
        heartSmall: heartSmallSvg,
        eye: eyeSvg,
        price: 160,
        star: 4,
        addtocart: 'Add To Cart',
    },
    {
        id: 4,
        new: 'New',
        expImg: gp11,
        title: 'GP11 Shooter USB Gamepad',
        heartSmall: heartSmallSvg,
        eye: eyeSvg,
        price: 660,
        star: 3,
        addtocart: 'Add To Cart',
    }
]