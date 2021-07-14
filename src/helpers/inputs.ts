import inquirer from "inquirer";
import { OPTIONS } from "@helpers/constants";
import {
  wrapTextBetweenNewLines,
  wrapTextBetweenSeparators,
} from "@helpers/messages";
import "colors";
import Option from "@models/Option";

export const showMenu = async (): Promise<Option<string>> => {
  console.log(wrapTextBetweenSeparators("Select an option").green);

  const option = await inquirer.prompt([
    {
      choices: OPTIONS,
      loop: true,
      message: "What do you want to do?",
      name: "option",
      type: "list",
    },
  ]);

  return option;
};

export const pause = async () => {
  return inquirer.prompt([
    {
      message: wrapTextBetweenNewLines(`Press ${"ENTER".green} to continue`),
      name: "continue",
      type: "input",
    },
  ]);
};
