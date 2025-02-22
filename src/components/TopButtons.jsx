

const TopButtons = ({ setQuery }) => {
  const cities = [
    { id: 1, name: 'London' },
    { id: 2, name: 'Sydney' },
    { id: 3, name: 'Tokyo' },
    { id: 4, name: 'America' },
    { id: 5, name: 'Paris' },
  ];

  return (
    <div className='flex justify-around my-6'>
      {cities.map((city) => {
        return (
          <button 
            key={city.id}
            className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in text-white'
            onClick={() => setQuery({ q: city.name })}
          >
            {city.name}
          </button>
        );
      })}
    </div>
  );
}

export default TopButtons;
