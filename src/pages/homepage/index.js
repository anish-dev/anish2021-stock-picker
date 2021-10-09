import SearchInput from "../../components/search-input";
import React, { useState } from "react";
import { Row, Col } from "antd";
import "./homepage.css";
import { getStocksDeatils } from "./api";
import StockDeatilsCard from "../../components/common/stock-details-card";

const Homepage = () => {
  const [stockDeatils, setStockDeatils] = useState(null);
  const showSeletedStocks = async (valueArr) => {
    if (valueArr.length) {
      let stockDetails = await getStocksDeatils(valueArr);
      if (stockDetails) {
        setStockDeatils(stockDetails);
      }
      console.log(stockDetails);
    }
  };
  return (
    <>
      <Row justify="center" className="m-top-md">
        <Col>
          <SearchInput showSeletedStocks={showSeletedStocks} />
        </Col>
      </Row>
      <Row justify="center" className="m-top-md">
        <Col span={16}>
          <StockDeatilsCard stockDetails={stockDeatils} />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
