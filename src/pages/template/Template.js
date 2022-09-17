import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu ,Image} from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
const { Sider } = Layout;

function getItem(label, key, icon, children,path) {
    return {
        key,
        icon,
        children,
        label,
        path,
    };
}

const items = [
   getItem ('Home', '1', <PieChartOutlined />,'','/'),
    getItem('About', '2', <DesktopOutlined />,'','/about'),
    getItem('Skills', 'sub2', <TeamOutlined />,'','/skills' ),
    getItem('Projects', 'sub1', <UserOutlined />,'','/project'),
    getItem('Contact', '9', <FileOutlined />,'','/contact'),
];

const Template = () => {
    const [collapsed, setCollapsed] = useState(true);
  
      const handleclick = (e) => {
        console.log(e.key);
        // Result=items.find((v)=>v.key===e.key);
        // console.log(e.target.getAttribute(items));
        console.log(items);
        const res = items.find((v) => v.key === e.key);
        console.log(res.path);
        //  location.href=res.path;
        window.location.href = res.path;
      }
    return (
        <div>
        <Layout className='lay1'
            style={{
                minHeight: '100vh',backgroundColor:"#722ed1",
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo"><Image src='./assets/Dlogo.png' alt='mm'></Image></div>
                <Menu theme="white" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={handleclick} className='lay' /> 
            </Sider>
          
            <Layout className="site-layout">
            <Outlet/>
            </Layout>
        </Layout>
        </div>
    );
};

export default Template;