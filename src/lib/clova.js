export function getPosts(text, items) {
    return fetch('http://ec2-43-200-164-164.ap-northeast-2.compute.amazonaws.com:8000/', {
        method: 'POST',
        body: JSON.stringify({
            'sentence': text
        })})
    .then(response => response.json())
    .then(response => items = (response.result.split('공감: ').pop().split('###')[0]))
    .catch(err => console.log(err));
}

export function getFromKeywords(text, items) {
    return fetch('http://ec2-13-124-173-36.ap-northeast-2.compute.amazonaws.com:8000/', {
        method: 'POST',
        body: JSON.stringify({
            'keywords': text
        })})
    .then(response => response.json())
    .then(response => items = (response.result.split('일기: ').pop().split('###')[0]))
    .catch(err => console.log(err));
}