export interface GetSomeResponseType {
    name: string;
}
export interface TranslationValue {
    English: string;
    French: string;
    Dutch: string;
}

export interface Translation {
    key: string;
    values: TranslationValue;
}

export interface App {
    name: string;
    lastDeployment: string;
    id: string;
    translations: Translation[];
}

export type Apps = App[];
