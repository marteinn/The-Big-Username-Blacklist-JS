import list from "./list.js";


const validate = (word) => {
    word = word.trim();
    word = word.toLowerCase();

    return list.indexOf(word) === -1;
}

export default { validate, list };
