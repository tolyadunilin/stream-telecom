import { Button } from "../../shared/buttons/Button"
import type { ViewMode } from "../../types/types"
import styles from "./ToggleView.module.scss"

type Props = {
  view: ViewMode
  onChange: (view: ViewMode) => void
}

export const ToggleView = ({ view, onChange }: Props) => (
  <div className={styles.wrapper}>
    <Button onClick={() => onChange("list")} active={view === "list"}>
      Список
    </Button>

    <Button onClick={() => onChange("grid")} active={view === "grid"}>
      Плитка
    </Button>
  </div>
)
