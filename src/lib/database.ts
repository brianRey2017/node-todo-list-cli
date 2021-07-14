import { ITaskList } from "@models/Task";
import { readFile, writeFile } from "fs/promises";

export interface GlobalStore extends ITaskList {}

export const initDB = async (): Promise<GlobalStore> => {
  try {
    const fileContent = await readFile("data/db.json", { encoding: "utf8" });
    const data = JSON.parse(fileContent);

    return data;
  } catch (error) {
    console.error(`Error reading file from disk: ${error}`);

    return {
      tasks: [],
    };
  }
};

export const saveDB = async (fileContent: object): Promise<void> => {
  try {
    await writeFile("data/db.json", JSON.stringify(fileContent));
  } catch (error) {
    console.error(`Error writing file to disk: ${error}`);
  }
};
