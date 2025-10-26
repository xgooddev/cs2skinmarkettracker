import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FilterTabsProps {
  typeFilter: string;
  rarityFilter: string;
  onTypeChange: (value: string) => void;
  onRarityChange: (value: string) => void;
}

export default function FilterTabs({ typeFilter, rarityFilter, onTypeChange, onRarityChange }: FilterTabsProps) {
  const types = ["All", "Rifles", "Snipers", "Pistolas", "Guantes", "Cuchillos", "SMGs", "Cajas", "Pesadas"];
  const rarities = ["All", "Covert", "Classified", "Restricted", "Mil-Spec"];

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Tabs value={typeFilter} onValueChange={onTypeChange}>
        <TabsList>
          {types.map(t => <TabsTrigger key={t} value={t}>{t}</TabsTrigger>)}
        </TabsList>
      </Tabs>
      <Tabs value={rarityFilter} onValueChange={onRarityChange}>
        <TabsList>
          {rarities.map(r => <TabsTrigger key={r} value={r}>{r}</TabsTrigger>)}
        </TabsList>
      </Tabs>
    </div>
  );
}
