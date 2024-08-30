import QRCode from "qrcode";

export const getQrCode = async (customUrl) => {
    try {
        const qrSrc = await QRCode.toDataURL(`${process.env.NEXT_PUBLIC_URL}/${customUrl}`);
        return qrSrc;
    } catch (error) {
        console.error(error);
        throw new Error("Error generating QR code");
    }
}