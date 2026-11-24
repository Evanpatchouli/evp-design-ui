export declare function getEmptyImg(): HTMLImageElement;
declare function createEmptyImg(): HTMLImageElement;
declare function downloadImage(url: string, filename: string): void;
declare const ImgUtils: {
    readonly emptyImg: HTMLImageElement;
    createEmptyImg: typeof createEmptyImg;
    downloadImage: typeof downloadImage;
    lazy: (dom: any) => void;
};
export default ImgUtils;
