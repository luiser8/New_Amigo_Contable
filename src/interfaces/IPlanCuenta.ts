export interface IPlanCuenta {
    IdPlanCuenta: number;
    IdTipoCuenta: number;
    IdInstitucion: number;
    Numero: string;
    Nombre: string;
    NombreIdioma2: string;
    Descripcion: string;
    ManejaAuxiliares: number;
    Movimiento: number;
    Debe: number;
    Haber: number;
    Activa: number;
    AumentaDebe: number;
}