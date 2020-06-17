import React from 'react'

const TaskList = (props) => {
  const [newTask, setNewTask] = React.useState('')
  return (
    <div className="text-center">
      {props.taskList.map((el) => (
        <div>
          {el.title}
          {el.status === 'new' && (
            <button type="button" onClick={() => props.updateStatus(el.taskId, 'in progress')}>
              In progress
            </button>
          )}
          {el.status === 'in progress' && (
            <div>
              <button type="button">Block</button>
              <button type="button">Done</button>
            </div>
          )}
        </div>
      ))}
      <input type="text" className="bg-green-300" onChange={(e) => setNewTask(e.target.value)} />
      <button type="button" className=" bg-green-400 " onClick={() => props.addTask(newTask)}>
        Add
      </button>
    </div>
  )
}

export default TaskList
