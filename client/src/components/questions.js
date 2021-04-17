const questions = () => {
    return {
        id: 'CustomId',
        questions: [
            {
                questionText: "Inside which HTML element do we put the Javascript?",
                correctAnswer: "script",
                answer: [
                    "script",
                    "javascript",
                    "scripting",
                    "js"
                ]
            },
            {
                questionText: "What is the correct syntax for referring to an external script called xxx.js?",
                correctAnswer: "script src='xxx.js'",
                answer: [
                    "script src='xxx.js'",
                    "script href='xxx.js'",
                    "script name='xxx.js'",
                    "script img='xxx.js'"
                ]
            },
            {
                questionText: "How do you write 'Hello World' in an alert box?",
                correctAnswer: "alert('Hello World');",
                answer: [
                    "alertBox('Hello World');",
                    "alert('Hello World');",
                    "msg('Hello World');",
                    "msgBox('Hello World');"
                ]
            },
            {
                questionText: "How do you call a function named 'myFunction'?",
                correctAnswer: "myFunction()",
                answer: [
                    "call function myFunction()",
                    "call myFunction()",
                    "myFunction()",
                    "console.log(myFunction())"
                ]
            },
            {
                questionText: "What is the correct syntax for writing an 'IF' statement?",
                correctAnswer: "if (i == 5)",
                answer: [
                    "if i == 5 then",
                    "if i == 5",
                    "if i = 5 then",
                    "if (i == 5)"
                ]
            },
            {
                questionText: "Where is the best practice for placing your JS script?",
                correctAnswer: "At the end of the body",
                answer: [
                    "At the beginning of the head",
                    "At the beginning of the body",
                    "At the end of the body",
                    "At the end of the head"
                ]
            },
            {
                questionText: "Which event occurs when the user clicks on an HTML element?",
                correctAnswer: "onclick",
                answer: [
                    "onchange",
                    "onmouseover",
                    "onmouseclick",
                    "onclick"
                ]
            },
            {
                questionText: "Which operator is used to assign a value to a variable?",
                correctAnswer: "=",
                answer: [
                    "*",
                    "-",
                    "+",
                    "="
                ]
            },
            {
                questionText: "How do you write the beginning of a 'FOR' loop?",
                correctAnswer: "for(i = 0; i <= 5; i ++)",
                answer: [
                    "for i = 1 to 5",
                    "for(i = 0; i <= 5)",
                    "for(i = 0; i <= 5; i ++)",
                    "for(i <=5; i++)"
                ]
            },
            {
                questionText: "Which of the following functions of an Array object removes the last element from an array and returns that element?",
                correctAnswer: "pop()",
                answer: [
                    "push()",
                    "pop()",
                    "join()",
                    "map()"
                ]
            }
        ]
    }
}

export default questions
