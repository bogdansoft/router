import React, {Fragment} from "react";
import {Car} from './Car';

export const Cars = (props) => {
    return (
        <div>
            <Fragment>
                {props.cars.map((car, i) => {
                    return (<Car name={car.name} year={car.year} key={i}/>)
                })}
            </Fragment>
        </div>
    )
}