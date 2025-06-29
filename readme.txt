# Project Overview

This project is a React-based product comparison web application. It allows users to view a list of products, select multiple products, and compare their features side by side. The UI leverages Material-UI (MUI) components for a modern and responsive design.

## Features
- **Product Listing:** Browse a list of products with details such as name, brand, color, price, category, and image.
- **Product Comparison:** Select multiple products to compare their features in a tabular format.
- **Key Features Comparison:** Dynamically displays key features for each product, supporting boolean and string values.
- **Responsive UI:** Built using Material-UI for a consistent and mobile-friendly interface.

## Project Structure
```
assessment/
├── build/                # Production build output
├── public/               # Static public assets (index.html, icons, manifest, etc.)
├── src/                  # Source code
│   ├── App.js            # Main application component
│   ├── App.css           # Main application styles
│   ├── index.js          # Entry point for React
│   ├── components/       # React components
│   │   ├── ProductList.js        # Product listing component
│   │   ├── Products.js           # Product data or logic
│   │   └── ProductComparison.js  # Product comparison table component
│   └── ...               # Other source files
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation (this file)
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd assessment
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Application
Start the development server:
```sh
npm start
# or
yarn start
```
The app will be available at `http://localhost:3000`.

### Building for Production
To create a production build:
```sh
npm run build
# or
yarn build
```
The build output will be in the `build/` directory.

## Main Components
- **ProductList.js:** Displays the list of products and allows selection for comparison.
- **ProductComparison.js:** Renders a comparison table for selected products, showing images, brand, color, price, category, and dynamic key features.
- **Products.js:** Contains product data or logic for managing products.

## Customization
- To add or modify products, update the data in `Products.js`.
- To change the comparison logic or UI, edit `ProductComparison.js`.

## Dependencies
- [React](https://reactjs.org/)
- [Material-UI (MUI)](https://mui.com/)

## Contributing
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to your fork.
4. Open a pull request describing your changes.

## License
Specify your license here (e.g., MIT, Apache 2.0, etc.).

## Contact
For questions or support, contact the project maintainer.
