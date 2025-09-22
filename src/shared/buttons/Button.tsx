import type { ButtonHTMLAttributes, ReactNode } from "react"
import styles from "./Button.module.scss"

type Props = {
  children: ReactNode
  active?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, active, ...rest }: Props) => {
  return (
    <button
      className={`${styles.button} ${active ? styles.active : ""}`}
      {...rest}
    >
      {children}
    </button>
  )
}