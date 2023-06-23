export interface IBalanceComprobacion {
    NroComprobante?: number;
    IdPlanCuenta?: number;
    NroCuenta?: string;
    DescripcionCuenta?: string;
    Saldo?: number;
    AsientoActivo?: boolean;
    error?: string;
    message?: string;
  }