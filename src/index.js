import blacklistedWords from "./list.js";

export const validate = (word) => {
    word = word.trim();
    word = word.toLowerCase();

    return blacklistedWords.indexOf(word) === -1;
}

export const list = blacklistedWords;

export default {
    validate,
    list: blacklistedWords
};
