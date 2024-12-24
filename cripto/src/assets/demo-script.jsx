const url = 'https://api.g.alchemy.com/prices/v1/tokens/by-symbol?symbols=ETH&symbols=USDC&symbols=BTC';
const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer UCnrvi4SsMAFkrBuTPnceaHardvvHkv1'
};

fetch(url, {
    method: 'GET',
    headers: headers
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));