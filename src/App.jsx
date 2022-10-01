import { useState, useMemo, useEffect, useLayoutEffect } from 'react';
import List from './components/List';

function App() {
  const [search, setSearch] = useState('');
  const [value, setValue] = useState([]);

  const getData = async () => {
    const fetchData = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await fetchData.json();
    return data;
  };

  useEffect(() => {
    getData()
      .then((data) => setValue(data))
      .catch((err) => console.log(err));
  }, []);

  const filteredData = useMemo(() => {
    return value.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, value]);

  return (
    <div className='grid grid-cols-12 grid-rows-[60px_60px_1fr] space-y-9'>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search your words'
        className='col-start-4 col-end-10 row-start-2 row-end-3 border-2 placeholder:italic placeholder:text-xl border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500'
      />
      <List filteredData={filteredData} />
    </div>
  );
}

export default App;
