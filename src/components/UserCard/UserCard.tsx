import type { User } from "../../types/types"
import styles from "./UserCard.module.scss"

type Props = {
  user: User
}

export const UserCard = ({ user }: Props) => {
  const { name, email, phone } = user

  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.email}>{email}</p>
      <p className={styles.phone}>{phone}</p>
    </div>
  )
}
