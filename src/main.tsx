import { createRoot } from 'react-dom/client';
import './styles/reset.css';
import './styles/global.css';
import RecipeCard from './components/RecipeCard/RecipeCard';

export default function App() {
  return (
    <main>
      <RecipeCard />
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
