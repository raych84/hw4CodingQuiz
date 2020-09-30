var questions = [
  {
    title: "How many parks are ther in Walt Disney World?",
    choices: ["Four", "Seven", "Two", "One"],
    answer: "Four"
  },
  {
    title: "What year was Back to the Future released?:",
    choices: ["2015", "1985", "1985", "1885"],
    answer: "1985"
  },
  {
    title: "How well does Rachel know JavaScript?:",
    choices: ["Intermediate", "She's a pro!", "Bupkiss!", "Beginner stuff."],
    answer: "Bupkiss!"
  },
  {
    title: "What does 'CSS' stand for?",
    choices: ["Common Syntax Style", "Computer Script Site", "Close Styles Setup", "Cascading Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    title: "Which Zodiac sign is the best?:",
    choices: ["Pisces", "Aries", "Cancer", "Capricorn"],
    answer: "Pisces"
  },
  {
    title: "Where did the band, Lynyrd Skynyrd, originate from?:",
    choices: ["Carey, NC", "Jacksonville, FL", "Birmingham, AL", "Tifton, GA"],
    answer: "Jacksonville, FL"
  },
  {
    title: "What country uses 'Pound Sterling' as currency?:",
    choices: ["The United Kingdom", "France", "China", "Russia"],
    answer: "The United Kindom"
  },
  {
    title: "What is an API?:",
    choices: ["All-inclusive Programming Internet", "All Post Informed", "Application Programming Interface", "Array Python Instructions"],
    answer: "Application Programming Interface"
  },
  {
    title: "Which Jeopardy! contestant is, 'The Greatest of All Time!'?:",
    choices: ["Ken Jennings", "Brad Rutter", "James Holzhauer", "Rosie Perez"],
    answer: "Ken Jennings"
  },
  {
    title: "What year was Macintosh released?:",
    choices: ["1990", "1976", "1984", "2000"],
    answer: "1984"
  },


];
// for loop to get questions.

for (let i = 0; i < questions.length; i++) {
  btn.append(questions[i].title);
  for (let j = 0; j < 4; j++) {
    var btn2 = document.createElement("button");
    btn2.setAttribute("class", "btn2");
    btn2.setAttribute("type", "submit");
    btn2.setAttribute("answer", questions[i].answer);
    btn2.textContent = (questions[i].choices[j]);
    btn.append(btn2);


    const answers = ["Four", "1985", "Bupkiss!", "Cascading Style Sheets", "Pisces", "Jacksonville, FL", "The United Kingdom", "Application Programming Interface", ""];
    

    

    }










    console.log(btn2);
  }


