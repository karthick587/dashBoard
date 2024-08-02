import React from 'react';
import { Card, Table, Row, Col } from 'react-bootstrap';
import img from "../../assert/img/IMG_20200201_125937_513.jpg"
import { PiStarThin } from "react-icons/pi";
const RecentOrders = () => {
  const orders = [
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },


    // Add more orders as needed
  ];
  const review = [
    { customer: 'Wade Warren', descrion: "The CSS scrollbars styling module defines properties that you can use for visual styling of scrollbars. You can customize the width of the scrollbar as required. You can also customize the color of the scrollbar track, which is the background of the scrollbar, and the color of the scrollbar thumb, which is the draggable handle of the scrollbar." },
    { customer: 'Wade Warren', descrion: "The CSS scrollbars styling module defines properties that you can use for visual styling of scrollbars. You can customize the width of the scrollbar as required. You can also customize the color of the scrollbar track, which is the background of the scrollbar, and the color of the scrollbar thumb, which is the draggable handle of the scrollbar." },
    { customer: 'Wade Warren', descrion: "The CSS scrollbars styling module defines properties that you can use for visual styling of scrollbars. You can customize the width of the scrollbar as required. You can also customize the color of the scrollbar track, which is the background of the scrollbar, and the color of the scrollbar thumb, which is the draggable handle of the scrollbar." }


    // Add more orders as needed
  ];
  return (
    <Row className="dash-space">
      <Col md={6} lg={8} className="dash-space">
        <Card bg="dark" text="white" className="pb-4">
          <Card.Body className='order_table position-relative pt-0'>
            <Card.Title className='sticky-top bg-dark mt-0 pt-3'>Recent Orders</Card.Title>
            <Table className='order_table_scroll' striped bordered responsive hover variant="dark">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Order No.</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.customer}</td>
                    <td>{order.orderNo}</td>
                    <td>{order.amount}</td>
                    <td>{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={4} className="dash-space">
        <Card bg="dark" text="white" className="pb-4">
          <Card.Body className='order_table position-relative pt-0'>
            <Card.Title className='sticky-top bg-dark mt-0 pt-3'>Customer's feedback</Card.Title>
            {review.map((val, index) =>
              <div className='feeds' key={index}>
                <div className='div'>
                  <div className='top'>
                    <div className='profile'>
                      <img src={img} alt='img' />
                    </div>
                    <div className='name'>
                      {val.customer}
                    </div>
                  </div>
                  <div className='middle'>
                    <PiStarThin />
                    <PiStarThin />
                    <PiStarThin />
                    <PiStarThin />
                    <PiStarThin />
                  </div>
                  <div className='bottom'>
                    {val.descrion}
                  </div>
                </div>
              </div>

            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default RecentOrders;
