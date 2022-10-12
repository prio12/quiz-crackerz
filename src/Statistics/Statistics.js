import React from "react";
import { useLoaderData } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer } from 'recharts';
import './Statistics.css'


const Statistics = () => {
  const data = useLoaderData().data;
  console.log(data);
  return (
    <div className="" >
      <h1>Total Number Of Quizes</h1>
      {/* <div className="question">
      <div className="question-container">
      
      </div>
      </div> */}
      <ResponsiveContainer className='rechart-container' width="70%" height={300}>
      <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis dataKey="total" />
       <Tooltip />
      <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="total" stroke="#82ca9d" />
      </LineChart>
      </ResponsiveContainer>
      </div>
  );
};

export default Statistics;
