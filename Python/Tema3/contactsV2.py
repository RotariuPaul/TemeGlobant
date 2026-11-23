contacts=[
     {"Name": "Ana","Phone":"0722000001","email": "anitagigilove@yahoo.com"},
    {"Name": "Mihai","Phone":"0722000002","email": "mihai@gmail.com"},
]

def ListContacts():
    print(f"{'Name':<10}{'Phone':<15}{'Email':>5}")
    for contact in contacts:
        print(f"{contact['Name']:<10}{contact['Phone']:<15}{contact['email']:>5}")

def AddContacts():
    name=input("Plese enter the name:")
    phoneNumber=input("Please enter the phone number:")
    email=input("Please enter the email:")
    for contact in contacts:
        if contact["Name"].lower()==name.lower():
            print("Do you want to overwrite?\n1.YES\n2.NO")
            choice=input("What do you want to do?\n")
            match choice:
                case "1":
                    contact["Phone"]=phoneNumber
                    contact["email"]=email
                case "2":
                    return
                case _:
                    print("Invalid choice")
            return
    contacts.append({"Name":name,"Phone":phoneNumber,"email":email})


def SearchByName():
    searched=input("🔍:")
    for contact in contacts:
        if searched.lower()==contact["Name"].lower():
            print(contact)
            return
    print("Contacts not found!")

def DeleteContact():
    wantToDelete=input("Who do you want to delete?:\n")

    for contact in contacts:
        if wantToDelete.lower()==contact["Name"].lower():
            contacts.remove(contact)
            print(f"{contact['Name']} was deleted!")
            return
    print("No one was found with this name!")

while True:
    print("1.List contacts\n2.Add contact\n3.Search by name\n4.Delete contact\n5.Quit")
    value=input("What do you wanna do??:\n")
    match value:
        case "1":
            ListContacts()
        case "2":
            AddContacts()
        case "3":
            SearchByName()
        case "4":
            DeleteContact()
        case "5" | "Quit" | "quit":
            print("Bye")
            break
        case _:
            print("Invalid choice!")

"""
Pentru cautare este mai eficient Dictionarul de dictionare deoarece folosim direct cheia 
complexitatea fiind O(1) , in schimb lista de dictionare are complexitatea O(n) deoarece trebuie
sa verificam fiecare element pana ajungem la elementul dorit
"""
