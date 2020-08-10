import { experiment } from "@ts-monorepo/leaf";

export class Spike {
  message: string;
  experiment: () => string;
  constructor(message: string) {
    this.message = message;
    this.experiment = experiment;
  }
}
