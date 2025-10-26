import { useState } from "react";
import { motion } from "framer-motion";
import skinsData from "@/public/data/skins.json";
import SkinCard from "@/components/SkinCard";
import SearchBar from "@/components/SearchBar";
import FilterTabs from "@/components/FilterTabs";

export default function Home() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [rarityFilter, setRarityFilter] = useState("All");

  const filteredSkins = skinsData.filter(skin =>
    skin.name.toLowerCase().includes(search.toLowerCase()) &&
    (typeFilter === "All" || skin.type === typeFilter) &&
    (rarityFilter === "All" || skin.rarity === rarityFilter)
  );

  return (
    <main className="p-8 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold">CS2 Skin Market Tracker</h1>
      <SearchBar value={search} onChange={setSearch} />
      <FilterTabs
        typeFilter={typeFilter}
        rarityFilter={rarityFilter}
        onTypeChange={setTypeFilter}
        onRarityChange={setRarityFilter}
        />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkins.map(skin => (
            <motion.div
            key={skin.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}> 
          <SkinCard key={skin.id} skin={skin} onClick={() => console.log(skin.name)} />
             </motion.div>
        ))}
      </div>
    </main>
  );
}
