# Strong Password Generator

A free, lightweight, browser-based password generator for creating strong random passwords.

The generator runs entirely in your browser and uses the Web Crypto API for cryptographically secure random number generation. Generated passwords are not sent to a server or stored by this application.

## 🔐 Live Password Generator

Try the live password generator:

**https://ian-bishop.github.io/strong-password-generator/**

## Features

- Generate strong random passwords instantly
- Choose password lengths from 4 to 128 characters
- Include uppercase letters (`A-Z`)
- Include lowercase letters (`a-z`)
- Include numbers (`0-9`)
- Include special characters and symbols
- Copy generated passwords with one click
- Password generation occurs locally in the browser
- No server-side password generation
- No generated-password storage
- No external JavaScript libraries
- Mobile-friendly interface
- Built with HTML, CSS, and vanilla JavaScript

## How It Works

The password generator uses the browser's Web Crypto API:

```javascript
crypto.getRandomValues()
```

The Web Crypto API provides cryptographically strong random values suitable for security-sensitive applications.

This generator does **not** rely on `Math.random()` for password generation.

The application combines the character sets selected by the user and securely selects characters from the available set to construct the password.

Available character types include:

```text
Uppercase: ABCDEFGHIJKLMNOPQRSTUVWXYZ

Lowercase: abcdefghijklmnopqrstuvwxyz

Numbers:   0123456789

Symbols:   !@#$%^&*()_+-=[]{}|;:,.<>?
```

## Privacy

Password generation happens locally in your browser.

The generated password does not need to be transmitted to a remote server or stored in a database.

This means the basic generation process works entirely client-side:

```text
Browser
   │
   ├── Select password options
   │
   ├── Generate secure random values
   │
   ├── Construct password
   │
   └── Display password
```

There is no server-side password-generation step.

## How to Use

1. Open the password generator.
2. Choose your desired password length.
3. Select the character types you want to include.
4. Click **Generate Password**.
5. Click **Copy** to copy the generated password to your clipboard.

You can generate another password at any time by clicking **Generate Password** again.

## Password Length

The generator supports passwords between **4 and 128 characters**.

The default password length is:

```text
20 characters
```

For accounts that support longer passwords, increasing password length significantly increases the number of possible password combinations.

For example, a password generated from a large character set has exponentially more possible combinations as additional characters are added.

## Character Options

You can independently enable or disable the following character categories.

### Uppercase Letters

```text
ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

### Lowercase Letters

```text
abcdefghijklmnopqrstuvwxyz
```

### Numbers

```text
0123456789
```

### Symbols

```text
!@#$%^&*()_+-=[]{}|;:,.<>?
```

This makes it possible to adapt generated passwords to websites with different password requirements.

For example, some websites may require:

- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one symbol
- A minimum password length

## Why Use `crypto.getRandomValues()`?

JavaScript provides several ways to generate random values.

The commonly used:

```javascript
Math.random()
```

is a pseudo-random number generator and is not intended for cryptographic security.

This project instead uses:

```javascript
window.crypto.getRandomValues()
```

which is part of the Web Crypto API available in modern browsers.

It is designed to provide cryptographically strong random values.

For password generation, this makes it a more appropriate source of randomness than `Math.random()`.

## Browser-Based Password Generation

This project is a static web application.

It does not require:

- Node.js
- React
- Vue
- Angular
- A database
- A backend API
- Server-side password generation

The entire application consists of:

```text
index.html
style.css
script.js
README.md
```

GitHub Pages serves the static files directly to the browser.

## Project Structure

```text
strong-password-generator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the password generator interface, page content, metadata, and HTML structure.

### `style.css`

Contains the responsive layout and visual styling for the application.

### `script.js`

Contains the password-generation logic, character selection, copy functionality, and browser interaction.

### `README.md`

Contains documentation for the project.

## Running the Generator Locally

No build process is required.

Clone the repository:

```bash
git clone https://github.com/ian-bishop/strong-password-generator.git
```

Enter the project directory:

```bash
cd strong-password-generator
```

Then open:

```text
index.html
```

in a modern web browser.

You can also run a simple local web server.

For example, if Python is installed:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

in your browser.

## Deployment

The application is hosted using GitHub Pages.

GitHub Pages can deploy the project directly from the repository's `main` branch.

The live version is available at:

**https://ian-bishop.github.io/strong-password-generator/**

## Technology

The project intentionally has very few dependencies.

It uses:

- HTML5
- CSS3
- Vanilla JavaScript
- Web Crypto API
- Clipboard API
- GitHub Pages

No third-party JavaScript framework is required.

## Browser Compatibility

The generator is intended for modern browsers that support the Web Crypto API, including current versions of:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

JavaScript must be enabled for password generation to work.

## Security Considerations

A password generator is only one part of account security.

Good password practices generally include:

- Using unique passwords for different accounts
- Avoiding reuse of important passwords
- Using sufficiently long passwords
- Using randomly generated passwords when possible
- Enabling multi-factor authentication when available
- Storing passwords in a reputable password manager rather than trying to memorize many complex random passwords

A generated password should also meet the requirements of the website or application where it will be used.

## More Password Tools

For additional password generators and password-related tools, visit:

**https://generatemypassword.com/**

GenerateMyPassword.com provides additional tools for creating passwords for different requirements and use cases.

## Contributing

Suggestions, bug reports, and improvements are welcome.

If you find an issue, you can open an issue in this GitHub repository.

If you would like to contribute code:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Test the password generator.
5. Submit a pull request.

## License

This project is released under the MIT License.

You are free to use, modify, and distribute the code in accordance with the terms of the license.

---

**Strong Password Generator**

Built as a lightweight, privacy-friendly password generation tool.

Live tool:

**https://ian-bishop.github.io/strong-password-generator/**

More password tools:

**https://generatemypassword.com/**
