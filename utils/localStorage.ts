export const getFavorites = (): number[] => {
  if (typeof window === "undefined") return [];
  const fav = localStorage.getItem("favorites");
  return fav ? JSON.parse(fav) : [];
};

export const toggleFavorite = (id: number) => {
  const fav = getFavorites();
  if (fav.includes(id)) {
    localStorage.setItem(
      "favorites",
      JSON.stringify(fav.filter(f => f !== id))
    );
  } else {
    localStorage.setItem("favorites", JSON.stringify([...fav, id]));
  }
};
