import React from 'react';
import Cards from './dashboard/Cards';
import Activity from './dashboard/ActivityAndGoals';
import RecentOrders from './dashboard/RecentOrdersAndFeedback';

const Dashboard = () => {
  return (
    <div className="dashboard container-fluid">
      <Cards />
      <Activity />
      <RecentOrders />
    </div >
  );
};

export default Dashboard;
