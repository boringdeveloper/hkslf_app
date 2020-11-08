export interface IPolicies {
    policy: Array<IPolicy>;
}


export interface IPolicy {
    name: string;
    number: string;
    status: string;
    sum?: number;
    contribAmt?: number;
    fundBal?: number;
    amtBenefit?: number;
    cashValue?: number;
    surrenderValue?: number;
    premium?: number;
    isDue: boolean;
    dueDate?: string;
    duePremium?: number;
}