export interface Customer {
    id: number;
    name: string;
    country: {
        name: string;
        code: string;
    };
};