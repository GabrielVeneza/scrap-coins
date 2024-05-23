const puppeteer = require('puppeteer');

async function pokemon () {
  // Inicia o navegador
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navega até a página desejada
  await page.goto('https://www.infomoney.com.br/ferramentas/cambio/');

  // Extrai a informação desejada usando XPath
  const element = await page.waitForSelector('xpath///*[@id="container_table"]/table/tbody/tr[5]/td[3]');
  const text = await (await element.getProperty('textContent')).jsonValue();

  console.log(text);

  // Fecha o navegador
  await browser.close();
  
}

async function moeda () {
  // Inicia o navegador
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navega até a página desejada
  await page.goto('https://www.infomoney.com.br/ferramentas/cambio/');

  // Extrai a informação desejada usando XPath
  const element = await page.waitForSelector('xpath///*[@id="container_table"]/table/tbody/tr[5]/td[3]');
  const text = await (await element.getProperty('textContent')).jsonValue();

  console.log(text);

  // Fecha o navegador
  await browser.close();
}


pokemon()
moeda()