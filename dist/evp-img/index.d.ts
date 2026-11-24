/// <reference types="react" />
import EvpBaseProps from "../props";
interface BaseImgProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    alt: string;
    preview?: boolean;
    setPreview?: React.Dispatch<React.SetStateAction<boolean>>;
    downLoadTooltipText?: string;
    copyTooltipText?: string;
}
export type EvpImgProps = BaseImgProps & {
    [K in keyof EvpBaseProps as K extends "loading" ? never : K]: EvpBaseProps[K];
};
declare const EvpImg: React.FC<EvpImgProps>;
export default EvpImg;
