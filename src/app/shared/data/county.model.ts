import { SubCounty } from "./subCounty.model";

export interface County {
    county_id: number;
    name: string;
    sub_counties: SubCounty[];
}