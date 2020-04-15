import React from 'react';
import './DataComponent.css';
import {DataElement} from "../DataElement/DataElement";
import {Course} from "../Course/Course";

export interface DataComponentProps {
    onAtaChange: (value: string) => void,
    onEmptyReturnChange: (value: string) => void,
    onPickUpChange: (value: string) => void,
    onCourseNameChange: (value: string) => void,
    onCourseValueChange: (value: number) => void,
    ataValue: string,
    pickUpData: string,
    emptyReturn: string,
    courseName: string,
    courseValue: number,

}

export const DataComponent = (props: DataComponentProps) => {
    return (
        <div className="data-wrapper">
            <DataElement title="ATA" value={props.ataValue} onDataChange={props.onAtaChange} className="data-elem"/>
            <DataElement title="Pick-Up"
                         value={props.pickUpData}
                         onDataChange={props.onPickUpChange}
                         className="data-elem"/>
            <DataElement title="Empty Return"
                         value={props.emptyReturn}
                         onDataChange={props.onEmptyReturnChange}
                         className="data-elem"/>
            <Course courseName={props.courseName}
                    courseValue={props.courseValue}
                    onCourseNameChange={props.onCourseNameChange}
                    onCourseValueChange={props.onCourseValueChange}/>
        </div>
    )
}