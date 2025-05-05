# FloodGuard

FloodGuard is a React TypeScript application that provides real-time flood monitoring, alerts, and emergency resources. The application helps users stay informed about flood risks and provides essential information for flood preparation and response.

## Features

- Real-time flood monitoring with interactive maps
- Flood alerts and notifications
- Emergency contacts and resources
- Flood preparation guides and checklists

## Technologies Used

- React 18
- TypeScript
- Vite
- Chakra UI
- React Router
- Leaflet Maps
- React Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/floodguard.git
cd floodguard
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── pages/         # Page components
  ├── assets/        # Static assets
  ├── hooks/         # Custom React hooks
  ├── utils/         # Utility functions
  ├── types/         # TypeScript type definitions
  ├── services/      # API and service functions
  ├── App.tsx        # Main application component
  └── main.tsx       # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
