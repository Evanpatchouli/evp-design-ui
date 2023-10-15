/// <reference types="react" />
export type EvpModalProps = {
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactNode;
    /**
     * @defaultValue 0%
     * @desc left
     * */
    x?: string;
    /**
     * @defaultValue -50%
     * @desc translateX
     * */
    translateX?: string;
    /**
     * @defaultValue 0%
     * @desc top
     * */
    y?: string;
    /**
     * @defaultValue -50%
     * @desc translateY
     * */
    translateY?: string;
    contentClass?: string;
    contentStyle?: React.CSSProperties;
    modalClass?: string;
    modalStyle?: React.CSSProperties;
    /**
     * @defaultValue 0.5
     * @type {number} between 0 and 1
     * @desc Modal background color opacity
     * */
    alpha?: number;
    scrollable?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    blur?: boolean | number | string;
};
export default function EvpModal(props: EvpModalProps): import("react/jsx-runtime").JSX.Element;
