import assert from "assert";
import blacklist from "../lib/index";


describe("Validator check", () => {
    it("checks names agains validator", () => {
        assert(! blacklist.validate("root"));
        assert(! blacklist.validate(" you"));
        assert(! blacklist.validate("SSL"));
        assert(! blacklist.validate(" sitemap"));
        assert(! blacklist.validate("terms-of-use"));
        assert(blacklist.validate("wwwvar"));
    });
});
