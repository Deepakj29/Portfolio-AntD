import React from "react";
import {FundTwoTone,SearchOutlined,DashboardTwoTone} from '@ant-design/icons';
import { Button } from "antd";

export const AboutComp=()=>{

    return(
        <>
            <div className="abtcont">
                <div className="abtrow">
                    <div className="abtcol1">
                        <h1>About</h1>
                    </div>
                    <div className="abtcol2">
                        <div className="col2sub"><Button className="bt" type="" shape='circle' icon={<DashboardTwoTone style={{ fontSize: '60px', color: '#08c' }} />} /><h1>Fast</h1><p>Fast load times and lag free interaction, my highest priority.</p></div>
                        <div className="col2sub"> <Button className="bt" type="" shape='circle' icon={<SearchOutlined style={{ fontSize: '60px', color: '#08c' }} />} /><h1>Responsive</h1><p>My layouts will work on any device, big or small.</p></div>
                        <div className="col2sub"><Button className="bt" type="" shape='circle' icon={<FundTwoTone style={{ fontSize: '60px', color: '#08c' }} />} /><h1>Dynamic</h1><p>Websites don't have to be static, I love making pages come to life.</p></div>
                    </div>
                    <div className="abtcol3">
                        <div className="col3sub">
                        <p>Who's this guy?
                            I'm a Front-End Developer for Crampete in Chennai, TN.
                            I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                            Let's make something special.</p></div>
                    </div>
                </div>

            </div>
        </>
    )

};