import React from "react";
import {Link} from "react-router-dom";
import {Select} from "antd";

import "../index.css";

const sortOptions = [
    {label: "Default", value: null},
    {label: "By title", value: "Product Title"},
    // {label: "By release date", value: "releaseDate"},
    {label: "By price", value: "MSRP"},
    {label: "By profit", value: "Profit"}
];

const filterOptions = [
    {label: "All", value: "all"},
    {label: "Trending", value: "trending"},
    {label: "Untapped", value: "untapped"},
];

export const SortSelect = (props) => {
    return (
        <React.Fragment>
            <Select
                value={props.value ? props.value : null}
                onChange={props.handleOrderChange}
                size={"default"}
                placeholder={"Sort"}
                className="custom-select sort-select"
            >
                {sortOptions.map((option) => <Select.Option value={option.value}>{option.label}</Select.Option>)}
            </Select>
        </React.Fragment>
    )
};

export class FilterSelect extends React.Component {
    render() {
        return (
            <Select
                value={this.props.value ? this.props.value : 'all'}
                size={"default"}
                placeholder={"Filter"}
                className="custom-select filter-select"
                onChange={this.props.handleFilterChange}
            >
                {filterOptions.map((option) => <Select.Option value={option.value}>{option.label}</Select.Option>)}
            </Select>
        )
    }
}