let Stock = function (stocks) {
    const symbol = stocks.match.params.symbol

    const stock = stocks.stocks.find((stock) => stock.symbol === symbol)

    return (
        <div className="center">
            <h1>{stock.name}</h1>
            <h4>{stock.symbol}</h4>
            <h4>Last: {stock.lastPrice}</h4>
            <h4>Change: {stock.change}</h4>
            <h4>High: {stock.high}</h4>
            <h4>Low: {stock.low}</h4>
            <h4>Open: {stock.open}</h4>
        </div>
    )
}

export default Stock