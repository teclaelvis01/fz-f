export interface AllocationI {
    id: number;
    shares: number;
}

export class Allocation implements AllocationI {
    id: number;
    shares: number;
    constructor(id:number,shares:number) {
        this.id = id;
        this.shares = shares;
    }
}