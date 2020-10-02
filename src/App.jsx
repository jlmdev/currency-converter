import React, { useState } from 'react'

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
  const [usd, setUSD] = useState(1)

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Currency Converter</h1>
        <h4>{currentRates.date}</h4>
      </div>
      <label htmlFor="usd-input">USD</label>
      <input
        className="form-control usd-input"
        type="text"
        value={usd}
        onChange={(event) => setUSD(event.target.value)}
      />

      <ul className="list-group">
        <li className="list-group-item gbp">
          GBP: {usd * currentRates.rates.GBP}
        </li>
        <li className="list-group-item hkd">
          HKD: {usd * currentRates.rates.HKD}
        </li>
        <li className="list-group-item idr">
          IDR: {usd * currentRates.rates.IDR}
        </li>
        <li className="list-group-item ils">
          ILS: {usd * currentRates.rates.ILS}
        </li>
        <li className="list-group-item dkk">
          DKK: {usd * currentRates.rates.DKK}
        </li>
        <li className="list-group-item inr">
          INR: {usd * currentRates.rates.INR}
        </li>
        <li className="list-group-item chf">
          CHF: {usd * currentRates.rates.CHF}
        </li>
        <li className="list-group-item mxn">
          MXN: {usd * currentRates.rates.MXN}
        </li>
        <li className="list-group-item czk">
          CZK: {usd * currentRates.rates.CZK}
        </li>
        <li className="list-group-item sgd">
          SGD: {usd * currentRates.rates.SGD}
        </li>
        <li className="list-group-item thb">
          THB: {usd * currentRates.rates.THB}
        </li>
        <li className="list-group-item hrk">
          HRK: {usd * currentRates.rates.HRK}
        </li>
        <li className="list-group-item eur">
          EUR: {usd * currentRates.rates.EUR}
        </li>
        <li className="list-group-item myr">
          MYR: {usd * currentRates.rates.MYR}
        </li>
        <li className="list-group-item nok">
          NOK: {usd * currentRates.rates.NOK}
        </li>
        <li className="list-group-item cny">
          CNY: {usd * currentRates.rates.CNY}
        </li>
        <li className="list-group-item bgn">
          BGN: {usd * currentRates.rates.BGN}
        </li>
        <li className="list-group-item php">
          PHP: {usd * currentRates.rates.PHP}
        </li>
        <li className="list-group-item pln">
          PLN: {usd * currentRates.rates.PLN}
        </li>
        <li className="list-group-item zar">
          ZAR: {usd * currentRates.rates.ZAR}
        </li>
        <li className="list-group-item cad">
          CAD: {usd * currentRates.rates.CAD}
        </li>
        <li className="list-group-item isk">
          ISK: {usd * currentRates.rates.ISK}
        </li>
        <li className="list-group-item brl">
          BRL: {usd * currentRates.rates.BRL}
        </li>
        <li className="list-group-item ron">
          RON: {usd * currentRates.rates.RON}
        </li>
        <li className="list-group-item nzd">
          NZD: {usd * currentRates.rates.NZD}
        </li>
        <li className="list-group-item try">
          TRY: {usd * currentRates.rates.TRY}
        </li>
        <li className="list-group-item jpy">
          JPY: {usd * currentRates.rates.JPY}
        </li>
        <li className="list-group-item rub">
          RUB: {usd * currentRates.rates.RUB}
        </li>
        <li className="list-group-item krw">
          KRW: {usd * currentRates.rates.KRW}
        </li>
        <li className="list-group-item aud">
          AUD: {usd * currentRates.rates.AUD}
        </li>
        <li className="list-group-item huf">
          HUF: {usd * currentRates.rates.HUF}
        </li>
        <li className="list-group-item sek">
          SEK: {usd * currentRates.rates.SEK}
        </li>
      </ul>
    </div>
  )
}

export default App
