const baseName = [
    "", "Pepe", "TunakTunak", "Pussy", "Jizz", "Blaze", "Meme", "Sk8er", "Smurf", "Doge", "RickRoll", "NotLacist", "BobNVajin", "ApacheHelicopter", "Simp", "Demon", "MadLad", "MadLass", "FforHarambe", "Virgin", "ExtraVirgin"
]

const suffix = [
    "", "420", "69", "Slayer", "Lord", "Masta", "Boy", "Girl", "nator", "Blazer", "Ganja", "Nerd", Math.floor((Math.random()*99)+1)+"", "XxX", "Face", "Queen", "King"
]

const prefix = [
    "", "Dat", "The", "the", "Mr.", "Mrs.", "Lord", "Lady", "Ms.", "Ganja", "Super", "Captain", "TheIncredible", "Papa", "Mama", "A", "Big", "Lil'", "Master", "Supreme", "Holy"
]

const wrapper = [
    ["xXx_", "_xXx"], ["_", "_"], ["oO_", "_Oo"], ["AreYaWinning_", "?"]
]


function getRandom(max){
    return Math.floor(Math.random()*max);
}

function generate(){
    let roll = getRandom(10000);
    let name;
    if(roll===1){
        name = "TheLegend27";
    } else if(getRandom(4)===3) {
        let wrap = wrapper[getRandom(wrapper.length)];
        name = wrap[0]+prefix[getRandom(prefix.length)]+baseName[getRandom(baseName.length)]+suffix[getRandom(suffix.length)]+wrap[1];
    } else {
        name = prefix[getRandom(prefix.length)]+baseName[getRandom(baseName.length)]+suffix[getRandom(suffix.length)];
    }

    $("#name").text(name);
}
