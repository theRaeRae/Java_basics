# Java_basics
Just playing around with javascript basics. :D

NOTES

DATA TYPES
- There are 8 data types in JS
1. Number - Represents an integer and a float.
2. BigInt - Longer numbers that cannot fit in 64 bits. You can declare an int as a BigInt by adding "n" at the end of the number.
3. String - Words sorrounded by quotes. Can be double, single, or backticks. Double and singles are the same. Backticks have extended functionality. You can embed variables in strings with backticks.
4. Boolean - True or false
5. Null - Does not belong to any data type. Non-existing object.
6. Undefined - Value is not assigned. The variable is declared but not assigned.
7. Object - Complex
8. Symbol - Unique

JS STRING METHODS

1. text.length - counts the length of string per char
2. slice( ) - Extracts part of the string and returns the extracted part in a new string
3. substring( ) - extract a part of a string and returns the extracted parts in a new string
4. substr( ) - 
5. replace( ) - replaces a specific word in the string
6. replaceAll( ) - replaces all the words that match
7. toUpperCase( )
8. toLowerCase( )
9. concat( ) - joins two or more strings
10. trim( ) - removes white space
11. trimStart( ) - removes whitespace at the front
12. trimEnd( ) - removes whitespace at the end

COMPARISON

"the essence of programming is teaching the computer how to make decisions in order to do more involved things." - The Odin Project

Boolean - True or false
String comp - Strings are compared letter by letter. Lexicographical
            - Z > A
            - Lenght of a string is considered
            - Ascii chart. Upper case are lesser than lower case

Comparison of Different Types - JS converts values to numbers

Strict Equality - Checks the equality without type conversion

Comparison with null and undefined - null and undefined are different when using === but are the same when using ==
            - When using operators, null = 0 and undefined = NaN

An Incomparable Undefined - Undefined should not be compared to other values.

CONDITIONAL STATEMENTS

if Statements - Execute <code> if (condition) is true
else Statements - Execute <code> if (condition) is false
else if Statements - Execute <code> if (condition 1) is false

LOGICAL OPERATORS

|| (OR) - Used in an if statement to test if any of the given conditions is true
        - A chain of OR returns the first true value or the last one if all are false

&& (AND) - two ampersands. && returns true if both conditions are true and false otherwise
        - Retruns the first false or the alst if none were found.
! (NOT) - exclamation point. accepts single values.