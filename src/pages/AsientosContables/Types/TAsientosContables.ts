import { IAsientoContable, IAsientoContableDetalle, IAsientoContablePayload, ITtitleColumns } from "../Interfaces/IAsientoContable";

export type TMode = {
    mode: string;
}

export type TAsientoForm = {
    mode: string;
    asientosPayload: IAsientoContablePayload | undefined;
    setAsientosPayload: Function;
    isValidPayload: Function;
}

export type TAsientoDetalleForm = {
    mode: string;
    asientosDetalle: IAsientoContableDetalle | undefined;
    setAsientosDetalle: Function;
    isValidPayload: Function;
    setOpenForm: Function;
    submit: any;
    asientosDetalleArray: IAsientoContableDetalle[];
    setAsientosDetalleArray: any
}

export type TTableParams = {
    columns?: ITtitleColumns[]
    rows?: IAsientoContable[]
    routing?: string
    rowsPerPage?: number
    setRowsPerPage?: Function
    page?: number
    setPage?: Function
    openDelete?: boolean
    setOpenDelete?: Function
    showDeleteAsientos?: Function
    handleConfirm?: Function
    asientosValue?: {
        open: boolean;
        asientos: {
            IdAsientoDetalle: number;
            Descripcion: string;
        };
    }
}

export type TTableParamsNew = {
    columns?: ITtitleColumns[]
    rows: IAsientoContableDetalle[]
    setAsientosDetalleArray?: any
}
