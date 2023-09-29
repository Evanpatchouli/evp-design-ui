import { Button, Icon } from "@/lib";
import { useLocation } from "react-router-dom";

export default function Anchors() {
  const location = useLocation();
  return (
    <div
      style={{
        position: "fixed",
        display: location.pathname === "/" ? "none" : "flex",
        flexDirection: "column",
        right: "40px",
        bottom: "10%",
      }}
    >
      <Button
        shape="circle"
        w={40}
        h={40}
        theme="white"
        $click={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <Icon up />
      </Button>
      <Button
        mgt_8
        shape="circle"
        w={40}
        h={40}
        theme="white"
        $click={() => {
          window.scrollTo({
            top: 9999,
            behavior: "smooth",
          });
        }}
      >
        <Icon down />
      </Button>
    </div>
  );
}
