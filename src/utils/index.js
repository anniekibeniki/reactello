export const getResource = async (url, options = null) => {
    const res = await fetch(url, options);
    if (!res.ok) {
        throw new Error(`Could not fetch ${res.url}, recieved ${res.status}`);
    }
    return res.json();
};