import React from 'react'
const ServicesCards = (props) => {
    return (
            <div className="col-md-4">
                <div className={(props.middle)?"service_card middle_card" : "service_card"}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="service_img">
                        <i className={"fas "+props.icon}></i>
                    </div>
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                </div>
            </div>
    )
}

export default ServicesCards
