export interface Source {
  id: string | Number;
  name: string;
  createDate: string,
  description: string,
  modifyDate: string,
  status: {id: "2", name: "Активен"},
  type: {id: "13", name: "Мобильный трафик"},
  disabled: Boolean,
}