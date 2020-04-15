import React from 'react';
import "./Calculate.css";
import {Checkbox, CheckboxProps} from "../CheckBox/Checkbox";
import {Table} from "../Table/Table";


export interface CalculateProps {
    title: string,
    checkBoxValue1: CheckboxProps,
    checkBoxValue2: CheckboxProps,
    className?: string,
}

export class Calculate extends React.Component <CalculateProps> {
    constructor(props: CalculateProps) {
        super(props);

    }


    render() {
        return (
            <div className={`calculate-wrapper ${this.props.className ? this.props.className : ""}`}>
                <h2 className="calculate__title">{this.props.title}</h2>
                <Checkbox className="calculate__checkbox" title={this.props.checkBoxValue1.title}
                          isCheck={this.props.checkBoxValue1.isCheck}
                          onCheck={this.props.checkBoxValue1.onCheck}/>
                <Checkbox className="calculate__checkbox" title={this.props.checkBoxValue2.title}
                          isCheck={this.props.checkBoxValue2.isCheck}
                          onCheck={this.props.checkBoxValue2.onCheck}/>
                <Table className="calculate__table"/>
            </div>
        )
    }
}