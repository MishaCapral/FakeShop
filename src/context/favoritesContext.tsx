import {createContext, useCallback, useContext, useMemo, useState} from 'react';

const favoriteContext = createContext(null);

export const useFavoriteContext = () => {
  const context = useContext(favoriteContext);
  if (context === undefined) {
    throw new Error(
      'FavouriteContext should be within FavouriteContextProvider',
    );
  }
  return context;
};

const FavouriteContextProvider = ({children}: any) => {
  const [favorites, setFavorites] = useState<any[]>([]);

  const addToFavoritesHandler = useCallback(
    (item: any) => {
      const oldFavorites = [...favorites];

      const newFavorites = oldFavorites.includes(item)
        ? oldFavorites.filter(arrItem => arrItem !== item)
        : oldFavorites.concat(item);
      setFavorites(newFavorites);
    },
    [favorites],
  );

  const value = useMemo<any>(
    () => ({
      favorites,
      addToFavoritesHandler,
    }),
    [favorites, addToFavoritesHandler],
  );

  return (
    <favoriteContext.Provider value={value}>
      {children}
    </favoriteContext.Provider>
  );
};

export default FavouriteContextProvider;
