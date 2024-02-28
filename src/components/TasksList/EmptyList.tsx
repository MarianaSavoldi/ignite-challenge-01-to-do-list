import { ClipboardText } from '@phosphor-icons/react'
import styles from './EmptyList.module.css'

export function EmptyList() {
  return (
    <section className={styles.emptySection}>
      <ClipboardText size={56} weight="thin" style={{ marginBottom: '1rem' }} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </section>
  )
}
