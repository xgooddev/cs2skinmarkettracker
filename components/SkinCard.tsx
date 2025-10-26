import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import  Image  from "next/image";
interface SkinCardProps {
  skin: {
    id: number;
    name: string;
    price: number;
    priceChange: number;
    image: string;
    rarity: string;
  };
  onClick: () => void;
}

export default function SkinCard({ skin, onClick }: SkinCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Card className="w-68">
        <CardHeader>
          <CardTitle>{skin.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-2">
           <Image
                      src={skin.image}
                      alt={skin.name}
                      width={256}
                      height={128}
                      className="w-50 h-44 object-contain"
                    />
          <p className="text-sm">Price: ${skin.price.toFixed(2)}</p>
          <p className={`text-sm ${skin.priceChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {skin.priceChange >= 0 ? '+' : ''}{skin.priceChange}%
          </p>
          <span className="text-xs text-gray-400">{skin.rarity}</span>
        </CardContent>
      </Card>
    </motion.div>
  );
}
