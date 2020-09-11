This app generates a password using random characters and a user defined length.

The app works by first asking the user how long they want their password to be between 8 and 128.
It will verify the users input t oensure its not less then 8 numbers, and not more then 128 numbers. Additionally, it checks to ensure that only numbers have been input.
Invalid inputs return context specific error messages to assist the user in correcting their mistakes.

Next the app will ask the user what types of characters they want to include in their random password. 
Questions include:
    -upper case characters
    -lower case characters
    -special characters
    -numbers
For each character set the user accepts, those characters are added into an array.

Next the system will take the newly generated array that includes all characters the user asked to include, and will select a random character from that array.
It does htis by generating a random number between 0 and the total length of the array, and pulling the character at that position in the array, and inserting it into a new array that will hold the final password.

It then takes this final password array, and displays it on screen.