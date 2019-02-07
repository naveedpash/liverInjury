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
    unit: "mg" | "g" | "mL" | "mcg";
    indication: string;
    rechallenged: "yes" | "no";
    challengeResult: string
}

export interface history {
    jaundice: string;
    pain: string;
    pruritis: string;
}

export interface labs {
    bilirubin: string;
    bilirubinDate: string;
    pt: string
    ptDate: string;
    alt: string;
    altDate: string;
    alkphos: string;
    alkphosDate: string;
    antihavigm: string;
    antihavigmDate: string;
    antihevigm: string;
    antihevigmDate: string;
    hbsag: string;
    hbsagDate: string;
    antihcvigm: string;
    antihcvigmDate: string;
}

export interface newpatient {
    nic: string;
    name: string;
    age: number;
    gender: string;
    consent: string
    drug: string;
    dose: string;
    unit: "mg" | "g" | "mL" | "mcg";
    indication: string;
    rechallenged: "yes" | "no";
    challengeResult: string
    jaundice: string;
    pain: string;
    pruritis: string;
    bilirubin: string;
    bilirubinDate: string;
    pt: string
    ptDate: string;
    alt: string;
    altDate: string;
    alkphos: string;
    alkphosDate: string;
    antihavigm: string;
    antihavigmDate: string;
    antihevigm: string;
    antihevigmDate: string;
    hbsag: string;
    hbsagDate: string;
    antihcvigm: string;
    antihcvigmDate: string;
}
