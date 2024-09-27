const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

function formatRelativeTime(date: Date): string {
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals: { [key: string]: number } = {
        year: 60 * 60 * 24 * 365,
        month: 60 * 60 * 24 * 30,
        day: 60 * 60 * 24,
        hour: 60 * 60,
        minute: 60,
        second: 1,
    };

    for (let interval in intervals) {
        const count = Math.floor(seconds / intervals[interval]);
        if (count >= 1) {
            return rtf.format(-count, interval as Intl.RelativeTimeFormatUnit); 
        }
    }
    return 'just now'; 
}

export default formatRelativeTime;