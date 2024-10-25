import STORAGE_KEYS from "@constants/storage";
import useStorage from "@hooks/storage";

const useDailyAnsweredStorage = () => useStorage<boolean>(STORAGE_KEYS.IS_ANSWERED, false);

export default useDailyAnsweredStorage;
