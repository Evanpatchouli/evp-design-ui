import Button from "@/lib/evp-button";
import Toast from "@/lib/evp-toast";

export default function CopyCodeButton({ source }: { source: string }) {
  async function copy() {
    try {
      await navigator.clipboard.writeText(source);
      Toast.success("Copy Success!");
    } catch {
      Toast.error("Copy Failed!");
    }
  }
  return <Button theme="text" size="mini" text="copy" $click={copy} />;
}
