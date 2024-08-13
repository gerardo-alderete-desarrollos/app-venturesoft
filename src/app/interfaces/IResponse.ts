import { IMarcaItem } from "./IMarcaItem";
import { IMenuItem } from "./IMenuItem";

export interface IMenuResponse {
    error:     boolean;
    codigo:    string;
    message:   string;
    menuItems: IMenuItem[] | IMarcaItem[];
}
