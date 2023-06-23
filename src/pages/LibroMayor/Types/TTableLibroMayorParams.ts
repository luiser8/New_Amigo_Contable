import { ITtitleColumns } from "../../AsientosContables/Interfaces/IAsientoContable"
import { ILibroMayor } from "../Interfaces/ILibroMayor"

export type TTableLibroMayorParams = {
    columns?: ITtitleColumns[]
    rows?: ILibroMayor[]
    routing?: string
    rowsPerPage?: number
    setRowsPerPage?: Function
    page?: number
    setPage?: Function
}