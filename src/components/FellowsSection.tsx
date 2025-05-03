
import { useEffect, useState } from 'react';

interface Fellow {
  fullName: string;
  photo: string;
  linkedin?: string;
}

const FellowsSection = () => {
  const [fellows, setFellows] = useState<Fellow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFellows = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/fellows');
        if (!response.ok) {
          throw new Error(`Failed to fetch fellows: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Fellows data:', data);
        setFellows(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching fellows:', err);
        setError('Failed to load fellows. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchFellows();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Fellows</h2>
        
        {loading && (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
        
        {error && (
          <div className="text-red-500 text-center mb-8">
            {error}
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {fellows.map((fellow, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-3 w-32 h-32 rounded-full overflow-hidden">
                <img 
                  src={fellow.photo} 
                  alt={fellow.fullName} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(fellow.fullName)}&size=128&rounded=true&bold=true&background=random`;
                  }}
                />
              </div>
              <h3 className="text-center font-medium">{fellow.fullName}</h3>
              {fellow.linkedin && (
                <a 
                  href={`https://linkedin.com/in/${fellow.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-1 text-blue-600 hover:text-blue-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FellowsSection;
