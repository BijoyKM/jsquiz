const questions = [
    {
        question: "Javascript is an _______ language?",
        answers:[
            {
                choice: "Object-Oriented",
                "is_correct": true,
            },
            {
                choice: "Object-Based",
                "is_correct": false,
            },
            {
                choice: "Procedural",
                "is_correct": false,
            },
            {
                choice: "None of the above",
                "is_correct": false,
            }
        ]
    },
    {
                question: "Which of the following keywords is used to define a variable in Javascript?",
                answers:[
                    {
                        choice: "var",
                        "is_correct": false,
                    },
                    {
                        choice: "let",
                        "is_correct": false,
                    },
                    {
                        choice: "Both A and B",
                        "is_correct": true,
                    },
                    {
                        choice: "None of the above",
                        "is_correct": false,
                    }
                ]
    },
    {
                question: "Which of the following methods is used to access HTML elements using Javascript?",
                answers:[
                    {
                        choice: "getElementbyId()",
                        "is_correct": false,
                    },
                    {
                        choice: "getElementsByClassName()",
                        "is_correct": false,
                    },
                    {
                        choice: "Both A and B",
                        "is_correct": true,
                    },
                    {
                        choice: "None of the above",
                        "is_correct": false,
                    }
                ]
    },
    {
                question: "Which of the following methods can be used to display data in some form using Javascript?",
                answers:[
                    {
                        choice: "document.write()",
                        "is_correct": false,
                    },
                    {
                        choice: "console.log()",
                        "is_correct": false,
                    },
                    {
                        choice: "window.alert()",
                        "is_correct": false,
                    },
                    {
                        choice: "All of the above",
                        "is_correct": true,
                    }
                ]
    },
    {
                question: "How can a datatype be declared to be a constant type?",
                answers:[
                    {
                        choice: "const",
                        "is_correct": true,
                    },
                    {
                        choice: "var",
                        "is_correct": false,
                    },
                    {
                        choice: "let",
                        "is_correct": false,
                    },
                    {
                        choice: "constant",
                        "is_correct": false,
                    }
                ]
    },
    {
                question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
                answers:[
                    {
                        choice: "Both the datatype and the result of the expression are compared.",
                        "is_correct": true,
                    },
                    {
                        choice: "Only the datatype of the expression is compared.",
                        "is_correct": false,
                    },
                    {
                        choice: "Only the value of the expression is compared.",
                        "is_correct": false,
                    },
                    {
                        choice: "None of the above",
                        "is_correct": false,
                    }
                ]
    },
    {
                question: "What keyword is used to check whether a given property is valid or not?",
                answers:[
                    {
                        choice: "in Correct",
                        "is_correct": false,
                    },
                    {
                        choice: "is in",
                        "is_correct": true,
                    },
                    {
                        choice: "exists",
                        "is_correct": false,
                    },
                    {
                        choice: "lies",
                        "is_correct": false,
                    }
                ]
    },
    {
                question: "When an operator's value is NULL, the typeof returned by the unary operator is:",
                answers:[
                    {
                        choice: "Boolean",
                        "is_correct": false,
                    },
                    {
                        choice: "Undefined",
                        "is_correct": false,
                    },
                    {
                        choice: "Object",
                        "is_correct": true,
                    },
                    {
                        choice: "Integer",
                        "is_correct": false,
                    }
                ]
    },
    {
                question: "How are objects compared when they are checked with the strict equality operator?",
                answers:[
                    {
                        choice: "The contents of the object are compared.",
                        "is_correct": false,
                    },
                    {
                        choice: "Their references are compared.",
                        "is_correct": true,
                    },
                    {
                        choice: "Both A and B",
                        "is_correct": false,
                    },
                    {
                        choice: "None of the above",
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
                answers:[
                    {
                        choice: "Compiltaion Error",
                        "is_correct": true,
                    },
                    {
                        choice: "14",
                        "is_correct": false,
                    },
                    {
                        choice: "Runtime Error",
                        "is_correct": false,
                    },
                    {
                        choice: "59",
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
                answers:[
                    {
                        choice: "-Infinity Infinity",
                        "is_correct": true,
                    },
                    {
                        choice: "Infinity -Infinity",
                        "is_correct": false,
                    },
                    {
                        choice: "Infinity Infinity",
                        "is_correct": false,
                    },
                    {
                        choice: "-Infinity Infinity",
                        "is_correct": false,
                    }
                ]
    },
    {
                question: `What will be the output of the following code snippet? <code>var a = true + true + true * 3;
print(a)
</code>`,
                answers:[
                    {
                        choice: "3",
                        "is_correct": false,
                    },
                    {
                        choice: "0",
                        "is_correct": false,
                    },
                    {
                        choice: "Error",
                        "is_correct": false,
                    },
                    {
                        choice: "5",
                        "is_correct": true,
                    }
                ]
    },
    {
                question: `What will be the output of the following code snippet? <code>print(typeof(NaN));</code>`,
                answers:[
                    {
                        choice: "Object",
                        "is_correct": false,
                    },
                    {
                        choice: "Number",
                        "is_correct": true,
                    },
                    {
                        choice: "String",
                        "is_correct": false,
                    },
                    {
                        choice: "None of the above",
                        "is_correct": false,
                    }
                ]
    },
    {
                question: `What will be the output of the following code snippet?<code>a = [1, 2, 3, 4, 5];
print(a.slice(2, 4));
</code>`,
                answers:[
                    {
                        choice: "3, 4",
                        "is_correct": false,
                    },
                    {
                        choice: "2, 3",
                        "is_correct": false,
                    },
                    {
                        choice: "3, 4, 5",
                        "is_correct": false,
                    },
                    {
                        choice: "2, 3, 4",
                        "is_correct": true,
                    }
                ]
    },
    {
                question: `What will be the output of the following code snippet?<code>const obj1 = {Name: "Hello", Age: 16};
const obj2 = {Name: "Hello", Age: 16};
print(obj1 === obj2);
</code>`,
                answers:[
                    {
                        choice: "true",
                        "is_correct": false,
                    },
                    {
                        choice: "false",
                        "is_correct": true,
                    },
                    {
                        choice: "Undefined",
                        "is_correct": false,
                    },
                    {
                        choice: "None of the above",
                        "is_correct": false,
                    }
                ]
     },
    
]