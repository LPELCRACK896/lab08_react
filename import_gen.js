const struct = require("./src/components/comp_game/cards_info")
struct.forEach((element)=>{
    console.log(`import ${element.name} from \'${element.src}\'`)
})