module.exports = {
    "Our first test": function(browser){
        ""+ //disables a test
        browser.url("https://actionqa.com")
        browser.pause(1 * 1000)
        browser.end()
    },

    "Click test": function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/click.html")
        browser.click("#surprise-button")
        browser.assert.visible("#surprise-message")
        browser.end()
    },

    "Form test": function(browser){
        browser.url("http://tutorials.actionqa.com/nwfree/simple-form.html")
        browser.setValue("#email", "SeijTranberg@gmail.com")
        browser.setValue("#password", "password")
        browser.click("#submit")
        browser.assert.visible("#submitted-email")
        browser.assert.containsText("#submitted-email", "SeijTranberg@gmail.com")
        browser.end()
    }
}