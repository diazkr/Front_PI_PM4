import { ProductInterface } from "@/interfaces/ProductoInterface";
import Image from "next/image";
import { string } from "yup";

interface PropsCardPedido {
    name: string,
    price: string,
    imgUrl:string

}
const CardPedido: React.FC<PropsCardPedido> = ({

  name,
  imgUrl,
  price,
}) => {
  return (
    <div className="flex flex-row justify-between items-center gap-12 px-12 my-2 py-1">
      <div className="w-24 h-24 relative"> 
        <Image src={imgUrl} alt={name} fill objectFit="cover"/>
      </div>
      <p>{name}</p>
      <p> $ {price}</p>
    </div>
  );
};

export default CardPedido;
