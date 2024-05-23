import './App.css'
// import Moeda from './moeda'

const puppeteer = require('puppeteer');


async function App() {

  // Inicia o navegador
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Navega até a página desejada
  await page.goto('https://www.infomoney.com.br/ferramentas/cambio/');

  // Extrai a informação desejada usando XPath
  const dolar = await page.waitForSelector('xpath////*[@id="container_table"]/table/tbody/tr[6]/td[3]');
  const dolarhoje = await (await dolar.getProperty('textContent')).jsonValue();
      
  // Fecha o navegador
  await browser.close();

  return (
    <>
      <div>
            <h1>Moedas Hoje</h1>
            <hr />
            <h2>Dolar hoje: R${dolarhoje}</h2>
            <h2>Euro hoje: R$</h2>
            <h2>Bitcoin hoje: R$</h2>
        </div>
    </>
  )
}

export default App
