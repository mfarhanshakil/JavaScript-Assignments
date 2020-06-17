//*************************************************************************************************
//  Name:       Farhan Shakil
//  Course:     Web & Mobile Application Development Course
//  Email:      mfarhanshakil@gmail.com
//  Roll #      WM3398

//*************************************************************************************************
//  CHAPTER # 1 , QUESTION # 1
//      Write a script to greet your website visitor using JS alert box.

    alert("Greetings for Website Visitor");

//*************************************************************************************************
//  CHAPTER # 1 , QUESTION # 2
//      Write a script to display following message on your web page 
//      "Error! Please Enter a valid password"

    alert("Error! Please Enter a valid password");

//*************************************************************************************************
//  CHAPTER # 1 , QUESTION # 3
//      Write a script to display following message on your web page 
//          Welcome to JS Land...
//          Happy Coding!

    alert("Welcome to JS Land...\nHappy Coding!");

//*************************************************************************************************
//  CHAPTER # 1 , QUESTION # 4
//      Write a script to display following messages in sequence
//          Welcome to JS Land...
//          Happy Coding!
//          Prevent this page to create additional dialogs

    alert("Welcome to JS Land...");
    alert("Happy Coding! \n\n Prevent this Page from Creating Additional Dialogs");

//*************************************************************************************************
//  CHAPTER # 1 , QUESTION # 5
//      Generate the following message through browser’s developer console
//      Hello... I can rus JS through my Web Browser's Console
//          Press Ctrl+Shift+j

    console.log("Hello... I can rus JS through my Web Browser's Console");

//*************************************************************************************************
//  CHAPTER # 1 , QUESTION # 6
//      Make use of alerts in your new/existing HTML & CSS project

    alert("Learning Alert in Java Script");
    alert("Learning it really Fast");
    alert("Displaying another alert window");
    alert("This is Final Alert Window");

//*************************************************************************************************
//  CHAPTER # 1 , QUESTION # 7
//      Practice placement of script element in Head and Body sections of your project in exercise 

//      Placement in HTML

// <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Ch. 1 Ques. 7</title>
//         <script src="app.js"></script>
//     </head>
    
//     <script>
//         alert("This Alert is from before Start of HTML Body Section");
//     </script>

//     <body>
//         <h1>Chapter # 1</h1>
//         <h2>Question # 7</h2>

//         <script>
//             alert("This Alert is from HTML Body Section");
//         </script>

//         <h3>Practice placement of script element in Head and Body sections of your project in exercise 6</h3> 

//         <button onclick="displayFunction()">RUN</button>   
//     </body>

//     <script>
//         alert("This Alert is from End of HTML Body Section");
//     </script>
// </html>

    alert("This Alert is from app.js in Head Section");

//*************************************************************************************************
//  CHAPTER # 2 , QUESTION # 1
//      Declare a variable called username

    var username;
    alert("Value of Variable = " + username);

//*************************************************************************************************
//  CHAPTER # 2 , QUESTION # 2
//      Declare a variable called myName & assign to it a string that represents your Full Name

    var myName;
    myName = "Farhan Shakil"
    alert("Value of Variable = " + myName);

//*************************************************************************************************
//  CHAPTER # 2 , QUESTION # 3
//      Write script to
//          a) Declare a JS variable, titled message.
//          b) Assign “Hello World” to variable message.
//          c) Display the message in alert box.

    var message;
    message = "Hello World"
    alert(message);

//*************************************************************************************************
//  CHAPTER # 2 , QUESTION # 4
//      Write a script to save student’s bio data in JS variables and show the data in alert boxes

    var name;
    var age;
    var course;

    name = "Jhone Doe";
    age = 15;
    course = "Certified Mobile Application Development"

    alert(name);
    alert(age + " Years Old");
    alert(course);

//*************************************************************************************************
//  CHAPTER # 2 , QUESTION # 5
//      Write a script to display the following alert using one JS variable
//          PIZZA
//          PIZZ
//          PIZ
//          PI
//          P

    var food;

    food = "PIZZA";

    alert(food + "\n" + 
          food.substring(0,4) + "\n" + 
          food.substring(0,3) + "\n" + 
          food.substring(0,2) + "\n" + 
          food.substring(0,1));

//*************************************************************************************************
//  CHAPTER # 2 , QUESTION # 6
//      Declare a variable called email and assign to it a string that represents 
//      your Email Address(e.g. example@example.com). Show email in an alert box.

    var email;

    email = "mfarhanshakil@gmail.com";

    alert("My Email Address is " + email);

//*************************************************************************************************
//  CHAPTER # 2 , QUESTION # 7
//      Declare a variable called book & give it the value “A smarter way to learn JavaScript”. 
//          Display the following message in an alert box.
//              I am trying to learn from the Book A Smarter Way to Learn JavaScript

    var book;

    book = "A Smarter Way to Learn JavaScript";

    alert("I am trying to learn from the Book " + book);

//*************************************************************************************************
//  CHAPTER # 2 , QUESTION # 8
//      Write a script to display this in browser through JS.
//          Yah! I can write HTML contect through JavaScript

    document.write("Yah! I can write HTML contect through JavaScript");

//*************************************************************************************************
//  CHAPTER # 2 , QUESTION # 9
//      Store following string in a variable and show in alert and browser through JS
//          ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬

    var art_data;

    art_data = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

    alert(art_data);

//*************************************************************************************************
//  CHAPTER # 3 , QUESTION # 1
//      Declare a variable called age & assign to it your age. Show your age in an alert box

    var age;

    age = 36;

    alert("I am " + age + " Years Old");

//*************************************************************************************************
//  CHAPTER # 3 , QUESTION # 2
//      Declare & initialize a variable to keep track of how many times a visitor has visited a web page. 
//      Show his/her number of visits on your web page. 
//          For example: “You have visited this site N times”

    var website_visit;

    website_visit = 20 

    alert("You have visited this site " + website_visit + " times")

//*************************************************************************************************
//  CHAPTER # 3 , QUESTION # 3
//      Declare a variable called birthYear & assign to it your birth year. 
//          Show the following message in your browser
//              My Birth Year is 1990
//              Data Type of my Declared Variable is number

    var birthYear;

    birthYear = 1984

    document.write("My Birth Year is " + birthYear + "<br>");
    document.write("Data Type of my Declared Variable is " + typeof(birthYear));

//*************************************************************************************************
//  CHAPTER # 3 , QUESTION # 4
//      A visitor visits an online clothing store www.xyzClothing.com . 
//          Write a script to store in variables the following information: 
//              a. Visitor’s name
//              b. Product title
//              c. Quantity i.e. how many products a visitor wants to order
//                  Show the following message in your browser: 
//                      “John Doe ordered 5 T-shirt(s) on XYZ Clothing store

    var visitor_name;
    var product_title;
    var product_quantity;

    visitor_name = window.prompt("Enter Your Name: ");
    product_title = window.prompt("Enter Product Name:");
    product_quantity = window.prompt("Enter Product Quantity:");
        
    document.write("<h1>" + visitor_name + " ordered " + 
                    product_quantity + " " + 
                    product_title + " on XYZ Clothing store </h1>");

//*************************************************************************************************
//  CHAPTER # 4 , QUESTION # 1
//      Declare 3 variables in one statement.

    var name = "Farhan Shakil" , program = "Web & Mobile Hybrid App" , year = 2020;

    alert("First Variable \"name\" and its value = " + name + 
          "\nSecond Variable \"program\" and its value = " + program +  
          "\nThird Variable \"year\" and its value = " + year);

//*************************************************************************************************
//  CHAPTER # 4 , QUESTION # 2
//      Declare 5 legal & 5 illegal variable names

    var $firstVar , _secondVar , thirdVar , Var4 , var_5_$;

//    var 123 , 1var , alert , my var , 9_$var;

    alert("Variable Name \"$firstVar\" & Its Value = " + $firstVar +
        "\nVariable Name \"_secondVar\" & Its Value = " + _secondVar +
        "\nVariable Name \"thirdVar\" & Its Value = " + thirdVar +
        "\nVariable Name \"Var4\" & Its Value = " + Var4 +
        "\nVariable Name \"var_5_$\" & Its Value = " + var_5_$);

//*************************************************************************************************
//  CHAPTER # 4 , QUESTION # 3
//      Display this in your browser
//          a) A heading stating “Rules for naming JS variables”
//          b) Variable names can only contain ______, ______, ______ and ______.
//          c) Variables must begin with a ______, ______ or _____. 
//          d) Variable names are case _________
//          e) Variable names should not be JS _________

    document.write(`<h1>\“Rules for naming JS variables\”</h1><br>`);
    document.write(`<h3> Variable names can only contain <u>letters</u>, 
                    <u>numbers</u>, <u>dollar signs ($)</u> and <u>underscores (_)</u>.</h3>`);
    document.write(`<h3> Variables must begin with a <u>letter</u>, <u>dollar sign ($)</u> or 
                    <u>underscore (_)</u>.</h3>`);
    document.write(`<h3> Variable names are <u>case sensitive</u>.</h3>`);
    document.write(`<h3> Variable names should not be <u>JS Keywords</u>.</h3>`);

//*************************************************************************************************
//  CHAPTER # 5 , QUESTION # 1
//      Write a program that take two numbers & add them in a new variable.
//          Show the result in your browser.

    var firstNum = 0;
    var secondNum = 0;

    firstNum = Number(prompt("Enter First Number:"));
    secondNum = Number(prompt("Enter Second Number:"));

    document.write("<h2> Sum of Two Numbers </h2><br>");
    document.write(`<h3> ${firstNum} + ${secondNum} = ${firstNum + secondNum} </h3>`);

//*************************************************************************************************
//  CHAPTER # 5 , QUESTION # 2
//      Write a program for subtraction, multiplication, division & modulus.
//          Show the result in your browser.

    var firstNum = 0;
    var secondNum = 0;

    firstNum = Number(prompt("Enter First Number:"));
    secondNum = Number(prompt("Enter Second Number:"));

    document.write("<h2> Subtraction of Two Numbers </h2>");
    document.write(`<h3> ${firstNum} - ${secondNum} = ${firstNum - secondNum} </h3><br>`);

    document.write("<h2> Multiplication of Two Numbers </h2>");
    document.write(`<h3> ${firstNum} x ${secondNum} = ${firstNum * secondNum} </h3><br>`);

    document.write("<h2> Division of Two Numbers </h2>");
    document.write(`<h3> ${firstNum} / ${secondNum} = ${firstNum / secondNum} </h3><br>`);

    document.write("<h2> Modulus of Two Numbers </h2>");
    document.write(`<h3> ${firstNum} % ${secondNum} = ${firstNum % secondNum} </h3><br>`);

//*************************************************************************************************
//  CHAPTER # 5 , QUESTION # 3
//      Do the following using JS Mathematic Expressions
//          a. Declare a variable.
//          b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
//          c. Initialize the variable with some number.
//          d. Show the value of variable in your browser like “Initial value: 5”.
//          e. Increment the variable.
//          f. Show the value of variable in your browser like “Value after increment is: 6”.
//          g. Add 7 to the variable.
//          h. Show the value of variable in your browser like “Value after addition is: 13”.
//          i. Decrement the variable.
//          j. Show the value of variable in your browser like “Value after decrement is: 12”.
//          k. Show the remainder after dividing the variable’s value by 3.
//          l. Output : “The remainder is : 0”.

    var myVar;
        
    document.write("<h3> Value after Variable Declaration is: " + myVar + " </h3>");

    myVar = 145;

    document.write("<h3> Initial Value: " + myVar + " </h3>");

    myVar++;

    document.write("<h3> Value after Increment is: " + myVar + " </h3>");

    myVar += 7;

    document.write("<h3> Value after Addition of 7 is: " + myVar + " </h3>");

    myVar--;

    document.write("<h3> Value after Decrement is: " + myVar + " </h3>");

    myVar %= 3;

    document.write("<h3> The Remainder after division by 3 is: " + myVar + " </h3>");

//*************************************************************************************************
//  CHAPTER # 5 , QUESTION # 4
//      Cost of one movie ticket is 600 PKR. 
//          Write a script to store ticket price in a variable & 
//          calculate the cost of buying 5 tickets to a movie. 

    var ticketPrice;
    var totalTickets;

    ticketPrice  = Number(prompt("Enter Price of Movie Ticket:"));
    totalTickets = Number(prompt("Enter Total Tickets to Buy:"));

    document.write(`<h1> Total Cost to buy ${totalTickets} 
                    Movie Tickets is ${ticketPrice * totalTickets} </h1>`);

//*************************************************************************************************
//  CHAPTER # 5 , QUESTION # 5
//      Write a script to display multiplication table of any number in your browser.

    var numberForTable;

    numberForTable = Number(prompt("Enter Number to Diplay Table:"));

    for (let index = 1; index < 11; index++) 
    {
        document.write(`<h1> ${numberForTable} x ${index} = ${numberForTable * index} </h1>`);        
    }

//*************************************************************************************************
//  CHAPTER # 5 , QUESTION # 6
//      The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//          a. Store a Celsius temperature into a variable.
//          b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//          c. Now store a Fahrenheit temperature into a variable.
//          d. Convert it to Celsius & output “NNoF is NNoC”

    var celsiusTemp;
    var fahrenheitTemp;

    celsiusTemp = Number(prompt("Enter Temperature in Celsius:"));

    document.write(`<h1> Entered Temperature in Celsius      = ${celsiusTemp} °C </h1>`);

    fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;

    document.write(`<h1> Converted Temperature in Fahrenheit = ${fahrenheitTemp} °F </h1>`);     

    fahrenheitTemp = Number(prompt("Enter Temperature in Fahrenheit:"));

    document.write(`<h1> Entered Temperature in Fahrenheit   = ${fahrenheitTemp} °F </h1>`);

    celsiusTemp = (fahrenheitTemp - 32) * 5 /9;

    document.write(`<h1> Converted Temperature in Fahrenheit = ${celsiusTemp} °C </h1>`);  

//*************************************************************************************************
//  CHAPTER # 5 , QUESTION # 7
//      Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
//          Store the following in variables. 
//              a. Price of item 1
//              b. Price of item 2
//              c. Ordered quantity of item 1
//              d. Ordered Quantity of item 2
//              e. Shipping charges
//                  Compute the total cost & show the receipt in your browser.

    var priceItem1;
    var priceItem2;
    var quantityItem1;
    var quantityItem2;
    var shipingCharges;
    var totalCost;

    priceItem1 = Number(prompt("Enter Price if Item # 1:"));
    quantityItem1 = Number(prompt("Enter Quantity of Item # 1:"));
    priceItem2 = Number(prompt("Enter Price if Item # 2:"));
    quantityItem2 = Number(prompt("Enter Quantity of Item # 2:"));
    shipingCharges = Number(prompt("Enter Shiping Charges:"));

    totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shipingCharges;

    document.write(`<h1> Item # 1 Cost     = Rs. ${priceItem1} </h1>`);
    document.write(`<h1> Item # 1 Quantity = ${quantityItem1} </h1>`);
    document.write(`<h1> Item # 2 Cost     = Rs. ${priceItem2} </h1>`);
    document.write(`<h1> Item # 2 Quantity = ${quantityItem2} </h1>`);
    document.write(`<h1> Shiping Charges   = Rs. ${shipingCharges} </h1>`);
    document.write(`<h1> --------------------------------------</h1>`);

    document.write(`<h1> Total Cost of Order = <u>Rs. ${totalCost}</u> </h1>`);

//*************************************************************************************************
//  CHAPTER # 5 , QUESTION # 8
//      Store total marks & marks obtained by a student in 2 variables. 
//      Compute the percentage & show the result in your browser.

    var totalMarks;
    var obtainedMarks;
    var studentPercentage;

    totalMarks    = Number(prompt("Enter Total Marks:"));
    obtainedMarks = Number(prompt("Enter Obtained Marks:"));

    studentPercentage = (obtainedMarks / totalMarks) * 100;

    document.write(`<h1> Marks Sheet </h1>`);
    document.write(`<h3> Total Marks   : ${totalMarks} </h3>`);
    document.write(`<h3> Obtained Marks: ${obtainedMarks} </h3>`);
    document.write(`<h3>-----------------------------------</h3>`);
    document.write(`<h2> Percentage: ${studentPercentage}% </h2>`);    

//*************************************************************************************************
//  CHAPTER # 5 , QUESTION # 9
//      Assume we have 10 US dollars & 25 Saudi Riyals.
//      Write a script to convert the total currency to Pakistani Rupees
//          Perform all calculations in a single expression
//              Exchange rates :    1 US Dollar = 104.80 Pakistani Rupee
//                              1 Saudi Riyal = 28 Pakistani Rupee   
    
    const USD_EX_RATE = 104.80;
    const SAR_EX_RATE = 28;
    
    var usDollars;
    var saudiRiyals;
    var pakistaniRupees;

    usDollars = 10;
    saudiRiyals = 25;

    pakistaniRupees = (usDollars * USD_EX_RATE) + (saudiRiyals * SAR_EX_RATE) 

    document.write(`<h1> Currency in PKR </h1>`);
    document.write(`<h3> US Dollars = ${usDollars} $ </h3>`);
    document.write(`<h3> Saudi Riyals = ${saudiRiyals} SAR </h3>`);
    document.write(`<h3>-----------------------------------</h3>`);
    document.write(`<h2> Converted Currency in PKR = Rs. ${pakistaniRupees} </h2>`); 

//*************************************************************************************************
//  CHAPTER # 5 , QUESTION # 10
//      Write a program to initialize a variable with some number and do arithmetic in following sequence:
//          a. Add 5
//          b. Multiply by 10
//          c. Divide the result by 2
//          Perform all calculations in a single expression

    var testNum;

    document.write(`<h1> Arithmatic Calculations</h1>`);

    testNum = 99;

    document.write(`<h2> Initialized Value of Variable = ${testNum} </h2>`);

    testNum = (((testNum + 5) * 10) / 2);

    document.write(`<h3> Following Arithmatic Operations are Performed: </h3>`);
    document.write(`<h3> Added 5 to Number </h3>`); 
    document.write(`<h3> Multiplied Result by 10 </h3>`);
    document.write(`<h3> Divided Result by 2 </h3><br>`);   
    document.write(`<h2> Value after Performing Arithmatic Operations = ${testNum} </h2>`);

//*************************************************************************************************
//  CHAPTER # 5 , QUESTION # 11
//      The Age Calculator: Forgot how old someone is?
//          Calculate it!
//              a. Store the current year in a variable.
//              b. Store their birth year in a variable.
//              c. Calculate their 2 possible ages based on the stored values.
//              Output them to the screen like so: “They are either NN or NN years old”.

    var birthYear;
    var currentYear;
    var expectedAge;

    birthYear   = prompt("Enter Your Birth Year:");
    currentYear = prompt("Enter Current Year:");

    expectedAge = currentYear - birthYear;

    document.write(`<h1> AGE CALCULATOR </h1>`);

    document.write(`<h2> Age is either ${expectedAge - 1} or ${expectedAge} Years </h2>`);

//*************************************************************************************************
//  CHAPTER # 5 , QUESTION # 12
//      The Geometrizer: Calculate properties of a circle.
//          a. Store a radius into a variable.
//          b. Calculate the circumference based on the radius, and output “The circumference is NN”.
//              (Hint : Circumference of a circle = 2 π r , π = 3.142)
//          Calculate the area based on the radius, and output “The area is NN”. 
//              (Hint : Area of a circle = π r2, π = 3.142)

    const PI = 3.142;
        
    var circleRadius;
    var circleCircumference;
    var circleArea;

    circleRadius = prompt("Enter Radius of Circle in cm:");

    circleCircumference = 2 * PI * circleRadius;
    circleArea          = PI * circleRadius * circleRadius;

    document.write(`<h1> THE GEOMETRIZER </h1>`);

    document.write(`<h2> Radius of Circle = ${circleRadius} cm </h2>`);
    document.write(`<h2> Circumference of Circle = ${circleCircumference.toFixed(3)} cm </h2>`);
    document.write(`<h2> Area of Circle = ${circleArea.toFixed(3)} cm<sup>2</sup> </h2>`);

//*************************************************************************************************
//  CHAPTER # 5 , QUESTION # 13
//      The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
//          Wonder no more.
//              a. Store your favorite snack into a variable
//              b. Store your current age into a variable.
//              c. Store a maximum age into a variable.
//              d. Store an estimated amount per day (as a number).
//              e. Calculate how many would you eat total for the rest of your life.
//              Output the result to the screen like so: 
//                  “You will need NNNN to last you until the ripe old age of NN”.

    const DAYS_IN_YEAR = 365;

    var favSnack;
    var currentAge;
    var maximumAge;
    var snackPerDay;
    var lifeSupply;

    favSnack    = prompt("Enter Your Favourite Snack:");
    currentAge  = prompt("Enter Your Current Age:");
    maximumAge  = prompt("Enter Estimated Maximum Age:");
    snackPerDay = prompt("Enter Snacks Intake Per Day:"); 

    lifeSupply = (((maximumAge - currentAge) * DAYS_IN_YEAR) * snackPerDay);

    document.write(`<h1> THE LIFE TIME SUPPLY CALCULATOR</h1>`);
    document.write(`<h2> You will need ${lifeSupply} to last you until the ripe old age of ${maximumAge} </h2>`);

//*************************************************************************************************
//  CHAPTER # 6-9 , QUESTION # 1
//      Write a program to take a number in a variable, 
//          do the required arithmetic (a++, ++a, a-- & --a) to display the result in browser

    var num4Arithmatic;

    num4Arithmatic = prompt("Enter Any Number to Perform Arithmatic Operation:");

    document.write(`<h1> ARITHMATIC OPERATIONS</h1>`);
    document.write(`<h3> Result: <br> Value Entered by User = ${num4Arithmatic} </h3>`);
    document.write(`<h2>...............................................</h2>`);

    document.write(`<h3> <br> Value of <i><u>++num4Arithmatic</u></i> = ${++num4Arithmatic} </h3>`);
    document.write(`<h3> Value of <i><u>num4Arithmatic</u></i> = ${num4Arithmatic} </h3>`);

    document.write(`<h3> <br> Value of <i><u>num4Arithmatic++</u></i> = ${num4Arithmatic++} </h3>`);
    document.write(`<h3> Value of <i><u>num4Arithmatic</u></i> = ${num4Arithmatic} </h3>`);

    document.write(`<h3> <br> Value of <i><u>--num4Arithmatic</u></i> = ${--num4Arithmatic} </h3>`);
    document.write(`<h3> Value of <i><u>num4Arithmatic</u></i> = ${num4Arithmatic} </h3>`);

    document.write(`<h3> <br> Value of <i><u>num4Arithmatic--</u></i> = ${num4Arithmatic--} </h3>`);
    document.write(`<h3> Value of <i><u>num4Arithmatic</u></i> = ${num4Arithmatic} </h3>`);

//*************************************************************************************************
//  CHAPTER # 6-9 , QUESTION # 2
//      What will be the output in variables a, b & result after execution of the following script:
//          var a = 2, b = 1;
//          var result = --a - --b + ++b + b--;
//              Explain the output at each stage:
//                  --a;
//                  --a - --b;
//                  --a - --b + ++b;
//                  --a - --b + ++b + b--;

    var a = 2 , b = 1;

    document.write(`<h1> PRE & POST INCREMENT AND DECREMENT OPERATIONS</h1>`);
    document.write(`<h3> Intial Value of <i><u>a</u></i> = ${a} </h3>`);
    document.write(`<h3> Intial Value of <i><u>b</u></i> = ${b} </h3>`);
    document.write(`<h2>...............................................</h2>`);

    document.write(`<h1> PERFORMING COMPUTATIONS</h1>`);
    document.write(`<h3> Value of <i><u>--a</u></i> = ${--a} </h3>`);

    a++;

    document.write(`<h3> Value of <i><u>--a - --b</u></i> = ${--a - --b} </h3>`);

    a++;
    b++;

    document.write(`<h3> Value of <i><u>--a - --b + ++b</u></i> = ${--a - --b + ++b} </h3>`);

    a++;

    document.write(`<h3> Value of <i><u>--a - --b + ++b + b--</u></i> = ${--a - --b + ++b + b--} </h3>`);

//*************************************************************************************************
//  CHAPTER # 6-9 , QUESTION # 3
//      Write a program that takes input a name from user & greet the user

    var userName;

    userName = prompt("Enter Your Good Name Please:");

    document.write(`<h1> Greetings ${userName}</h1>`);
 
//*************************************************************************************************
//  CHAPTER # 6-9 , QUESTION # 4
//      No Question Against 4 in Assignment File

//*************************************************************************************************
//  CHAPTER # 6-9 , QUESTION # 5
//      Write a program to take input a number from user & display it’s multiplication table on your browser 
//      If user does not enter a new number, multiplication table of 5 should be displayed by default

    var numValue;

    numValue = prompt("Enter Any Number of Choice for Table:");

    if (numValue == null || numValue == 0)
    {
        numValue = 5;
    }

    document.write(`<h1> TABLE OF '${numValue}'</h1>`);

    for (let index = 1; index <= 10; index++) 
    {
        document.write(`<h3> ${numValue} x ${index} = ${numValue * index} </h3>`);        
    }

//*************************************************************************************************
//  CHAPTER # 6-9 , QUESTION # 6
//      Perform below Task
//          a) Take three subjects name from user and store them in 3 different variables.
//          b) Total marks for each subject is 100, store it in another variable.
//          c) Take obtained marks for first subject from user and stored it in different variable.
//          d) Take obtained marks for remaining 2 subjects from user and store them in variables.
//          e) Now calculate total marks and percentage and show the result in browser like this.

    var firstSubjectName , secondSubjectName , thirdSubjectName;

    var totalMarks , obtainedMarks , percentAge;

    var firstSubjectMarks , secondSubjectMarks , thirdSubjectMarks;

    firstSubjectName  = prompt("Enter Name of First Subject:");
    firstSubjectMarks = Number(prompt("Enter Marks Obtained in First Subject:"));

    secondSubjectName  = prompt("Enter Name of Second Subject:");
    secondSubjectMarks = Number(prompt("Enter Marks Obtained in Second Subject:"));

    thirdSubjectName  = prompt("Enter Name of Third Subject:");
    thirdSubjectMarks = Number(prompt("Enter Marks Obtained in Third Subject:"));

    totalMarks = 100;

    document.write(`<h1> MARKS SHEET</h1><br>`);

    document.write(`<table> 
                        <tr> 
                            <th><h2>&nbsp&nbsp<u>SUBJECT</u>&nbsp&nbsp</h2></th>
                            <th><h2>&nbsp&nbsp<u>TOTAL MARKS</u>&nbsp&nbsp</h2></th>
                            <th><h2>&nbsp&nbsp<u>OBTAINED MARKS</u>&nbsp&nbsp</h2></th>
                            <th><h2>&nbsp&nbsp<u>PERCENTAGE</u>&nbsp&nbsp</h2></th>
                        </tr>
                        <tr> 
                            <td><h2>&nbsp&nbsp&nbsp${firstSubjectName}</h2></td>
                            <td><h2>&nbsp&nbsp&nbsp${totalMarks}</h2></td>
                            <td><h2>&nbsp&nbsp&nbsp${firstSubjectMarks}</h2></td>
                            <td><h2>&nbsp&nbsp&nbsp${firstSubjectMarks}%</h2></td>
                        </tr>
                        <tr> 
                            <td><h2>&nbsp&nbsp&nbsp${secondSubjectName}</h2></td>
                            <td><h2>&nbsp&nbsp&nbsp${totalMarks}</h2></td>
                            <td><h2>&nbsp&nbsp&nbsp${secondSubjectMarks}</h2></td>
                            <td><h2>&nbsp&nbsp&nbsp${secondSubjectMarks}%</h2></td>
                        </tr>
                        <tr> 
                            <td><h2>&nbsp&nbsp&nbsp${thirdSubjectName}</h2></td>
                            <td><h2>&nbsp&nbsp&nbsp${totalMarks}</h2></td>
                            <td><h2>&nbsp&nbsp&nbsp${thirdSubjectMarks}</h2></td>
                            <td><h2>&nbsp&nbsp&nbsp${thirdSubjectMarks}%</h2></td>
                        </tr>`);

    obtainedMarks = firstSubjectMarks + secondSubjectMarks + thirdSubjectMarks;

    percentAge = (obtainedMarks/ (3 * totalMarks)) * 100;

    document.write(`<tr> 
                        <td><h2>&nbsp&nbsp&nbsp<u>RESULT</u></h2></td>
                        <td><h2>&nbsp&nbsp&nbsp<u>${totalMarks * 3}</u></h2></td>
                        <td><h2>&nbsp&nbsp&nbsp<u>${obtainedMarks}</u></h2></td>
                        <td><h2>&nbsp&nbsp&nbsp<u>${percentAge}%</u></h2></td>
                    </tr></table>`);

//*************************************************************************************************
//  CHAPTER # 6-9 , QUESTION # 7
//      No Question Against 7 in Assignment File

//*************************************************************************************************
//  CHAPTER # 9-11 , QUESTION # 1
//      Write a program to take “city” name as input from user. 
//          If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

    var cityName;

    cityName = prompt("Enter Name of City:");

    document.write(`<h1>&nbsp&nbsp&nbsp CITY NAME = ${cityName.toUpperCase()}</h1>`);

    if (cityName.toUpperCase() === "KARACHI")
    {
        document.write(`<br><h1>&nbsp&nbsp Welcome to City of Lights</h1>`);
    }
    else
    {
        document.write(`<br><h1>&nbsp&nbsp No Message for this City</h1>`);
    }

//*************************************************************************************************
//  CHAPTER # 9-11 , QUESTION # 2
//      Write a program to take “gender” as input from user. 
//          If the user is male, give the message: 
//              Good Morning Sir. 
//          If the user is female, give the message: 
//              Good Morning Ma’am

    var userGender;

    userGender = prompt("Enter Your Gender Please:");

    document.write(`<h1>&nbsp&nbsp&nbsp WELCOME MESSAGE</h1>`);

    if (userGender.toUpperCase() === "MALE")
    {
        document.write(`<br><h1>&nbsp&nbsp Good Morning Sir</h1>`);
    }
    else if (userGender.toUpperCase() === "FEMALE")
    {
        document.write(`<br><h1>&nbsp&nbsp Good Morning Ma'am</h1>`);
    }
    else
    {
        document.write(`<br><h1>&nbsp&nbsp Invalid Entry</h1>`);
    }

//*************************************************************************************************
//  CHAPTER # 9-11 , QUESTION # 3
//      Write a program to take input color of road traffic signal from the user & 
//      show the message according to this table
//          Signal Color            Message
//              Red                Must Stop               
//             Yellow             Ready to Move
//             Green                Move Now

    var signalColor;

    signalColor = prompt("Enter Color of Traffic Signal Light:");

    document.write(`<h1>&nbsp&nbsp&nbsp TRAFFIC SIGNAL STATUS MESSAGE</h1>`);

    if (signalColor.toUpperCase() === "RED")
    {
        document.write(`<br><h2>&nbsp&nbsp Signal Color = RED </h2><h1>
                        &nbsp&nbsp&nbsp&nbsp Must Stop</h1>`);
    }
    else if (signalColor.toUpperCase() === "YELLOW")
    {
        document.write(`<br><h2>&nbsp&nbsp Signal Color = YELLOW </h2><h1> 
                        &nbsp&nbsp&nbsp&nbsp Ready to Move</h1>`);
    }
    else if (signalColor.toUpperCase() === "GREEN")
    {
        document.write(`<br><h2>&nbsp&nbsp Signal Color = GREEN </h2><h1> 
        &nbsp&nbsp&nbsp&nbsp Move Now</h1>`);
    }
    else
    {
        document.write(`<br><h1>&nbsp&nbsp Invalid Entry</h1>`);
    }

//*************************************************************************************************
//  CHAPTER # 9-11 , QUESTION # 4
//      Write a program to take input remaining fuel in car (in litres) from user. 
//          If the current fuel is less than 0.25litres,
//          show the message “Please refill the fuel in your car”

    var fuelInLitre;

    fuelInLitre = prompt("Enter Car Remaining Fuel in Litres:");

    document.write(`<h1> CAR FUEL STATUS</h1>`);

    if (fuelInLitre >= "0.25")
    {
        document.write(`<br><h1>Fuel in Car = ${fuelInLitre} Litres </h1>`);
        document.write(`<h2>Enough Fuel in Car </h2>`);
    }
    else if (fuelInLitre >= "0" && fuelInLitre < "0.25")
    {
        document.write(`<br><h1>Fuel in Car = ${fuelInLitre} Litres </h1>`);
        document.write(`<h2> Please Refill the Fuel in Your Car </h2>`);
    }
    else
    {
        document.write(`<br><h1>&nbsp&nbsp Invalid Entry</h1>`);
    }

//*************************************************************************************************
//  CHAPTER # 9-11 , QUESTION # 5
//      Run this script, & check whether alert message would be displayed or not. 
//          Record the outputs.
//              a. var a = 4;
//                  if(++a === 5)
//                  {
//                    alert("given condition for variable a is true");
//                  }
//              b. var b = 82;
//                  if (b++ === 83)
//                  {
//                      alert("given condition for variable b is true");
//                  }
//              c. var c = 12;
//                  if (c++ === 13)
//                  {
//                      alert("condition 1 is true");
//                  }
//                  if (c === 13)
//                  {
//                      alert("condition 2 is true");
//                  }
//                  if (++c < 14)
//                  {
//                      alert("condition 3 is true");
//                  }
//                  if(c === 14)
//                  {
//                      alert("condition 4 is true");
//                  }
//              d. var materialCost = 20000;
//                  var laborCost = 2000;
//                  var totalCost = materialCost + laborCost;
//                  
//                  if (totalCost === laborCost + materialCost)
//                  {
//                      alert("The cost equals");
//                  }
//              e. if (true)
//                  {
//                      alert("True");
//                  }
//                  if (false)
//                  {
//                      alert("False");
//                  }
//              f. if("car" < "cat")
//                  {
//                      alert("car is smaller than cat");
//                  }

    document.write(`<h1> TESTING IF CONDITIONS</h1>`);

    // ---------------- First Check --------------------------------------------

    var a = 4;

    document.write(`<br><h2> Value of a = ${a}</h2>`);

    if(++a === 5)
    {
        alert("Given Condition for Variable a is True");
        document.write(`<h2> Testing for Condition ++a (${a}) === 5</h2>`);
        document.write(`<h2> Given Condition for Variable "a" is True</h2>`);
    }

    // ---------------- Second Check -------------------------------------------
    
    var b = 82;

    document.write(`<br><h2> Value of b = ${b}</h2>`);

    if (b++ === 83)
    {
        alert("Given Condition for Variable b is True");
        document.write(`<h2> Testing for Condition b++ (${b}) === 83</h2>`);
        document.write(`<h2> Given Condition for Variable "b" is True</h2>`);
    }
    
    // ---------------- Third Check --------------------------------------------

    var c = 12;

    document.write(`<br><h2> Value of c = ${c}</h2>`);

    if (c++ === 13)
    {
        alert("Condition 1 is True");
        document.write(`<h2> Testing for Condition c++ (${c}) === 13</h2>`);
        document.write(`<h2> Condition 1 is True</h2>`);
    }
    if (c === 13)
    {
        alert("Condition 2 is True");
        document.write(`<h2> Testing for Condition c (${c}) === 13</h2>`);
        document.write(`<h2> Condition 2 is True</h2>`);
    }
    if (++c < 14)
    {
        alert("Condition 3 is True");
        document.write(`<h2> Testing for Condition ++c (${c}) < 14</h2>`);
        document.write(`<h2> Condition 3 is True</h2>`);
    }
    if(c === 14)
    {
        alert("Condition 4 is True");
        document.write(`<h2> Testing for Condition c (${c}) === 14</h2>`);
        document.write(`<h2> Condition 4 is True</h2>`);
    }

    // ---------------- Fourth Check -------------------------------------------

    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;

    document.write(`<br><h2> Material Cost = ${materialCost}</h2>`);
    document.write(`<h2> Labor Cost = ${laborCost}</h2>`);
    document.write(`<h2> Total Cost = ${totalCost}</h2>`);

    if (totalCost === laborCost + materialCost)
    {
        alert("The cost equals");
        document.write(`<h2> Testing for Condition Total Cost (${totalCost}) === 
                        Labor Cost (${laborCost}) + Material Cost (${materialCost})</h2>`);
        document.write(`<h2> The Cost Equals</h2>`);
    }

    // ---------------- Fifth Check --------------------------------------------

    document.write(`<br><h2> Testing for True & False Condition</h2>`);

    if (true)
    {
        alert("True");
        document.write(`<h2> Testing for "true"</h2>`);
        document.write(`<h2> True</h2>`);
    }
    
    if (false)
    {
        alert("False");
        document.write(`<h2> Testing for "false"</h2>`);
        document.write(`<h2> False</h2>`);
    }

    // ---------------- Sixth Check --------------------------------------------
    
    if("car" < "cat")
    {
        alert("Car is Smaller than Cat");
        document.write(`<br><h2> Testing for "car" < "cat"</h2>`);
        document.write(`<h2> Car is Smaller than Cat</h2>`);
    }

//*************************************************************************************************
//  CHAPTER # 9-11 , QUESTION # 6
//      Write a program to take input the marks obtained in three subjects & total marks. 
//          Compute & show the resulting percentage on your page. 
//              Take percentage & compute grade as per following table:
//                 Percentage %                 Grade            Remarks
//          Greater than or Equal to 80         A-One           Excellent
//          Greater than or Equal to 70           A               Good
//          Greater than or Equal to 60           B          You Need to Improve
//                Less than 60                   Fail             Sorry
//      Show the total marks, marks obtained, percentage, grade & remarks like

    var sujectMarks1 = Number(prompt("Enter Subject # 1 Obtained Marks:")); 
    var sujectMarks2 = Number(prompt("Enter Subject # 2 Obtained Marks:"));
    var sujectMarks3 = Number(prompt("Enter Subject # 3 Obtained Marks:"));

    var totalMarks , obtainedMarks , percentAge;

    obtainedMarks = sujectMarks1 + sujectMarks2 + sujectMarks3;
    totalMarks = 300;

    percentAge = (obtainedMarks / totalMarks) * 100;

    document.write(`<h1> Marks Sheet</h1>`);
    document.write(`<br><h2> Total Marks: ${totalMarks}</h2>`);
    document.write(`<h2> Marks Obtained: ${obtainedMarks}</h2>`);
    document.write(`<h2> Percentage: ${percentAge}%</h2>`);

    if(percentAge >= 80)
    {
        document.write(`<h2>Grade: A-One</h2>`);
        document.write(`<h2>Remarks: Excellent</h2>`);
    }
    else if (percentAge >= 70)
    {
        document.write(`<h2>Grade: A</h2>`);
        document.write(`<h2>Remarks: Good</h2>`);
    }
    else if (percentAge >= 60)
    {
        document.write(`<h2>Grade: B</h2>`);
        document.write(`<h2>Remarks: You Need to Improve</h2>`);
    }
    else
    {
        document.write(`<h2>Grade: Fail</h2>`);
        document.write(`<h2>Remarks: Sorry</h2>`);    
    }

//*************************************************************************************************
//  CHAPTER # 9-11 , QUESTION # 7
//      Guess game:
//          Store a secret number (ranging from 1 to 10) in a variable.
//          Prompt user to guess the secret number.
//              a. If user guesses the same number, 
//                  show “Bingo! Correct answer”.
//              b. If the guessed number +1 is the secret number, 
//                  show “Close enough to the correct answer”

    var secretNumber = 6;

    var userGuess = Number(prompt("Guess the Number between 1 to 10:")); 

    document.write(`<h1> Guess Game</h1>`);
    document.write(`<br><h2> Guess Entered = ${userGuess}</h2>`);
    document.write(`<h2> Secret Number = ${secretNumber}</h2>`);

    if(userGuess === secretNumber)
    {
        document.write(`<br><h2> Bingo! Correct Answer</h2>`);
    }
    else if ((userGuess + 1) === secretNumber)
    {
        document.write(`<br><h2> Close Enough to the Correct Answer</h2>`);
    }
    else
    {
        document.write(`<br><h2>Better Luck Next Time</h2>`);
    }

//*************************************************************************************************
//  CHAPTER # 9-11 , QUESTION # 8
//      Write a program to check whether the given number is divisible by 3. 
//          Show the message to the user if the number is divisible by 3.

    var number2Check = Number(prompt("Enter Number to Check for Divisible by 3:")); 

    document.write(`<h1> Number Division by 3</h1>`);
    document.write(`<br><h2> Number Entered by User = ${number2Check}</h2>`);

    if((number2Check % 3) === 0)
    {
        document.write(`<h2> Number is Divisible by 3</h2>`);
    }
    else
    {
        document.write(`<br><h2> Number is not Divisible by 3</h2>`);
    }

//*************************************************************************************************
//  CHAPTER # 9-11 , QUESTION # 9
//      Write a program that checks whether the given input is an even number or an odd number

    var number2Check = Number(prompt("Enter Any Number to Check for Odd/Even:")); 
        
    document.write(`<h1> Odd/Even Number Check</h1>`);
    document.write(`<br><h2> Input Number = ${number2Check}</h2>`);

    if((number2Check % 2) === 0)
    {
        document.write(`<br><h2> ${number2Check} is Even Number</h2>`);
    }
    else
    {
        document.write(`<br><h2> ${number2Check} is Odd Number</h2>`);
    }

//*************************************************************************************************
//  CHAPTER # 9-11 , QUESTION # 10
//      Write a program that takes temperature as input and shows a message based on following criteria
//          a. T > 40 then “It is too hot outside.”
//          b. T > 30 then “The Weather today is Normal.”
//          c. T > 20 then “Today’s Weather is cool.”
//          d. T > 10 then “OMG! Today’s weather is so Cool.”

    var temperatureValue = Number(prompt("Enter Temperature in Centigrade:")); 
        
    document.write(`<h1> Weather Message</h1>`);
    document.write(`<br><h2> Temperature = ${temperatureValue} <sup>o</sup>C</h2>`);

    if(temperatureValue > 40)
    {
        document.write(`<br><h2> It is too Hot Outside</h2>`);
    }
    else if(temperatureValue > 30)
    {
        document.write(`<br><h2> The Weather Today is Normal</h2>`);
    }
    else if(temperatureValue > 20)
    {
        document.write(`<br><h2> Today's Weather is Cool</h2>`);
    }
    else if(temperatureValue > 10)
    {
        document.write(`<br><h2> OMG! Today's Weather is so Cool</h2>`);
    }
    else
    {
        document.write(`<br><h2> No Message for this Temperature</h2>`);
    }

//*************************************************************************************************
//  CHAPTER # 9-11 , QUESTION # 11
//      Write a program to create a calculator for +,-,*, / & % using if statements. 
//          Take the following input:
//              a. First number
//              b. Second number
//              c. Operation (+, -, *, /, %)
//      Compute & show the calculated result to user.

    var firstNumber  = Number(prompt("Enter First Number:")); 
    var secondNumber = Number(prompt("Enter Second Number:"));
    var desiredOperation = prompt("Enter Desired Operation: \n (+ , - , * , / , %)");

    document.write(`<h1> Calculator</h1>`);
    document.write(`<br><h2> First Number = ${firstNumber} </h2>`);
    document.write(`<h2> Second Number = ${secondNumber} </h2>`);
    document.write(`<h2> Desired Operation = '${desiredOperation}' </h2>`);

    if(desiredOperation === "+")
    {
        document.write(`<br><h2> ${firstNumber} + ${secondNumber} = 
                        ${firstNumber + secondNumber}</h2>`);
    }
    else if(desiredOperation === "-")
    {
        document.write(`<br><h2> ${firstNumber} - ${secondNumber} = 
                        ${firstNumber - secondNumber}</h2>`);    
    }
    else if(desiredOperation === "*")
    {
        document.write(`<br><h2> ${firstNumber} * ${secondNumber} = 
                        ${firstNumber * secondNumber}</h2>`);   
    }
    else if(desiredOperation === "/")
    {
        document.write(`<br><h2> ${firstNumber} / ${secondNumber} = 
                        ${firstNumber / secondNumber}</h2>`);    
    }
    else if(desiredOperation === "%")
    {
        document.write(`<br><h2> ${firstNumber} % ${secondNumber} = 
                        ${firstNumber % secondNumber}</h2>`);
    }
    else
    {
        document.write(`<br><h2> Invalid Operation. Plz Try Again</h2>`);
    }

//*************************************************************************************************
//  CHAPTER # 12-13 , QUESTION # 1
//      Write a program that takes a character (number or string) in a variable & 
//      checks whether the given input is a
//          number, 
//          uppercase letter or 
//          lower case letter.

    var inputCharacter = prompt("Input a Number or Upper Case Letter or Lower Case Letter:"); 

    document.write(`<h1> Number / Letter Check</h1>`);
    document.write(`<br><h2> Input = ${inputCharacter} </h2>`);

    if(inputCharacter.charCodeAt() >= 65 && inputCharacter.charCodeAt() <= 90)
    {
        document.write(`<br><h1> It's Upper Case Letter</h1>`);
    }
    else if(inputCharacter.charCodeAt() >= 97 && inputCharacter.charCodeAt() <= 122)
    {
        document.write(`<br><h1> It's Lower Case Letter</h1>`);
    }
    else if(inputCharacter.charCodeAt() >= 48 && inputCharacter.charCodeAt() <= 57) 
    {
        document.write(`<br><h1> It's a Number</h1>`);
    }
    else
    {
        document.write(`<br><h2> Unable to Detect. Please Try Again</h2>`);
    }

//*************************************************************************************************
//  CHAPTER # 12-13 , QUESTION # 2
//      Write a JavaScript program that accept two integers and display the larger. 
//          Also show if the two integers are equal.

    var firstInteger  = Number(prompt("Enter First Integer:"));
    var secondInteger = Number(prompt("Enter Second Integer:")); 

    document.write(`<h1> INTEGER COMPARISON</h1>`);
    document.write(`<br><h2> First Integer = ${firstInteger} </h2>`);
    document.write(`<h2> Second Integer = ${secondInteger} </h2>`);

    if(firstInteger === secondInteger)
    {
        document.write(`<br><h1> Both Integers are Equal</h1>`);
    }
    else if(firstInteger > secondInteger)
    {
        document.write(`<br><h1> ${firstInteger} is greater than ${secondInteger}</h1>`);
    }
    else
    {
        document.write(`<br><h1> ${firstInteger} is less than ${secondInteger}</h1>`);
    }

//*************************************************************************************************
//  CHAPTER # 12-13 , QUESTION # 3
//      Write a program that takes input a number from user &
//      state whether the number is positive, negative or zero

    var inputValue = Number(prompt("Input Any Number:"));

    document.write(`<h1> POSITIVE, NEGATIVE & ZERO VALUE CHECK</h1>`);
    document.write(`<br><h2> Input = ${inputValue} </h2>`);

    if(inputValue > 0)
    {
        document.write(`<br><h1> Number is Positive</h1>`);
    }
    else if(inputValue < 0)
    {
        document.write(`<br><h1> Number in Negative</h1>`);
    }
    else
    {
        document.write(`<br><h1> Number is Zero</h1>`);
    }

//*************************************************************************************************
//  CHAPTER # 12-13 , QUESTION # 4
//      Write a program that takes a character (i.e. string of length 1) 
//      and returns true if it is a vowel, false otherwise

    var inputChar = prompt("Input Desired Letter:");

    document.write(`<h1> VOWEL CHECK</h1>`);
    document.write(`<br><h2> Input = ${inputChar} </h2>`);

    if(inputChar.toLowerCase() === "a" || 
    inputChar.toLowerCase() === "e" || 
    inputChar.toLowerCase() === "i" || 
    inputChar.toLowerCase() === "o" || 
    inputChar.toLowerCase() === "u")
    {
        document.write(`<br><h1> Vowel = True</h1>`);
    }
    else
    {
        document.write(`<br><h1> Vowel = False</h1>`);
    }

//*************************************************************************************************
//  CHAPTER # 12-13 , QUESTION # 5
//      Write a program that
//          a. Store correct password in a JS variable.
//          b. Asks user to enter his/her password
//          c. Validate the two passwords:
//              i. Check if user has entered password. 
//                  If not, then give message “ Please enter your password”
//              ii. Check if both passwords are same. 
//                  If they are same, show message 
//                  “Correct! The password you entered matches the original password”. 
//                  Show “Incorrect password” otherwise

    var userPassword = "Pakistan12345";

    var enteredPassword = prompt("Enter Your Password: ");

    document.write(`<h1> PASSWORD CHECK</h1>`);
    document.write(`<h1> ${enteredPassword}</h1>`);

    while(true)
    {
        if(enteredPassword == 0)
        {
            enteredPassword = prompt("Nothing Entered \n Please Input Password: ");
        }
        else
        {
            break;
        }
    }

    if(enteredPassword === userPassword)
    {
        document.write(`<br><h1> Correct! The Password You Entered Matches the Original Password</h1>`);        
    }
    else
    {
        document.write(`<br><h1> Incorrect Password</h1>`);
    }

//*************************************************************************************************
//  CHAPTER # 12-13 , QUESTION # 6
//      This if/else statement does not work. Try to fix it:
//          var greeting;
//          var hour = 13;
//          if (hour < 18) 
//          {
//              greeting = "Good day";
//          else
//              greeting = "Good evening";
//          }
//
// "}" before else and "{" after else will resolve error in code
// enhanced code is given below

    var greeting;
    var hour = 13;

    document.write(`<h1> Greetings Message</h1>`);

    if (hour < 18) 
    {
        greeting = "Good Day";
    }
    else
    {
        greeting = "Good Evening";
    }     

    document.write(`<br><h2> Hour = ${hour}00</h2>`);
    document.write(`<h1> ${greeting}</h1>`);

    hour = 20;

    if (hour < 18) 
    {
        greeting = "Good day";
    }
    else
    {
        greeting = "Good evening";
    }     

    document.write(`<br><h2> Hour = ${hour}00</h2>`);
    document.write(`<h1> ${greeting}</h1>`);

//*************************************************************************************************
//  CHAPTER # 12-13 , QUESTION # 7
//      Write a program that takes time as input from user in 24 hours clock format 
//          like: 1900 = 7pm. Implement the following case using if, else & else if statement
//              if time >= 0000 && time < 1200 --->>> Display "Good Morning!"
//              if time >= 1200 && time < 1700 --->>> Display "Good After Noon!"
//              if time >= 1700 && time < 2100 --->>> Display "Good Evening!"
//              if time >= 2100 && time < 2359 --->>> Display "Good Night!"

    var currentTime = prompt("Enter Time in 24Hrs Format: \n i.e., between 0000 --->>> 2359");

    document.write(`<h1> GREETINGS MESSAGE</h1>`);
    document.write(`<br><h2> Current Time = ${currentTime} Hrs</h2>`);

    if(currentTime >= 0000 && currentTime < 1200)
    {
        document.write(`<h1> Good Morning!</h1>`);        
    }
    else if(currentTime >= 1200 && currentTime < 1700)
    {
        document.write(`<h1> Good After Noon!</h1>`);
    }
    else if(currentTime >= 1700 && currentTime < 2100)
    {
        document.write(`<h1> Good Evening!</h1>`);
        }
    else
    {
        document.write(`<h1> Good Night!</h1>`);
    }

//*************************************************************************************************
//  CHAPTER # 14-16 , QUESTION # 1
//      Declare an empty array using JS literal notation to store student names in future

    var studentNames = [];

    document.write(`<h1> ARRAY DECLARATION & INITIALIZATION</h1>`);
    document.write(`<br><h2> Empty Array = ${studentNames}</h2>`);

    studentNames[0] = "Danish";
    studentNames[1] = "Yasir";
    studentNames[2] = "Anjum";

    document.write(`<br><h2> Array after Addition of Values = ${studentNames}</h2>`);

//*************************************************************************************************
//  CHAPTER # 14-16 , QUESTION # 2
//      Declare an empty array using JS object notation to store student names in future

    var studentNames = {};

    document.write(`<h1> ARRAY DECLARATION & INITIALIZATION</h1>`);
    document.write(`<br><h2> Empty Array = ${studentNames}</h2>`);

    studentNames = {"shiftA" : "Danish" ,
                    "shiftB" : "Yasir"  ,
                    "shiftC" : "Anjum"};

    document.write(`<br><h2> Array after Addition of Values = 1) ${studentNames.shiftA}
                    2) ${studentNames.shiftB} 3) ${studentNames.shiftC}</h2>`);

//*************************************************************************************************
//  CHAPTER # 14-16 , QUESTION # 3
//      Declare and initialize a strings array

    var stringsArray = ["Anjum" , "Danish" , "Sadaqat" , "Yasir"];

    document.write(`<h1> STRING ARRAY DECLARATION & INITIALIZATION</h1>`);
    document.write(`<br><h2> Initialized Array = ${stringsArray}</h2>`);

//*************************************************************************************************
//  CHAPTER # 14-16 , QUESTION # 4
//      Declare and initialize a numbers array

    var numbersArray = [62136 , 62651 , 62871 , 63746];

    document.write(`<h1> NUMBER ARRAY DECLARATION & INITIALIZATION</h1>`);
    document.write(`<br><h2> Initialized Array = ${numbersArray}</h2>`);

//*************************************************************************************************
//  CHAPTER # 14-16 , QUESTION # 5
//      Declare and initialize a boolean array

    var booleanArray = [true , true , false , false];

    document.write(`<h1> BOOLEAN ARRAY DECLARATION & INITIALIZATION</h1>`);
    document.write(`<br><h2> Initialized Array = ${booleanArray}</h2>`);

//*************************************************************************************************
//  CHAPTER # 14-16 , QUESTION # 6
//      Declare and initialize a mixed array

    var mixedArray = ["Farhan" , 63747 , true , -999];

    document.write(`<h1> BOOLEAN ARRAY DECLARATION & INITIALIZATION</h1>`);
    document.write(`<br><h2> Initialized Array = ${mixedArray}</h2>`);

//*************************************************************************************************
//  CHAPTER # 14-16 , QUESTION # 7
//      Declare and Initialize an array and store available education qualifications in Pakistan 
//          (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD) 
//      Show the listed qualifications in browser.

    var educationalData = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil" , "PhD"];

    document.write(`<h1> Educational Qualifications in Pakistan: </h1><br>`);

    for (let index = 0; index < educationalData.length; index++) 
    {
        document.write(`<h2> ${index + 1}) ${educationalData[index]}</h2>`);    
    } 

//*************************************************************************************************
//  CHAPTER # 14-16 , QUESTION # 8
//      Write a program to store 3 student names in an array.
//      Take another array to store score of these three students.
//      Assume that total marks are 500 for each student, 
//      display the scores & percentages of students like:

    const TOTAL_MARKS = 500;

    var studentNames  = ["Michael" , "John" , "Tony"];
    var studentScores = [320 , 230 , 480];
    var percentAge;

    document.write(`<h1> STUDENTS RESULT </h1><br>`);

    for (let index = 0; index < studentNames.length; index++) 
    {
        percentAge = (studentScores[index] / TOTAL_MARKS) * 100;
        
        document.write(`<h2> Score of ${studentNames[index]} is 
                        ${studentScores[index]}. Percentage: 
                        ${percentAge}%</h2>`);    
    }  

//*************************************************************************************************
//  CHAPTER # 14-16 , QUESTION # 9
//      Initialize an array with color names. 
//      Display the array elements in your browser.
//          a. Ask the user what color he/she wants to add to the beginning & 
//             add that color to the beginning of the array.
//             Display the updated array in your browser.
//          b. Ask the user what color he/she wants to add to the end & 
//             add that color to the end of the array. 
//             Display the updated array in your browser.
//          c. Add two more color to the beginning of the array.
//             Display the updated array in your browser.
//          d. Delete the first color in the array. 
//             Display the updated array in your browser.
//          e. Delete the last color in the array. 
//             Display the updated array in your browser.
//          f. Ask the user at which index he/she wants to add a color & color name. 
//             Then add the color to desired position/index.
//             Display the updated array in your browser.
//          g. Ask the user at which index he/she wants to delete color(s) & 
//             how many colors he/she wants to delete. 
//             Then remove the same number of color(s) from user-defined position/index. 
//             Display the updated array in your browser.

    var colorNames = ["Red" , "Yellow" , "Green" , "Blue" , "Pink" , 
    "Orange" , "White" , "Black" , "Magenta" , "Cyan" ];
    var userInput;
    var userIndex;
    var userTotal;

    document.write(`<h1> ARRAY OPERATIONS </h1><br>`);

    alert("Array with Color Names = " + colorNames);

    document.write(`<h2> Array with Color Names = ${colorNames} </h2>`);

    userInput = prompt("Enter Color to Add at Beginning of Array:");    
    colorNames.unshift(userInput);
    alert("Updated Array = " + colorNames);

    document.write(`<h2> Color Input by User to Add at Beginning of Array = ${userInput} </h2>`);
    document.write(`<h2> Updated Array = ${colorNames} </h2>`);

    userInput = prompt("Enter Color to Add at End of Array:");    
    colorNames.push(userInput);
    alert("Updated Array = " + colorNames);

    document.write(`<h2> Color Input by User to Add at End of Array = ${userInput} </h2>`);
    document.write(`<h2> Updated Array = ${colorNames} </h2>`);

    colorNames.unshift("Off White" , "Gray");

    document.write(`<h2> "Off White" & "Gray" Colors are Added at Start of Array </h2>`);
    document.write(`<h2> Updated Array = ${colorNames} </h2>`);

    colorNames.shift();

    document.write(`<h2> First Element of Array Removed </h2>`);
    document.write(`<h2> Updated Array = ${colorNames} </h2>`);

    colorNames.pop();

    document.write(`<h2> Last Element of Array Removed </h2>`);
    document.write(`<h2> Updated Array = ${colorNames} </h2>`);

    userIndex = prompt("Enter Array Index Value to Add Color:");
    userInput = prompt("Enter Color to Add at Specified Index of Array:");        
    colorNames.splice(userIndex , 0 , userInput);

    alert("Updated Array = " + colorNames);

    document.write(`<h2> Index Specified by User to Add Element = ${userIndex} </h2>`);
    document.write(`<h2> Color Specified by User = ${userInput} </h2>`);
    document.write(`<h2> Updated Array = ${colorNames} </h2>`);

    userIndex = prompt("Enter Array Index Value to Remove Element:");
    userTotal = prompt("Enter Total Elements to Remove:");        
    colorNames.splice(userIndex , userTotal);

    alert("Updated Array = " + colorNames);

    document.write(`<h2> Index Specified by User to Delete Element = ${userIndex} </h2>`);
    document.write(`<h2> Total Elements to Delete = ${userTotal} </h2>`);
    document.write(`<h2> Updated Array = ${colorNames} </h2>`);

//*************************************************************************************************
//  CHAPTER # 14-16 , QUESTION # 10
//      Write a program to store student scores in an array &
//      sort the array in ascending order using Array’s sort method.

    var studentScores = [320 , 230 , 480 , 120];

    document.write(`<h1> ARRAY SORT DEMO </h1><br>`);

    document.write(`<h2> Scores of Students: ${studentScores} </h2>`);
    document.write(`<h2> Ordered Scores of Students: ${studentScores.sort()} </h2>`);

//*************************************************************************************************
//  CHAPTER # 14-16 , QUESTION # 11
//      Write a program to initialize an array with city names.
//          Copy 3 array elements from cities array to selectedCities array.

    var citiesNames = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
    var selectedCities = citiesNames.slice(2 , 4);

    document.write(`<h1> ARRAY COPY DEMO </h1><br>`);

    document.write(`<h2> Cities List: </h2>`);
    document.write(`<h2> ${citiesNames} </h2>`);

    document.write(`<br><h2> Selected Cities List: </h2>`);
    document.write(`<h2> ${selectedCities} </h2>`);

//*************************************************************************************************
//  CHAPTER # 14-16 , QUESTION # 12
//      Write a program to create a single string from the below mentioned array:
//          var arr = [“This ”, “ is ”, “ my ”, “ cat”];

    var arr = ["This" , "is" , "my" , "Cat"];
    var stringFromArr = arr.join(" ");

    document.write(`<h1> ARRAY TO STRING DEMO </h1><br>`);

    document.write(`<h2> Array: </h2>`);
    document.write(`<h2> ${arr} </h2>`);

    document.write(`<br><h2> String: </h2>`);
    document.write(`<h2> ${stringFromArr} </h2>`);

//*************************************************************************************************
//  CHAPTER # 14-16 , QUESTION # 13
//      Create a new array. Store values one by one in such a way that you can access the 
//      values in the order in which they were stored. (FIFO-First In First Out)

    var fifoArray = [];

    fifoArray.push("Key Board");
    fifoArray.push("Mouse");
    fifoArray.push("Printer");
    fifoArray.push("Monitor");

    document.write(`<h1> FIFO ARRAY </h1><br>`);

    document.write(`<h2> Devices: </h2>`);
    document.write(`<h2> ${fifoArray} </h2><br>`);

    document.write(`<h2> Out: </h2>`);
    document.write(`<h2> ${fifoArray.shift()} </h2>`);
    document.write(`<h2> Out: </h2>`);
    document.write(`<h2> ${fifoArray.shift()} </h2>`);
    document.write(`<h2> Out: </h2>`);
    document.write(`<h2> ${fifoArray.shift()} </h2>`);
    document.write(`<h2> Out: </h2>`);
    document.write(`<h2> ${fifoArray.shift()} </h2>`);

//*************************************************************************************************
//  CHAPTER # 14-16 , QUESTION # 14
//      Create a new array. Store values one by one in such a way that you can access the 
//      values in reverse order. (Last InFirst Out)

    var lifoArray = [];

    lifoArray.push("Key Board");
    lifoArray.push("Mouse");
    lifoArray.push("Printer");
    lifoArray.push("Monitor");

    document.write(`<h1> LIFO ARRAY </h1><br>`);

    document.write(`<h2> Devices: </h2>`);
    document.write(`<h2> ${lifoArray} </h2><br>`);

    document.write(`<h2> Out: </h2>`);
    document.write(`<h2> ${lifoArray.pop()} </h2>`);
    document.write(`<h2> Out: </h2>`);
    document.write(`<h2> ${lifoArray.pop()} </h2>`);
    document.write(`<h2> Out: </h2>`);
    document.write(`<h2> ${lifoArray.pop()} </h2>`);
    document.write(`<h2> Out: </h2>`);
    document.write(`<h2> ${lifoArray.pop()} </h2>`);

//*************************************************************************************************
//  CHAPTER # 14-16 , QUESTION # 15
//      Write a program to store phone manufacturers 
//          (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
//      Display the following dropdown/select menu in your browser using document.write() method:

    var phoneManufacturers = ["Apple" , "Samsung" , "Motorola" , "Nokia" , "Sony" , "Haier"];
        
    document.write(`<h1> PHONE MANUFACTURERS MENU </h1><br><br>`);
    document.write(`<label><h2>Choose a Mobile Manufacturer:</h2></label><select>`);

    for (let index = 0; index < phoneManufacturers.length; index++) 
    {
        document.write(`<option> ${phoneManufacturers[index]}</option>`);
    }

    document.write(`</select><br><br><input type="submit" value="Submit"></input>`);
    
//*************************************************************************************************
//  CHAPTER # 17-20 , QUESTION # 1
//      Declare and initialize an empty multidimensional array. (Array of arrays)

    var multiDimensionalArray = [];
            
    multiDimensionalArray = [["a" , "b" , "c"] , 
                            ["j" , "k" , "l"] , 
                            ["x" , "y" , "z"]];

    document.write(`<h1> MULTI-DIMENSIONAL ARRAY STUDY </h1><br>`);

    for (let outerIndex = 0; outerIndex < multiDimensionalArray.length; outerIndex++) 
    {   
        document.write(`<h1> &nbsp&nbsp&nbsp`); 

        for (let innerIndex = 0; innerIndex < multiDimensionalArray[outerIndex].length; innerIndex++) 
        {
            document.write(`${multiDimensionalArray[outerIndex][innerIndex]} &nbsp&nbsp`);            
        }
        document.write(`</h1>`); 
    }

//*************************************************************************************************
//  CHAPTER # 17-20 , QUESTION # 2
//      Declare and initialize a multidimensional array representing the following matrix:
//          0 , 1 , 2 , 3
//          1 , 0 , 1 , 2
//          2 , 1 , 0 , 1

    var multiDimensionalArray = [];
        
    multiDimensionalArray = [[0 , 1 , 2 , 3] , 
                            [1 , 0 , 1 , 2] , 
                            [2 , 1 , 0 , 1]];

    document.write(`<h1> MULTI-DIMENSIONAL NUMBER ARRAY </h1><br>`);

    for (let outerIndex = 0; outerIndex < multiDimensionalArray.length; outerIndex++) 
    {   
        document.write(`<h1> &nbsp&nbsp&nbsp`); 

        for (let innerIndex = 0; innerIndex < multiDimensionalArray[outerIndex].length; innerIndex++) 
        {
            document.write(`${multiDimensionalArray[outerIndex][innerIndex]} &nbsp&nbsp`);            
        }
        document.write(`</h1>`); 
    }
    
//*************************************************************************************************
//  CHAPTER # 17-20 , QUESTION # 3
//      Write a program to print numeric counting from 1 to 10.

    const START_NO = 1;
    const END_NO   = 10;

    document.write(`<h1> NUMERIC COUNTING FROM 1-10 </h1><br>`);

    for (let index = START_NO; index <= END_NO; index++) 
    {   
        document.write(`<h1>&nbsp&nbsp ${index} </h1>`);            
    }

//*************************************************************************************************
//  CHAPTER # 17-20 , QUESTION # 4
//      Write a program to print multiplication table of any number using for loop. 
//      Table number & length should be taken as an input from user

    var numberForTable = Number(prompt("Enter a Number to Show its Multiplication Table: "));
    var lengthForTable = Number(prompt("Enter a Length of Multiplication Table: "));

    document.write(`<h1> MULTIPLICATION TABLE OF ${numberForTable}</h1>`);
    document.write(`<h1> LENGTH OF TABLE = ${lengthForTable}</h1><br>`);

    for (let index = 1; index <= lengthForTable; index++) 
    {   
        document.write(`<h1>&nbsp&nbsp ${numberForTable} x ${index} =
                        ${numberForTable * index} </h1>`);            
    }

//*************************************************************************************************
//  CHAPTER # 17-20 , QUESTION # 5
//      Write a program to print items of the following array using for loop:
//          fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

    var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

    document.write(`<h1> ARRAY DISPLAY USING FOR LOOP</h1><br>`);

    for (let index = 0; index < fruits.length ; index++) 
    {   
        document.write(`<h2>&nbsp&nbsp ${fruits[index]} </h1>`);            
    }

    document.write(`<br>`);

    for (let index = 0; index < fruits.length ; index++) 
    {   
        document.write(`<h2>&nbsp&nbsp Element at Index ${index} is ${fruits[index]} </h1>`);            
    }

//*************************************************************************************************
//  CHAPTER # 17-20 , QUESTION # 6
//      Generate the following series in your browser. See example output.
//          a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//          b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//          c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//          d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//          e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

    var countingArray = [];
    var revCountingArray = [];
    var evenNoArray = [];
    var oddNoArray = [];
    var seriesArray = [];

    document.write(`<h1> ARRAY EXAMPLES</h1><br>`);

    document.write(`<h2> Counting: </h2>`);
    document.write(`<h2>&nbsp&nbsp`);

    for (let index = 0; index < 15; index++) 
    {   
        countingArray[index] = index + 1;
        document.write(`${countingArray[index]}`);
        
        if (index < 14)
        {
            document.write(` , `);
        }
    }
    document.write(`</h2>`);

    document.write(`<h2> Reverse Counting: </h2>`);
    document.write(`<h2>&nbsp&nbsp`);

    for (let index = 10; index > 0; index--) 
    {   
        revCountingArray[10 - index] = index;
        document.write(`${revCountingArray[10 - index]}`);
        
        if (index > 1)
        {
            document.write(` , `);
        }
    }
    document.write(`</h2>`);

    document.write(`<h2> Even: </h2>`);
    document.write(`<h2>&nbsp&nbsp`);

    for (let index = 0; index < 11; index++) 
    {   
        evenNoArray[index] = index * 2;
        document.write(`${evenNoArray[index]}`);
        
        if (index < 10 )
        {
            document.write(` , `);
        }
    }
    document.write(`</h2>`);

    document.write(`<h2> Odd: </h2>`);
    document.write(`<h2>&nbsp&nbsp`);

    for (let index = 1; index < 11; index++) 
    {   
        oddNoArray[index - 1] = 1 + (2 * (index - 1));
        document.write(`${oddNoArray[index - 1]}`);
        
        if (index < 10 )
        {
            document.write(` , `);
        }
    }
    document.write(`</h2>`);

    document.write(`<h2> Series: </h2>`);
    document.write(`<h2>&nbsp&nbsp`);

    for (let index = 0; index < 10; index++) 
    {   
        seriesArray[index] = (2 * (index + 1)) + 'k';
        document.write(`${seriesArray[index]}`);
        
        if (index < 9 )
        {
            document.write(` , `);
        }
    }
    document.write(`</h2>`);
    
//*************************************************************************************************
//  CHAPTER # 17-20 , QUESTION # 7
//      You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//      Write a program to enable “search by user input” in an array.
//          After searching, prompt the user whether the given item is found in the list or not.

    var bakeryItems = ["Cake" , "Apple Pie" , "Cookie" , "Chips" , "Patties"];
    var searchItem;
    var checkFlag

    document.write(`<h1> BAKERY ITEM SEARCH</h1>`);

    for (let index = 0; index < 2; index++) 
    {
        searchItem = prompt(" Welcome to ABC Bakery. \n What do you want to order Sir/Ma'am?");

        checkFlag = 0;

        document.write(`<br><h2> Item Ordered: ${searchItem}</h2>`);
        
        for (let indexItem = 0; indexItem < bakeryItems.length; indexItem++) 
        {
            if(searchItem.toLowerCase() === bakeryItems[indexItem].toLowerCase())
            {
                checkFlag = 1;
                document.write(`<h2>&nbsp&nbsp ${bakeryItems[indexItem]} is <b>Available</b>
                                at Index ${indexItem} in Our Bakery</h2>`);
                break;
            }
        }

        if (checkFlag === 0)
        {
            document.write(`<h2>&nbsp&nbsp We are Sorry. ${searchItem.replace(/^\w/, (c) => c.toUpperCase())} is 
                            <b> Not Available</b> in Our Bakery</h2>`);
        }
    }

    
//*************************************************************************************************
//  CHAPTER # 17-20 , QUESTION # 8
//      Write a program to identify the largest number in the given array.
//          A = [24, 53, 78, 91, 12].

    var numberArray = [24, 53, 78, 91, 12];
    var largestNo   = numberArray[0];

    document.write(`<h1> SEARCH LARGEST NUMBER IN ARRAY</h1><br>`);
    document.write(`<h2> Array Items: ${numberArray}</h2>`);

    for (let index = 1; index < numberArray.length; index++) 
    {
        if(numberArray[index] > largestNo)
        {
            largestNo = numberArray[index];
        }
    }

    document.write(`<h2> The Largest Number is: ${largestNo}</h2>`);

//*************************************************************************************************
//  CHAPTER # 17-20 , QUESTION # 9
//      Write a program to identify the smallest number in the given array.
//          A = [24, 53, 78, 91, 12]

    var numberArray = [24, 53, 78, 91, 12];
    var smallestNo   = numberArray[0];

    document.write(`<h1> SEARCH SMALLEST NUMBER IN ARRAY</h1><br>`);
    document.write(`<h2> Array Items: ${numberArray}</h2>`);

    for (let index = 1; index < numberArray.length; index++) 
    {
        if(numberArray[index] < smallestNo)
        {
            smallestNo = numberArray[index];
        }
    }

    document.write(`<h2> The Smallest Number is: ${smallestNo}</h2>`);
    
//*************************************************************************************************
//  CHAPTER # 17-20 , QUESTION # 10
//      Write a program to print multiples of 5 ranging 1 to 100.

    const RANGE_START      = 1;
    const RANGE_END        = 100;
    const MULTIPLE_VALUE   = 5;


    document.write(`<h1> MULTPLE OF 5 RANGING 1-100</h1><br>`);
    document.write(`<h2>`); 

    for (let index = RANGE_START; index <= RANGE_END; index++) 
    {
        if((index % MULTIPLE_VALUE) === 0)
        {
            document.write(`${index}`);

            if(index !== RANGE_END)
            {
                document.write(` , `); 
            }
        }
    }
    document.write(`</h2>`); 

//*************************************************************************************************
//                                       END OF ASSIGNMENT # 5
//*************************************************************************************************