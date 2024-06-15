import React from 'react'
import { Tabs } from 'antd';

// components
import TodoAll from './components/todo-all';
import TodoCompleted from './components/todo-completed';

function Dashboard() {
  const items = [
    {
      key: '1',
      label: "All",
      children: <TodoAll />
    },
    {
      key: '2',
      label: 'Completed',
      children: <TodoCompleted />
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div>
      <h1 className='text-[30px] font-bold container mx-auto'> Todo Tracker </h1>
      <div className='container mx-auto'>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  )
}

export default Dashboard