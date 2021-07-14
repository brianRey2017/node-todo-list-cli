import "module-alias/register";
import "colors";
import "@lib/cleanExit";

import { pause, showMenu } from "@helpers/inputs";
import { initDB } from "@lib/database";

const main = async () => {
  await initDB();
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
