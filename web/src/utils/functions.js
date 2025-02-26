export const formatCurrency = (value) => {
    if (typeof value !== 'string') {
        return '';
    }

    const unformattedValue = value.replace(/[.,]/g, '');
    const intValue = unformattedValue.slice(0, -2);
    const decimalValue = unformattedValue.slice(-2);

    let formattedValue = intValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    if (decimalValue.length > 0) {
        formattedValue += `,${decimalValue}`;
    } else {
        formattedValue += ',00';
    }

    return formattedValue;
};

export const unformatCurrency = (value) => {
    if (typeof value !== 'string') {
        return '';
    }
    const unformattedValue = value.replace(/\./g, '');
    const finalValue = unformattedValue.replace(',', '.');

    return finalValue;
};

export const validateYear = (year) => {
    return /^\d{1,4}$/.test(year);
};

export const formatMileage = (value) => {
    if (!value) return '';
    const formattedValue = value.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return formattedValue;
};

export const unformatMileage = (value) => {
    return value.replace(/\./g, '');
};

export const validatePrice = (price) => {
    const pricePattern = /^\d+(\.\d{3})*,\d{2}$/;
    return pricePattern.test(price);
};

export const validateStringLength = (string) => {
    return string.length <= 255;
};
