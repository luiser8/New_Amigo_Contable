export interface ILibroMayor {
    IdAsientoDetalle?: number;
    NroComprobante: number;
    IdPeriodoContable?: number;
    PeriodoContable?: string;
    NroCuenta?: string;
    DescripcionCuenta?: string;
    DescripcionAsiento?: string;
    TotalDebe?: number;
    TotalHaber?: number;
    Saldo?: number;
    SaldoTotal?: number;
    AsientoActivo?: boolean;
    AsientoDetalleActivo?: boolean;
    FechaAsientoDetalle?: string;
    error?: string;
    message?: string;
  }