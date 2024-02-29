import { Check, Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

export function Task() {
  return (
    <div className={styles.taskCard}>
      <div className={styles.task}>
        <label htmlFor="checkbox">
          <input type="checkbox" readOnly />
          <span className={`${styles.checkbox} ${styles.unchecked}`}>
            <Check size={14} />
          </span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus
            labore impedit saepe accusantium vel.
          </p>
        </label>
      </div>

      <button type="button">
        <Trash size={24} />
      </button>
    </div>
  )
}
