// Entry point for the React application
// Imports React root rendering API
import { createRoot } from 'react-dom/client';
// Imports Redux Provider to make the store available to all components
import { Provider } from 'react-redux';
// Main App component
import App from './App.tsx';
// Global styles
import './index.css';
// Redux store instance
import { store } from './redux/store.tsx';

// Mounts the React app to the DOM element with id 'root'
createRoot(document.getElementById('root')!).render(
  // Optionally wrap with <StrictMode> for highlighting potential problems
  // <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </StrictMode>
)
