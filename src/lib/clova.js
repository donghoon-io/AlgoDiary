export function getPosts(text, items) {
    return fetch('https://algodiary-1.run.goorm.io/', {
        method: 'POST',
        body: JSON.stringify({
            'sentence': text
        })})
    .then(response => response.json())
    .then(response => items = response.result.split('공감: ').pop().split('###')[0].replace(/(\r\n|\n|\r)/gm, ""))
    .catch(err => console.log(err));
}

export function getFromKeywords(text, temp, items) {
    return fetch('https://algodiary-2.run.goorm.io/', {
        method: 'POST',
        body: JSON.stringify({
            'keywords': text,
            'temp': temp
        })})
    .then(response => response.json())
    .then(response => items = isErroneous(response.danger) ? 'Error' : response.result.split('일기: ').pop().split('###')[0].replace(/(\r\n|\n|\r)/gm, ""))
    .catch(err => console.log(err));
}

export function predictNextSentence(text, temp, items) {
    return fetch('https://algodiary-3.run.goorm.io/', {
        method: 'POST',
        body: JSON.stringify({
            'text': text,
            'temp': temp
        })})
    .then(response => response.json())
    .then(response => items = isErroneous(response.danger) ? 'Error' : response.result.split('다음 문장: ').pop().split('##')[0])
    .catch(err => console.log(err));
}
function isErroneous(texts) {
    return (texts.includes('1') || texts.includes('0'))
}