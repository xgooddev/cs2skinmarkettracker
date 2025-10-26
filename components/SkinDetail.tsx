'use client';
import { useState, useMemo } from "react"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { toggleFavorite, getFavorites } from "@/utils/localStorage";
import Image from 'next/image'

  interface Skin {
    id: number;
    name: string;
    price: number;
    image: string;
    rarity: string;
  };

  interface PriceHistory {
    date: string;
    price: number;
  }

  interface SkinDetailProps {
    skin: Skin;
    history: PriceHistory[];
  }


export default function SkinDetail({ skin, history }: SkinDetailProps) {
    if (!skin) return null; // <- importante, evita errores si skin es undefined

  // Estado inicial de favorito
  const isFavInitial = useMemo(() => getFavorites().includes(skin.id), [skin.id]);
  const [isFav, setIsFav] = useState(isFavInitial);


  const handleFav = () => {
    toggleFavorite(skin.id);
    setIsFav(!isFav);
  };
  

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <Card className="w-96">
        <CardHeader className="flex justify-between items-center">
          <CardTitle>{skin.name}</CardTitle>
          <button
            onClick={handleFav}
            className={`px-2 py-1 rounded ${isFav ? "bg-yellow-400" : "bg-gray-300"}`}
          >
            {isFav ? "★ Favorite" : "☆ Add"}
          </button>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <Image
            src={skin.image}
            alt={skin.name}
            width={256}
            height={128}
            className="object-contain"
          />
          <p className="text-sm text-gray-500">{skin.rarity}</p>
          <p className="text-lg font-bold">${skin.price.toFixed(2)}</p>

          <div className="w-full h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={history}>
                <XAxis dataKey="date" />
                <YAxis domain={['dataMin', 'dataMax']} />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
