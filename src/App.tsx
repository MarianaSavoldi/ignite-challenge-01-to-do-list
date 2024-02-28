import { Button } from './components/Button'
import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'
import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.taskInputContainer}>
        <TaskInput />
        <Button />
      </div>
    </>
  )
}
