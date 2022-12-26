import React from 'react';
import "./MeasureCart.css"

const MeasureCart = ({ hName, number, color, icon }) => {
    return (
        <div>
            {/* <div className="row1-container">
                <div className={`boxCard ${color}`}>
                    <h4>{hName}</h4>
                    <p>{number}</p>
                    <i className={`fa-solid ${icon} img ${color}I`}></i>
                </div>
            </div> */}

          
                <div class="card Mcard bg-comman">
                        <div class={`card-body ${color}`}>
                        <div class="db-widgets d-flex justify-content-between align-items-center">
                            <div class="db-info">
                                <h4>{hName}</h4>
                                <h5>{number}</h5>
                            </div>
                            <div class="db-icon">
                            <i className={`fa-solid ${icon} img ${color}I`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
        

    );
};

export default MeasureCart;