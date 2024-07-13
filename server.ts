import express from "express";
import { PORT } from "./src/utils/env";
import logger from "./src/config/logger";
import { router } from "./src/routes/apiRoute";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.listen(PORT, () => logger.info(`Server is running on PORT: ${PORT}`));
