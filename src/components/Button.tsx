import { Plus } from '@phosphor-icons/react'
import styles from './Button.module.css'

export function Button() {
  return (
    <button
      className={styles.createButton}
      onClick={() => console.log('Tarefa criada!')}
    >
      Criar
      <Plus weight="bold" />
    </button>
  )
}
