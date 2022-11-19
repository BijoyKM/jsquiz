// list of questions and answers array for the quiz

const questions = [{
        question: "Javascript is an _______ language?",
        answers: [{
                choice: "A. Object-Oriented",
                "correct": true,
            },
            {
                choice: "B. Object-Based",
                "correct": false,
            },
            {
                choice: "C. Procedural",
                "correct": false,
            },
            {
                choice: "D. None of the above",
                "correct": false,
            }
        ]
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers: [{
                choice: "A. var",
                "correct": false,
            },
            {
                choice: "B. let",
                "correct": false,
            },
            {
                choice: "C. Both A and B",
                "correct": true,
            },
            {
                choice: "D. None of the above",
                "correct": false,
            }
        ]
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answers: [{
                choice: "A. getElementbyId()",
                "correct": false,
            },
            {
                choice: "B. getElementsByClassName()",
                "correct": false,
            },
            {
                choice: "C. Both A and B",
                "correct": true,
            },
            {
                choice: "D. None of the above",
                "correct": false,
            }
        ]
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answers: [{
                choice: "A. document.write()",
                "correct": false,
            },
            {
                choice: "B. console.log()",
                "correct": false,
            },
            {
                choice: "C. window.alert()",
                "correct": false,
            },
            {
                choice: "D. All of the above",
                "correct": true,
            }
        ]
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        answers: [{
                choice: "A. const",
                "correct": true,
            },
            {
                choice: "B. var",
                "correct": false,
            },
            {
                choice: "C. let",
                "correct": false,
            },
            {
                choice: "D. constant",
                "correct": false,
            }
        ]
    },
//     {
//         question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
//         answers: [{
//                 choice: "A. Both the datatype and the result of the expression are compared.",
//                 "correct": true,
//             },
//             {
//                 choice: "B. Only the datatype of the expression is compared.",
//                 "correct": false,
//             },
//             {
//                 choice: "C. Only the value of the expression is compared.",
//                 "correct": false,
//             },
//             {
//                 choice: "D. None of the above",
//                 "correct": false,
//             }
//         ]
//     },
//     {
//         question: "What keyword is used to check whether a given property is valid or not?",
//         answers: [{
//                 choice: "A. in Correct",
//                 "correct": false,
//             },
//             {
//                 choice: "B. is in",
//                 "correct": true,
//             },
//             {
//                 choice: "C. exists",
//                 "correct": false,
//             },
//             {
//                 choice: "D. lies",
//                 "correct": false,
//             }
//         ]
//     },
//     {
//         question: "When an operator's value is NULL, the typeof returned by the unary operator is:",
//         answers: [{
//                 choice: "A. Boolean",
//                 "correct": false,
//             },
//             {
//                 choice: "B. Undefined",
//                 "correct": false,
//             },
//             {
//                 choice: "C. Object",
//                 "correct": true,
//             },
//             {
//                 choice: "D. Integer",
//                 "correct": false,
//             }
//         ]
//     },
//     {
//         question: "How are objects compared when they are checked with the strict equality operator?",
//         answers: [{
//                 choice: "A. The contents of the object are compared.",
//                 "correct": false,
//             },
//             {
//                 choice: "B. Their references are compared.",
//                 "correct": true,
//             },
//             {
//                 choice: "C. Both A and B",
//                 "correct": false,
//             },
//             {
//                 choice: "D. None of the above",
//                 "correct": false,
//             }
//         ]
//     },
//     {
//         question: `What will be the output of the following code snippet?\n
//               <script type='text/javascript'>\n 
//                      a = 5 + "9";\n
//                      document.write(a);\n
//                       </script>`,
//         answers: [{
//                 choice: "A. Compiltaion Error",
//                 "correct": false,
//             },
//             {
//                 choice: "B. 14",
//                 "correct": false,
//             },
//             {
//                 choice: "C. Runtime Error",
//                 "correct": false,
//             },
//             {
//                 choice: "D. 59",
//                 "correct": true,
//             }
//         ]
//     },
//     {
//         question: `What will be the output of the following code snippet?\nvar a = Math.max();\n
// var b = Math.min();\n
// print(a);\n
// print(b);\n`,
//         answers: [{
//                 choice: "A. -Infinity Infinity",
//                 "correct": true,
//             },
//             {
//                 choice: "B. Infinity -Infinity",
//                 "correct": false,
//             },
//             {
//                 choice: "C. Infinity Infinity",
//                 "correct": false,
//             },
//             {
//                 choice: "D. -Infinity Infinity",
//                 "correct": false,
//             }
//         ]
//     },
//     {
//         question: `What will be the output of the following code snippet?\n"var a = true + true + true * 3;\n
// print(a)`,
//         answers: [{
//                 choice: "A. 3",
//                 "correct": false,
//             },
//             {
//                 choice: "B. 0",
//                 "correct": false,
//             },
//             {
//                 choice: "C. Error",
//                 "correct": false,
//             },
//             {
//                 choice: "D. 5",
//                 "correct": true,
//             }
//         ]
//     },
//     {
//         question: `What will be the output of the following code snippet?\nprint(typeof(NaN));`,
//         answers: [{
//                 choice: "A. Object",
//                 "correct": false,
//             },
//             {
//                 choice: "B. Number",
//                 "correct": true,
//             },
//             {
//                 choice: "C. String",
//                 "correct": false,
//             },
//             {
//                 choice: "D. None of the above",
//                 "correct": false,
//             }
//         ]
//     },
//     {
//         question: `What will be the output of the following code snippet?\na = [1, 2, 3, 4, 5];\n
// print(a.slice(2, 4));`,
//         answers: [{
//                 choice: "A. 3, 4",
//                 "correct": false,
//             },
//             {
//                 choice: "B. 2, 3",
//                 "correct": false,
//             },
//             {
//                 choice: "C. 3, 4, 5",
//                 "correct": false,
//             },
//             {
//                 choice: "D. 2, 3, 4",
//                 "correct": true,
//             }
//         ]
//     },
//     {
//         question: `What will be the output of the following code snippet?\nconst obj1 = {Name: "Hello", Age: 16};\n
// const obj2 = {Name: "Hello", Age: 16};\n
// print(obj1 === obj2);`,
//         answers: [{
//                 choice: "A. true",
//                 "correct": false,
//             },
//             {
//                 choice: "B. false",
//                 "correct": true,
//             },
//             {
//                 choice: "C. Undefined",
//                 "correct": false,
//             },
//             {
//                 choice: "D. None of the above",
//                 "correct": false,
//             }
//         ]
//     },
//     {
//         question: `What will be the output of the following code snippet?\n function dog() {\n
// print("I am a dog.");\n
// }\n
// dog.sound = "Bark";`,
//         answers: [{
//                 choice: "A. Syntax Error",
//                 "correct": false,
//             },
//             {
//                 choice: "B. 'Iam a dog' gets printed",
//                 "correct": false,
//             },
//             {
//                 choice: "C. Reference Error",
//                 "correct": false,
//             },
//             {
//                 choice: "D. Nothing happens",
//                 "correct": true,
//             }
//         ]
//     },
//     {
//         question: `What will be the output of the following code snippet?\nfunction test(...args) {\n
// console.log(typeof args);\n
// }\n
// test(12);`,
//         answers: [{
//                 choice: "A. NaN",
//                 "correct": false,
//             },
//             {
//                 choice: "B. Number",
//                 "correct": false,
//             },
//             {
//                 choice: "C. Object",
//                 "correct": true,
//             },
//             {
//                 choice: "D. Array",
//                 "correct": false,
//             }
//         ]
//     },
//     {
//         question: `What will be the output of the following code snippet?\nconst obj1 = {first: 20, second: 30, first: 50};\n
// console.log(obj1);`,
//         answers: [{
//                 choice: "A. {first:20, second:30}",
//                 "correct": false,
//             },
//             {
//                 choice: "B. {first:50, second:30}",
//                 "correct": true,
//             },
//             {
//                 choice: "C. {first:20, second:30, first:50}",
//                 "correct": false,
//             },
//             {
//                 choice: "D. Syntax Error",
//                 "correct": false,
//             }
//         ]
//     },
//     {
//         question: "Which object in Javascript doesn't have a prototype?",
//         answers: [{
//                 choice: "A. Base Object",
//                 "correct": true,
//             },
//             {
//                 choice: "B. All objects have a prototype",
//                 "correct": false,
//             },
//             {
//                 choice: "C. None of the objects have a prototype",
//                 "correct": false,
//             },
//             {
//                 choice: "D. None of the above",
//                 "correct": false,
//             }
//         ]
//     },
//     {
//         question: "Which of the following is not a Javascript framework?",
//         answers: [{
//                 choice: "A. Node",
//                 "correct": false,
//             },
//             {
//                 choice: "B. Vue",
//                 "correct": false,
//             },
//             {
//                 choice: "C. React",
//                 "correct": false,
//             },
//             {
//                 choice: "D. Cassandra",
//                 "correct": true,
//             }
//         ]
//     }
];