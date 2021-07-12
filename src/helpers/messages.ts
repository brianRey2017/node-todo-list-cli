import { OPTIONS, SEPARATOR } from "@helpers/constants";
import { createInterface } from "readline";

import "colors";

export const wrapTextBetweenSeparators = (text: string): string =>
  `${SEPARATOR}\n${text}\n${SEPARATOR}`;

export const wrapTextBetweenNewLines = (text: string): string => `\n${text}\n`;

const readLine = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const pause = () => {
  return new Promise((resolve) => {
    const QUESTION = wrapTextBetweenNewLines(
      `Press ${"ENTER".green} to continue`
    );
    readLine.question(QUESTION, () => {
      readLine.close();
      resolve("a");
    });
  });
};
