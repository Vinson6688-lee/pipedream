const parseObject = (value) => {
  if (!value) return {};
  if (typeof value === "object") return value;
  try {
    return JSON.parse(value);
  } catch {
    throw new Error(`Expected a JSON object string, e.g. {"key": "value"}. Got: ${value}`);
  }
};

export default {
  parseObject,
};
