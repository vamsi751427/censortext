censorWords=["mad","bad","sad"];
customCensorWords=[];
function censor(sentence){
    for(i in censorWords){
        sentence=sentence.replaceAll(censorWords[i],"***");
    }
    for(i in customCensorWords){
        sentence=sentence.replaceAll(customCensorWords[i],"***");
    }
    return sentence;
}
function addCensoredWord(word){
    customCensorWords.push(word);
}
function getCensoredWords(){
    return censorWords.concat(customCensorWords);
}
exports.censor=censor;
exports.add=addCensoredWord;
exports.get=getCensoredWords;