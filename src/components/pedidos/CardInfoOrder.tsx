import { ProductInterface } from "@/interfaces/ProductoInterface";
import Image from "next/image";
import { string } from "yup";

interface PropsCardInfoOrder {
    id: string,
    fecha: string,
    total:string

}
const CardInfoOrder: React.FC<PropsCardInfoOrder> = ({
    id, fecha, total
  
}) => {
    const formatDate = (dateString: string) => {
        return dateString.split('T')[0]; 
      };
  return (
    <div className="flex flex-row justify-between items-center my-2 py-1  bg-gray-200">
      <div>
        <p className=" text-xs">ID de la orden:{id} </p>
        <p className=" text-xs">Fecha:{formatDate(fecha)} </p>
      </div>
      <p className="px-2 font-medium"> Total de la compra:  ${total}</p>
    </div>
  );
};

export default CardInfoOrder;
