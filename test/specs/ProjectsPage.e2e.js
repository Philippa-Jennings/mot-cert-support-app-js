const { expect, browser, $ } = require('@wdio/globals')

describe('My Projects Manage Page', () => {

   it('should load the page when link clicked on homepage ', async () => {
    await browser.url(`http://localhost:3000/#/projects`)

    await $('input[name="email"]').setValue('admin@test.com')
    await $('input[name="password"]').setValue('password123')
    await $('button').click()

    const listItem = $('list-group-item');
    (await listItem).click(); 

    const element = await $('.card-title')
    await expect(element).toHaveText('Projects')

   })

})
