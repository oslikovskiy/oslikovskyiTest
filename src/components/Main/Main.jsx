import React, { Component } from "react";
import SelectCurrency from "../SelectCurrency/";
import CheckBox from "../Checkbox";
import Ticket from "../Ticket";
import Styled from "./styled";
import data from "../data/Data";

class Main extends Component {
  state = {
    isChecked: false,
    filters: [],
    currencyDataApi: [],
    currency: "RUB"
  };

  async componentDidMount() {
    try {
      const response = await fetch(`https://api.exchangeratesapi.io/latest`);
      const json = await response.json();
      this.setState({ currencyDataApi: json });
    } catch (error) {
      console.log(error);
    }
  }

  onCurrencyChange = code => {
    this.setState({
      currency: code
    });
  };

  handleChecked = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  onFilterChange = e => {
    const filterValue = Number(e.target.value);
    const { filters } = this.state;

    if (filters.includes(filterValue)) {
      this.setState({
        filters: filters.filter(i => i !== filterValue)
      });
    } else {
      this.setState({
        filters: [...filters, filterValue]
      });
    }
  };

  render() {
    const { resData } = this.props;
    const { filters, currency, currencyDataApi } = this.state;
    const sortedData = resData.sort((a, b) => a.price - b.price);
    const filteredData = sortedData.filter(
      i => filters.includes(i.stops) || filters.length === 0
    );
    // Get unique list of available stop filers
    const filterList = [
      ...new Set(resData.map(item => item.stops).sort((a, b) => a - b))
    ];

    return (
      <div
        style={{
          background: "aliceblue",
          padding: "30px",
          height: "-webkit-fill-available"
        }}
      >
        <Styled.Logo />
        <Styled.Wrapper>
          <Styled.Filter>
            <div>
              {data.currencies.map((item, index) => (
                <SelectCurrency
                  key={index}
                  currencyItem={item}
                  isSelected={item.code === currency}
                  onChange={this.onCurrencyChange}
                />
              ))}
            </div>
            <br />
            <p>Количество пересадок</p>
            {filterList.map(item => (
              <CheckBox
                key={item}
                value={item}
                isChecked={filters.includes(item)}
                onChange={this.onFilterChange}
              />
            ))}
          </Styled.Filter>

          <div>
            {filteredData.map((item, index) => (
              <Ticket
                ticket={item}
                currencyData={data.currencies.find(
                  item => item.code === currency
                )}
                key={index}
              />
            ))}
          </div>
        </Styled.Wrapper>
      </div>
    );
  }
}

export default Main;
