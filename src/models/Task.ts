import { generateUUID } from "lib/uuid";

export interface ITask {
  completedAt?: string;
  readonly createdAt: string;
  readonly id: string;
  description: string;
}

export interface ITaskList {
  tasks: ITask[];
}

export class Task implements ITask {
  public id: string;
  public createdAt: string;
  public completedAt?: string;
  public description: string;

  constructor(description: string) {
    this.id = generateUUID();
    this.description = description;
    this.createdAt = new Date().toString();
  }
}
