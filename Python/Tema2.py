#passwor.py task 1

"""
while True:
    password=input("Password: ")
    if len(password)<8:
        print("Too short (minimum 8)")
    elif not any(char.isupper() for char in password):
        print("Missing an uppercase letter.")
    elif not any(char.islower() for char in password):
        print("Missing a lowercase letter")
    elif not any(char.isdigit() for char in password):
        print("Missing a digit")
    elif " " in password:
        print("No spaces allowed")
    elif not any(char in "!@#$%^&*" for char in password):
        print("No punctuation character")
    else:
        print("Password accepted!")
        break
"""

#guess.py task 2

"""
import random

def guessingGame(maxim,guesses):
    secretNumber=random.randint(1,maxim);
    attempts=1
    sameGuess=[]
    for i in range(guesses):
        guess = int(input("Your guess: "))
        if guess in sameGuess:
            print("You already guessed this number")
            i -= 1
        if sameGuess:
            sameGuess.pop()
        if guess < secretNumber:
            print("Too low!")
        elif guess > secretNumber:
            print("Too high!")
        elif guess == secretNumber:
            print(f"You guessed the number in {attempts} attempts")
            break
        if attempts==guesses:
            print(f"The number was {secretNumber}")
        attempts += 1
        sameGuess.append(guess)

while True:

    print("Choose your difficulty:\n1.Easy\n2.High\n3.Exit:")
    difficulty = input("Your choice: ")

    match difficulty:
        case "1":
            guessingGame(50,8)
        case "2":
            guessingGame(200,6)
        case "3":
            break
        case _:
            print("Invalid choice!!!")
"""

#text_report.py task 3
"""
Paragraph=input("Write your paragraph for a report: ")

print(f"Words: {len(Paragraph.split())}")
print(f"Sentences: {Paragraph.count(".")+Paragraph.count("!")+Paragraph.count("?")}")
print(f"Characters (no spaces): {len(Paragraph.replace(" ",""))}")

vowelsCount=0
vowels="aAeEiIoOuU"
for char in Paragraph:
    if char in vowels:
        vowelsCount+=1

print(f"Vowels: {vowelsCount}")

longestWord=""
threeLongestWords=[]
sortedParagraph=sorted(Paragraph.split(),key=len,reverse=True)

for i in range (3):
    for char in "!?.":
        sortedParagraph[i]=sortedParagraph[i].replace(char,"")

print(f"Longest word: {sortedParagraph[0]}")
print(f"Three longest words: {sortedParagraph[0]},{sortedParagraph[1]},{sortedParagraph[2]}")
print(Paragraph[::-1])

"""






