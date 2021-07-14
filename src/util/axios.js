Object.defineProperty(exports, "__esModule", { value: true });
function isAxiosData(data) {
    if (data !== null) return false;
    if (data instanceof FormData) return false;
    return typeof data === "object";
}
const axios = {
    /* config */
    get(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: JSON.parse(xhr.responseText) });
                } else {
                    reject({ data: JSON.parse(xhr.responseText) });
                }
            };
            xhr.onerror = function() {
                reject({ data: JSON.parse(xhr.responseText) });
            };
            xhr.open("GET", url);
            xhr.send();
        });
    },
    /* config */
    post(url, data) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: xhr.responseText });
                } else {
                    reject({ data: xhr.responseText });
                }
            };
            xhr.onerror = function() {
                reject({ data: xhr.responseText });
            };
            xhr.open("POST", url);
            if (isAxiosData(data)) {
                xhr.send(JSON.stringify(data));
            } else {
                xhr.send(data);
            }
        });
    },
};
exports.default = axios;
