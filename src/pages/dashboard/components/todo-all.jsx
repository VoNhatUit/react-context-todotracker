import React from 'react'
import { Button, Input, Checkbox, Empty, Form } from 'antd';
import { useAppContext } from '../../../contexts/app-context';

function TodoAll() {
  const { todos, addTodo, handleCompletedTodo, handleDeleteAll } = useAppContext();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    addTodo(values.title);
    form.resetFields();
  };

  console.log('todos: ', todos)

  return (
    <>
      <Form
        form={form}
        onFinish={onFinish}
      >
        <div className='flex'>
          <Form.Item
            name="title"
            className='w-full mr-2'
            rules={[
              {
                required: true,
                message: 'Please input title!',
              },
            ]}
          >
            <Input type="text" placeholder='Please input text' />
          </Form.Item>
          
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </div>
      </Form>
      
      {todos.length > 0 ? (
        <div className='flex flex-col my-4'>
          {todos.map(todo => (
            <Checkbox 
              key={todo.id} 
              onChange={(event) => handleCompletedTodo(todo.id, event.target.checked)}
              disabled={todo.completed}
            >
                {todo.title}
            </Checkbox>
          ))}
        </div>
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
     
      <div className='text-right'>
        <Button danger type="primary" onClick={ handleDeleteAll}>
          Delete
        </Button>
      </div>
    </>
  )
}

export default TodoAll