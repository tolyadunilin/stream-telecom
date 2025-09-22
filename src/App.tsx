import { useState } from "react";
import { ToggleView } from "./components/ToggleView/ToggleView";
import { UserList } from "./components/UserList/UserList";
import type { ViewMode } from "./types/types";
import styles from "./App.module.scss"

const users = [
  { id: 1, name: "Иван Иванович Петров", email: "ivan.petrov@example.com", phone: "+7 (900) 111-11-11" },
  { id: 2, name: "Анна Сергеевна Кузнецова", email: "anna.kuznetsova@example.com", phone: "+7 (900) 222-22-22" },
  { id: 3, name: "Олег Дмитриевич Соколов", email: "oleg.sokolov@example.com", phone: "+7 (900) 333-33-33" },
  { id: 4, name: "Мария Александровна Смирнова", email: "maria.smirnova@example.com", phone: "+7 (900) 444-44-44" },
  { id: 5, name: "Дмитрий Викторович Орлов", email: "dmitry.orlov@example.com", phone: "+7 (900) 555-55-55" },
  { id: 6, name: "Елена Андреевна Фёдорова", email: "elena.fedorova@example.com", phone: "+7 (900) 666-66-66" },
  { id: 7, name: "Сергей Николаевич Волков", email: "sergey.volkov@example.com", phone: "+7 (900) 777-77-77" },
  { id: 8, name: "Наталья Павловна Морозова", email: "natalia.morozova@example.com", phone: "+7 (900) 888-88-88" },
  { id: 9, name: "Алексей Евгеньевич Иванов", email: "alexey.ivanov@example.com", phone: "+7 (900) 999-99-99" },
  { id: 10, name: "Ольга Михайловна Васильева", email: "olga.vasilyeva@example.com", phone: "+7 (900) 000-00-00" },
]


export const App = () => {
  const [view, setView] = useState<ViewMode>("list");

  return (
    <div className={styles.app}>
      <ToggleView view={view} onChange={setView} />
      <UserList users={users} view={view} />
    </div>
  );
};
