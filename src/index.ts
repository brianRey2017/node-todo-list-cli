import "module-alias/register";
import "colors";
import { pause } from "@helpers/messages";
import { showMenu } from "@helpers/inputs";

const main = async () => {
  let opt = "";
  do {
    const { value } = await showMenu();
    opt = value;
    if (opt !== "0") {
      await pause();
    }
  } while (opt !== "0");
};

main();
