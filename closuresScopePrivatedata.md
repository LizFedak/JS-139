# Closures and Private Data

We can use closures to define private data in JavaScript objects.



1. Write code that uses closure to create private data.

```js
function createUser(profileName) {
  let friends = [];
  return { 
    addFriend(user) {
      friends.push(user.showName());
    },
    updateProfileName(newName) {
      profileName = newName;
    },
    showFriendList() {
      friends.forEach(user => console.log(user));
    },
    showName() { 
      return profileName;
    }
  }
}

let mike = createUser("magicMike");
let nancy = createUser("fancynancy");
mike.addFriend(nancy);
console.log(mike.showName());
mike.showFriendList();

```


2. Explain why private data is desirable.

There are several reasons why it's good to use private data, including: 
- Enforces access via the provided methods so developers use the intended interface
- Private data helps protect data integrity because developers must use the interface
- Covers up the implementation details so users don't have to worry about the structure of the private data


3. Be able to identify code that gives users of your code a way to alter private data.

Unfortunately, there are still ways to expose private data via references to the data.

Here is a situation to watch out for:

- If you return a reference to a list or object it can then be used to store invalid data through direct assignent to the reference variable.

- Users using debuggers to step through programs and inspect the data at each step to find 'loose wires'

For that reason, anything that is truly 'private' or sensitive data should be encrypted