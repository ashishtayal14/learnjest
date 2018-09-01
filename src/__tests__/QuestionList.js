describe("The Question List Component",()=>{
    it.only("should display the list block",()=>{ // ISOLATING
        expect(2+2).toEqual(4);
    })
    it("should display the list block",()=>{
        expect(2+2).toEqual(4);
    })
    it("should display the list block",()=>{
        expect(2+2).toEqual(4);
    })
})

beforeEach(()=>{
    console.log("Before Each");
})

beforeAll(()=>{
    console.log("Before All");
})

afterEach(()=>{
    console.log("After Each");
})

afterAll(()=>{
    console.log("After All");
})