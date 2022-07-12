export interface Country {
    id: number;
    name: string;
    country: {
        name: string;
        code: string;
    };
};