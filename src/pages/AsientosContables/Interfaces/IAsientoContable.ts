export interface IAsientoContable {
  IdAsiento: number;
  IdAsientoDetalle: number;
  NroComprobante: number;
  IdPeriodoContable?: number;
  PeriodoContable?: string;
  IdPlanCuenta?: number;
  NroPlanCuenta: number;
  PlanCuenta?: number;
  IdCentroDeCosto?: string;
  CentroDeCosto?: number;
  IdMoneda?: number;
  Moneda: string;
  Descripcion?: string;
  Debe?: number;
  Haber?: number;
  Referencia?: string;
  FechaAsiento: string;
  FechaAsientoDetalle?: string;
  FechaSistema?: string;
  AsientoActivo?: boolean;
  error?: string;
  message?: string;
}

export interface IAsientoContablePayload {
  IdPeriodoContable?: number;
  FechaAsiento?: Date;
  AsientoContableDetalle?: IAsientoContableDetalle[] | [];
}

export interface IAsientoContableDetalle {
    [x: string]: any;
    IdPlanCuenta?: number;
    IdCentroDeCosto?: number;
    IdMoneda?: number;
    PlanCuenta?: number;
    CentroDeCosto?: number;
    Moneda?: string;
    Descripcion: string;
    Debe: number;
    Haber: number;
    Referencia: string;
    FechaAsientoDetalle?: Date;
}

export interface IAsientoContableParams {
  FechaDesde: string;
  FechaHasta: string;
  IdPeriodoContable: number;
}

export interface ITtitleColumns {
  id: number;
  name: string;
  color: string;
  align?: string;
}
