import React, { useEffect, useRef } from "react";
import { Button} from 'antd';
import { DownloadOutlined, } from "@ant-design/icons";
import Typed from "typed.js";



export const HomeComp=()=>{
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Developer", "Designer", "Programmer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop:Infinity,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
    return(
        
       <div className='hero'>
          <h1>Hi! I'm Deepak J </h1>
          <h1>
          <span ref={el}></span>
          </h1>
          
          <div className='butt'>
            <Button  type="primary"  icon={<DownloadOutlined />}>Download Resume</Button>
            <Button   type='danger'  >Hire Me</Button>
          </div>
    </div>
    );

}