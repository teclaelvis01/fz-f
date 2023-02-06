export enum TypeEnum{
    TYPE_BUY='buy',
    TYPE_SELL='sell',
}
export interface OrdersI {
    id?: number;
    portfolio?: number;
    allocation?: number;
    shares?: number;
    complete?: boolean;
    type?: TypeEnum;
}

export class Orders implements OrdersI {
    id: number;
    shares: number;
    portfolio: number;
    allocation: number;
    type: TypeEnum;
    complete: boolean;
}