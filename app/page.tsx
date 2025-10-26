'use client';

import { useEffect, useState } from 'react';
import SkinCard from '../components/SkinCard';
import SearchBar from '../components/SearchBar';
import FilterTabs from '../components/FilterTabs';
import SkinDetail from '../components/SkinDetail';
import { motion } from 'framer-motion';
import { Skin, PriceHistory, SkinHistoryMap } from '@/app/types';

export default function Home() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [rarityFilter, setRarityFilter] = useState('All');
  const [skins, setSkins] = useState<Skin[]>([]);
  const [historyMap, setHistoryMap] = useState<SkinHistoryMap>({});
  const [selectedSkin, setSelectedSkin] = useState<Skin | null>(null);

  // Cargar skins y history
  useEffect(() => {
    fetch('/data/skins.json')
      .then(res => res.json())
      .then((data: Skin[]) => setSkins(data));

    fetch('/data/skinHistory.json')
      .then(res => res.json())
      .then((data: SkinHistoryMap) => setHistoryMap(data));
  }, []);

  // Filtrado y búsqueda
  const filteredSkins = skins.filter(skin =>
    skin.name.toLowerCase().includes(search.toLowerCase()) &&
    (typeFilter === 'All' || skin.type === typeFilter) &&
    (rarityFilter === 'All' || skin.rarity === rarityFilter)
  );

  return (
    <main className="p-8 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold">CS2 Skins del AIM</h1>

      <SearchBar value={search} onChange={setSearch} />
      <FilterTabs
        typeFilter={typeFilter}
        rarityFilter={rarityFilter}
        onTypeChange={setTypeFilter}
        onRarityChange={setRarityFilter}
      />

      {/* Grid de skins */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkins.map(skin => (
          <motion.div
            key={skin.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SkinCard
              skin={skin}
              onClick={() => setSelectedSkin(skin)} // Abrir overlay en vez de navegar
            />
          </motion.div>
        ))}
      </div>

      {/* Overlay de skin seleccionada */}
      {selectedSkin && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-6 z-50">
    {selectedSkin && (
      <SkinDetail
        skin={selectedSkin}
        history={historyMap[String(selectedSkin.id)] || []}
      />
    )}
    <button
      className="absolute top-4 right-4 text-white text-3xl font-bold"
      onClick={() => setSelectedSkin(null)}
    >
      ✕
    </button>
  </div>
)}
    </main>
  );
}
