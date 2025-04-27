export const safeJsonParse = <T>(text: string): T | string => {
	try {
		return JSON.parse(text) as T;
	} catch {
		return text;
	}
};

export const safeJsonStringify = <T>(value: T): string => {
	try {
		return JSON.stringify(value);
	} catch {
		return String(value);
	}
};
