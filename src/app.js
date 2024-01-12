console.clear();
// *** require example | Common JS syntax ***
const { v4: uuidv4 } = require("uuid");

// *** import example | ES 6 syntax -> Inside package.json, add -> "type": "module" ***
// import { v4 as uuidv4 } from "uuid";

console.log(uuidv4());
