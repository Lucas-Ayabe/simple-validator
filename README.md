# Simple-validator

A simple lib to validate forms in HTML. [A demo here.](https://simple-validator.netlify.app/)

## Getting Started

To copy the project to your local environment, only clone this repository with this comand:

```
git clone https://github.com/Lucas-Ayabe/simple-validator.git
```

_Important_: This is a TypeScript module then you need to have TypeScript installed to
use this module. [See more in Using section](##Using)

### Installing

A step by step series of examples that tell you how to get a development env running

First install all the dependencies with your favorite package manager.

if you use npm

```
npm install
```

or if you use yarn

```
yarn
```

Then to start the devolopment run the comand:

```
npm run dev
```

or if you use yarn

```
yarn dev
```

## Using

Is very simple to use this project, only import the simpleValidator factory function and
the rules that you use to validate.

**Note:** in this example, we import all the rules at once, but you can import only
the rules that you need with no problems.

After, call the simpleValidator function, passing as the first parameter the value to be tested and as a second parameter a **array** with the rules to be applied when validating.

And finally, the simpleValidator function returns a **boolean** value that represents if
the value passed as the first parameter is valid or not based in the rules of the array
passed in the second parameter.

**Note:** the rules passed to the second parameter is functions that receives an value and
returns a **boolean**. As in the example of the pattern rule, that receive a regular expression
to test.

```
import simpleValidator, * as Rules from "./index";

const { length, pattern } = Rules;

const isJavaValid = simpleValidator("Java", [length(4), pattern(/Java/g)]);
const isPythonValid = simpleValidator("Python", [length(4), pattern(/Java/g)]);

console.log(isJavaValid); // true
console.log(isPythonValid); // false
```

### Rules

#### length

The length rule test if a given string has a especific length or not. Example:

```
import simpleValidator, * as Rules from "./index";

const { length } = Rules;

simpleValidator("Java", [length(4)]); // Returns true because Java has 4 caracters.
simpleValidator("Python", [length(4)]); // Returns false because Python hasn't 4 caracters.
```

#### minLength

The minLength rule test if a given string has a length that is greater than a given
number or not. Example:

```
import simpleValidator, * as Rules from "./index";

const { minLength } = Rules;

simpleValidator("Python", [minLength(4)]); // Returns true because Python has more than 4 caracters.

simpleValidator("Java", [minLength(5)]); // Returns false because Java hasn't more than 5 caracters.
```

#### maxLength

The maxLength rule test if a given string has a length that is lower than a given
number or not. Example:

```
import simpleValidator, * as Rules from "./index";

const { maxLength } = Rules;

simpleValidator("Java", [maxLength(5)]); // Returns true because Java has less than
5 caracters.

simpleValidator("Python", [maxLength(4)]); // Returns false because Python hasn't less than
4 caracters.
```

#### pattern

The pattern rule test if a given string matches to a regular expression or not. Example:

```
import simpleValidator, * as Rules from "./index";

const { pattern } = Rules;

simpleValidator("Java", [pattern(/Java/g)]); // Returns true because Java matches the /Java/g regular expression.

simpleValidator("Python", [pattern(/Java/g)]); // Returns false because Python doesn't match /Java/g regular expression.
```

<!-- ## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why
`Give an example`

### And coding style tests

Explain what these tests test and why `Give an example` -->

## Built With

- [yarn](https://yarnpkg.com/)
- Dependency Management

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

- **Lucas Akira Ayabe** - _Initial work_ - [Lucas-Ayabe](https://github.com/Lucas-Ayabe)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file
for details.
