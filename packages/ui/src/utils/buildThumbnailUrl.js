import { IMAGE_SIZE } from '../constants/image';
var buildThumbnailUrl = function (url, options) {
    var _a, _b;
    if (options === void 0) { options = {
        size: IMAGE_SIZE.THUMBNAIL,
    }; }
    if (url && options && options.size && url.indexOf('?') < 0) {
        return "".concat(url, "?s=").concat((_a = options.size) !== null && _a !== void 0 ? _a : IMAGE_SIZE.THUMBNAIL, "&t=").concat((_b = options.type) !== null && _b !== void 0 ? _b : 'cover').concat(options.format ? "&f=".concat(options.format) : '');
    }
    return url;
};
export default buildThumbnailUrl;
//# sourceMappingURL=buildThumbnailUrl.js.map