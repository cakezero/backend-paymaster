import winston from "winston";
import { ENV } from "../utils/env";

const enumerateErrorFormat = winston.format((info) => {
	if (info instanceof Error) {
		Object.assign(info, { message: info.stack });
	}
	return info;
});

const logger = winston.createLogger({
	level: ENV === "development" ? "debug" : "info",
	format: winston.format.combine(
		enumerateErrorFormat(),
		ENV === "development"
			? winston.format.colorize()
			: winston.format.uncolorize(),
		winston.format.splat(),
		winston.format.printf(({ level, message }) => `${level}: ${message}`)
	),
	transports: [
		new winston.transports.Console({
			stderrLevels: ["error"],
		}),
	],
});

export default logger;
