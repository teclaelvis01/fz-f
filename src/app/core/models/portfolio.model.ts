import { AllocationI } from "./allocation.model";

export interface PortfolioI {
    id: number;
    allocations: AllocationI[];
}

export class Portfolio implements PortfolioI {
    id: number;
    allocations: AllocationI[];
    constructor() {
    }
}

