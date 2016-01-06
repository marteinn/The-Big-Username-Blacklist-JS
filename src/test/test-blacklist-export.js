import assert from "assert";
import {list} from "../lib/index";


describe("Makes sure blacklist data is exported", () => {
    it("tests if blacklist is available", () => {
        assert(list);
        assert(list instanceof Array);
        assert(list.indexOf("root") !== -1);
    });
});
