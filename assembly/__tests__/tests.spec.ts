import * as contract from "../index"
describe("Create an artist", () => {
    it("Should not throw errors.",() => {
        expect(() => {
            contract.becomeAnArtist("used paint as a child", 10, "example@example.com")
        }).not.toThrow()
    })
});
