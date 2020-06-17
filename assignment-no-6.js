//*************************************************************************************************
//  Name:               Farhan Shakil
//  Course:             Web & Mobile Application Development Course
//  Email:              mfarhanshakil@gmail.com
//  Roll #              WM3398
//  Assignment # 6      Chapter # 21 to Chapter # 38

//*************************************************************************************************
//  CHAPTER # 21-25 , QUESTION # 1
//      Write a program that takes two user inputs for first and last name using prompt and 
//      merge them in a new variable titled fullName. 
//      Greet the user using his full name

    var firstName = prompt("Enter Your First Name:");
    var lastName  = prompt("Enter Your Last Name:");

    var fullName = firstName + " " + lastName;

    alert(`Greetings ${fullName}`);

//*************************************************************************************************
//  CHAPTER # 21-25 , QUESTION # 2
//      Write a program to take a user input about his favorite mobile phone model. 
//      Find and display the length of user input in your browser

    var favMobile = prompt("Please Enter Your Favorite Mobile Phone Model:");

    document.write(`<h1> My Favorite Phone: ${favMobile} </h1>`);
    document.write(`<h1> Length of String: ${favMobile.length}</h1>`);

//*************************************************************************************************
//  CHAPTER # 21-25 , QUESTION # 3
//      Write a program to find the index of letter “n” in the word “Pakistani” and 
//      display the result in your browser .

    var letterToSearch = "Pakistani";
    var indexOfN;

    for (let index = 0; index < letterToSearch.length; index++) 
    {
        if(letterToSearch[index] == "n")
        {
            indexOfN = index;
            break;
        }
        
    }

    document.write(`<h1> String: ${letterToSearch}</h1>`);
    document.write(`<h1> Index of 'n': ${indexOfN}</h1>`);

//*************************************************************************************************
//  CHAPTER # 21-25 , QUESTION # 4
//      Write a program to find the last index of letter “l” in the word “Hello World” and 
//      display the result in your browser.

    var letterToSearch = "Hello World";
    var indexOfL;

    for (let index = 0; index < letterToSearch.length; index++) 
    {
        if(letterToSearch[index] == "l")
        {
            indexOfL = index;
        }
        
    }

    document.write(`<h1> String: ${letterToSearch}</h1>`);
    document.write(`<h1> Last Index of 'l': ${indexOfL}</h1>`);

//*************************************************************************************************
//  CHAPTER # 21-25 , QUESTION # 5
//      Write a program to find the character at 3rd index in the word “Pakistani” and 
//         display the result in your browser.

    const INDEXNUMBER = 3;

    var assignedLetter = "Pakistani";

    document.write(`<h1> String: ${assignedLetter}</h1>`);
    document.write(`<h1> Character at Index ${INDEXNUMBER}: '${assignedLetter[INDEXNUMBER]}'</h1>`);

//*************************************************************************************************
//  CHAPTER # 21-25 , QUESTION # 6
//      Write a program that takes two user inputs for first and last name using prompt and 
//      merge them in a new variable titled fullName using concat() method. 
//      Greet the user using his full name

    var firstName = prompt("Enter Your First Name:");
    var lastName  = prompt("Enter Your Last Name:");

    var fullName = firstName.concat(" " , lastName);

    alert(`Greetings ${fullName}`);

//*************************************************************************************************
//  CHAPTER # 21-25 , QUESTION # 7
//      Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and 
//      display the result in your browser.

    const UPDATE_NAME = "Islam";
            
    var cityName = "Hyderabad";

    var getIndex = cityName.indexOf("Hyder");

    document.write(`<h1> City: ${cityName}</h1><br>`);
    document.write(`<h1> Text to Replace: ${"Hyder"}</h1>`);
    document.write(`<h1> Replaced By: ${UPDATE_NAME}</h1><br>`);

    if (getIndex !== -1)
    {
        cityName = cityName.slice(0 , getIndex) + UPDATE_NAME 
                    + cityName.slice(getIndex + UPDATE_NAME.length , cityName.length);
    }

    document.write(`<h1> After Replacement: ${cityName}</h1>`);

//*************************************************************************************************
//  CHAPTER # 21-25 , QUESTION # 8
//      Write a program to replace all occurrences of “and” in the string with “&” and 
//      display the result in your browser. 
//          var message = “Ali and Sami are best friends. They play cricket and football together.”;

    const UPDATE_VALUE = "&";
    const SEARCH_VALUE = "and";

    var stringToSolve = "Ali and Sami are best friends. They play cricket and football together.";

    document.write(`<h1> Original Text: ${stringToSolve}</h1><br>`);
    document.write(`<h1> String to be Replaced: ${SEARCH_VALUE}</h1>`);
    document.write(`<h1> Replaced By: ${UPDATE_VALUE}</h1><br>`);

    var getIndex = stringToSolve.indexOf(SEARCH_VALUE);

    while(getIndex !== -1)
    {
        stringToSolve = stringToSolve.slice(0 , getIndex) + UPDATE_VALUE 
                    + stringToSolve.slice(getIndex + SEARCH_VALUE.length , stringToSolve.length);

        getIndex = stringToSolve.indexOf(SEARCH_VALUE);
    }

    document.write(`<h1> Revised Text: ${stringToSolve}</h1>`);

//*************************************************************************************************
//  CHAPTER # 21-25 , QUESTION # 9
//      Write a program that converts a string “472” to a number 472. 
//      Display the values & types in your browser.

    var data = "472";

    document.write(`<h1> Value: ${data}</h1>`);
    document.write(`<h1> Type: ${typeof(data)}</h1><br>`);

    data = parseInt(data);

    document.write(`<h1> Value: ${data}</h1>`);
    document.write(`<h1> Type: ${typeof(data)}</h1><br>`);

//*************************************************************************************************
//  CHAPTER # 21-25 , QUESTION # 10
//      Write a program that takes user input. Convert and show the input in capital letters.

    var dataInput = prompt("Please Input String Data to Convert to Upper Case:");

    document.write(`<h1> User Input: ${dataInput}</h1>`);

    dataInput = dataInput.toUpperCase();

    document.write(`<h1> Upper Case: ${dataInput}</h1>`);

//*************************************************************************************************
//  CHAPTER # 21-25 , QUESTION # 11
//      Write a program that takes user input. Convert and show the input in title case.

    var dataInput = prompt("Please Input String Data to Convert to Title Case:");

    document.write(`<h1> User Input: ${dataInput}</h1>`);

    dataInput = dataInput.split(" ");

    for (let index = 0; index < dataInput.length; index++) 
    {
        dataInput[index] = dataInput[index][0].toUpperCase() + dataInput[index].substr(1);
    }

    dataInput = dataInput.join(" ");

    document.write(`<h1> Title Case: ${dataInput}</h1>`);

//*************************************************************************************************
//  CHAPTER # 21-25 , QUESTION # 12
//      Write a program that converts the variable num to string.
//          var num = 35.36 ;
//      Remove the dot to display “3536” display in your browser.

    const REPLACE_CHAR = "."

    var num = 35.36;

    document.write(`<h1> Number: ${num}</h1>`);
    document.write(`<h1> Type: ${typeof(num)}</h1><br>`);

    num = num.toString();

    document.write(`<h1> String: ${num}</h1>`);
    document.write(`<h1> Type: ${typeof(num)}</h1><br>`);

    var indexOfChar = num.indexOf(REPLACE_CHAR);

    num = num.slice(0 , indexOfChar) + num.slice(indexOfChar + REPLACE_CHAR.length , num.length);

    document.write(`<h1> Result: ${num}</h1>`);
    document.write(`<h1> Type: ${typeof(num)}</h1><br>`);

//*************************************************************************************************
//  CHAPTER # 21-25 , QUESTION # 1
//      Write a program to take user input and store username in a variable. 
//      If the username contains any special symbol among [@ . , !], 
//      prompt the user to enter a valid username.

    var userName;

    var inValidChar = [33 , 44 , 46 , 64];

    var flag = true;

    while(flag)
    {
        userName = prompt("Enter Your User Name Please:");

        flag = false;

        for (let index = 0; index < inValidChar.length; index++) 
        {
            if(userName.indexOf(String.fromCharCode(inValidChar[index])) !== -1)
            {
                flag = true;
                break;
            }    
        }

        if(flag === true)
        {
            alert("Please Enter a Valid User Name");
        }
    }

    document.write(`<h1> User Name: ${userName}</h1>`)

//*************************************************************************************************
//  CHAPTER # 21-25 , QUESTION # 14
//      You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//      Write a program to enable “search by user input” in an array. 
//      After searching, prompt the user whether the given item is found in the list or not.

    var bakeryItems = ["Cake", "Apple Pie", "Cookie", "Chips", "Patties"];

    var userInput;

    var flag = true;

    alert("ABC Bakery. You can Search for Two Items at a Time");


    for (let index = 0; index < 2; index++) 
    {
        userInput = prompt("Welcome to ABC Bakery. What Do You Want to Order Sir/Ma'am?");

        flag = false;

        for (let searchIndex = 0; searchIndex < bakeryItems.length; searchIndex++) 
        {
            if(userInput.toLowerCase() === bakeryItems[searchIndex].toLowerCase())
            {
                document.write(`<h1> ${bakeryItems[searchIndex]} is <i>Avaiable</i> at Index 
                                ${searchIndex} in Our Bakery </h1>`);
                flag = true;
                break;
            }
        }

        if(flag === false)
        {
            document.write(`<h1> We are Sorry. ${userInput[0].toUpperCase() + userInput.substr(1)} 
                            is <i>not Avaiable</i> in Our Bakery </h1>`);        
        }
    }

//*************************************************************************************************
//  CHAPTER # 21-25 , QUESTION # 15
//      Write a program to take password as an input from user. 
//      The password must qualify these requirements:
//          a. It should contain alphabets and numbers
//          b. It should not start with a number
//          c. It must at least 6 characters long 
//      If the password does not meet above requirements, prompt the user to enter a valid password.

    var userPassWord;

    var passWordFlag = true;

    alert(`Press Ok and Enter Your Password. \nBelow Rules to be Followed: 
            a. It Should Contain Alphabets and Numbers 
            b. It Should Not Start with a Number 
            c. It must at least 6 characters long`);

    document.write(`<h3> Below Rules to be Followed: </h3> 
                    <h3> &nbsp&nbsp a. It Should Contain Alphabets and Numbers </h3> 
                    <h3> &nbsp&nbsp b. It Should Not Start with a Number </h3> 
                    <h3> &nbsp&nbsp c. It must at least 6 characters long </h3><br>`);

    while(passWordFlag)
    {
        userPassWord = prompt(`Enter Your Password Please`);
        document.write(`<h3> Enter Your Password Please </h3>`);
        document.write(`<h3> Entered Password: ${userPassWord} </h3>`);

        if(userPassWord.length <= 5)
        {
            alert("Password must be At Least 6 Characters Long \nPlease Enter Valid Password");
            document.write(`<h3> Password must be At Least 6 Characters Long. <br> 
                            Please Enter Valid Password </h3>`);
        }
        else if(userPassWord[0].charCodeAt(0) >= 48 && userPassWord[0].charCodeAt(0) <= 57)
        {
            alert("Password Should Not Start with a Number \nPlease Enter Valid Password");
            document.write(`<h3> Password Should Not Start with a Number <br> 
                            Please Enter Valid Password </h3>`);
        }
        else
        {
            for (let index = 0; index < userPassWord.length; index++) 
            {
                if((userPassWord[index].charCodeAt(0) >= 48 && userPassWord[index].charCodeAt(0) <= 57) || 
                    (userPassWord[index].charCodeAt(0) >= 65 && userPassWord[index].charCodeAt(0) <= 90) || 
                    (userPassWord[index].charCodeAt(0) >= 97 && userPassWord[index].charCodeAt(0) <= 122))
                {
                    passWordFlag = false;
                }
                else
                {
                    alert("Password must Consist of Alphabets & Numbers \nPlease Enter Valid Password");
                    document.write(`<h3> Password must Consist of Alphabets & Numbers <br> 
                                    Please Enter Valid Password </h3>`);
                    passWordFlag = true;
                    break;
                }
            }
        }

        if(passWordFlag === false)
        {
            document.write(`<h1> Valid Password Entered </h1>`);
        }
    }

//*************************************************************************************************
//  CHAPTER # 21-25 , QUESTION # 16
//      Write a program to convert the following string to an array using string split method.
//          var university = “University of Karachi”;
//      Display the elements of array in your browser.

    var university = "University of Karachi";
        
    document.write(`<h1> String: ${university}</h1>`);
    document.write(`<h1> Type: ${typeof(university)}</h1>`);

    university = university.split("");

    document.write(`<h1> Array: ${university}</h1>`);
    document.write(`<h1> Type: ${typeof(university)}</h1><br>`);

    for (let index = 0; index < university.length; index++) 
    {
        document.write(`<p><b> ${university[index]} </b> </p>`);
    }

//*************************************************************************************************
//  CHAPTER # 21-25 , QUESTION # 17
//      Write a program to display the last character of a user input.

    var userInput = prompt(`Enter String Data of Your Choice:`);
        
    document.write(`<h1> User Input: ${userInput}</h1>`);

    document.write(`<h1> Last Character of Input: ${userInput.charAt(userInput.length - 1)}</h1>`);

//*************************************************************************************************
//  CHAPTER # 21-25 , QUESTION # 18
//      You have a string “The quick brown fox jumps over the lazy dog”. 
//      Write a program to count number of occurrences of word “the” in given string.

    var userString = "The Quick Brown Fox Jumps Over the Lazy Dog";
        
    var searchVal = prompt("Enter Word to Search:");

    var charCount = 0;

    var searchIndex = 0;

    document.write(`<h1> Text: ${userString}</h1>`);
    document.write(`<h1> Word to Search: ${searchVal}</h1>`);

    while(true)
    {
        if(userString.toLowerCase().slice(searchIndex).indexOf(searchVal.toLowerCase()) !== -1)
        {
            charCount++;
            searchIndex += (userString.toLowerCase()).slice(searchIndex).indexOf(searchVal.toLowerCase()) + searchVal.length;
        }
        else
        {
            break;
        }
    }

    document.write(`<h1> There are ${charCount} occurrence(s) of Word ${searchVal}</h1>`);

//*************************************************************************************************
//  CHAPTER # 26-30 , QUESTION # 1
//      Write a program that takes a positive integer from user & display the following in your browser.
//          a. number
//          b. round off value of the number
//          c. floor value of the number
//          d. ceil value of the number

    var userInputNumber = Number(prompt("Enter Positive Floating Point Number of Your Choice"));

    document.write(`<h1> Number: ${userInputNumber}</h1>`);
    document.write(`<h1> Round Off Value: ${Math.round(userInputNumber)}</h1>`);
    document.write(`<h1> Floor Value: ${Math.floor(userInputNumber)}</h1>`);
    document.write(`<h1> Ceil Value: ${Math.ceil(userInputNumber)}</h1>`);

//*************************************************************************************************
//  CHAPTER # 26-30 , QUESTION # 2
//      Write a program that takes a negative floating point number from user & 
//      display the following in your browser.
//          a. number
//          b. round off value of the number
//          c. floor value of the number
//          d. ceil value of the number

    var userInputFloat = Number(prompt("Enter Negative Floating Point Number of Your Choice"));

    document.write(`<h1> Number: ${userInputFloat}</h1>`);
    document.write(`<h1> Round Off Value: ${Math.round(userInputFloat)}</h1>`);
    document.write(`<h1> Floor Value: ${Math.floor(userInputFloat)}</h1>`);
    document.write(`<h1> Ceil Value: ${Math.ceil(userInputFloat)}</h1>`);

//*************************************************************************************************
//  CHAPTER # 26-30 , QUESTION # 3
//      Write a program that displays the absolute value of a number.

    var userInput = Number(prompt("Enter Number of Your Choice"));

    document.write(`<h1> Number: ${userInput}</h1>`);
    document.write(`<h1> Absolute Value: ${Math.abs(userInput)}</h1>`);

//*************************************************************************************************
//  CHAPTER # 26-30 , QUESTION # 4
//      Write a program that simulates a dice using random() method of JS Math class. 
//      Display the value of dice in your browser.

    var randomNumber;

    document.write(`<h1> RANDOM DICE VALUE GENERATOR </h1>`);

    for (let index = 0; index < 6; index++) 
    {
        randomNumber = Math.floor((Math.random() * 6) + 1);
        document.write(`<h1> Random Dice Value: ${randomNumber}</h1>`);
    }

//*************************************************************************************************
//  CHAPTER # 26-30 , QUESTION # 5
//      Write a program that simulates a coin toss using random() method of JS Math class. 
//      Display the value of coin in your browser

    var randomNumber;

    document.write(`<h1> RANDOM HEAD & TAIL GENERATION </h1>`);

    for (let index = 0; index < 10; index++) 
    {
        randomNumber = Math.floor((Math.random() * 2) + 1);

        if(randomNumber == 1)
        {
            document.write(`<h1> ${randomNumber}</h1>`);
            document.write(`<h1> Tails</h1><br>`);
        }
        else
        {
            document.write(`<h1> ${randomNumber}</h1>`);
            document.write(`<h1> Heads</h1><br>`);
        }
    }

//*************************************************************************************************
//  CHAPTER # 26-30 , QUESTION # 6
//      Write a program that shows a random number between 1 and 100 in your browser.

    var randomNumber;

    document.write(`<h1> RANDOM NUMBER GENERATION 1-100</h1>`);

    for (let index = 0; index < 10; index++) 
    {
        randomNumber = Math.floor((Math.random() * 100) + 1);
        document.write(`<h1> Random Number Between 1 & 100: ${randomNumber}</h1>`);
    }

//*************************************************************************************************
//  CHAPTER # 26-30 , QUESTION # 7
//      Write a program that asks the user about his weight. 
//      Parse the user input and display his weight in your browser.
//      Possible user inputs can be:
//          a. 50
//          b. 50kgs
//          c. 50.2kgs
//          d. 50.2kilograms

    var userWeight = prompt("Enter Your Weight in Kgs:");

    document.write(`<h1> The Weight of User is ${parseFloat(userWeight)} Kilograms</h1>`);

//*************************************************************************************************
//  CHAPTER # 26-30 , QUESTION # 8
//      Write a program that stores a random secret number from 1 to 10 in a variable. 
//      Ask the user to input a number between 1 and 10. 
//      If the user input equals the secret number, congratulate the user.

    var  randomNumber , guessNumber;

    document.write(`<h1> GUESS NUMBER FROM 1-10</h1>`);

    for (let index = 0; index < 10; index++) 
    {
        randomNumber = Math.floor((Math.random() * 10) + 1);
        guessNumber = Number(prompt("Enter A Number Between 1 And 10:"));

        document.write(`<h1> Computer Generated Number: ${randomNumber}</h1>`);
        document.write(`<h1> User Guess: ${guessNumber}</h1>`);

        if(guessNumber === randomNumber)
        {
            alert(` Congrats! You Guessed It`);
            document.write(`<h1> Congrats! You Guessed It</h1>`);
        }
        else
        {
            alert(`Try Again!`);
            document.write(`<h1> Try Again!</h1>`);            
        }
    }

//*************************************************************************************************
//  CHAPTER # 31-34 , QUESTION # 1
//      Write a program that displays current date and time in your browser.

    var  currentDate = new Date();

    document.write(`<h1> CURRENT DATE AND TIME DISPLAY</h1>`);
    document.write(`<h1> ${currentDate}</h1>`); 

//*************************************************************************************************
//  CHAPTER # 31-34 , QUESTION # 2
//      Write a program that alerts the current month in words.      

    var  monthOfYear  = ["January" , "February" , "March" , "April" , "May" , "June" ,
                         "July" , "August" , "September" , "October" , "November" , "December"];
    var  currentDate  = new Date();
    var  currentMonth = currentDate.getMonth(); 

    document.write(`<h1> CURRENT MONTH DISPLAY</h1>`);
    document.write(`<h1> Current Month: ${monthOfYear[currentMonth]}</h1>`);

//*************************************************************************************************
//  CHAPTER # 31-34 , QUESTION # 3
//      Write a program that alerts the first 3 letters of the current day, 
//      for example if today is Sunday then alert will show Sun.

    var  daysOfWeek   = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , 
                         "Thursday" , "Friday" , "Saturday"];
    var  currentDate  = new Date();
    var  currentDay   = currentDate.getDay(); 

    document.write(`<h1> CURRENT DAY DISPLAY</h1>`);
    document.write(`<h1> Today is ${daysOfWeek[currentDay].substr(0 , 3)}</h1>`);

//*************************************************************************************************
//  CHAPTER # 31-34 , QUESTION # 4
//      Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.    

    var  daysOfWeek   = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , 
                         "Thursday" , "Friday" , "Saturday"];
    var  currentDate  = new Date();
    var  currentDay   = currentDate.getDay(); 

    document.write(`<h1> WEEK DAY MESSAGE DISPLAY</h1>`);
    document.write(`<h1> Today is ${daysOfWeek[currentDay]}</h1>`);            

    if(currentDay === 0 || currentDay === 6)
    {
        document.write(`<h1> It's Fun Day</h1>`);
    }
    else
    {
        document.write(`<h1> It's Normal Day</h1>`);
    }

//*************************************************************************************************
//  CHAPTER # 31-34 , QUESTION # 5
//      Write a program that shows the message “First fifteen days of the month” 
//      if the date is less than 16th of the month else shows “Last days of the month”.    

    var  currentDate      = new Date();
    var  currentMonthDate = currentDate.getDate(); 

    document.write(`<h1> MONTH DATE MESSAGE DISPLAY</h1>`);
    document.write(`<h1> Today Date is ${currentMonthDate}</h1>`);            
    
    if(currentMonthDate < 16)
    {           
        document.write(`<h1> First Fifteen Days of the Month</h1>`);
    }
    else
    {
        document.write(`<h1> Last Days of the Month</h1>`);
    }

//*************************************************************************************************
//  CHAPTER # 31-34 , QUESTION # 6
//      Write a program that determines the minutes since midnight, Jan. 1, 1970 and 
//      assigns it to a variable that hasn't been declared beforehand. 
//      Use any variable you like to represent the Date object.  

    var  currentDate   = new Date();
    var  timeSince1970 = currentDate.getTime(); 

    document.write(`<h1> TIME SINCE MIDNIGHT 1970</h1><br>`);

    document.write(`<h1> Current Date: ${currentDate}</h1>`);            
    document.write(`<h1> Elapsed Milli Seconds Since January 1, 1970: ${timeSince1970}</h1>`);
    document.write(`<h1> Elapsed Seconds Since January 1, 1970: ${timeSince1970 / (1000)}</h1>`);
    document.write(`<h1> Elapsed Minutes Since January 1, 1970: ${timeSince1970 / (1000 * 60)}</h1>`);
    document.write(`<h1> Elapsed Hours Since January 1, 1970: ${timeSince1970 / (1000 * 60 * 60)}</h1>`);
    document.write(`<h1> Elapsed Days Since January 1, 1970: ${timeSince1970 / (1000 * 60 * 60 * 24)}</h1>`);

//*************************************************************************************************
//  CHAPTER # 31-34 , QUESTION # 7
//      Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

    var  currentDate = new Date();
    var  currentHour = currentDate.getHours(); 

    document.write(`<h1> CURRENT TIME MESSAGE DISPLAY</h1>`);
    document.write(`<h1> Current Time: ${currentHour}</h1>`); 

    if(currentHour < 12)
    {               
        document.write(`<h1> It's AM</h1>`);
    }
    else
    {
        document.write(`<h1> It's PM</h1>`);
    }

//*************************************************************************************************
//  CHAPTER # 31-34 , QUESTION # 8
//      Write a program that creates a Date object for the last day of the last month of 2020 and 
//      assigns it to variable named laterDate.    

    var  laterDate = new Date("December 31, 2020");

    document.write(`<h1> FUTURE DATE DISPLAY</h1>`);
    document.write(`<h1> Later Date: ${laterDate}</h1>`); 

//*************************************************************************************************
//  CHAPTER # 31-34 , QUESTION # 9
//      Create a date object of the starting date of this Ramadan and 
//      alert the number of days past since 1st Ramadan?
//          Note: 1st Ramadan was on April 25, 2020

    const  MILLI_SEC_TO_DAYS = 1000 * 60 * 60 * 24;
        
    var  firstRamadan2020 = new Date("April 25, 2020");
    var  currentDate      = new Date();

    var milliSecSinceFirstRamadan = currentDate.getTime() - firstRamadan2020.getTime();

    document.write(`<h1> DAYS PASSED SINCE 1<sup>st</sup> Ramadan 2020</h1>`);
    document.write(`<h1> ${Math.floor(milliSecSinceFirstRamadan / (MILLI_SEC_TO_DAYS))} 
                    Days have Passed Since 1<sup>st</sup> Ramadan, 2020</h1>`);

//*************************************************************************************************
//  CHAPTER # 31-34 , QUESTION # 10
//      Write a program that displays in your browser the seconds that elapsed between 
//      the reference date and the beginning of 2020

    const  MILLI_SEC_TO_SEC = 1000;
        
    var  startOf2020 = new Date("January 1, 2020");
    var  currentDate = new Date();

    var SecSince2020 = Math.floor((currentDate.getTime() - startOf2020.getTime()) / MILLI_SEC_TO_SEC);

    document.write(`<h1> SECONDS PASSED SINCE BEGINNING OF 2020</h1><br>`);
    document.write(`<h1> On Reference Date ${currentDate},</h1>`); 
    document.write(`<h1> ${SecSince2020} Seconds Had Passed Since Beginning of 2020</h1>`); 

//*************************************************************************************************
//  CHAPTER # 31-34 , QUESTION # 11
//      Create a Date object for the current date and time.
//      Extract the hours, reset the date object an hour ahead and 
//      finally display the date object in your browser.    

    var  currentDate = new Date();

    document.write(`<h1> TIME CHANGE DEMO</h1><br>`);
    document.write(`<h1> Current Date: ${currentDate}</h1>`);

    currentDate.setHours(currentDate.getHours() - 1);

    document.write(`<h1> 1 Hour Ago, It was: ${currentDate}</h1>`);

    currentDate.setHours(currentDate.getHours() + 2);

    document.write(`<h1> After 1 Hour, It will be: ${currentDate}</h1>`)

//*************************************************************************************************
//  CHAPTER # 31-34 , QUESTION # 12
//      Write a program that creates a date object and 
//      show the date in an alert box that is reset to 100 years back?

    var  currentDate = new Date();

    document.write(`<h1> YEAR CHANGE DEMO</h1><br>`);
    document.write(`<h1> Current Date: ${currentDate}</h1>`);

    currentDate.setFullYear(currentDate.getFullYear() - 100);

    document.write(`<h1> 100 Years Back, It was: ${currentDate}</h1>`);

    alert(`Current Date: \n    ${currentDate}
           \n100 Years Back, It was: \n    ${currentDate}`);

//*************************************************************************************************
//  CHAPTER # 31-34 , QUESTION # 13
//      Write a program to ask the user about his age. 
//      Calculate and show his birth year in your browser.    

    var  currentData = new Date();

    currentData = currentData.getFullYear();

    document.write(`<h1> BIRTH YEAR OF USER</h1><br>`);

    var userAge = Number(prompt("Enter Your Current Age in Years:"));

    document.write(`<h1> Current Year: ${currentData}</h1>`);
    document.write(`<h1> Your Age is ${userAge}</h1>`);
    document.write(`<h1> Your Birth Year is ${currentData - userAge}</h1>`);

//*************************************************************************************************
//  CHAPTER # 31-34 , QUESTION # 14
//      Write a program to generate your K-Electric bill in your browser. 
//      All the amounts should be rounded off to 2 decimal places. 
//      Display the following fields:
//          a. Customer Name
//          b. Current MonthDATE 
//          c. Number of units
//          d. Charges per unit
//          e. Net Amount Payable (within Due Date)
//          f. Late Payment Surcharge
//          g. Gross Amount Payable (after Due Date)  

    var  monthOfYear  = ["January" , "February" , "March" , "April" , "May" , "June" ,
                         "July" , "August" , "September" , "October" , "November" , "December"];

    var  currentData = new Date();

    currentData = currentData.getMonth();
    currentData = monthOfYear[currentData];

    var customerName   = prompt("Enter Name of Customer:");
    var unitsConsumed  = Number(prompt("Enter Number of Units Consumed:"));
    var chargesPerUnit = Number(prompt("Enter Charges Per Unit:"));
    var lateSurcharge  = Number(prompt("Enter Late Payment Surcharge:"));

    document.write(`<h1> K-Electric Bill </h1><br>`);

    document.write(`<h2> Customer Name: ${customerName}</h2>`);
    document.write(`<h2> Month: ${currentData}</h2>`);
    document.write(`<h2> Number of Units: ${unitsConsumed}</h2>`);
    document.write(`<h2> Charges Per Unit: ${chargesPerUnit}</h2><br>`);

    document.write(`<h2> Net Amount Payable (Within Due Date): 
                    ${(unitsConsumed * chargesPerUnit).toFixed(2)}</h2>`);
    document.write(`<h2> Late Payment Surcharge: ${lateSurcharge}</h2>`);
    document.write(`<h2> Gross Amount Payable (After Due Date): 
                    ${((unitsConsumed * chargesPerUnit) + lateSurcharge).toFixed(2)}</h2>`); 

//*************************************************************************************************
//  CHAPTER # 35-38 , QUESTION # 1
//      Write a function that displays current date & time in your browser.

    document.write(`<h1> FUNCTION CALL DEMO</h1><br>`);
    document.write(`<h2> Calling Function</h2><br>`);

    dispalyCurrentDateAndTime();

    function dispalyCurrentDateAndTime() 
    {
        var  currentDate = new Date();

        document.write(`<h1> IN FUNCTION</h1>`);
        document.write(`<h2> ${currentDate}</h2>`); 

        return;
    }

//*************************************************************************************************
//  CHAPTER # 35-38 , QUESTION # 2
//      Write a function that takes first & last name and 
//      then it greets the user using his full name.

    document.write(`<h1> FUNCTION CALL DEMO</h1><br>`);
        
    var firstName = prompt("Enter Your First Name:");
    var lastName  = prompt("Enter Your Last Name:");

    dispalyGreetingToUser(firstName = "Farhan" , lastName = "Shakil");

    function dispalyGreetingToUser(fName , lName) 
    {
        
        fName = fName[0].toUpperCase() + fName.substr(1);
        lName = lName[0].toUpperCase() + lName.substr(1);

        var fullName = fName.concat(" " , lName);

        document.write(`<h2> Greetings! ${fullName}</h2>`); 

        return;
    }

//*************************************************************************************************
//  CHAPTER # 35-38 , QUESTION # 3
//      Write a function that adds two numbers (input by user) and returns the sum of two numbers.

    document.write(`<h1> ADDITION FUNCTION DEMO</h1><br>`);
        
    document.write(`<h2> Calling Function</h2>`); 

    var sumOfTwoNo = additionOfTwoNumbers();

    document.write(`<h2> In Main Code</h2>`); 

    document.write(`<h1> Addition Result: ${sumOfTwoNo}</h1>`); 

    function additionOfTwoNumbers() 
    {
        var firstNumber  = Number(prompt("Enter First Number for Addition:"));
        var secondNumber = Number(prompt("Enter Second Number for Addition:"));

        document.write(`<h2> First Number: ${firstNumber}</h2>`); 
        document.write(`<h2> Second Number: ${secondNumber}</h2><br>`);

        return (firstNumber + secondNumber);
    }

//*************************************************************************************************
//  CHAPTER # 35-38 , QUESTION # 4
//      Calculator: Write a function that takes three arguments num1, num2 & 
//      operator & compute the desired operation. 
//      Return and show the desired result in your browser.

    document.write(`<h1> CALCULATOR </h1><br>`);
            
    var firstNumber    = Number(prompt("Enter First Number:"));
    var secondNumber   = Number(prompt("Enter Second Number:"));
    var arithOperation = prompt(`Enter Operation to Perform:
                                \n    (+ , - , * , / , %)`);

    var ansWer = performCalculation(firstNumber , secondNumber , arithOperation);

    if(ansWer !== null)
    {
        document.write(` ${ansWer}</h1>`); 
    }

    function performCalculation(fNumber = 1 , sNumber = 2 , aOperation = "+") 
    {
        document.write(`<h2> First Number: ${fNumber}</h2>`);
        document.write(`<h2> Second Number: ${sNumber}</h2>`);
        document.write(`<h2> Operation: ${aOperation}</h2><br>`);

        document.write(`<h1> ${fNumber} ${aOperation} ${sNumber} = `);
        
        if(aOperation === "+")
        {
            return (fNumber + sNumber);
        }
        else if(aOperation === "-")
        {
            return (fNumber - sNumber);
        }        
        else if(aOperation === "*")
        {
            return (fNumber * sNumber);
        }
        else if(aOperation === "/")
        {
            return (fNumber / sNumber);
        }
        else if(aOperation === "%")
        {
            return (fNumber % sNumber);
        }
        else
        {
            document.write(` Invalid Operation </h1>`);
            return null;
        }
    }

//*************************************************************************************************
//  CHAPTER # 35-38 , QUESTION # 5
//      Write a function that squares its argument.

    document.write(`<h1> SQUARE FUNCTION </h1><br>`);
            
    var numberToSquare = Number(prompt("Enter Number to Square:"));

    document.write(`<h2> Number Input by User: ${numberToSquare} </h2>`); 

    var numberSquare = squareCalculator(numberToSquare);

    document.write(`<h2> Square of Number: ${numberSquare}</h2>`); 

    function squareCalculator(inputNumber = 1) 
    {
        return (inputNumber * inputNumber);
    }

//*************************************************************************************************
//  CHAPTER # 35-38 , QUESTION # 6
//      Write a function that computes factorial of a number.

    document.write(`<h1> FACTORIAL FUNCTION </h1><br>`);
            
    var numberForFactorial = Number(prompt("Enter Number to Calculate Factorial:"));

    document.write(`<h2> Number Input by User: ${numberForFactorial} </h2>`); 

    var numberFactorial = factorialCalculator(numberForFactorial);

    document.write(`<h2> Factorial of Number: ${numberFactorial}</h2>`); 

    function factorialCalculator(inputNumber = 1) 
    {
        if(inputNumber > 1)
        {   
            var factorialOfNo = 1;

            for (let index = 2; index <= inputNumber; index++) 
            {
                factorialOfNo *= index;
            }
            return (factorialOfNo);
        }
        else if(inputNumber === 0 || inputNumber === 1)
        {
            return 1;
        }
        else
        {
            return null;
        }
    }

//*************************************************************************************************
//  CHAPTER # 35-38 , QUESTION # 7
//      Write a function that take start and end number as inputs & 
//      display counting in your browser.    

    document.write(`<h1> COUNTING DISPLAY </h1><br>`);
            
    var startNumber = Number(prompt("Enter Start Number for Counting:"));
    var endNumber   = Number(prompt("Enter End Number for Counting:"));

    document.write(`<h2> Start Number: ${startNumber} </h2>`); 
    document.write(`<h2> End Number: ${endNumber} </h2><br>`);

    countingDisplay(startNumber , endNumber);

    function countingDisplay(startNo = 1 , endNo = 10) 
    {
        if(startNo <= endNo)    
        {
            for(let index = startNo; index <= endNo; index++) 
            {
                document.write(`<h1> ${index}</h1>`);        
            }
        }
        else
        {            
            for(let index = startNo; index >= endNo; index--) 
            {
                document.write(`<h1> ${index}</h1>`);        
            }
        }
        
        return;
    }

//*************************************************************************************************
//  CHAPTER # 35-38 , QUESTION # 8
//      Write a nested function that computes hypotenuse of a right angle triangle.
//          Hypotenuse2 = Base2 + Perpendicular2    

    document.write(`<h1> RIGHT ANGLE TRIANGLE HYPOTENUSE CALCULATION </h1><br>`);
            
    var perpVal = Number(prompt("Enter Length of Perpendicular of Right Angle Triangle:"));
    var baseVal = Number(prompt("Enter Length of Base of Right Angle Triangle:"));

    document.write(`<h2> Perpendicular: ${perpVal} </h2>`); 
    document.write(`<h2> Base: ${baseVal} </h2><br>`);

    document.write(`<h1> Hypotenuse: ${calculateHypotenuse(perpVal , baseVal).toFixed(2)} </h1>`);

    function calculateHypotenuse(perpInput , baseInput)
    {
        return (calculateSquareRoot(calculateSquare(perpInput) + calculateSquare(baseInput)));
    }

    function calculateSquare(inputForSquare)
    {
        return(inputForSquare * inputForSquare);
    }

    function calculateSquareRoot(inputForSquareRoot)
    {
        return(Math.sqrt(inputForSquareRoot));
    }

//*************************************************************************************************
//  CHAPTER # 35-38 , QUESTION # 9
//      Write a function that calculates the area of a rectangle.
//          A = width * height
//      Pass width and height in following manner:
//          i. Arguments as value
//          ii. Arguments as variables

    document.write(`<h1> AREA OF RECTANGLE CALCULATION </h1><br>`);
            
    var widthVal  = Number(prompt("Enter Width of Rectangle:"));
    var heightVal = Number(prompt("Enter Height of Rectangle:"));

    document.write(`<h1> Argument as Variables </h1>`); 

    document.write(`<h2> Width: ${widthVal} </h2>`); 
    document.write(`<h2> Height: ${heightVal} </h2><br>`);

    document.write(`<h1> Area of Rectangle: ${calculateArea(widthVal , heightVal).toFixed(2)} </h1>`);

    document.write(`<h1> Argument as Values </h1>`); 

    document.write(`<h2> Width: ${10} </h2>`); 
    document.write(`<h2> Height: ${20} </h2><br>`);

    document.write(`<h1> Area of Rectangle: ${calculateArea(10 , 20).toFixed(2)} </h1>`);

    function calculateArea(widthInput , heightInput)
    {
        return (widthInput * heightInput);
    }

//*************************************************************************************************
//  CHAPTER # 35-38 , QUESTION # 10
//      Write a JavaScript function that checks whether a passed string is palindrome or not?

    document.write(`<h1> STRING CHECK AS PALINDROME </h1><br>`);
            
    var stringToCheck = prompt("Enter String to Check for Palindrome:");

    document.write(`<h1> Input String: ${stringToCheck} </h1>`); 

    stringCheckPalindrome(stringToCheck);

    function stringCheckPalindrome(inputString)
    {
        flag = false;

        for (let index = 0; index <= (inputString.length / 2) - 1; index++) 
        {
            if(inputString[index].toLowerCase() === inputString[(inputString.length - 1) - index].toLowerCase())
            {
                flag = true;
            }
            else
            {
                document.write(`<h1> String is Not Palindrome</h1>`);
                flag = false;
                break;
            }    
        }
        
        if(flag)
        {
            document.write(`<h1> String is Palindrome</h1>`);
        }

        return;
    }

//*************************************************************************************************
//  CHAPTER # 35-38 , QUESTION # 11
//      Write a JavaScript function that accepts a string as a parameter and 
//      converts the first letter of each word of the string in upper case.
//          EXAMPLE STRING : 'the quick brown fox'
//          EXPECTED OUTPUT : 'The Quick Brown Fox'

    document.write(`<h1> EACH STRING START LETTER TO TITLE CASE </h1><br>`);
            
    var stringInput = prompt("Enter String to Convert to Title Case:");

    document.write(`<h1> Input String: ${stringInput} </h1> <br>`); 

    var modifiedString = convertTitleCase(stringInput);

    document.write(`<h1> Modified String: ${modifiedString} </h1>`);


    function convertTitleCase(inputString) 
    {
        inputString = inputString.split(" ");

        for (let index = 0; index < inputString.length; index++) 
        {
            inputString[index] = inputString[index][0].toUpperCase() + inputString[index].substr(1);
        }

        inputString = inputString.join(" ");
        
        return inputString;
    }

//*************************************************************************************************
//  CHAPTER # 35-38 , QUESTION # 12
//      Write a JavaScript function that accepts a string as a parameter and 
//      find the longest word within the string.
//          EXAMPLE STRING : 'Web Development Tutorial'
//          EXPECTED OUTPUT : 'Development

    document.write(`<h1> LONGEST WORD WITHIN STRING </h1><br>`);
            
    var stringInput = prompt("Enter String to Search for Longest Word:");

    document.write(`<h1> Input String: ${stringInput} </h1> <br>`); 

    document.write(`<h1> Longest Word in String: ${searchLongestWord(stringInput)} </h1>`);


    function searchLongestWord(inputString) 
    {
        inputString = inputString.split(" ");

        var longestWord = inputString[0];

        for (let index = 1; index < inputString.length; index++) 
        {
            if(inputString[index].length > longestWord.length) 
            {
                longestWord = inputString[index];
            }
        }

        return longestWord;
    }

//*************************************************************************************************
//  CHAPTER # 35-38 , QUESTION # 13
//      Write a JavaScript function that accepts two arguments, a string and 
//      a letter and the function will count the number of occurrences of the 
//      specified letter within the string.
//          Sample arguments : 'JSResourceS.com', 'o'    

    document.write(`<h1> SEARCH LETTER WITHIN STRING </h1><br>`);
            
    var stringInput = prompt("Enter String to Search for Letter:");
    var letterInput = prompt("Enter Letter to Search for in String:");

    document.write(`<h1> Input String: "${stringInput}" </h1>`); 
    document.write(`<h1> Input Letter: '${letterInput}' </h1> <br>`);

    document.write(`<h1> Total Occurances of '${letterInput}' in String "${stringInput}": 
                    ${searchLetterOccurances(stringInput , letterInput)} </h1>`);


    function searchLetterOccurances(inputString , inputLetter) 
    {
        inputString = inputString.toLowerCase();
        inputLetter = inputLetter.toLowerCase();
        
        var getIndex = inputString.indexOf(inputLetter);

        var totalOccurance = 0;

        while(getIndex !== -1)
        {
            totalOccurance++;
            getIndex = inputString.indexOf(inputLetter , getIndex + 1);
        }
        
        return totalOccurance;
    }

//*************************************************************************************************
//  CHAPTER # 35-38 , QUESTION # 14
//      The Geometrizer
//          Create 2 functions that calculate properties of a circle, using the definitions here.
//              Create a function called calcCircumference:
//                  • Pass the radius to the function.
//                  • Calculate the circumference based on the radius, and 
//                  output "The circumference is NN".
//              Create a function called calcArea:
//                  • Pass the radius to the function.
//                  • Calculate the area based on the radius, and output "The area is NN".

    document.write(`<h1> THE GEOMETRIZER </h1><br>`);
            
    var circleRadius = Number(prompt("Enter Radius of Circle:"));

    document.write(`<h1> Radius of Circle: "${circleRadius}" </h1> <br>`);

    calcCircumference(circleRadius);
    calcArea(circleRadius);

    document.write(`<h1> Back to Main Code and Exit</h1> <br>`);

    function calcCircumference(inputRadius) 
    {
        document.write(`<h1> In Fnction "calcCircumference" </h1>`);
        document.write(`<h1> The Circumference is '${(2 * Math.PI * inputRadius).toFixed(3)}' </h1> <br>`);
        return;
    }

    function calcArea(inputRadius) 
    {
        document.write(`<h1> In Fnction "calcArea" </h1>`);
        document.write(`<h1> The Area is '${(Math.PI * (inputRadius * inputRadius)).toFixed(3)}' </h1> <br>`);
        return;
    }

//*************************************************************************************************
//                          END OF ASSIGNMENT # 6
//*************************************************************************************************