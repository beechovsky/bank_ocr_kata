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