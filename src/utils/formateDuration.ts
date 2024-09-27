const LEADING_ZERO_FORMATER = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
    useGrouping: false
});

export const formatDuration = (duration: number) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor((duration % 3600) % 60);
    if(hours>0){
        return `${hours}:${LEADING_ZERO_FORMATER.format(minutes)}:${LEADING_ZERO_FORMATER.format(seconds)}`
    }
    return `${minutes}:${LEADING_ZERO_FORMATER.format(seconds)}`;
}