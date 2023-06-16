import Plane from "../src/Plane.js";

describe("Plane Tests: ", () => {
    it("Tests that plane has an id.", () => {
        // Given that
        const plane = new Plane(1);
        // When this happens
        const actual = plane.getId();
        // expect this
        expect(actual).toEqual(1);
    })
})