const STORAGE_KEY_PREFIX = "capstone-hackathon";

const STORAGE_KEYS = {
  USER: `${STORAGE_KEY_PREFIX}-user`,
  TOKEN: `${STORAGE_KEY_PREFIX}-token`,
  IS_ANSWERED: `${STORAGE_KEY_PREFIX}-isAnswered`,
} as const;

export default STORAGE_KEYS;
