const { expect, browser, $ } = require('@wdio/globals')

describe('My Projects Manage Page', () => {

   it('should load the page when link clicked on homepage ', async () => {
    await browser.url(`http://localhost:3000/#/projects`)

    await $('input[name="email"]').setValue('admin@test.com')
    await $('input[name="password"]').setValue('password123')
    await $('button').click()


      
    const listItems = $$('.list-group-item');
    let listItem = null;
    const desiredTitle = 'Manage Project'; 
    
    listItems.forEach(item => {
        const title = item.getText(); 
    
        if (title === desiredTitle) {
            listItem = item;
            return; 
        }
    

    });
    
   
    if (listItem) {
        listItem.click(); 
    } else {
        console.log(`Desired list item '${desiredTitle}' not found.`);
    }
    

    
   /* 
    const adminCard = await $('.card-title');
    (await adminCard).click();

    const listItem = $('list-group-item');
    (await listItem).click(); 

    const element = await $('.card-title')
    await expect(element).toHaveText('Projects')

   })
   */

   })
})
