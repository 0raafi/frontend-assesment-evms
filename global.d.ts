interface IProduct {
  id: number;
  name: string;
  price: number;
  category_name: string;
  attribute_type: string;
  scores: number[];
  pictures: string[];
  variants: IVariant[];
}

interface IVariant {
  id: number;
  attribute_value: string;
  color_code: string;
  pictures: string[];
}