import EvpButton from "@/lib/evp-button";
import EvpCard from "@/lib/evp-card";

export default function CardView() {
  return(
    <div className="preview-container">
      <EvpCard w={400} h={200}>
        <p>Hello, i am EvpCard.</p>
        <EvpButton text="Greet" />
      </EvpCard>
    </div>
  )
}