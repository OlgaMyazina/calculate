import React from 'react';
import './Course.css';

export interface CourseProps {
    courseName: string;
    courseValue: number;
    onCourseNameChange: (value: string) => void;
    onCourseValueChange: (value: number) => void;
}


export class Course extends React.Component<CourseProps> {
    constructor(props: CourseProps) {
        super(props);
        this.handleCourseNameChange = this.handleCourseNameChange.bind(this);
        this.handleCourseValueChange = this.handleCourseValueChange.bind(this);
    }

    handleCourseNameChange(e: any) {
        this.props.onCourseNameChange(e.target.value);
    }

    handleCourseValueChange(e: any) {
        console.log('couse value: ', e.target.value);
        this.props.onCourseValueChange(e.target.value);
    }

    render() {
        return (
            <div className="course-wrapper">
                <label htmlFor="course__number" className="course">
                    <span className="course__title">Курс валют для пересчёта в </span></label>
                <input className="course__value" id="course__number" type="number" value={this.props.courseValue}
                       onChange={this.handleCourseValueChange}/>
                <select className="course__name" value={this.props.courseName} onChange={this.handleCourseNameChange}>
                    <option value="RUB">₽ RUB</option>
                    <option value="USD">$ USD</option>
                    <option value="EUR">€ EUR</option>
                </select>


            </div>
        )
    }
}