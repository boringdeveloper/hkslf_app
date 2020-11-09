export interface IDashboard {
    user: IUser;
    notifCount: number;
    coverage: ICoverage;
    assets: IAssets;
}


export interface IUser {
    firstName: string;
    middleName?: string;
    lastName: string;
    userImage: string;
}

export interface ICoverage {
    life: number;
    criticalIllness: number;
    medical: number;
    medicalRate: string;
    disability: number;
    accidental: number;
}

export interface IAssets {
    total: number;
    investementLinked: number;
    savings: number;
}