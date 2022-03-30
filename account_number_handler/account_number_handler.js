// index is digit represented
const DIGIT_STRINGS = [
    " _ | ||_|",
    "     |  |",
    " _  _||_ ",
    " _  _| _|",
    "   |_|  |",
    " _ |_  _|",
    " _ |_ |_|",
    " _   |  |",
    " _ |_||_|",
    " _ |_| _|"
]

// group char strings per acct. number
let account_number_grouper = (acct_num_char_lines) => {
    let acct_num_group = []

    return acct_num_char_lines.reduce(
        function(acc, cur, idx) {
            if (idx % 4 === 0) acc.push(acct_num_group = [])

            acct_num_group.push(cur)

            return acc
        },
        [acct_num_group]
    );
}

// assemble account numbers
let extractDigits = (account_number_group) => {
    let acct_number = ''

    let i = 0
    while (i < 27) {
        let digit = `${DIGIT_STRINGS.indexOf(account_number_group[0].substring(i,i+3) + account_number_group[1].substring(i,i+3) + account_number_group[2].substring(i,i+3))}`

        if (digit === '-1') digit = '?'

        acct_number = acct_number.concat(digit)

        i += 3
    }

    return acct_number
}

let construct_numbers = (account_numbers_raw) => {
    let acct_num_groups = account_number_grouper(account_numbers_raw.split('\n'))

    // punt the crufty first and last lists (first comes from grouping function, last is from EOF char)
    acct_num_groups.shift()
    acct_num_groups.pop()

    // return assembled numbers
    return acct_num_groups.map(num_group => extractDigits(num_group))
}

let processAccountNumbers = (account_numbers_raw) => {

    let account_numbers = construct_numbers(account_numbers_raw)
    console.log('Account Numbers: ' + account_numbers)

    return account_numbers
}

exports.processAccountNumbers = processAccountNumbers;