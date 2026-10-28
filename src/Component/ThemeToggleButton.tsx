import { useTheme } from '../Context/ThemeContext'; // Import your custom hook

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      className="px-4 py-2 rounded-full border border-neutral-400 cursor-pointer"
    >
      {/* Dynamic text or icons based on the current theme */}
      <p>{theme === 'dark' ? 'Light' : 'Dark'} </p>
      
    </button>
  );
}