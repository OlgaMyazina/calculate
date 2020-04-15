import React from 'react';
import './App.css';

import {DataComponent} from "./components/DataComponent/DataComponent";
import {Calculate} from "./components/Calculate/Calculate";
import {Button} from "./components/Button/Button";

export interface AppState {
    ataDate: string,
    pickUpDate: string,
    emptyReturnDate: string,
    courseName: string,
    courseValue: number,
    isAtaStorageCheck: boolean,
    isPickUpStorageCheck: boolean
    isAtaDemmurageCheck: boolean,
    isEmptyReturnDemmurageCheck: boolean,
}

export default class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);
        this.handleAtaChange = this.handleAtaChange.bind(this);
        this.handleEmptyReturnChange = this.handleEmptyReturnChange.bind(this);
        this.handlePickUpChange = this.handlePickUpChange.bind(this);
        this.handleCourseNameChange = this.handleCourseNameChange.bind(this);
        this.handleCourseValueChange = this.handleCourseValueChange.bind(this);
        this.handleAtaStorageCheck = this.handleAtaStorageCheck.bind(this);
        this.handlerPickUpStorageCheck = this.handlerPickUpStorageCheck.bind(this);
        this.handleAtaDemmurageCheck = this.handleAtaDemmurageCheck.bind(this);
        this.handlerEmptyReturnDemmurageCheck = this.handlerEmptyReturnDemmurageCheck.bind(this);

        this.state = {
            ataDate: '2020-04-01',
            pickUpDate: '2020-04-26',
            emptyReturnDate: '2020-09-26',
            courseName: "RUB",
            courseValue: 80,
            isAtaStorageCheck: true,
            isPickUpStorageCheck: true,
            isAtaDemmurageCheck: true,
            isEmptyReturnDemmurageCheck: true,
        };
    }

    handleAtaChange(ataDate: string) {
        this.setState({ataDate: ataDate});
    }

    handlePickUpChange(pickUpDate: string) {
        this.setState({pickUpDate: pickUpDate});
    }

    handleEmptyReturnChange(emptyReturnDate: string) {
        this.setState({emptyReturnDate: emptyReturnDate});
    }

    handleCourseNameChange(courseName: string) {
        this.setState({courseName: courseName});
    }

    handleCourseValueChange(courseValue: number) {
        console.log('up ', courseValue);
        this.setState({courseValue: courseValue});
    }

    handleAtaStorageCheck(isCheck: boolean) {
        this.setState({isAtaStorageCheck: isCheck});
    }

    handlerPickUpStorageCheck(isCheck: boolean) {
        this.setState({isPickUpStorageCheck: isCheck});
    }

    handleAtaDemmurageCheck(isCheck: boolean) {
        this.setState({isAtaDemmurageCheck: isCheck});
    }

    handlerEmptyReturnDemmurageCheck(isCheck: boolean) {
        this.setState({isEmptyReturnDemmurageCheck: isCheck});
    }


    render() {
        const ataStorageBox = {
            title: "Включать день загрузки (ATA)",
            isCheck: this.state.isAtaStorageCheck,
            onCheck: this.handleAtaStorageCheck,
        };

        const pickUpStorageBox = {
            title: "Включать день забора (Pick-Up)",
            isCheck: this.state.isPickUpStorageCheck,
            onCheck: this.handlerPickUpStorageCheck,
        };

        const ataDemmurageBox = {
            title: "Включать день загрузки (ATA)",
            isCheck: this.state.isAtaDemmurageCheck,
            onCheck: this.handleAtaDemmurageCheck,
        };

        const emptyReturnStorageBox = {
            title: "Включать день возврата (Empty Return)",
            isCheck: this.state.isEmptyReturnDemmurageCheck,
            onCheck: this.handlerEmptyReturnDemmurageCheck,
        };
        return (
            <div className="app__wrapper">
                <DataComponent onAtaChange={this.handleAtaChange}
                               onEmptyReturnChange={this.handleAtaChange}
                               onPickUpChange={this.handlePickUpChange}
                               onCourseNameChange={this.handleCourseNameChange}
                               onCourseValueChange={this.handleCourseValueChange}
                               ataValue={this.state.ataDate}
                               pickUpData={this.state.pickUpDate}
                               emptyReturn={this.state.emptyReturnDate}
                               courseName={this.state.courseName}
                               courseValue={this.state.courseValue}
                />
                <div className="calculate__wrapper">
                    <Calculate className="calculate__element" title="storage" checkBoxValue1={ataStorageBox}
                               checkBoxValue2={pickUpStorageBox}/>
                    <Calculate className="calculate__element" title="demurrage" checkBoxValue1={ataDemmurageBox}
                               checkBoxValue2={emptyReturnStorageBox}/>
                </div>
                <div className="data-wrapper btn__wrapper">
                    <Button title="Export to Excel" className="btn-elem"/>
                </div>
            </div>
        )
    }
}

