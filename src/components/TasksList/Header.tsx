import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.taskHeader}>
      <div className={styles.createdTasks}>
        <p>Tarefas criadas</p>
        <span>0</span>
      </div>
      <div className={styles.finishedTasks}>
        <p>Concluídas</p>
        <span>0</span>
      </div>
    </header>
  )
}
