import inquirer from "inquirer";
import { OPTIONS } from "@helpers/constants";
import {
  wrapTextBetweenNewLines,
  wrapTextBetweenSeparators,
} from "@helpers/messages";
import "colors";

export const showMenu = async () => {
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
