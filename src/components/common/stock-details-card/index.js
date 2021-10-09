// import React, { useState } from "react";
// import { getSearchResult } from "./api";
import { Row, Col, Card } from "antd";
// import { debounce } from "../../util";

const StockDeatilsCard = (props) => {
  console.log(props);
  return (
    <>
      {props.stockDetails && (
        <div style={cardStyle}>
          <Card
            title={`${props.stockDetails.Name}(${props.stockDetails.Symbol})`}
            bordered={false}
            // style={{ width: 300 }}
          >
            <Row justify="start">
              <Col span={8}>
                <span style={{ fontWeight: 600 }}>Industry :</span>
                <span>{props.stockDetails.Industry}</span>
              </Col>
              <Col span={8}>
                <span style={{ fontWeight: 600 }}>Country : </span>
                <span>{props.stockDetails.Country}</span>
              </Col>
              <Col span={8}>
                <span style={{ fontWeight: 600 }}>Market Cap :</span>
                <span>{props.stockDetails.MarketCapitalization}</span>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <span style={{ fontWeight: 600 }}>PE Ratio :</span>
                <span>{props.stockDetails.PERatio}</span>
              </Col>
              <Col span={8}>
                <span style={{ fontWeight: 600 }}>Exchange :</span>
                <span>{props.stockDetails.Exchange}</span>
              </Col>
              <Col span={8}>
                <span style={{ fontWeight: 600 }}>Address :</span>
                <span>{props.stockDetails.Address}</span>
              </Col>
            </Row>
            <Row>
              <Col>{props.stockDetails.Description}</Col>
            </Row>
          </Card>
        </div>
      )}
    </>
  );
};

const cardStyle = {
  padding: "1px",
  background: "#ececec",
};

export default StockDeatilsCard;
