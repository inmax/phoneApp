export interface PhoneModel {
  id: number;
  name?: string;
  manufacturer?: string;
  description?: string;
  color?: string;
  price?: number;
  imageFileName?: string;
  screen?: string;
  processor?: string;
  ram?: number;
}

export interface PropsPhoneList {
  phones: PhoneModel[];
}
