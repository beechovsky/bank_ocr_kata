# Bank OCR Kata
This repo contains:
- a Node module called Account Number Handler designed for handling the Bank OCR Kata found here:
http://codingdojo.org/kata/BankOCR/
- a small Node application for testing implementation of the module
- test files used for validating logic in the module

Instructions for implementing the module are in the module's README.

To use the test program, simply pass it a file like so:
`node test-app nominal_acct_numbers.txt`

# Assumptions/Process
- After reading the kata, I assumed (correctly) I wouldn't complete it in the allotted time, and instead opted to properly package whatever I had after giving the first use case some effort (I managed Use Case 1 and part of 3 before switching gears).
- As I've been instructed to provide a solution as if I'd be delivering it to a client, a Node module seemed the most prudent product.
- Due to the time constraint, I didn't bother trying both an iterative and recursive solution, and instead opted for a fairly naive iterative solution.
- I didn't have time to leverage `debug`, `Winston`, or similar. As such, I've left a single console log in the module to facilitate easy validation on your end as I have no knowledge of your testing harness (I wouldn't leave a console log normally).
- The module assumes it's receiving a file that's already been validated, as the test application here does.

**NOTE:** Opening the test files in Visual Studio Code nukes the spaces on 'empty' lines. Most IDEs (like Intellij) don't munge files like this. The module will only work if the files are formatted exactly as specified in the kata.