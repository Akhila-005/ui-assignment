import React from "react";
import "./styles.css";
import Sidebar from "../Sidebar/index";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CancelIcon from "@mui/icons-material/Cancel";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ActivityBox from "../Activity";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star"; 

ChartJS.register(ArcElement, Tooltip, Legend);

const Home: React.FC = () => {
  const pieData = {
    labels: ["Net Profit", "Other Costs"],
    datasets: [
      {
        data: [70000, 30000],
        backgroundColor: ["#36A2EB", "#FF6384"],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            const datasetLabel = tooltipItem.dataset.label || "";
            const value = tooltipItem.raw;
            return `${datasetLabel}: $${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div className="home-container">
      <Sidebar />
      <div className="content">
        <header className="header">
          <h1>Dashboard</h1>
        </header>
        <div className="main">
          <div className="left-section">
            <div className="stats-grid">
              <div className="stat-card">
                <ShoppingCartIcon className="stat-icon" />
                <h3>Total Orders</h3>
                <p>1234</p>
              </div>
              <div className="stat-card">
                <LocalShippingIcon className="stat-icon" />
                <h3>Total Delivered</h3>
                <p>1200</p>
              </div>
              <div className="stat-card">
                <CancelIcon className="stat-icon" />
                <h3>Total Cancelled</h3>
                <p>34</p>
              </div>
              <div className="stat-card">
                <AttachMoneyIcon className="stat-icon" />
                <h3>Total Revenue</h3>
                <p>$45,678</p>
              </div>
            </div>
            <ActivityBox />
            <div className="recent-orders">
              <h2>Recent Orders</h2>
              <table>
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Order No</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>123456</td>
                    <td>$100.00</td>
                    <td>Shipped</td>
                  </tr>
                  <tr>
                    <td>Jane Smith</td>
                    <td>123457</td>
                    <td>$150.00</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td>Meenakshi</td>
                    <td>123457</td>
                    <td>$150.00</td>
                    <td>Pending</td>
                  </tr>{" "}
                  <tr>
                    <td>Babu</td>
                    <td>123457</td>
                    <td>$150.00</td>
                    <td>Pending</td>
                  </tr>{" "}
                  <tr>
                    <td>Jane Smith</td>
                    <td>123457</td>
                    <td>$150.00</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td>Meenakshi</td>
                    <td>123457</td>
                    <td>$150.00</td>
                    <td>Pending</td>
                  </tr>{" "}
                  <tr>
                    <td>Babu</td>
                    <td>123457</td>
                    <td>$150.00</td>
                    <td>Pending</td>
                  </tr>{" "}
                </tbody>
              </table>
            </div>
          </div>
          <div className="right-section">
            <div className="net-profit">
              <h2>Net Profit</h2>
              <div className="pie-chart-container">
                <Pie data={pieData} options={pieOptions} />
              </div>
            </div>
            <div className="goals-container">
              <div className="goal-item">
                <EmojiEventsIcon className="goal-icon" />
                <div className="goal-content">
                  <h3>Goals</h3>
                  <p>Set your targets for the month</p>
                </div>
                <ArrowForwardIcon className="goal-arrow" />
              </div>
              <div className="goal-item">
                <RestaurantMenuIcon className="goal-icon" />
                <div className="goal-content">
                  <h3>Popular Dishes</h3>
                  <p>View the most popular items</p>
                </div>
                <ArrowForwardIcon className="goal-arrow" />
              </div>
              <div className="goal-item">
                <RateReviewIcon className="goal-icon" />
                <div className="goal-content">
                  <h3>Menus</h3>
                  <p>Check the current menu options</p>
                </div>
                <ArrowForwardIcon className="goal-arrow" />
              </div>
            </div>
            <div className="feedback-container">
              <h2>Customer Feedback</h2>
              <div className="feedback-item">
                <div className="feedback-avatar"></div>
                <div className="feedback-content">
                  <h3>Jane Doe</h3>
                  <p>
                    Great service and excellent food. Will definitely come back!
                  </p>
                  <div className="feedback-stars">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                </div>
              </div>
              <div className="feedback-item">
                <div className="feedback-avatar"></div>
                <div className="feedback-content">
                  <h3>John Smith</h3>
                  <p>
                    Good atmosphere, but the food was a bit cold. Could improve.
                  </p>
                  <div className="feedback-stars">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
