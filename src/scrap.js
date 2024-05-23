import puppeteer from 'puppeteer';

async function Scrap(){
    // Inicia o navegador
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
  
    // Navega até a página desejada
    await page.goto('https://www.infomoney.com.br/ferramentas/cambio/');
  
    // Extrai a informação desejada usando XPath
    const dolar = await page.waitForSelector('xpath////*[@id="container_table"]/table/tbody/tr[6]/td[3]');
    const dolarhoje = await (await dolar.getProperty('textContent')).jsonValue();
        
    // Fecha o navegador
    await browser.close();
}
