export interface demographics {
    nic: string;
    name: string;
    age: number;
    gender: string;
    consent: string
}

export interface dili {
    drug: string;
    dose: string;
    unit: string;
    indication: string;
    rechallenged: "yes" | "no";
    challengeResult: string
}

export type newpatient = demographics | dili;
