type ItemTypes = "background" | "font" | "sticker";
type fontItemTypes = "chudom1" | "chudom2" | "chudom3";
type StickerItemTypes = never;
export interface ItemType {
  name: string;
  value: ItemTypes;
}
export interface FontItemType {
  name: string;
  value: fontItemTypes;
}
export const SelectItem: ItemType[] = [
  { name: "폰트", value: "font" },
  { name: "스티커", value: "sticker" },
  { name: "배경", value: "background" },
];
export const FontItem: FontItemType[] = [
  { name: "추담추담", value: "chudom1" },
  { name: "추담추담2", value: "chudom2" },
  { name: "추담추담3", value: "chudom3" },
];
