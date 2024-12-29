import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import { Button, Card, Row, Col } from "antd";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "./singleCoin.css";

// Registering the required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function SingleCoin() {
  const { uuid } = useParams();
  const { favorites } = useContext(AppContext);
  const navigate = useNavigate();
  const [selectedCoin, setSelectedCoin] = useState(null);

  const fetchOneCoin = async () => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd",
      params: {
        referenceCurrencyUuid: uuid,
        timePeriod: "24h",
      },
      headers: {
        "x-rapidapi-key": "your-api-key", // Replace with actual API key
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data, "single coin data");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!favorites || favorites.length === 0) {
      navigate("/cripto");
      return;
    }

    const coin = favorites.find((coin) => coin.uuid === uuid);
    if (coin) {
      setSelectedCoin(coin);
      fetchOneCoin();
    }
  }, [uuid, favorites, navigate]);

  // Data for the 24h Sparkline
  const sparklineData = selectedCoin?.sparkline || [];
  
  // Chart.js data format
  const data = {
    labels: sparklineData.map((_, index) => index), // Labels for x-axis (time)
    datasets: [
      {
        label: "24h Price Change",
        data: sparklineData.map((price) => parseFloat(price)), // Convert prices to float
        fill: false,
        borderColor: "#3C3C3D", // Line color
        tension: 0.1, // Line smoothness
      },
    ],
  };

  return (
    <div className="single-coin-container">
      {selectedCoin ? (
        <Card className="coin-card">
          <Row gutter={16}>
            <Col span={12} className="coin-info">
              <div className="coin-header">
                <img
                  src={selectedCoin.iconUrl}
                  alt={selectedCoin.name}
                  className="coin-icon"
                />
                <h1>{selectedCoin.name}</h1>
                <h2>({selectedCoin.symbol})</h2>
              </div>
              <div className="coin-details">
                <p>
                  <strong>Price: </strong>
                  {parseFloat(selectedCoin.price).toFixed(2)} USD
                </p>
                <p>
                  <strong>Market Cap: </strong>
                  {parseInt(selectedCoin.marketCap).toLocaleString()} USD
                </p>
                <p>
                  <strong>24h Change: </strong>
                  <span
                    style={{
                      color: selectedCoin.change > 0 ? "green" : "red",
                    }}
                  >
                    {selectedCoin.change}%
                  </span>
                </p>
              
                <Button
                  onClick={() => navigate("/favorites")}
                  style={{ marginTop: "10px" }}
                  type="primary"
                >
                  Back to Favorites
                </Button>
              </div>
            </Col>
            <Col span={12} className="coin-chart">
              <h3>Price History (24h)</h3>
              <div className="coin-chart-placeholder">
                {sparklineData.length ? (
                  <Line data={data} />
                ) : (
                  <p>Loading chart...</p>
                )}
              </div>
            </Col>
          </Row>
        </Card>
      ) : (
        <p>Loading coin details or coin not found...</p>
      )}
    </div>
  );
}

export default SingleCoin;