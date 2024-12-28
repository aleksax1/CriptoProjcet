import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function SingleCoin() {
    const {uuid}= useParams()
    console.log("Users details",uuid)
    const fetchOneCoin = async () => {

        const options = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd',
            params: {
              referenceCurrencyUuid: 'yhjMzLPhuIDl',
              timePeriod: '24h'
            },
            headers: {
              'x-rapidapi-key': '0d173c76c2msh0cab6bcaa89f2ccp18f8f4jsn338a476a3b90',
              'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
          } catch (error) {
              console.error(error);
          }
    }
    useEffect(() => {
        fetchOneCoin()
    },[])
    return (
    <div>
      Single coin
    </div>
  )
}

export default SingleCoin
