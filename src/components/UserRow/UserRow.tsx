import type { User } from "../../types/types";
import styles from "./UserRow.module.scss";

type Props = {
  user: User;
};

export const UserRow = ({ user }: Props) => {
  const { name, email, phone } = user;

  return (
    <div className={styles.row}>
      <span className={styles.name}>{name}</span>
      <span className={styles.email}>{email}</span>
      <span className={styles.phone}>{phone}</span>
    </div>
  );
};
