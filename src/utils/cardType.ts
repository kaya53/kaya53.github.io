export interface cardSkill {
    title: string;
    imgLs?: string[][];
}

export interface cardOther extends cardSkill {
    shortDesc: string;
}

export interface cardPjt extends cardOther {
    longDesc: string;
    gitLink: string;
}