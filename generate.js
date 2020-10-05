const baseName = [
    "", "Pepe", "TunakTunak", "Pussy", "Dick", "Jizz", "Blaze", "Meme", "Sk8er", "Smurf", "Doge", "RickRoll", "NotLacist",
    "BobNVajin", "ApacheHelicopter", "Simp", "Demon", "MadLad", "MadLass", "FforHarambe", "Virgin", "ExtraVirgin", "Anon",
    "Senpai", "Samurai", "Geisha", "Noob"
]

const suffix = [
    "", "420", "69", "Slayer", "Lord", "Masta", "Boy", "Girl", "nator", "Blazer", "Ganja", "Nerd",
    Math.floor((Math.random()*99)+1)+"", "XxX", "Face", "Queen", "King", "Killer", "Flame"
]

const prefix = [
    "", "Dat", "The", "the", "Mr.", "Mrs.", "Lord", "Lady", "Ms.", "Ganja", "Super", "Captain", "TheIncredible", "Papa", "Mama",
    "A", "Big", "Lil'", "Master", "Supreme", "Holy", "Sir", "Pro", "Omega", "Uber", "Ultra", "SSJ"
]

const wrapper = [
    ["xXx_", "_xXx"], ["_", "_"], ["oO_", "_Oo"], ["AreYaWinning_", "?"]
]


function getRandom(max){
    return Math.floor(Math.random()*max);
}

function generate(){
    let roll = getRandom(1000);
    let name;
    if(roll===0){
        name = "TheLegend27";
        $("#textWrapper").addClass("easterEgg")
    } else if(getRandom(4)===3) {
        let wrap = wrapper[getRandom(wrapper.length)];
        name = wrap[0]+prefix[getRandom(prefix.length)]+baseName[getRandom(baseName.length)]+suffix[getRandom(suffix.length)]+wrap[1];
    } else {
        name = prefix[getRandom(prefix.length)]+baseName[getRandom(baseName.length)]+suffix[getRandom(suffix.length)];
    }

    $("#name").text(name);
}
