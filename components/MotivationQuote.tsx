// 'use client';

// import { useState, useEffect } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { generateMotivationQuote } from '@/lib/gemini';
// import { Sparkles } from 'lucide-react';

// export default function MotivationQuote() {
//   const [quote, setQuote] = useState<string>('');

//   useEffect(() => {
//     loadQuote();
//   }, []);

//   const loadQuote = async () => {
//     try {
//       const newQuote = await generateMotivationQuote();
//       setQuote(newQuote);
//     } catch (error:unknown) {
//       setQuote('Your only limit is you!');
//     }
//   };

//   return (
//    <Card className="bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400 text-black rounded-2xl shadow-md">
//       <CardContent className="pt-6">
//         <div className="flex items-center gap-3">
//           <Sparkles className="h-6 w-6" />
//           <p className="text-lg font-semibold italic">{quote}</p>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }



'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { generateMotivationQuote } from '@/lib/gemini';
import { Sparkles } from 'lucide-react';

export default function MotivationQuote() {
  const [quote, setQuote] = useState<string>('');

  useEffect(() => {
    // Defining the function inside useEffect satisfies the dependency rule
    const loadQuote = async () => {
      try {
        const newQuote = await generateMotivationQuote();
        setQuote(newQuote);
      } catch (_error: unknown) {
        // Prefixed with underscore to tell ESLint it's intentionally unused
        setQuote('Your only limit is you!');
      }
    };

    loadQuote();
  }, []); // Now empty dependency array is safe

  return (
    <Card className="bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400 text-black rounded-2xl shadow-md">
      <CardContent className="pt-6">
        <div className="flex items-center gap-3">
          <Sparkles className="h-6 w-6 shrink-0" />
          <p className="text-lg font-semibold italic">
            {quote || 'Loading motivation...'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
