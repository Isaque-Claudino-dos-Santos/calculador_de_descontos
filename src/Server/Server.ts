import InterfaceServer from "./InterfaceServer";
import express from "express";
import path from "path";
import { env } from "process";

const kApp = Symbol("app");
const kUseStatics = Symbol("useStatics");
const kListen = Symbol("listen");

export default class Server implements InterfaceServer {
  [kApp] = express();

  readonly HOST: string = env.APP_HOST ?? "localhost";
  readonly PORT: number = Number(env.APP_PORT);

  [kUseStatics]() {
    const app = this[kApp];
    app.use(express.static(path.resolve("public")));
  }

  [kListen]() {
    const app = this[kApp];
    app.listen(this.PORT, this.HOST, () => {
      console.log(`Open host in ${this.HOST}:${this.PORT}`);
    });
  }

  app(): express.Express {
    return this[kApp];
  }

  boot(): this {
    this[kUseStatics]();
    this[kListen]();
    return this;
  }
}
