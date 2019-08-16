/**
 * QR码的数据编码模式：
 * MODE_NUMBER 数字（Numeric）：0-9
 * MODE_ALPHA_NUM 大写字母和数字（alphanumeric）：0-9，A-Z，空格，$，%，*，+，-，.，/，:
 * MODE_8BIT_BYTE 二进制/字节：通过 ISO/IEC 8859-1 标准编码
 * MODE_KANJI 汉字/日文：通过 Shift JISJIS X 0208 标准编码
 */
module.exports = {
	MODE_NUMBER :		1 << 0,
	MODE_ALPHA_NUM : 	1 << 1,
	MODE_8BIT_BYTE : 	1 << 2,
	MODE_KANJI :		1 << 3
};
