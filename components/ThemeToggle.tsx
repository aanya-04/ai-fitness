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

  useEffect(() => {
    initializeDarkMode();
    setMounted(true);
  }, [initializeDarkMode]);

  // Show a skeleton loader instead of disabled button
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-md bg-slate-200 dark:bg-slate-800 animate-pulse" />
    );
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
        <Sun className="h-5 w-5 text-yellow-500 transition-transform duration-200 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 transition-transform duration-200" />
      )}
    </Button>
  );
}
