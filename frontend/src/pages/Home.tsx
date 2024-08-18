import React, { useEffect, useState } from 'react';
import SearchBar from '../components/shared/Searchbar';
import { fetchService } from '../lib/fetch.service';
import Card from '../components/Card';
import useDebounce from '../hooks/useDebounce';
import { Loader } from '../components/shared/Loader';

const Home = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cards, setCards] = useState<Card[] | undefined>([]);
  const debouncedSearchValue = useDebounce(searchValue, 1000);

  useEffect(() => {
    const fetchCards = async () => {
      setIsLoading(true);
      try {
        if (debouncedSearchValue) {
          const { data } = await fetchService.get<Card[]>(`/search?title=${debouncedSearchValue}`);
          setCards(data);
        } else {
          const { data } = await fetchService.get<Card[]>('/cards');
          setCards(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (debouncedSearchValue !== undefined) {
      fetchCards();
    }
  }, [debouncedSearchValue]);


  return (
    <section>
      <main>
        <div className='py-24 w-full bg-[#DADBF0]'>
          <h1 className='text-center font-medium text-4xl sm:text-5xl lg:text-7xl'>
            How can we Help?
          </h1>

          <div className='mt-14 min-w-72 max-w-[50%] mx-auto'>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
        </div>
        {/* Displaying cards */}
        {
          isLoading ? <Loader /> : <div className='grid sm:grid-cols-2 my-10 gap-20 max-w-5xl mx-auto px-4'>
            {cards && cards.length > 0 ? (
              cards.map((card) => (
                <Card
                  description={card.description}
                  title={card.title}
                  id={card.id}
                  key={card.id}
                />
              ))
            ) : (
              <h1 className='text-black text-2xl text-center min-h-72'>
                No Cards found! Try to create new one.
              </h1>
            )}
          </div>
        }
      </main>
    </section>
  );
};

export default Home;
