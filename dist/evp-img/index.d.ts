/// <reference types="react" />
import EvpBaseProps from "../props";
interface BaseImgProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    alt: string;
    preview?: boolean;
    setPreview?: React.Dispatch<React.SetStateAction<boolean>>;
    downLoadTooltipText?: string;
    copyTooltipText?: string;
}
export type EvpImgProps = {} & BaseImgProps & EvpBaseProps;
declare const EvpImg: React.FC<EvpImgProps>;
export default EvpImg;
