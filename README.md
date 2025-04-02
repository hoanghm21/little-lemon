# Little Lemon Restaurant Website

## Overview
Little Lemon is a restaurant website built using Next.js, incorporating modern React features such as Redux for state management, Context API for global state, and custom hooks for reusable logic. This project aims to provide a seamless user experience for browsing the restaurant's menu, making reservations, and accessing other services.

## Features
- Responsive design for mobile and desktop users
- Redux for state management
- Context API for global state management
- Custom hooks for encapsulating reusable logic
- Next.js for server-side rendering and optimized performance

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/little-lemon.git
   ```
2. Navigate to the project directory:
   ```
   cd little-lemon
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Development Server
To start the development server, run:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the application.

### Building for Production
To create an optimized production build, run:
```
npm run build
```
Then, you can start the production server with:
```
npm start
```

## Folder Structure
```
little-lemon
├── public                # Static files
├── src                   # Source code
│   ├── components        # React components
│   ├── context           # Context API setup
│   ├── hooks             # Custom hooks
│   ├── pages             # Next.js pages
│   ├── redux             # Redux setup
│   ├── styles            # CSS styles
│   └── types             # TypeScript types
├── package.json          # npm configuration
└── tsconfig.json         # TypeScript configuration
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.