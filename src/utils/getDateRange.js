export const getDateRange = (range) => {

    if (!range) {
        return {
            rangeValue: 0,
            dateRange: null
        }
    }

    if (isNaN(range)) {
        return {
            rangeValue: 0,
            dateRange: null
        }
    }

    const rangeValue = parseInt(range);
    const dateRange = new Date();
    dateRange.setDate(dateRange.getDate() - rangeValue);

    return {
        rangeValue,
        dateRange
    }
}