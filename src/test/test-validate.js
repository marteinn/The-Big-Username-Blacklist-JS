import assert from "assert";
import {validate} from "../lib/index";


describe("Validator check", () => {
    it("checks names agains validator", () => {
        assert(! validate("root"))
        assert(! validate(" you"))
        assert(! validate("SSL"))
        assert(! validate(" sitemap"))
        assert(! validate("terms-of-use"))
        assert(validate("wwwvar"))
    });
});
