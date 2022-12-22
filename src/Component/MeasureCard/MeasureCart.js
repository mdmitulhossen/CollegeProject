import React from 'react';
import "./MeasureCart.css"

const MeasureCart = ({hName,number,color,icon}) => {
    return (
        <div>
            <div className="row1-container">
                <div className={`boxCard ${color}`}>
                    <h4>{hName}</h4>
                    <p>{number}</p>
                    <i className={`fa-solid ${icon} img ${color}I`}></i>
                </div>
            </div>
        </div>

    );
};

export default MeasureCart;