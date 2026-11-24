import { useState } from "react";
import { Img } from "evp-design-ui";

export default function Example() {
  const [preview, previewSet] = useState(false);
  return (
    <Img
      alt="SongZuer"
      src="https://tse4-mm.cn.bing.net/th/id/OIP-C.lxPAUsFZrjEJvnt5iS6HZwHaKe?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      pointer
      width={240}
      preview={preview}
      setPreview={previewSet}
      $click={() => {
        previewSet(true);
      }}
    />
  );
}
