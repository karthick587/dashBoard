import React from 'react';
import Cards from './dashboard/Cards';
import Activity from './dashboard/ActivityAndGoals';
import RecentOrders from './dashboard/RecentOrdersAndFeedback';

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
