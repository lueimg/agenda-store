import React, { Component } from "react";
import styled, { css } from "styled-components";
import TextField from "@material-ui/core/TextField";

const Item = ({ name, selectItem, active }) => (
    <Styled.Button active={active} onClick={() => selectItem(name)}>{name}</Styled.Button>
);

const ListOptions = ({ list, selectItem, currentValue }) => (
    <div className="linear-options-list flex width-90vw overflow-auto">
        {list.map(name => (
            <Item key={name} active={currentValue === name } name={name} selectItem={selectItem} />
        ))}
    </div>
);

export class LinearOptions extends Component {
    static defaultProps = {
        label: "Select and Option",
        showLabel: true,
        data: [],
        value: "",
        onUpdateOptions: () => {}
    };

    OnSelectOption = optionSelected => {
        this.props.onUpdateOptions(optionSelected);
    };

    onUpdateByTextField = e => {
        this.props.onUpdateOptions(e.target.value);
    };

    render() {
        return (
            <div className="linear-option">
                <div className=" linear-option-wrapper margin-one">
                    <ListOptions
                        list={this.props.data}
                        currentValue={this.props.value}
                        selectItem={this.OnSelectOption}
                    />
                </div>
                {this.props.showLabel && (
                    <div className="margin-one text-center">
                        <TextField
                            label={this.props.label}
                            value={this.props.value}
                            onChange={this.onUpdateByTextField}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default LinearOptions;

const Styled = {
    Button: styled.div`
        background: aliceblue;
        margin: 0.2rem;
        padding: 0.5rem;
        text-align: center;
        border: 1px solid #ccc;
        cursor: pointer;

        ${ props => props.active && css`
            background: white;
            color: palevioletred;
        `}
    `
};
