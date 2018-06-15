const getData = () => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', '/reviews', true);

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return;
            }

            if (xhr.status !== 200) {
                const error =  new Error(xhr.status + ': ' + xhr.statusText);

                reject(error);
            } else {
                resolve(xhr.responseText);
            }
        };

        xhr.send();
    });
};

export default getData;