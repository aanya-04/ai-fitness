// 'use client';

// import { Moon, Sun } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useFitnessStore } from '@/lib/store';
// import { useEffect, useState } from 'react';

// export default function ThemeToggle() {
//   const { darkMode, toggleDarkMode, initializeDarkMode } = useFitnessStore();
//   const [mounted, setMounted] = useState(false);

//   // Initialize dark mode on client mount (prevents hydration mismatch)
//   useEffect(() => {
//     initializeDarkMode();
//     setMounted(true);
//   }, [initializeDarkMode]);

//   // Prevent rendering until mounted (avoid hydration mismatch)
//   if (!mounted) {
//     return (
//       <Button variant="ghost" size="icon" disabled>
//         <Moon className="h-5 w-5" />
//       </Button>
//     );
//   }

//   return (
//     <Button 
//       variant="ghost" 
//       size="icon" 
//       onClick={toggleDarkMode}
//       title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//       aria-label="Toggle theme"
//     >
//       {darkMode ? (
//         <Sun className="h-5 w-5 text-yellow-500" />
//       ) : (
//         <Moon className="h-5 w-5 text-slate-700" />
//       )}
//     </Button>
//   );
// }


'use client';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFitnessStore } from '@/lib/store';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode, initializeDarkMode } = useFitnessStore();
  const [mounted, setMounted] = useState(false);

  // Initialize dark mode only once when component mounts
  useEffect(() => {
    initializeDarkMode();
  }, [initializeDarkMode]);

  // Separate effect to set mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Show a placeholder until the component has mounted on the client
  if (!mounted) {
    return <div className="w-10 h-10 rounded-md" />;
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleDarkMode}
      title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className="transition-all duration-200 hover:scale-110"
    >
      {darkMode ? (
        <Sun className="h-5 w-5 text-yellow-500 transition-transform duration-200" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 transition-transform duration-200" />
      )}
    </Button>
  );
}
