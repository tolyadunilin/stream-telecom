
import type { User, ViewMode } from "../../types/types";
import { UserCard } from "../UserCard/UserCard";
import { UserRow } from "../UserRow/UserRow";
import styles from "./UserList.module.scss";


type Props = {
  users: User[];
  view: ViewMode;
};

export const UserList = ({ users, view }: Props) => {
  return (
    <div className={view === "grid" ? styles.grid : styles.list}>
      {users.map((user) =>
        view === "grid" ? (
          <UserCard key={user.id} user={user} />
        ) : (
          <UserRow key={user.id} user={user} />
        )
      )}
    </div>
  );
};
