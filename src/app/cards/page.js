export default function CardsPage() {
    const dummyCards = Array.from({ length: 6 }, (_, i) => ({
      name: `Pokemon ${i + 1}`,
      type: ['Grass', 'Fire', 'Water'][i % 3],
    }));
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Pokedex</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
            >
              <div className="bg-gray-300 w-20 h-20 rounded-full mb-4" />
              <h2 className="text-lg font-semibold">{card.name}</h2>
              <span className="mt-2 px-3 py-1 bg-green-200 rounded-full text-sm">{card.type}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  