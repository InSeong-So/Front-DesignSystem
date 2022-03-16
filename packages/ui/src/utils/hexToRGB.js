export function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    if (alpha) {
        return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(alpha, ")");
    }
    return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
}
//# sourceMappingURL=hexToRGB.js.map