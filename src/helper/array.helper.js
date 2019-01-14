class ArrayHelper {
    static ObjectToString(obj) {
        return Object.keys(obj)
            .filter((x) => obj[x])
            .join(' ');
    }
}

export default ArrayHelper;
