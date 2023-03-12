import config from "../config";

const console = config.console;

const asyncHandler = require("express-async-handler");

export const queryApi = () => [
  asyncHandler(async (req, res) => {

    res.send({ success: true, result: "queryApi2" });
  })
];

