import React from 'react'

const PortfolioList = (props) => {
    return (
        <li className={ props.active ? "active"  : ""} onClick={()=>props.setActPortfolio(props.id)}>{props.name}</li>
    )
}

export default PortfolioList
