import Cookie from "@utils/storage";
import { useState } from "react";

export default function useStorage<T>(
  keyName: string,
  defaultValue: T,
): [T, (newValue: T) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const cookieValue = Cookie.getCookie<T>(keyName);
      return cookieValue !== null ? cookieValue : defaultValue;
    } catch (err) {
      return defaultValue;
    }
  });
  const setValue = (newValue: T) => {
    try {
      Cookie.setCookie<T>(keyName, newValue);
      setStoredValue(newValue);
    } catch (error) {
      console.error({ description: `${keyName} 저장 실패: ${error}` });
    }
  };
  const clearValue = () => {
    try {
      Cookie.clearCookie(keyName);
      setStoredValue(defaultValue);
    } catch (error) {
      console.error({ description: `${keyName} 저장 실패: ${error}` });
    }
  };
  return [storedValue, setValue, clearValue];
}
