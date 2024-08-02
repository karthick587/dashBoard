import React from 'react';
import { Card } from 'react-bootstrap';
import { FaSortUp } from 'react-icons/fa';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
const data = [
  { name: 'Completed', value: 70 },
  { name: 'Remaining', value: 30 }
];

const COLORS = ['#7294ff', '#3658c5'];


const renderCustomizedLabel = ({ cx, cy }) => {

  return (
    <text x={cx} y={cy} fill="white" style={{ fontSize: 10, width: 20 }} textAnchor="middle" dominantBaseline="central">
      70%
    </text>
  );
};
const NetProfit = () => {


  return (
    <Card bg="dark" text="white" className='pie-chat'>
      <Card.Body>
        <div className='row'>
          <div className='col-6'>
            <div className='middle'>
              Net Profit
            </div>
            <div className='bottom d-block '>
              <div className='left mt-2'>
                $ 6759.88
              </div>
              <div className="right up mt-3">
                <FaSortUp /> 3%
              </div>
            </div>
          </div>
          <div className='col-6 '>
            <ResponsiveContainer width={100} height={100} >
              <PieChart>
                <Pie
                  data={data}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={48}
                  innerRadius={32}

                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} style={{ borderRadius: "300" }} stroke={COLORS[index % COLORS.length]} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NetProfit;
