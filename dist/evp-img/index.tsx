import AllParser from "../utils/props.parser";
import EvpBaseProps from "../props";
import classNames from "classnames";
import EvpDialog from "../evp-dialog";
import EvpButton from "../evp-button";
import { useState } from "react";
import ZoomIn from "../evp-icon/zoom-in";
import ZoomOut from "../evp-icon/zoom-out";
import DownImg from "../evp-icon/down-img";
import CopyLink from "../evp-icon/copy-link";
import Toast from "../evp-toast";
import EvpToolTip from "../evp-tooltip";
import ImgUtils from "../utils/img.utils";

interface BaseImgProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  alt: string;
  preview?: boolean;
  setPreview?: React.Dispatch<React.SetStateAction<boolean>>;
  downLoadTooltipText?: string;
  copyTooltipText?: string;
}

export type EvpImgProps = {} & BaseImgProps & EvpBaseProps;

const EvpImg: React.FC<EvpImgProps> = ({
  alt,
  class: className,
  id,
  style,
  preview,
  setPreview,
  downLoadTooltipText,
  copyTooltipText,
  ...props
}) => {
  const $props = AllParser(props);
  const { display, ...$style } = $props.style;

  const scale = useState(100);

  return (
    <div style={{ display: display }} className="evp evp-img-wrapper">
      <img
        alt={alt}
        hidden={$props.hidden}
        className={classNames("evp", "evp-img", className)}
        id={id}
        {...$props.event}
        style={{
          ...$style,
        }}
        {...props}
      />
      <EvpDialog
        open={preview}
        setOpen={setPreview}
        class="evp-img-preview-container"
        contentClass="evp-img-preview-content"
        footerProps={{
          justifyContent: "center",
          alignItems: "center",
          class: "evp-img-preview-footer",
        }}
        footer={
          <>
            <EvpToolTip content={downLoadTooltipText ?? "Download"}>
              <EvpButton
                theme="text"
                $click={() => {
                  ImgUtils.downloadImage(props.src ?? "", props.alt ?? "");
                }}
              >
                <DownImg />
              </EvpButton>
            </EvpToolTip>

            <EvpButton
              theme="text"
              $click={() => {
                scale[1](scale[0] - 5);
              }}
            >
              <ZoomOut />
            </EvpButton>
            <div>{scale[0]} %</div>
            <EvpButton
              theme="text"
              $click={() => {
                scale[1](scale[0] + 5);
              }}
            >
              <ZoomIn />
            </EvpButton>
            <EvpToolTip content={copyTooltipText ?? "Copy URL"}>
              <EvpButton
                theme="text"
                $click={() => {
                  navigator.clipboard
                    .writeText(props.src ?? "")
                    .then(() => {
                      Toast.success("copy success");
                    })
                    .catch((err) => {
                      console.error(err);
                      Toast.error("copy failed");
                    });
                }}
              >
                <CopyLink />
              </EvpButton>
            </EvpToolTip>
          </>
        }
      >
        <img
          alt={alt}
          src={props.src}
          className={classNames("evp", "evp-img-preview")}
          style={{
            height: `${scale[0]}%`,
          }}
        />
      </EvpDialog>
    </div>
  );
};

export default EvpImg;
