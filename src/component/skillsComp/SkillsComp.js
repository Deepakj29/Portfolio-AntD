import React from "react";
import { Carousel } from 'antd';


const contentStyle = {
    height: '100vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'rgb(66, 60, 60)'
    ,
};

export const SkillsComp = () => {
    return (
        <>
            <div className="skillhead" >
                <Carousel autoplay>
                    <div>
                        <h1 style={contentStyle}>
                            <img className="car1" src="./assets/html.png" alt="qq"></img>
                            <img className="car1" src="./assets/css.png" alt="qq"></img>
                            <img className="car1" src="./assets/bootstrap.png" alt="qq"></img>
                            <h1 style={{color: 'orangered'}}>HTML----------CSS----------BOOTSTRAP</h1>
                            
                        </h1>
                       
                        </div>
                    <div>
                        <h1 style={contentStyle}>
                            <img className="car1" src="./assets/js.png" alt="qq"></img>
                            <img className="car1" src="./assets/react.png" alt="qq"></img>
                            <h1 style={{color: 'orangered'}}>JAVASCRIPT----------REACTJS</h1>
                        </h1>
                    </div>
                    <div>
                        <h1 style={contentStyle}>
                            <img className="car1" src="./assets/nodejs.png" alt="qq"></img>
                            <img className="car1" src="./assets/mongodb.png" alt="qq"></img>
                            <h1 style={{color: 'orangered'}}>NODEJS----------MONGODB</h1>
                        </h1>
                    </div>

                </Carousel>
            </div>
        </>
    )
}