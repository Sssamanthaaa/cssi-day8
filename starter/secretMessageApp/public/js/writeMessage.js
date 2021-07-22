const messagesRef = firebase.database().ref();

messagesRef.push({
    message: "made with Javascript",
    passcode: "Javascript"
})