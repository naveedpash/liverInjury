export interface demographics {
    nic: string;
    name: string;
    age: string;
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
    jaundice: "yes" | "no";
    pain: "yes" | "no";
    pruritis: "yes" | "no";
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
    age: string;
    gender: "male" | "female";
    consent: "yes" | "no";
    drug: string;
    dose: string;
    unit: "mg" | "g" | "mL" | "mcg";
    indication: string;
    rechallenged: "yes" | "no";
    challengeResult: string;
    jaundice: "yes" | "no";
    pain: "yes" | "no";
    pruritis: "yes" | "no";
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
