import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaShoppingBasket } from "react-icons/fa";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import CustomerFeedback from './NetProfit';
const Cards = () => {
    const cardData = [
        { icon: <FaShoppingBasket />, title: "Total Orders", value: "75" },
        { icon: <PiHandbagSimpleBold />, title: "Total Delivered", value: "70" },
        { icon: <PiHandbagSimpleBold />, title: "Total Cancelled", value: "5" },
        { icon: "", title: "Total Revenue", value: "$12k" }
    ];

    return (
        <Row className="">
            {cardData.map((data, index) => (
                <Col md={6} lg={2} key={index} className="dash-space">
                    <Card bg="dark" text="white" className="h-100">
                        <Card.Body>
                            <div className='topIcon'>
                                {data.icon}
                            </div>
                            <div className='middle'>
                                {data.title}
                            </div>
                            <div className='bottom'>
                                <div className='left'>
                                    {data.value}
                                </div>
                                <div className={`right ${index % 2 === 1 ? "up" : "down"} `}>
                                    {index % 2 === 1 ? <FaSortUp /> : <FaSortDown />} 3%
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            <Col md={6} lg={4}  className="dash-space">
                <CustomerFeedback />
            </Col>

        </Row>
    );
};

export default Cards;
