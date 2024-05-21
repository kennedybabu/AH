import { Ward } from "./ward.model";

export interface SubCounty {
    subCountyId: number;
    name: string;
    wards: Ward[];
}