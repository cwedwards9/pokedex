export default function getTypeBgColor(type) {
    switch(type) {
        case "grass":
            return "#9BCC50";
        case "poison":
            return "#B97FC9";
        case "fire":
            return "#FE7E25";
        case "flying":
            return "#3DC7EF";
        case "water":
            return "#4592C4";
        case "bug":
            return "#729F3F";
        case "electric":
            return "#EED535";
        case "ground":
            return "#AB9842";
        case "fairy":
            return "#FDB9E9";
        case "fighting":
            return "#D66824";
        case "psychic":
            return "#F366B9";
        case "rock":
            return "#A38C21";
        case "steel":
            return "#9EB7B8";
        case "ice":
            return "#51C4E7"
        case "ghost":
            return "#7B62A3";
        case "dragon":
            return "#F16E57";
        default:
            return "lightgray";
    }
}