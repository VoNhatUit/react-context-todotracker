import React from 'react'
import { Button, Input, Typography, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useAppContext } from '../../../contexts/app-context';


const useDebounce = (value, delay = 500) => {
  const [debounced, setDebounced] = React.useState(value);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value)
    }, delay);

    return () => {
      clearTimeout(timer)
    }
  }, [value])

  return debounced;
}


function TodoCompleted() {
  const [value, setValue] = React.useState('');
  const debouncedValue = useDebounce(value, 1000);
  const { todos, handleDeleteCompleted } = useAppContext();
  
  const todosCompleted = todos.filter(todo => todo.completed).filter(todo => todo.title.includes(debouncedValue));

  return (
    <>
      <div className='flex '>
        <Input type="text" placeholder='Please input text' className='mr-2' onChange={e => setValue(e.target.value)} />
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
              <Button shape="circle" danger icon={<DeleteOutlined />} onClick={()=> handleDeleteCompleted(todo.id)}/>
            </Tooltip>
          </div>
        ))}
      </div>
     
    </>
  )
}

export default TodoCompleted