export type Country = {
  id: string;
  name: string;
  isSelected: boolean;
};
export type Address = {
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
};