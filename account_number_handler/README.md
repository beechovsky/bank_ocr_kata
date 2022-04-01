# Account Number Handler
## Installation
To use this module in a REPL:
`const <some reasonable alias> = require('path/to/account_number_handler');`

To use as a local dependency, run the following inside the root directory of your dependent application:
`npm install --save /path/to/account_number_handler`

Then, in the entrypoint of the dependent application (typically `index.js`), add the following at the top:
`const <some reasonable alias> = require('account_number_handler');`

## Usage
The module exposes a single method, `processAccountNumbers()`, which expects the data from Node's `fs` module's `readFile()` method or similar, and returns a list of account numbers as strings.

For example:
```
const fs = require('fs')
const anh = require('account_number_handler')

const file = process.argv[2]

fs.readFile(file, 'utf8' , (err, account_numbers) => {
   if (err) {
       console.error(err)
       return
   }

   anh.processAccountNumbers(account_numbers)
})
```
