import React, { useState } from "react";
import { Input, AutoComplete } from "antd";
import { getSearchResult } from "./api";
import { Row, Col } from "antd";
import { debounce } from "../../util";

const searchResult = (optionsData) => {
  let optionsArr = optionsData.map((option) => {
    let keys = Object.keys(option);
    let tempOption = {};
    for (let j = 0; j < keys.length; j++) {
      let key = keys[j].split(" ")[1];
      tempOption[key] = option[keys[j]];
    }
    option = tempOption;
    return {
      value: option.symbol,
      label: (
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Col span={8} style={{ fontSize: "16px", fontWeight: 600 }}>
            {option.symbol}
          </Col>
          <Col span={16}>{option.name}</Col>
        </Row>
      ),
    };
  });
  return optionsArr;
};

const SearchInput = (props) => {
  const [options, setOptions] = useState([]);

  const handleSearch = debounce(async (value) => {
    let options = await getSearchResult(value);
    console.log(options);
    setOptions(
      options.bestMatches && options.bestMatches.length
        ? searchResult(options.bestMatches)
        : []
    );
  }, 500);

  const onSelect = (value) => {
    console.log("onSelect", value);
    let singleOption = options.filter((item) => {
      return item.value === value;
    });
    if (!singleOption.length && value) {
      props.showSeletedStocks(options);
    } else if (value) {
      props.showSeletedStocks(singleOption);
    }
  };

  return (
    <AutoComplete
      defaultActiveFirstOption={true}
      dropdownMatchSelectWidth={252}
      style={{
        width: 300,
      }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="input here" enterButton />
    </AutoComplete>
  );
};

export default SearchInput;
