import React from 'react';
import Cards from './Cards';
import Activity from './Activity';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';

const Dashboard = () => {
  return (
    <div className="dashboard container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <Cards />
          <Activity />
          <RecentOrders />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
