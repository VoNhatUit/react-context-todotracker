import React from 'react'
import { Button, Input, Typography, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useAppContext } from '../../../contexts/app-context';

function TodoCompleted() {
  const { todos } = useAppContext();
  const todosCompleted = todos.filter(todo => todo.completed);

  // TODO: saerch todo (apply debounce)

  return (
    <>
      <div className='flex '>
        <Input type="text" placeholder='Please input text' className='mr-2' />
        <Button>
          Search
        </Button>
      </div>
      <div className='my-4'>
        {todosCompleted.map(todo => (
          <div key={todo.id} className='flex items-center justify-between mb-4'>
            <Typography>
              {todo.title}
            </Typography>
            <Tooltip title="Delete">
              <Button shape="circle" danger icon={<DeleteOutlined />} />
            </Tooltip>
          </div>
        ))}
      </div>
     
    </>
  )
}

export default TodoCompleted