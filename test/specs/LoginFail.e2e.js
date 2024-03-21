const { expect, browser, $ } = require('@wdio/globals')

describe('My Login application - fail', () => {
    
    it('should fail to login as incorrect credentials', async () => {
        await browser.url('http://localhost:3000/#/login')

    await $('input[name="email"]').setValue('pcj@test.com')
    await $('input[name="password"]').setValue('jamdonuts')
    await $('button').click()

    const element =  await $('.alert.alert-danger.mt-2')
    expect(await element.getText()).toEqual('Invalid email or password!')
   // await expect(element).toHaveText('Invalid email or password!')
    })
})