function generateHashtags() {
    let textInput = document.getElementById('text-input').value;
    let wordsArray = textInput.split(' ');
    let hashtagsArray = [];
    for (let i = 0; i < wordsArray.length; i++) {
      let hashtag = '#' + wordsArray[i].replace(/[^a-zA-Z0-9]/g, '');
      hashtagsArray.push(hashtag);
    }
    let hashtags = hashtagsArray.join(' ');
    document.getElementById('hashtags').innerHTML = hashtags;
  }

  function copyHashtags() {
    let hashtags = document.getElementById('hashtags').innerHTML;
    let textarea = document.createElement('textarea');
    textarea.value = hashtags;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Copied hashtags to clipboard!');
  }