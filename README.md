# Express.js Email Service with MVC Architecture

A Node.js application built with Express.js that implements a clean MVC (Model-View-Controller) architecture for handling email functionality. This project demonstrates best practices in organizing a Node.js application with proper separation of concerns.

## Features

- Clean MVC architecture
- Email sending functionality using Nodemailer
- EJS templating engine for views
- Environment variable configuration
- RESTful API endpoints
- CORS support
- Static file serving

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/CodeRafay/nodemailer-mvc-app.git
cd expressjs_mvc
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your email configuration:
```env
PORT=3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

## Project Structure

```
expressjs_mvc/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── routes/         # Route definitions
├── views/          # EJS templates
├── app.js         # Main application file
├── index.js       # Application entry point
└── package.json   # Project dependencies
```

## Usage

1. Start the server:
```bash
npm test
```

2. Access the application:
- Web Interface: http://localhost:3000
- API Endpoint: http://localhost:3000/api/email

## API Endpoints

- `POST /api/email/send` - Send an email
  - Request body:
    ```json
    {
      "to": "recipient@example.com",
      "subject": "Email Subject",
      "text": "Email content"
    }
    ```

## Dependencies

- express: Web framework
- nodemailer: Email sending functionality
- ejs: Template engine
- dotenv: Environment variable management
- cors: Cross-origin resource sharing

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Author

Rafay Adeel

## Support

If you encounter any issues or have questions, please open an issue in the GitHub repository.
