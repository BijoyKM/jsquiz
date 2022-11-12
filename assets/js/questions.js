// list of questions and answers array for the quiz

const questions = [{
    question: "Javascript is an _______ language?",
    choice1: "A. Object-Oriented",
    choice2: "B. Object-Based",
    choice3: "C. Procedural",
    choice4: "D. None of the above",
    correct: "A. Object-Oriented",
},
{
    question: "Which of the following keywords is used to define a variable in Javascript?",
    choice1: "A. var",
    choice2: "B. let",
    choice3: "C. Both A and B",
    choice4: "D. None of the above",
    correct: "C. Both A and B",
},
{
    question: "Which of the following methods is used to access HTML elements using Javascript?",
    choice1: "A. getElementbyId()",
    choice2: "B. getElementsByClassName()",
    choice3: "C. Both A and B",
    choice4: "D. None of the above",
    correct: "C. Both A and B",
},
{
    question: "Which of the following methods can be used to display data in some form using Javascript?",
    choice1: "A. document.write()",
    choice2: "B. console.log()",
    choice3: "C. window.alert()",
    choice4: "D. All of the above",
    correct: "D. All of the above",
},
{
    question: "How can a datatype be declared to be a constant type?",
    choice1: "A. const",
    choice2: "B. var",
    choice3: "C. let",
    choice4: "D. constant",
    correct: "A. const",
},
{
    question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
    choice1: "A. Both the datatype and the result of the expression are compared.",
    choice2: "B. Only the datatype of the expression is compared.",
    choice3: "C. Only the value of the expression is compared.",
    choice4: "D. None of the above",
    correct: "A. Both the datatype and the result of the expression are compared.",
 },
{
    question: "What keyword is used to check whether a given property is valid or not?",
    choice1: "A. in Correct",
    choice2: "B. is in",
    choice3: "C. exists",
    choice4: "D. lies",
    correct: "B. is in",
},
{
    question: "When an operator's value is NULL, the typeof returned by the unary operator is:",
    choice1: "A. Boolean",
    choice2: "B. Undefined",
    choice3: "C. Object",
    choice4: "D. Integer",
    correct: "C. Object",
},
{
    question: "How are objects compared when they are checked with the strict equality operator?",
    choice1: "A. The contents of the object are compared.",
    choice2: "B. Their references are compared.",
    choice3: "C. Both A and B",
    choice4: "D. None of the above",
    correct: "B. Their references are compared.",
},
{
    question: `What will be the output of the following code snippet?\n
          <script type='text/javascript'>\n 
                 a = 5 + "9";\n
                 document.write(a);\n
                  </script>`,
    choice1: "A. Compiltaion Error",
    choice2: "B. 14",
    choice3: "C. Runtime Error",
    choice4: "D. 59",
    correct: "D. 59",
},
{
    question: `What will be the output of the following code snippet?\nvar a = Math.max();\n
var b = Math.min();\n
print(a);\n
print(b);\n`,
    choice1: "A. -Infinity Infinity",
    choice2: "B. Infinity -Infinity",
    choice3: "C. Infinity Infinity",
    choice4: "D. -Infinity Infinity",
    correct: "A. -Infinity Infinity",
},
{
    question: `What will be the output of the following code snippet?\n"var a = true + true + true * 3;\n
print(a)`,
    choice1: "A. 3",
    choice2: "B. 0",
    choice3: "C. Error",
    choice4: "D. 5",
    correct: "D. 5",
},
{
    question: `What will be the output of the following code snippet?\nprint(typeof(NaN));`,
    choice1: "A. Object",
    choice2: "B. Number",
    choice3: "C. String",
    choice4: "D. None of the above",
    correct: "B. Number",
},
{
    question: `What will be the output of the following code snippet?\na = [1, 2, 3, 4, 5];\n
print(a.slice(2, 4));`,
    choice1: "A. 3, 4",
    choice2: "B. 2, 3",
    choice3: "C. 3, 4, 5",
    choice4: "D. 2, 3, 4",
    correct: "D. 2, 3, 4",
},
{
    question: `What will be the output of the following code snippet?\nconst obj1 = {Name: "Hello", Age: 16};\n
const obj2 = {Name: "Hello", Age: 16};\n
print(obj1 === obj2);`,
    choice1: "A. true",
    choice2: "B. false",
    choice3: "C. Undefined",
    choice4: "D. None of the above",
    correct: "B. false",
},
{
    question: `What will be the output of the following code snippet?\n function dog() {\n
print("I am a dog.");\n
}\n
dog.sound = "Bark";`,
    choice1: "A. Syntax Error",
    choice2: "B. 'Iam a dog' gets printed",
    choice3: "C. Reference Error",
    choice4: "D. Nothing happens",
    correct: "D. Nothing happens",
},
{
    question: `What will be the output of the following code snippet?\nfunction test(...args) {\n
console.log(typeof args);\n
}\n
test(12);`,
    choice1: "A. NaN",
    choice2: "B. Number",
    choice3: "C. Object",
    choice4: "D. Array",
    correct: "C. Object",
 },
{
    question: `What will be the output of the following code snippet?\nconst obj1 = {first: 20, second: 30, first: 50};\n
console.log(obj1);`,
    choice1: "A. {first:20, second:30}",
    choice2: "B. {first:50, second:30}",
    choice3: "C. {first:20, second:30, first:50}",
    choice4: "D. Syntax Error",
    correct: "B. {first:50, second:30}",
 },
{
    question: "Which object in Javascript doesn't have a prototype?",
    choice1: "A. Base Object",
    choice2: "B. All objects have a prototype",
    choice3: "C. None of the objects have a prototype",
    choice4: "D. None of the above",
    correct: "A. Base Object",
},
{
    question: "Which of the following is not a Javascript framework?",
    choice1: "A. Node",
    choice2: "B. Vue",
    choice3: "C. React",
    choice4: "D. Cassandra",
    correct: "D. Cassandra",
 }
];