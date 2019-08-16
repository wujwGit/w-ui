const QRCode = require('./QRCode');
const ErrorCorrectLevel = require('./ErrorCorrectLevel');

/**
 * 字符串转换成 UTF-8
 * @param {String} str 文本内容
 */
const utf16to8 = (str) => {
    const len = str.length
    let out = ''

    for (let i = 0; i < len; i++) {
        const c = str.charCodeAt(i)

        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i)
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F))
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F))
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
        } else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F))
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
        }
    }

    return out
}

const qrcode = function(data, opt) {
	opt = opt || {};
	const qr = new QRCode(opt.typeNumber || -1, opt.errorCorrectLevel || ErrorCorrectLevel.H);
	qr.addData(utf16to8(data));
	qr.make();

	return qr;
};

qrcode.ErrorCorrectLevel = ErrorCorrectLevel;

module.exports = qrcode;

