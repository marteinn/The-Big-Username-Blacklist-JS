import blacklist from "./index.js";

if (typeof window !== 'undefined' && !window.theBigUsernameBlacklist) {
    window.theBigUsernameBlacklist = blacklist;
}
