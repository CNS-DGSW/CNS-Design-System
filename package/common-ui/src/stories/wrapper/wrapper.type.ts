import { ReactNode } from "react"

export interface WrapperPropsType {
    children: ReactNode,
    direction: "row" | "column",
    gap?: number,
} 