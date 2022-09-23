const questions = [{
        question: "Javascript is an _______ language?",
        answers: [{
                choice: "A. Object-Oriented",
                "is_correct": true,
            },
            {
                choice: "B. Object-Based",
                "is_correct": false,
            },
            {
                choice: "C. Procedural",
                "is_correct": false,
            },
            {
                choice: "D. None of the above",
                "is_correct": false,
            }
        ]
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers: [{
                choice: "A. var",
                "is_correct": false,
            },
            {
                choice: "B. let",
                "is_correct": false,
            },
            {
                choice: "C. Both A and B",
                "is_correct": true,
            },
            {
                choice: "D. None of the above",
                "is_correct": false,
            }
        ]
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answers: [{
                choice: "A. getElementbyId()",
                "is_correct": false,
            },
            {
                choice: "B. getElementsByClassName()",
                "is_correct": false,
            },
            {
                choice: "C. Both A and B",
                "is_correct": true,
            },
            {
                choice: "D. None of the above",
                "is_correct": false,
            }
        ]
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answers: [{
                choice: "A. document.write()",
                "is_correct": false,
            },
            {
                choice: "B. console.log()",
                "is_correct": false,
            },
            {
                choice: "C. window.alert()",
                "is_correct": false,
            },
            {
                choice: "D. All of the above",
                "is_correct": true,
            }
        ]
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        answers: [{
                choice: "A. const",
                "is_correct": true,
            },
            {
                choice: "B. var",
                "is_correct": false,
            },
            {
                choice: "C. let",
                "is_correct": false,
            },
            {
                choice: "D. constant",
                "is_correct": false,
            }
        ]
    },
    {
        question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
        answers: [{
                choice: "A. Both the datatype and the result of the expression are compared.",
                "is_correct": true,
            },
            {
                choice: "B. Only the datatype of the expression is compared.",
                "is_correct": false,
            },
            {
                choice: "C. Only the value of the expression is compared.",
                "is_correct": false,
            },
            {
                choice: "D. None of the above",
                "is_correct": false,
            }
        ]
    },
    {
        question: "What keyword is used to check whether a given property is valid or not?",
        answers: [{
                choice: "A. in Correct",
                "is_correct": false,
            },
            {
                choice: "B. is in",
                "is_correct": true,
            },
            {
                choice: "C. exists",
                "is_correct": false,
            },
            {
                choice: "D. lies",
                "is_correct": false,
            }
        ]
    },
    {
        question: "When an operator's value is NULL, the typeof returned by the unary operator is:",
        answers: [{
                choice: "A. Boolean",
                "is_correct": false,
            },
            {
                choice: "B. Undefined",
                "is_correct": false,
            },
            {
                choice: "C. Object",
                "is_correct": true,
            },
            {
                choice: "D. Integer",
                "is_correct": false,
            }
        ]
    },
    {
        question: "How are objects compared when they are checked with the strict equality operator?",
        answers: [{
                choice: "A. The contents of the object are compared.",
                "is_correct": false,
            },
            {
                choice: "B. Their references are compared.",
                "is_correct": true,
            },
            {
                choice: "C. Both A and B",
                "is_correct": false,
            },
            {
                choice: "D. None of the above",
                "is_correct": false,
            }
        ]
    },
    {
        question: `What will be the output of the following code snippet? 
                  <code><script type="text/javascript"> 
                         a = 5 + "9";
                         document.write(a);
                          </script></code>`,
        answers: [{
                choice: "A. Compiltaion Error",
                "is_correct": true,
            },
            {
                choice: "B. 14",
                "is_correct": false,
            },
            {
                choice: "C. Runtime Error",
                "is_correct": false,
            },
            {
                choice: "D. 59",
                "is_correct": true,
            }
        ]
    },
    {
        question: `What will be the output of the following code snippet? <code>var a = Math.max();
var b = Math.min();
print(a);
print(b);
 </code>`,
        answers: [{
                choice: "A. -Infinity Infinity",
                "is_correct": true,
            },
            {
                choice: "B. Infinity -Infinity",
                "is_correct": false,
            },
            {
                choice: "C. Infinity Infinity",
                "is_correct": false,
            },
            {
                choice: "D. -Infinity Infinity",
                "is_correct": false,
            }
        ]
    },
    {
        question: `What will be the output of the following code snippet? <code>var a = true + true + true * 3;
print(a)
</code>`,
        answers: [{
                choice: "A. 3",
                "is_correct": false,
            },
            {
                choice: "B. 0",
                "is_correct": false,
            },
            {
                choice: "C. Error",
                "is_correct": false,
            },
            {
                choice: "D. 5",
                "is_correct": true,
            }
        ]
    },
    {
        question: `What will be the output of the following code snippet? <code>print(typeof(NaN));</code>`,
        answers: [{
                choice: "A. Object",
                "is_correct": false,
            },
            {
                choice: "B. Number",
                "is_correct": true,
            },
            {
                choice: "C. String",
                "is_correct": false,
            },
            {
                choice: "D. None of the above",
                "is_correct": false,
            }
        ]
    },
    {
        question: `What will be the output of the following code snippet?<code>a = [1, 2, 3, 4, 5];
print(a.slice(2, 4));
</code>`,
        answers: [{
                choice: "A. 3, 4",
                "is_correct": false,
            },
            {
                choice: "B. 2, 3",
                "is_correct": false,
            },
            {
                choice: "C. 3, 4, 5",
                "is_correct": false,
            },
            {
                choice: "D. 2, 3, 4",
                "is_correct": true,
            }
        ]
    },
    {
        question: `What will be the output of the following code snippet?<code>const obj1 = {Name: "Hello", Age: 16};
const obj2 = {Name: "Hello", Age: 16};
print(obj1 === obj2);
</code>`,
        answers: [{
                choice: "A. true",
                "is_correct": false,
            },
            {
                choice: "B. false",
                "is_correct": true,
            },
            {
                choice: "C. Undefined",
                "is_correct": false,
            },
            {
                choice: "D. None of the above",
                "is_correct": false,
            }
        ]
    },
    {
        question: `What will be the output of the following code snippet? 
<code> function dog() {
print("I am a dog.");
}
dog.sound = "Bark";</code>`,
        answers: [{
                choice: "A. Syntax Error",
                "is_correct": false,
            },
            {
                choice: "B. 'Iam a dog' gets printed",
                "is_correct": false,
            },
            {
                choice: "C. Reference Error",
                "is_correct": false,
            },
            {
                choice: "D. Nothing happens",
                "is_correct": true,
            }
        ]
    },
    {
        question: `What will be the output of the following code snippet? <code>function test(...args) {
 console.log(typeof args);
}
test(12);</code>`,
        answers: [{
                choice: "A. NaN",
                "is_correct": false,
            },
            {
                choice: "B. Number",
                "is_correct": false,
            },
            {
                choice: "C. Object",
                "is_correct": true,
            },
            {
                choice: "D. Array",
                "is_correct": false,
            }
        ]
    },
    {
        question: `What will be the output of the following code snippet? <code>const obj1 = {first: 20, second: 30, first: 50};
console.log(obj1);</code>`,
        answers: [{
                choice: "A. {first:20, second:30}",
                "is_correct": false,
            },
            {
                choice: "B. {first:50, second:30}",
                "is_correct": true,
            },
            {
                choice: "C. {first:20, second:30, first:50}",
                "is_correct": false,
            },
            {
                choice: "D. Syntax Error",
                "is_correct": false,
            }
        ]
    },
    {
        question: "Which object in Javascript doesn't have a prototype?",
        answers: [{
                choice: "A. Base Object",
                "is_correct": true,
            },
            {
                choice: "B. All objects have a prototype",
                "is_correct": false,
            },
            {
                choice: "C. None of the objects have a prototype",
                "is_correct": false,
            },
            {
                choice: "D. None of the above",
                "is_correct": false,
            }
        ]
    },
    {
        question: "Which of the following is not a Javascript framework?",
        answers: [{
                choice: "A. Node",
                "is_correct": false,
            },
            {
                choice: "B. Vue",
                "is_correct": false,
            },
            {
                choice: "C. React",
                "is_correct": false,
            },
            {
                choice: "D. Cassandra",
                "is_correct": true,
            }
        ]
    }
]