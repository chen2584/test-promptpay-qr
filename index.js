const generatePayload = require('promptpay-qr');
const qrcode = require('qrcode');
const fs = require('fs');

const mobileNumber = '000-000-0000';
// const idCardNumber = '0-0000-00000-00-0';
const amount = 0;
const payload = generatePayload(mobileNumber, { amount }); //First parameter : mobileNumber || IDCardNumber

// Convert to SVG QR Code
const options = { type: 'svg', color: { dark: '#000', light: '#fff' } };
qrcode.toString(payload, options, (err, svg) => {
    if (err) return console.log(err)
    fs.writeFileSync('./qr.svg', svg)
    console.log(svg)
});