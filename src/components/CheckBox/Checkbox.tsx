import React from 'react';
import './Checkbox.css';

export interface CheckboxProps {
    title: string,
    isCheck: boolean,
    onCheck: ((isCheck: boolean) => void),
    className?: string,
}

export class Checkbox extends React.Component<CheckboxProps> {
    constructor(props: CheckboxProps) {
        super(props);
        this.handlerCheck = this.handlerCheck.bind(this);
    }

    handlerCheck(e: any) {
        if (this.props.onCheck) {
            this.props.onCheck(e.target.checked);
        }
    }

    getCheckName = () => {
        return this.props.isCheck ? "checkbox__checking check" : "checkbox__checking";
    };

    render() {
        return (
            <div className={`checkbox-wrapper ${this.props.className ? this.props.className : ""}`}>
                <label className="checkbox">
                    <div className={this.getCheckName()}/>
                    <input className="checkbox__input" type="checkbox" checked={this.props.isCheck}
                           onChange={this.handlerCheck}/>
                    <span>{this.props.title}</span>
                </label>
            </div>
        )
    }
}