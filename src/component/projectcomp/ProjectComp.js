import React from "react";
import { Card } from 'antd';


const { Meta } = Card;
export const ProjectComp=()=>{
    return(
        <>

            <div className="project">
                <h1>Projects</h1>
                <div className="parr">
                <div className="prow1">
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="./Assets/books.jpg" />}
                    >
                        <Meta title="Project" description="Book Search App" />
                    </Card>

                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="./Assets/calculator.jpg" />}
                    >
                        <Meta title="Project" description="Calculator App" />
                    </Card>

                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="./Assets/todo.jpg" />}
                    >
                        <Meta title="Project" description="Todo App" />
                    </Card>
                </div>
                <div className="prow2">
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="./Assets/admin.jpg" />}
                    >
                        <Meta title="Project" description="Admin Dashboard App" />
                    </Card>

                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="./Assets/security.jpg" />}
                    >
                        <Meta title="Project" description="Task Manger App" />
                    </Card>

                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="./Assets/portfolio.jpg" />}
                    >
                        <Meta title="Project" description="Portfolio App" />
                    </Card>
                </div>
                </div>
            </div>
        </>
    )
}