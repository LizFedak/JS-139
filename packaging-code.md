- Project directory layout
- What is transpilation
- npm and npx - https://launchschool.com/lessons/3f433bfc/assignments/2f0f28c7
- package.json and package-lock.json
- npm scripts - https://launchschool.com/lessons/3f433bfc/assignments/a4c94e01
- packaging projects
- ➕Lodash

# Project directory layout

├── dist
│   ├── todo.js
│   └── todolist.js
├── lib
│   ├── todo.js
│   └── todolist.js
├── index.js
├── node_modules
├── package-lock.json
├── package.json
└── test
    └── todolist.test.js


# STEP BY STEP

1. mkdir folder-name - working directory
- add node_modules folder
- restrict the name to just lowercase letters, digits, underscores, and hyphens
2. cd folder-name
3. git init
- git add README.md
- Create a .gitignore file with this entry every time you start working on a new NPM package.
--- ADD node_modules to gitignore
4. set up the folder structure - add **test** and **lib**
-- make sure any `require` follow the right path
5. add the package.json file (format below)
- run `npm install`
??? run  `npm install eslint --save-dev`

6. add the code files in lib
7. add the test files in the test folder


8. add babel shortcuts to the package.json file ( BELOW IN JSON FILE) COMMAND: `npm run babel`
INSTALL BABEL - `npm install --save-dev @babel/core @babel/cli`
ADD TO JSON - `npx babel lib --out-dir dist --presets=@babel/preset-env` # Note: that's the npx command, not npm!
9. run babel command ??? 
??? https://launchschool.com/lessons/3f433bfc/assignments/c43f8598 - publish to NPM ready
- `npm publish --access public`


package.json file
```js
{
  "name": "todolist_project", // change the name
  "version": "1.0.0",
  "description": "",
  "main": "index.js", // **** READ BELOW
  "directories": {
    "lib": "lib",
    "test": "test" // update directories if needed
  },
   "dependencies": {
    "express": "4",
    "http-errors": "1",
    "morgan": "1.9"
  }, // update with relevant dependencies
  "scripts": {
    "babel": "npx babel lib --out-dir dist --presets=@babel/preset-env"
  },
  "author": "Liz Fedak",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.5.5",
    "@babel/core": "^7.5.5",
    "@babel/preset-env": "^7.5.5",
    "@babel/preset-es2015": "^7.0.0-beta.53",
    "eslint": "^6.1.0"
  }
}
```
**** main: 
 Next, you should either change the value of the "main" field to one of the files in dist, or create an index.js file in the root directory of your project. Remember that main identifies the file that JavaScript will load when you import the package. We'll create an index.js file and require the files in dist that we need. We'll put the imported modules in an object assigned to module.exports:

index.js

We'll create an index.js file and require the files in dist that we need. We'll put the imported modules in an object assigned to module.exports:

```js
module.exports = {
  TodoList: require('./dist/todolist'),
  Todo: require('./dist/todo'),
};
```



EXTRA
> You now have the basic structure of a typical node project. There are many other directories that you may need. For instance, web-based programs generally require "assets" like images, JavaScript, and CSS (stylesheets) -- these often reside in an assets directory with a subdirectory for each file type: images, javascript, and stylesheets. Depending on the type and scale of the project, you may also decide to house all browser-related code in a folder of its own, typically named client. You can add further subdirectories to the client folder. You will see some of these files in later courses, and you'll organize your projects in the way most JavaScript developers organize them.


# What is transpilation

> Transpilation is the process of converting source code written in one language into another language with a similar level of abstraction to the original code. 

In JavaScript, this is commonly going to mean transpiling a program that is written with ES6 features into ES5 so it'll run in browsers that don't recognize some ES6 features. We use transpilation because sometimes the language is udates faster than runtime environments can keep up.

The go-to JavaScript transpiler is Babel.  

https://babeljs.io/repl


> In a JavaScript project, you can use Babel in several ways. The most convenient way is to configure Babel to run automatically. However, that's a bit complicated so we won't do that right now. Instead, we'll show you how to use Babel from the command line.




> This command tells Babel to transpile all JavaScript files in the lib directory and to output the resulting code to files with the same names in the dist directory. 

TRANSPILE STEPS - https://launchschool.com/lessons/3f433bfc/assignments/1cb18365

1. INSTALL LOCAL PACKAGES
```bash
npm install --save-dev @babel/core @babel/cli
```

2. We can now transpile the files in our lib folder:


This command tells Babel to transpile all JavaScript files in the lib directory and to output the resulting code to files with the same names in the dist directory. Babel creates a dist directory (if needed), transpiles our todo.js and todolist.js files, and creates two new files with the same name as the source files inside dist. It places the transpiled output in the files created in dist.


```bash
npx babel lib --out-dir dist     # Note: that's the npx command, not npm!
```






This lesson explores some of the most common tools in the Node toolbox; namely:

npm
Packages
The package.json file
Automating with Scripts
Babel




# Node packages and npx versus npm

> Node packages, as the name suggests, are packages of code that you can download, install, and use in your code and system. You can import some packages into your programs, and use others from the terminal command line. You can even use some packages in both ways. The npm command, which comes bundled with node, manages your packages.


Some examples of node packages:
- eslint: This package checks for violations of JavaScript style conventions and other potential issues in your code.
- jest: The testing library makes the jest executable available as a command in your terminal.
- readline-sync: This package lets you get input from the user in a terminal program in a simple, synchronous manner.


Note that there's a difference in the way we use these packages. For instance, we use eslint and jest as command-line tools. For instance, we run eslint like this:

Copy Code
npx eslint a_js_file.js




readline-sync, on the other hand, is imported into JavaScript programs with the require function. It's not an executable command. Instead, it's a programming interface — a set of functions, in this case — that we can import and use in our JavaScript code. For example, we import readline-sync like so:

Copy Code
const rlSync = require('readline-sync');


When we create modules for the exclusive use of our project, we typically use a relative path when we import the file. However, with npm packages, we don't need or use a relative path. Instead, we can omit the relative path, and require looks inside the node_modules directory for a folder with the same name as the argument. In the next section, we'll take a closer look at the node_modules directory.


# node_modules directory

You can install Node packages in two ways: locally and globally. 

Packages needed by an application or project are commonly installed locally inside the project directory. Typically, these packages are often the kind that we import into our program, but they can also provide executable programs that we need. To install a package locally, use the npm install command without the --global option.


LODASH = https://launchschool.com/lessons/3f433bfc/assignments/2f0f28c7



This command downloads and installs the lodash package in the node_modules directory. However, where is node_modules located? The npm command looks for an existing directory by that name in the current folder. If it doesn't find one, it looks in the parent directory. If it doesn't find it there, it keeps searching up the directory hierarchy until it finds one. If it doesn't find one, it creates one in the directory where you ran the npm install command.

This directory search is why you should never nest your project directory inside a directory that already contains a node_modules directory. If you do, npm will store your local packages in the existing node_modules directory, not a new one in your project directory as intended. You want to install all of your dependencies inside your project directory, not above it.




node - garbage collection - not importing the entire package
- https://launchschool.com/lessons/3f433bfc/assignments/2f0f28c7


# The package.json and package-lock.json


The package-lock.json file shows the precise versions of the packages that npm installed. It also shows the dependencies of each package and the version of each dependency. Npm and the package.json file follow semantic versioning. For example, in package.json, the versions that we've specified are the major versions, e.g., "4". Node then chooses a specific minor and patch version that is compatible with the rest of the dependencies and adds that information to package-lock.json.

The next time we run npm install it'll look at package-lock.json and install the specific versions specified there. That is why you must add package-lock.json to your git repo. You want all contributors and users of your package to install the correct versions and avoid versioning problems.



### Adding a New Dependency
You can add a new dependency to your project and package.json in one of two ways:

Directly add the dependency to package.json
Use npm install

You don't have to edit package.json directly. Instead, just run npm install with the package name and the --save option to install the package and save it to both package.json and package-lock.json. For example, if we want to add lodash dependency to our project, we can run this command:

Copy Code
npm install lodash --save

The save option tells npm to save the package to the dependencies list in package.json. You can also use the shortcut -S option, which is simply an alias for --save.

Copy Code
npm install lodash -S




For this section, assume that you have installed both global and local versions of ESLint. In practice, you shouldn't do this: you should always install ESLint locally.




There are several ways to run a local npm executable package, but the simplest way is to precede the executable's name by npx:

Copy Code
npx eslint lib/todolist.js



The **npx** command uses the local version of eslint to scan the todolist.js file. Note that you don't have to have the intended executable installed globally; npx merely checks for a local installation first. If it can't find the package (eslint) locally or globally, it downloads and uses a temporary version of the named package.


Deleting a Dependency
To delete a dependency, use the npm uninstall command:

Copy Code
npm uninstall lodash


This command removes the lodash package from node_modules, but it doesn't remove it from the package.json dependencies. To delete it from the dependencies as well, use the --save option:

Copy Code
npm uninstall lodash --save


Likewise, --save-dev removes development dependencies.

Copy Code
npm uninstall eslint --save-dev


You can also use `npm prune` to remove dependencies. This command is useful when you manually remove some dependencies from package.json and want to remove the packages from node_modules. For example, suppose that we edit package.json and delete morgan from the dependencies list, then run npm prune. Since morgan is no longer a dependency, npm prune removes it from node_modules.




To install a package globally, use the -g flag with npm install:

Copy Code
npm install heroku -g


Despite the convenience of running commands globally, it can cause problems. For instance, ESLint seems like a good candidate for a global installation. However, the ESLint team doesn't recommend it. If you do install ESLint globally, it may or may not work properly. If you're considering a global install for a package, be sure to check the documentation for that package; don't install the package globally unless they recommend doing so or explicitly state that global installations are allowed.



One useful feature of npm scripts is that npm knows how to find command-line executables, even those that are part of a local package. It uses commands from local packages in preference to those stored in more traditional locations, such as the directories specified by the PATH environment variable. Thus, you don't need to use the npx command:

Copy Code
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "foo": "echo 'How do you do?'",
  "babel": "babel lib --out-dir dist --presets=@babel/preset-env"