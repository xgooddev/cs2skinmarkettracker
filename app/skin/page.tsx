'use client';

import { useEffect, useState } from 'react';
import SkinDetail from '@/components/SkinDetail';

// Tipos
interface Skin {
  id: number;
  name: string;
  type: string;
  rarity: string;
  price: number;
  priceChange: number;
  image: string;
  float: number;
}

interface PriceHistory {
  date: string;
  price: number;
}

export default function SkinPage({ params }: { params: { id: string } }) {
  const skinId = Number(params.id);

  const [skins, setSkins] = useState<Skin[]>([]);
  const [history, setHistory] = useState<PriceHistory[]>([]);

  useEffect(() => {
    fetch('/data/skins.json')
      .then(res => res.json())
      .then((data: Skin[]) => {
        setSkins(data);

        const skin = data.find(s => s.id === skinId);
        if (skin) {
          setHistory([
            { date: '2025-10-18', price: skin.price - 0.2 },
            { date: '2025-10-19', price: skin.price - 0.1 },
            { date: '2025-10-20', price: skin.price },
            { date: '2025-10-21', price: skin.price + 0.3 }
          ]);
        }
      });
  }, [skinId]);

  const skin = skins.find(s => s.id === skinId);
  if (!skin) return <p>Skin not found</p>;

  return <SkinDetail skin={skin} history={history} />;
}
