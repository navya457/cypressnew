class login
{
    visit()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    }
    enter_UserName(name)
    {
        const un=cy.get(locator)
        un.clear().type("");
        return this
    }
}
export default login