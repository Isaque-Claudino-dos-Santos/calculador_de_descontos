import { Express } from "express";

export default interface InterfaceServer {
  readonly HOST: string;
  readonly PORT: number;
  boot(): this;
  app(): Express;
}
