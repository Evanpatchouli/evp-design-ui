import { linkTo } from "@/lib/utils/route";
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function NotFound() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/404") {
      linkTo("/404", true);
    }
  }, [location]);
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "2rem",
        }}
      >
        404 Not Found
      </div>
    </div>
  );
}
