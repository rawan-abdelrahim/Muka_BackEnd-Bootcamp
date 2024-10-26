# JavaScript Fundamentals 

 Data types and arithmetic, comparison, and logical operators.

## Differences Between let, const, and var:

| Feature                       | `let`                             | `const`                          | `var`                              |
|-------------------------------|-----------------------------------|----------------------------------|------------------------------------|
| **Scope**                     | Block-scoped                      | Block-scoped                     | Function-scoped                    |
| **Reassignment**              | Allowed                           | Not allowed                      | Allowed                            |
| **Hoisting**                  | Hoisted but not initialized       | Hoisted but not initialized      | Hoisted and initialized to `undefined` |
| **Declaration Requirement**   | Can be declared without assigning | Must be assigned when declared   | Can be declared without assigning  |
| **Redeclaration**             | Not allowed within the same scope | Not allowed within the same scope| Allowed within the same scope      |


## Table of Arithmetic, Comparison, and Logical Operators:

| Operator Type        | Operator          | Description                                 | Example                      |
|----------------------|-------------------|---------------------------------------------|------------------------------|
| **Arithmetic**       | `+`               | Addition                                    | `5 + 3` results in `8`       |
|                      | `-`               | Subtraction                                 | `5 - 3` results in `2`       |
|                      | `*`               | Multiplication                              | `5 * 3` results in `15`      |
|                      | `/`               | Division                                    | `10 / 2` results in `5`      |
|                      | `%`               | Modulus (remainder)                         | `10 % 3` results in `1`      |
|                      | `**`              | Exponentiation                              | `2 ** 3` results in `8`      |
| **Comparison**       | `==`              | Equal to (with type coercion)               | `"5" == 5` results in `true` |
|                      | `===`             | Strictly equal (without type coercion)      | `"5" === 5` results in `false`|
|                      | `!=`              | Not equal (with type coercion)              | `"5" != 5` results in `false`|
|                      | `!==`             | Strictly not equal (without type coercion)  | `"5" !== 5` results in `true`|
|                      | `<`               | Less than                                   | `3 < 5` results in `true`    |
|                      | `>`               | Greater than                                | `5 > 3` results in `true`    |
|                      | `<=`              | Less than or equal to                       | `5 <= 5` results in `true`   |
|                      | `>=`              | Greater than or equal to                    | `5 >= 3` results in `true`   |
| **Logical**          | `&&`              | Logical AND                                 | `true && false` results in `false`|
|                      | `||`              | Logical OR                                  | `true || false` results in `true`|
|                      | `!`               | Logical NOT                                 | `!true` results in `false`   |


