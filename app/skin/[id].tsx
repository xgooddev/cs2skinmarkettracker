'use client';
import { useRouter } from "next/router";
import skinsData from "@/public/data/skins.json";
import skinHistoryData from "@/public/data/skinHistory.json";
import SkinDetail from "@/components/SkinDetail";

//Tipos
interface Skin {
  id: number;
  name: string;
  price: number;
  image: string;
  rarity: string;
}

interface PriceHistory {
  date: string;
  price: number;
}
// Tipado del JSON de history
interface SkinHistoryMap {
  [key: string]: PriceHistory[];
}

export default function SkinPage() {
  const router = useRouter();
  const { id } = router.query;
  const skinId = Number(id);

  // Tipado de skinsData
  const skin: Skin | undefined = skinsData.find((s: Skin) => s.id === skinId);
  if (!skin) return <p>Skin not found</p>;

  // Tipado seguro de history
  const historyMap: SkinHistoryMap = skinHistoryData;
  const history: PriceHistory[] = historyMap[String(skinId)] || [];

  return <SkinDetail skin={skin} history={history} />;
}