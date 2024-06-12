import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface ContainerImageHomeProps {
    url: string;
    text: string; 
    link: string; 
  }
  

  const ContainerImageHome: React.FC<ContainerImageHomeProps> = ({ url, text, link }) => {
    return (
        <div className="w-full h-96 md:w-1/3 md:h-auto relative">
        <Link href={link} className="block w-full h-full relative">
            <Image
              src={url}
              alt={text} 
              className="w-full h-full object-cover"
              quality={100}
              width={500}
              height={500}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className=" text-white px-3 py-1 text-4xl border border-current backdrop-blur-sm">{text}</p>
            </div>
        </Link>
      </div>
    );
  };
  

export default ContainerImageHome