import { ProductProps } from "./item";
import { TypeProps } from "./movementTypes";

export type CommentProps = {
  user: string;
  date: Date;
  message: string;
};

export type SolicitationProps = {
  _id?: string;
  comment: Array<CommentProps>;
  createdAt: Date;
  createdBy: string;
  inclusionDate: Date;
  items: Array<ProductProps>;
  necessaryDate: Date;
  qtyByItem: number;
  requestJustification: string;
  statusOrder: string;
  type: TypeProps;
  user: string;
};

type TotalizerProps = {
  _id: string;
  priceSum: number;
  count: number;
};

type TotalizerRequestProps = {
  pending: TotalizerProps;
  cancelled: TotalizerProps;
  concluded: TotalizerProps;
};
