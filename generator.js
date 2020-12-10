const fs = require('fs')

function generateCSS(name, color, dark_color, text_color)
{
    return `/*${name} buttons*/\na.button.green, button.button.${name}{ \nborder-color: ${color};\ncolor: ${color};\n}\n`+
        `a.button.${name}.fill, button.button.${name}.fill { \nborder-color: ${color};\nbackground: ${color};\ncolor: ${text_color};\n}\n`+
        `a.button:hover.${name}, button.button:hover.${name} {\nbackground-color: ${color};\ncolor: ${text_color};\n}\n`+
        `a.button.gradient.${name}, button.button.gradient.${name} {\nbackground: linear-gradient(${color}, ${dark_color});\nborder-color: ${dark_color};\ncolor:${text_color};\n}\n`
}

let colors = [
    {
        name:"green",
        color:"#11B53D",
        dark_color:"#075c1d",
        text_color:"#ffffff"
    },
    {
        name:"blue",
        color:"#256EF4",
        dark_color:"#103475",
        text_color:"#ffffff"
    },
    {
        name:"purple",
        color:"#B47FAE",
        dark_color:"#553b52",
        text_color:"#ffffff"
    },
    {
        name:"yellow",
        color:"#FBFE13",
        dark_color:"#666809",
        text_color:"#000000"
    },
    {
        name:"lime",
        color:"#00FF61",
        dark_color:"#119443",
        text_color:"#000000"
    },
    {
        name:"salmon",
        color:"#D17A78",
        dark_color:"#834c4b",
        text_color:"#ffffff"
    },
    {
        name:"darkgreen",
        color:"#165D1C",
        dark_color:"#0b300e",
        text_color:"#ffffff"
    },
]

let input = ""

for(let color of colors)
{
    input+=generateCSS(color.name, color.color, color.dark_color, color.text_color)
}

fs.writeFileSync('./data.css', input, "utf8")