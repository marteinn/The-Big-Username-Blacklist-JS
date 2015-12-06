import blacklist from "./data/list.json";


function validate(username) {
    username = username.trim();
    username = username.toLowerCase();

    for (var i=0, l=blacklist.length; i<l; i++) {
        var word = blacklist[i];

        if (word === username) {
            return false;
        }
    }

    return true;
}

export default {validate};
