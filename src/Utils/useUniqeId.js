import { useMemo } from "react";

let idCounter = 0;

const useUniqueId = (prefix) => {
  const id = useMemo(() => idCounter++, [prefix]);
  return `${prefix}${id}`;
};

export default useUniqueId;
