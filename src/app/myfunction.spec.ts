//define the test suit
import {sum} from "./myfunction";
describe("Jest Unit Testing Demo", ()=>{
//define a test case
it("Testing sum",()=>{
    expect(sum(10,5)).toEqual(15)
})
it("testing sum",()=>{
    beforeEach(()=>{
        console.log("**")

    })
})
it("Substracting test",()=>{
    expect(sum(10,-5)).toEqual(5)
})
})

