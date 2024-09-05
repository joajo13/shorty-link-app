import { trends } from "@/constants/trends";

export function calculateTrend(clicks) {
    const n = clicks.length;
    if (n === 0) return "no data";

    const sumX = clicks.reduce((sum, click, index) => sum + index, 0);
    const sumY = clicks.reduce((sum, click) => sum + click.count, 0);
    const sumXY = clicks.reduce((sum, click, index) => sum + index * click.count, 0);
    const sumX2 = clicks.reduce((sum, click, index) => sum + index * index, 0);

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);

    return slope > 0 ? trends.UP : slope < 0 ? trends.DOWN : trends.NO_TREND;
}