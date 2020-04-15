import React from 'react';
import './Table.css';

export interface TableProps {
    className?: string
}

export class Table extends React.Component<TableProps> {
    constructor(props: TableProps) {
        super(props);
    }

    render() {
        return (
            <table className={`table ${this.props.className ? this.props.className : ""}`}>
                <tr className="table__header">
                    <th className="table__data date header">Даты</th>
                    <th className="table__data day header">Число дней</th>
                    <th className="table__data price header">Цена</th>
                    <th className="table__data summary header">Стоимость</th>
                </tr>
                <tr className="table__row">
                    <td className="table__data date">1.04-26.06</td>
                    <td className="table__data day">87</td>
                    <td className="table__data price">12.7 ERU</td>
                    <td className="table__data summary">350000 RUB</td>
                </tr>
                <tr className="table__footer">
                    <td className="table__data date">Итого</td>
                    <td className="table__data day">87</td>
                    <td className="table__data price"/>
                    <td className="table__data summary">35000 RUb</td>
                </tr>
            </table>
        )
    }
}