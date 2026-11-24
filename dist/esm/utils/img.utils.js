import { __awaiter, __generator } from 'tslib';

var emptyImg;
function getEmptyImg() {
    return emptyImg !== null && emptyImg !== void 0 ? emptyImg : (emptyImg = createEmptyImg());
}
function createEmptyImg() {
    var _emptyImage = document.createElement("img");
    // Set the src to be a 0x0 gif
    _emptyImage.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
    return _emptyImage;
}
function downloadImage(url, filename) {
    var _this = this;
    var encodedFilename = encodeURIComponent(filename);
    fetch(url, {
        headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
        },
    })
        .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
        var disposition, match, name, blob;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    disposition = response.headers.get("Content-Disposition");
                    match = disposition && disposition.match(/filename="(.+)"/);
                    name = match ? match[1] : encodedFilename;
                    return [4 /*yield*/, response.blob()];
                case 1:
                    blob = _a.sent();
                    return [2 /*return*/, { blob: blob, name: name }];
            }
        });
    }); })
        .then(function (_a) {
        var blob = _a.blob, name = _a.name;
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}
var lazy = function (dom) {
    var imgDom = dom.children[0];
    if (!imgDom.src || imgDom.src !== imgDom.dataset.src) {
        imgDom.src = imgDom.dataset.src;
    }
    imgDom.onload = function () {
        dom.style.backgroundColor = '';
        dom.style.aspectRatio = '';
    };
};
var ImgUtils = {
    get emptyImg() { return getEmptyImg(); },
    createEmptyImg: createEmptyImg,
    downloadImage: downloadImage,
    lazy: lazy,
};

export { ImgUtils as default, getEmptyImg };
