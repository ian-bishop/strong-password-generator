# Strong Password Generator

A lightweight, browser-based password generator for creating
cryptographically random passwords.

## Live Demo

Try the password generator:

https://ian-bishop.github.io/strong-password-generator/

## Features

- Adjustable password length
- Uppercase letters
- Lowercase letters
- Numbers
- Symbols
- One-click copy
- Runs entirely in the browser
- No passwords are transmitted or stored

## How It Works

The generator uses the browser's Web Crypto API and
`crypto.getRandomValues()` to obtain cryptographically strong
random values.

Unlike `Math.random()`, the Web Crypto API is designed for
security-sensitive applications.

## Privacy

Password generation occurs locally in your browser.

The generated password does not need to be transmitted to a
server.

## More Password Tools

Additional password generators and password-related tools are
available at:

https://generatemypassword.com/

## License

MIT
