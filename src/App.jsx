import React, { useState, useEffect } from 'react'

function App() {
  const [currentRates, setCurrentRates] = useState({
    base: 'USD',
    rates: {
      GBP: 0.7719792376,
      HKD: 7.7503403676,
      IDR: 14825.799863853,
      ILS: 3.4237576583,
      DKK: 6.3326242342,
      INR: 73.0322498298,
      CHF: 0.9178863172,
      MXN: 21.8485364193,
      CZK: 22.9050374404,
      SGD: 1.3618107556,
      THB: 31.5699455412,
      HRK: 6.4355003404,
      EUR: 0.8509189925,
      MYR: 4.1514635807,
      NOK: 9.281228727,
      CNY: 6.7907590197,
      BGN: 1.6642273656,
      PHP: 48.4436691627,
      PLN: 3.8236044929,
      ZAR: 16.6246596324,
      CAD: 1.3287950987,
      ISK: 138.0190605854,
      BRL: 5.6008339006,
      RON: 4.1473791695,
      NZD: 1.5033185841,
      TRY: 7.7098366236,
      JPY: 105.4969366916,
      RUB: 77.0975153165,
      KRW: 1161.5299523485,
      USD: 1.0,
      AUD: 1.3886147039,
      HUF: 306.2372362151,
      SEK: 8.9221409122,
    },
    date: '2020-10-01',
  })
  const [usd, setUSD] = useState('1')

  async function loadConversionRatesFromApi() {
    const url = 'https://api.ratesapi.io/api/latest?base=USD'
    const response = await fetch(url)
    const json = await response.json()
    setCurrentRates(json)
  }

  useEffect(() => {
    loadConversionRatesFromApi()
  }, [])

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Currency Converter</h1>
        <h4>{currentRates.date}</h4>
      </div>
      <label htmlFor="usd-input">USD Input</label>
      <input
        className="form-control usd-input"
        type="text"
        value={usd}
        onChange={(event) => setUSD(event.target.value)}
      />

      <ul className="list-group">
        <li className="list-group-item gbp">USD: {Number(usd).toFixed(2)}</li>
        <li className="list-group-item gbp">
          GBP: {(Number(usd) * currentRates.rates.GBP).toFixed(2)}
        </li>
        <li className="list-group-item hkd">
          HKD: {(Number(usd) * currentRates.rates.HKD).toFixed(2)}
        </li>
        <li className="list-group-item idr">
          IDR: {(Number(usd) * currentRates.rates.IDR).toFixed(2)}
        </li>
        <li className="list-group-item ils">
          ILS: {(Number(usd) * currentRates.rates.ILS).toFixed(2)}
        </li>
        <li className="list-group-item dkk">
          DKK: {(Number(usd) * currentRates.rates.DKK).toFixed(2)}
        </li>
        <li className="list-group-item inr">
          INR: {(Number(usd) * currentRates.rates.INR).toFixed(2)}
        </li>
        <li className="list-group-item chf">
          CHF: {(Number(usd) * currentRates.rates.CHF).toFixed(2)}
        </li>
        <li className="list-group-item mxn">
          MXN: {(Number(usd) * currentRates.rates.MXN).toFixed(2)}
        </li>
        <li className="list-group-item czk">
          CZK: {(Number(usd) * currentRates.rates.CZK).toFixed(2)}
        </li>
        <li className="list-group-item sgd">
          SGD: {(Number(usd) * currentRates.rates.SGD).toFixed(2)}
        </li>
        <li className="list-group-item thb">
          THB: {(Number(usd) * currentRates.rates.THB).toFixed(2)}
        </li>
        <li className="list-group-item hrk">
          HRK: {(Number(usd) * currentRates.rates.HRK).toFixed(2)}
        </li>
        <li className="list-group-item eur">
          EUR: {(Number(usd) * currentRates.rates.EUR).toFixed(2)}
        </li>
        <li className="list-group-item myr">
          MYR: {(Number(usd) * currentRates.rates.MYR).toFixed(2)}
        </li>
        <li className="list-group-item nok">
          NOK: {(Number(usd) * currentRates.rates.NOK).toFixed(2)}
        </li>
        <li className="list-group-item cny">
          CNY: {(Number(usd) * currentRates.rates.CNY).toFixed(2)}
        </li>
        <li className="list-group-item bgn">
          BGN: {(Number(usd) * currentRates.rates.BGN).toFixed(2)}
        </li>
        <li className="list-group-item php">
          PHP: {(Number(usd) * currentRates.rates.PHP).toFixed(2)}
        </li>
        <li className="list-group-item pln">
          PLN: {(Number(usd) * currentRates.rates.PLN).toFixed(2)}
        </li>
        <li className="list-group-item zar">
          ZAR: {(Number(usd) * currentRates.rates.ZAR).toFixed(2)}
        </li>
        <li className="list-group-item cad">
          CAD: {(Number(usd) * currentRates.rates.CAD).toFixed(2)}
        </li>
        <li className="list-group-item isk">
          ISK: {(Number(usd) * currentRates.rates.ISK).toFixed(2)}
        </li>
        <li className="list-group-item brl">
          BRL: {(Number(usd) * currentRates.rates.BRL).toFixed(2)}
        </li>
        <li className="list-group-item ron">
          RON: {(Number(usd) * currentRates.rates.RON).toFixed(2)}
        </li>
        <li className="list-group-item nzd">
          NZD: {(Number(usd) * currentRates.rates.NZD).toFixed(2)}
        </li>
        <li className="list-group-item try">
          TRY: {(Number(usd) * currentRates.rates.TRY).toFixed(2)}
        </li>
        <li className="list-group-item jpy">
          JPY: {(Number(usd) * currentRates.rates.JPY).toFixed(2)}
        </li>
        <li className="list-group-item rub">
          RUB: {(Number(usd) * currentRates.rates.RUB).toFixed(2)}
        </li>
        <li className="list-group-item krw">
          KRW: {(Number(usd) * currentRates.rates.KRW).toFixed(2)}
        </li>
        <li className="list-group-item aud">
          AUD: {(Number(usd) * currentRates.rates.AUD).toFixed(2)}
        </li>
        <li className="list-group-item huf">
          HUF: {(Number(usd) * currentRates.rates.HUF).toFixed(2)}
        </li>
        <li className="list-group-item sek">
          SEK: {(Number(usd) * currentRates.rates.SEK).toFixed(2)}
        </li>
      </ul>
    </div>
  )
}

export default App
