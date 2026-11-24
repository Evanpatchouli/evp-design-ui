import { useEffect, useRef } from "react";

export default function useHasOpened(open?: boolean) {
  const opened = useRef(false);
  useEffect(() => {
    if (open) opened.current = true;
  }, [open]);
  return Boolean(open || opened.current);
}
