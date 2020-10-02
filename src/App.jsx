import React from 'react'

function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Currency Converter</h1>
      </div>
      <label htmlFor="usd-input">USD</label>
      <input className="form-control usd-input" type="text" placeholder="1" />
      <ul className="list-group">
        <li className="list-group-item gbp">GBP:</li>
        <li className="list-group-item hkd">HKD:</li>
        <li className="list-group-item idr">IDR:</li>
        <li className="list-group-item ils">ILS:</li>
        <li className="list-group-item dkk">DKK:</li>
        <li className="list-group-item inr">INR:</li>
        <li className="list-group-item chf">CHF:</li>
        <li className="list-group-item mxn">MXN:</li>
        <li className="list-group-item czk">CZK:</li>
        <li className="list-group-item sgd">SGD:</li>
        <li className="list-group-item thb">THB:</li>
        <li className="list-group-item hrk">HRK:</li>
        <li className="list-group-item eur">EUR:</li>
        <li className="list-group-item myr">MYR:</li>
        <li className="list-group-item nok">NOK:</li>
        <li className="list-group-item cny">CNY:</li>
        <li className="list-group-item bgn">BGN:</li>
        <li className="list-group-item php">PHP:</li>
        <li className="list-group-item pln">PLN:</li>
        <li className="list-group-item zar">ZAR:</li>
        <li className="list-group-item cad">CAD:</li>
        <li className="list-group-item isk">ISK:</li>
        <li className="list-group-item brl">BRL:</li>
        <li className="list-group-item ron">RON:</li>
        <li className="list-group-item nzd">NZD:</li>
        <li className="list-group-item try">TRY:</li>
        <li className="list-group-item jpy">JPY:</li>
        <li className="list-group-item rub">RUB:</li>
        <li className="list-group-item krw">KRW:</li>
        <li className="list-group-item aud">AUD:</li>
        <li className="list-group-item huf">HUF:</li>
        <li className="list-group-item sek">SEK:</li>
      </ul>
    </div>
  )
}

export default App
