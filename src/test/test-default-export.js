import assert from "assert";
import blacklist from "../lib/index";


describe("Makes sure default import exposes correct api", () => {
    it("validates using different api", () => {
        assert(! blacklist.validate("guest"));
    });
});
