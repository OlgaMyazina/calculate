import React from 'react';
import './DataElement.css';


export interface DataElementProps {
    title: string;
    value: string;
    onDataChange: (value: string) => void;
    className?: string;
}

export class DataElement extends React.Component<DataElementProps> {
    constructor(props: DataElementProps) {
        super(props);
        this.handleDataChange = this.handleDataChange.bind(this);
    }

    handleDataChange(e: any) {
        this.props.onDataChange(e.target.value);
    }

    render() {
        return (
            <div className="data-element-wrapper">
                <label className="data-element">
                    <span className="data-element__label">{this.props.title}</span>
                    <input type="date" className="data-element__input"
                           value={this.props.value}
                           onChange={this.handleDataChange}/>
                </label>
            </div>
        )
    }
}
