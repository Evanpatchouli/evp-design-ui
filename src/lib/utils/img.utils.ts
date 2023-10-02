export const emptyImg = document.createElement("img");

emptyImg.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

function createEmptyImg() {
  const _emptyImage = document.createElement("img");
  // Set the src to be a 0x0 gif
  _emptyImage.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

  return _emptyImage;
}

function downloadImage(url: string, filename: string) {
  const encodedFilename = encodeURIComponent(filename);
  fetch(url, {
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
    },
  })
    .then(async (response) => {
      const disposition = response.headers.get("Content-Disposition");
      const match = disposition && disposition.match(/filename="(.+)"/);
      const name = match ? match[1] : encodedFilename;
      const blob = await response.blob();
      return { blob, name };
    })
    .then(({ blob, name }) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
}

const ImgUtils = {
  emptyImg: emptyImg,
  createEmptyImg: createEmptyImg,
  downloadImage: downloadImage,
};

export default ImgUtils;
