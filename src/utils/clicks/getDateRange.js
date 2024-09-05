export const getDateRange = (range) => {
    const rangeValue = parseInt(range);
    const dateRange = new Date();
    dateRange.setDate(dateRange.getDate() - rangeValue);

    return {
        rangeValue,
        dateRange
    }
}