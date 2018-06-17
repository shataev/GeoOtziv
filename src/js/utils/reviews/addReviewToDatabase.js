const addReviewToDatabase = (reviewData) => {
    const request = new XMLHttpRequest();
    const requestBody = `coords=${encodeURIComponent(reviewData.coords)}&adress=${encodeURIComponent(reviewData.adress)}&review=${encodeURIComponent(JSON.stringify(reviewData.review))}`;

    request.open('POST', '/reviews', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(requestBody);
};

export default addReviewToDatabase;