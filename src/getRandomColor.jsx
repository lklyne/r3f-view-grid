import { useState, useEffect } from "react"

// const cssColors = [
//     "AliceBlue",
//     "Aqua",
//     "Aquamarine",
//     "Azure",
//     "Beige",
//     "Bisque",
//     "Black",
//     "Blue",
//     "BlueViolet",
//     "Brown",
//     "BurlyWood",
//     "CadetBlue",
//     "Chartreuse",
//     "Chocolate",
//     "Coral",
//     "CornflowerBlue",
//     "Crimson",
//     "Cyan",
//     "DarkBlue",
//     "DarkCyan",
//     "DarkGoldenRod",
//     "DarkGray",
//     "DarkGreen",
//     "DarkKhaki",
//     "DarkMagenta",
//     "DarkOliveGreen",
//     "DarkOrange",
//     "DarkOrchid",
//     "DarkRed",
//     "DarkSalmon",
//     "DarkSeaGreen",
//     "DarkSlateBlue",
//     "DarkSlateGray",
//     "DarkTurquoise",
//     "DarkViolet",
//     "DeepPink",
//     "DeepSkyBlue",
//     "DimGray",
//     "DodgerBlue",
//     "FireBrick",
//     "ForestGreen",
//     "Fuchsia",
//     "Gold",
//     "GoldenRod",
//     "Gray",
//     "Green",
//     "GreenYellow",
//     "HoneyDew",
//     "HotPink",
//     "IndianRed",
//     "Indigo",
//     "Khaki",
//     "Lavender",
//     "LavenderBlush",
//     "LawnGreen",
//     "LightBlue",
//     "LightCoral",
//     "LightGoldenRodYellow",
//     "LightGray",
//     "LightGreen",
//     "LightPink",
//     "LightSalmon",
//     "LightSeaGreen",
//     "LightSkyBlue",
//     "LightSlateGray",
//     "LightSteelBlue",
//     // "LightYellow",
//     "Lime",
//     "LimeGreen",
//     "Magenta",
//     "Maroon",
//     "MediumAquaMarine",
//     "MediumBlue",
//     "MediumOrchid",
//     "MediumPurple",
//     "MediumSeaGreen",
//     "MediumSlateBlue",
//     "MediumSpringGreen",
//     "MediumTurquoise",
//     "MediumVioletRed",
//     "MidnightBlue",
//     "MintCream",
//     "MistyRose",
//     "Moccasin",
//     "NavajoWhite",
//     "Navy",
//     "OldLace",
//     "Olive",
//     "OliveDrab",
//     "Orange",
//     "OrangeRed",
//     "Orchid",
//     "PaleGreen",
//     "PaleTurquoise",
//     "PaleVioletRed",
//     "PapayaWhip",
//     "PeachPuff",
//     "Peru",
//     "Pink",
//     "Plum",
//     "PowderBlue",
//     "Purple",
//     "RebeccaPurple",
//     "Red",
//     "RosyBrown",
//     "RoyalBlue",
//     "SaddleBrown",
//     "Salmon",
//     "SandyBrown",
//     "SeaGreen",
//     "SeaShell",
//     "Sienna",
//     "Silver",
//     "SkyBlue",
//     "SlateBlue",
//     "SlateGray",
//     "SpringGreen",
//     "SteelBlue",
//     "Teal",
//     // "Thistle",
//     "Tomato",
//     "Turquoise",
//     "Violet",
//     "Wheat",
//     "Yellow",
//     "YellowGreen",
// ]

// Function to get a random color from the array

const cssColors = [
    "Black",
    "Blue",
    "BlueViolet",
    "Brown",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkTurquoise",
    "DarkViolet",
    "DimGray",
    "DodgerBlue",
    "FireBrick",
    "ForestGreen",
    "Indigo",
    "Maroon",
    "MidnightBlue",
    "Navy",
    "Olive",
    "OliveDrab",
    "Purple",
    "RebeccaPurple",
    "RosyBrown",
    "SaddleBrown",
    "SeaGreen",
    "Sienna",
    "SlateBlue",
    "SlateGray",
    "SteelBlue",
    "Teal",
]
const getRandomColor = () => {
    const [randomColor, setRandomColor] = useState()

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * cssColors.length)
        console.log(cssColors[randomIndex])
        setRandomColor(cssColors[randomIndex])
    }, [])

    return randomColor
}

export default getRandomColor
