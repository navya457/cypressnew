describe("firset suite",()=>{
    it("Message",()=>{
        cy.visit('https://geekyants.com/');
        cy.title().should('A product studio transforming ideas into reality - GeekyAnts');
    console.log("hi");
        
})

})