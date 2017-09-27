const socket = io('https://websocket.btcchina.com');
socket.emit('subscribe', 'marketdata_cnybtc');

socket.on('connect', () => {

    // listen for a ticket event from the api
    socket.on('ticker', data => {
        console.log(data);

        $('#market').text(data.ticker.market);
        $('#high-count').text(data.ticker.high);
        $('#low-count').text(data.ticker.low);
        $('#buy').text(data.ticker.buy);
        $('#sell').text(data.ticker.sell);
        $('#volume').text(data.ticker.vol);
    });
});