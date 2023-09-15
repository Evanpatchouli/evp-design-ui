export const emptyImg = document.createElement("img");

emptyImg.src =
  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

function createEmptyImg() {
  const _emptyImage = document.createElement("img");
  // Set the src to be a 0x0 gif
  _emptyImage.src =
    "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

  return _emptyImage;
}

const ImgUtils = {
  emptyImg: emptyImg,
  createEmptyImg: createEmptyImg,
};

export default ImgUtils;
