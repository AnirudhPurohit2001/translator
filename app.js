var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverurl = "https://api.funtranslations.com/translate/doge.json"

function getTranslationURL(text) {
   return serverurl + "?" + "text=" + text
}

function errorHandler(error) {
   console.log("error ocurred", error);
   alert("Something wrong with server: try again after sometime")
}

function clickEventHandler() {
   var inputText = txtInput.value; //taking input

   //calling server for processing
   fetch(getTranslationURL(inputText))
      .then(response => response.json())
      .then(json => {
         var translatedText = json.contents.translated;
         outputDiv.innerText = translatedText; //ouput
      })
      .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickEventHandler) 