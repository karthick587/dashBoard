import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BiTargetLock } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { PiHamburgerDuotone } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
const Activity = () => {
    const data = [
        {
            name: '1',
            uv: 4000
        },
        {
            name: '2',
            uv: 3000
        },
        {
            name: '3',
            uv: 2000
        },
        {
            name: '4',
            uv: 2780
        },
        {
            name: '5',
            uv: 1890
        },
        {
            name: '6',
            uv: 2390
        },
        {
            name: '7',
            uv: 3490
        },
        {
            name: '8',
            uv: 3490
        },
        {
            name: '9',
            uv: 3490
        },
        {
            name: '10',
            uv: 4000
        },
        {
            name: '11',
            uv: 3000
        },
        {
            name: '12',
            uv: 2000
        },
        {
            name: '13',
            uv: 2780
        },
        {
            name: '14',
            uv: 1890
        },
        {
            name: '15',
            uv: 2390
        },
        {
            name: '16',
            uv: 3490
        },
        {
            name: '17',
            uv: 3490
        },
        {
            name: '18',
            uv: 3490
        },
        {
            name: '19',
            uv: 2780
        },
        {
            name: '20',
            uv: 1890
        },
        {
            name: '21',
            uv: 2390
        },
        {
            name: '22',
            uv: 3490
        },
        {
            name: '23',
            uv: 3490
        },
        {
            name: '24',
            uv: 3490
        },
        {
            name: '25',
            uv: 4000
        },
        {
            name: '26',
            uv: 3000
        },
        {
            name: '27',
            uv: 2000
        },
        {
            name: '28',
            uv: 2780
        },
        {
            name: '29',
            uv: 1890
        },
        {
            name: '30',
            uv: 2390
        },
        {
            name: '31',
            uv: 3490
        },
        {
            name: '32',
            uv: 3490
        },
        {
            name: '33',
            uv: 3490
        },
    ];
    return (
        <Row className="">
            <Col md={6} lg={8} className="dash-space">
                <Card bg="dark" text="white" className=" middle-dash  ">
                    <Card.Body className=''>
                        <Card.Title>Activity</Card.Title>
                        <div className="chart chart-height ">

                            <ResponsiveContainer   >
                                <BarChart

                                    data={data}
                                    margin={{
                                        top: 0,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                    }}

                                >
                                    <CartesianGrid vertical={false} strokeLinecap="3" />
                                    <XAxis style={{ marginTop: 20 }} dataKey="name" interval={3} />
                                    <YAxis style={{ marginTop: 20 }} />
                                    <Tooltip />
                                    <Bar dataKey="uv"
                                        fill="#7294ff"
                                        barSize={15}
                                        markerStart=''
                                        radius={[10, 10, 10, 10]}  // top-left and top-right corners are rounded
                                        stroke="#7294ff"
                                        strokeWidth={2}
                                        activeBar={<Rectangle fill="#1f40a7" stroke="#1f40a7" />} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6} lg={4} className="dash-space">
                <Card bg="dark" text="white" className=" middle-dash">
                    <Card.Body>
                        <div className="middle-left">
                            <div className='div'>
                                <div className='d-flex align-items-center'>
                                    <div className='icon orange'>
                                        <BiTargetLock />
                                    </div>
                                    <div className='name '>
                                        Goals
                                    </div>
                                </div>
                                <div className='action '>
                                    <IoIosArrowForward />
                                </div>
                            </div>
                            <div className='div'>
                                <div className='d-flex align-items-center'>
                                    <div className='icon blue'>
                                        <PiHamburgerDuotone />
                                    </div>
                                    <div className='name'>
                                        Popular dishes
                                    </div>
                                </div>
                                <div className='action'>
                                    <IoIosArrowForward />
                                </div>
                            </div>
                            <div className='div'>
                                <div className='d-flex align-items-center'>
                                    <div className='icon green'>
                                        <BiDish />
                                    </div>
                                    <div className='name'>
                                        Menus
                                    </div>
                                </div>

                                <div className='action'>
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Activity;
