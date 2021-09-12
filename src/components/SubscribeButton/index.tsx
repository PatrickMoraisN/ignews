import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }) {

  return (
    <button
      className={styles.subscribeButton}
      type="button"
    >
      Subscribe now
    </button>
  )
}