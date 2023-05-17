import Image from "next/image";
import img1 from "/public/assets/img3.png";

export default function Methods() {
  return (
    <section className="flex text-center flex-col-reverse md:flex-row items-center justify-center m-10">
      <div className="w-full md:w-1/2">
        <Image src={img1} alt="" />
      </div>
      <div className="w-full md:w-1/2">
        <span className="text-lg inline-block mb-4 border-b-2 border-solid border-emerald-500">
          Metodologia
        </span>
        <h1 className="text-4xl md:text-6xl my-3">
          O maior erro é a falta de profundidade.
        </h1>
        <p className="text-base md:text-lg mt-4">
          Os organismos econômicos são extremamente complexos e precisam de
          desdobramentos práticos e teóricos do estudante, de uma forma que o
          maior erro do sistema educacional moderno é a falta de zelo com os
          assuntos e suas extremas reduções.
        </p>
        <button className="py-2 px-4 mt-6 text-lg text-white rounded bg-green-600 hover:bg-green-700">
          Saiba Mais
        </button>
      </div>
    </section>
  );
}
