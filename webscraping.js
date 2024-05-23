
const { evaluationString } = require('puppeteer');
const puppeteer = require('puppeteer');


async function hora(){

     //abrir navegador
     const browser = await puppeteer.launch({ headless: true })
     //abrir uma nova página
     const page = await browser.newPage()

    //navegar para o site
    await page.goto('https://www.horariodebrasilia.org/')

    //definit o tamanho da tela
    await page.setViewport({width: 1920, height: 1080})


    const texthora = await page.waitForSelector('#relogio')
    
    let horaagora = await texthora?.evaluate(e => e.textContent)
    console.log(horaagora)

    await browser.close();
}

hora()


//*[@id="page-header"]/yt-page-header-renderer/yt-page-header-view-model/div/div[1]/div/yt-content-metadata-view-model/div[2]/span[1]