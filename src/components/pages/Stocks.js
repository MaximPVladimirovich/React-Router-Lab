import { Link } from "react-router-dom"

let Stocks = function (stockList) {

  return (

    <div className="stockList">
      <h2>Most Active Stocks</h2>
      {stockList.stocks.map(function (stock) {
        return (
          <div className="stock">
            <div className="stock-name">
              <Link to={`/stock/${stock.symbol}`}>
                <h3>{stock.name}</h3>
              </Link>
            </div>
            <div className="stock-price">
              <p>${stock.lastPrice}</p>
            </div>
            <div className="stock-right">
              <div>
                <p>{stock.change}</p>
              </div>

            </div>

          </div>
        )
      })}
    </div>
  )
}

export default Stocks;