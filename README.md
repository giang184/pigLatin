step 0: work with the lower case version of all the words ignoring punctuations.

step 1: check if the word starts with a vowel: add "way" to the end.
    Example: "away" become "awayway"

step 2: check if the word starts with a q.

    a) if followed by a u, move qu to the end, add "ay"

    b) if not followed by a u, use the same convenention as other consonant

step 3: check if the word starts with a consonant.

    a) if it follows by a q, then move the consonant w/o the q.

    b) keep checking until a vowel is found, move all the consonant to the end.

  add "ay" to the end


Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("abc");
Expected Output: "abcway"

Test: "For words that begin with a consonant, it will move the consonant to the end of the word and add 'ay'."
Code: pigLatin("book");
Expected Output: "ookbay"

Test: "For words that begin with more than one consonant, it will move all consonants before the first vowel to the end of the word and add 'ay'."
Code: pigLatin("stop");
Expected Output: "opstay"

Test: "For words that begin with 'qu', it will move 'qu' to the end and add 'ay'."
Code: pigLatin("queen");
Expected Output: "eenquay"

Test: "For words that begin with 'q' not followed by a u, it will follow the same rule as other consonants."
Code: pigLatin("qi");
Expected Output: "iqay"

Test: "It ignores non-alphabetical characters since they can't be vowels."
Code: pigLatin("book.");
Expected Output: "ookbay"