import Image from "next/image";
import img1 from "/public/assets/img1.png";
import Link from "next/link";
import { SlArrowRightCircle } from "react-icons/sl";

export default function Banner() {
  return (
    <section className="m-8 md:m-14 lg:m-16 xl:m-20 flex flex-col md:flex-row justify-center items-center">
      <div className="w-full md:w-1/2 lg:w-3/5 xl:w-1/2">
        <span className="text-lg inline-block mb-4 border-b-2 border-solid border-emerald-500">
          Athens
        </span>
        <h1 className="text-3xl md:text-6xl">
          Controle suas <span className="text-emerald-500">finanças</span>
        </h1>
        <h1 className="text-3xl md:text-6xl mt-2">
          Controle seu <span className="text-emerald-500">futuro</span>
        </h1>
        <h4 className="text-base md:text-lg mt-8">
          Apenas 5% dos estudantes do Ensino Médio no Brasil possuem a
          proficiência matemática exigida na BNCC (Base Nacional Comum
          Curricular) - esta que possui cíclos de matemática e educação
          financeira.
        </h4>
        <div className="flex justify-center items-center mt-6">
          <button className="w-1/2 md:w-1/4 p-2 text-lg text-white rounded bg-green-600 hover:bg-green-700">
            Comece Aqui
          </button>
          <Link
            href="/"
            className="w-1/2 md:w-1/2 flex text-center justify-center items-center mt-4 md:mt-0 md:ml-4"
          >
            <span className="text-base">Conecte-se</span>
            <SlArrowRightCircle className="ml-2 text-4xl text-emerald-500" />
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/2 mt-8 md:mt-0">
        <Image src={img1} alt="Imagem de uma pessoa jovem mexendo no PC" />
      </div>
    </section>
  );
}
