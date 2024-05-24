import puppeteer from 'puppeteer';

export async function Scrap(){
     // Inicia o navegador
     const browser = await puppeteer.launch({ headless: true });
     const page = await browser.newPage();
   
     // Navega até a página desejada
     await page.goto('https://www.infomoney.com.br/ferramentas/cambio/');
   
     // Extrai a informação desejada usando XPath
     const dolar = await page.waitForSelector('xpath////*[@id="container_table"]/table/tbody/tr[6]/td[3]');
     const dolarhoje = await (await dolar.getProperty('textContent')).jsonValue();
 
     const iene = await page.waitForSelector('xpath////*[@id="container_table"]/table/tbody/tr[9]/td[3]');
     const ienehoje = await (await iene.getProperty('textContent')).jsonValue();
         
 
     console.log(ienehoje, dolar)
     // Fecha o navegador
     await browser.close();
 
     return dolarhoje
}
