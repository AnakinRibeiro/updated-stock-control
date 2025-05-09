export type CostValueProps = {
  dateFrom: Date;
  dateTo: Date;
  price: number;
};

export type ProductProps = {
  _id?: string;
  title: string;
  description: string;
  supplierList: Array<string>;
  unitOfMeasurement: string;
  costValue: Array<CostValueProps>;
  serieControl: boolean;
  stockQty: number;
  statusRequest: string;
  minStock: number;
  securityStock: number;
  itemQnty?: number;
  active: boolean;
  createdAt: Date;
  createdBy: string;
  imgToUpload?: File;
  imgSrc?: string;
  itemQty?: number;
};
