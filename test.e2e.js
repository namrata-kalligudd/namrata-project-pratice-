import { expect } from '@wdio/globals'
//import LoginPage from '../pageobjects/login.page.js'
//import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        
        browser.url('https://google.com')
        await browser.maximizeWindow()

        await $('[id="APjFqb"]').setValue('WebdriverIO')
        browser.keys('Enter')
        await $('[class="LC20lb MBeuO DKV0Md"]').click()
       // await $('[class="codeBlockLines_okAv"]').scrollIntoView({ block: 'center', inline: 'center' })
      await browser.scroll(0, 1000)
     await browser.saveScreenshot('C:\Users\rnish\Desktop\webdriverio\test\specs\screenshot.png')
      var title = browser.getTitle()
      console.log(title);
  


        browser.pause(30000)



    })

})

