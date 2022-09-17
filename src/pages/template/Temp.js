import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu,MenuItem ,Image} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
const { Sider } = Layout;


export const TEmp=()=>{
    return(
    <>
    <Layout>
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo"><Image src='./assets/Dlogo.png' alt='mm'></Image></div>
                <Menu theme="white" defaultSelectedKeys={['1']} mode="inline" onClick={handleclick} className='lay'> 
<MenuItem></MenuItem>

                </Menu>
            </Sider>

        <Layout></Layout>
    </Layout>
    
    </>
    )
}