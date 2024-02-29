import { Button } from './components/Button'
import { Header as MainHeader } from './components/Header'
import { TaskInput } from './components/TaskInput'
import { Header as TasksHeader } from './components/TasksList/Header'

import styles from './App.module.css'
import { EmptyList } from './components/TasksList/EmptyList'
import { Task } from './components/TasksList/Task'

export function App() {
  return (
    <>
      <MainHeader />
      <div className={styles.taskInputContainer}>
        <TaskInput />
        <Button />
      </div>
      <div className={styles.taskContainer}>
        <TasksHeader />
        <EmptyList />
        <Task />
      </div>
    </>
  )
}
