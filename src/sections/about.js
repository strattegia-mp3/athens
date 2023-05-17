import Image from "next/image";
import img2 from "/public/assets/img2.png";

export default function About() {
  return (
    <section>
      <div className="w-full flex items-center justify-center">
        <span className="pb-1 font-medium text-2xl relative">
          O que é Athens?
          <span class="absolute top-10 bottom-0 left-1/2 bg-emerald-500 h-0.5 w-3/5 transform -translate-x-1/2" />
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center mx-8 m-16 lg:mb-20 lg:mt-10">
        <div className="text-center sm:text-right lg:text-left pr-2 pl-6">
          <span className="text-3xl border-b-2 border-solid border-emerald-500">
            Sobre Nós
          </span>
          <h4 className="mt-10">
            Somos um grupo de estudantes que inspecionaram e presenciaram todas
            as grandes deficiências em educação financeira no Ensino Médio.{" "}
          </h4>
          <button className="mt-4 py-2 px-5 text-lg bg-green-600 text-white rounded hover:bg-green-700">
            Saiba mais
          </button>
        </div>
        <div className="text-center">
          <Image
            src={img2}
            alt="Imagem de um celular com várias criptomoedas"
          />
        </div>
        <div className="text-center sm:text-left lg:text-right pl-2 pr-6">
          <span className="text-3xl border-b-2 border-solid border-emerald-500">
            Nossos Serviços
          </span>
          <h4 className="mt-10">
            Nosso intuito é introduzir os conceitos básicos das finanças, numa
            linguagem acessível e de um jeito bastante concreto aos estudantes
            do Ensino Médio.
          </h4>
          <button className="mt-4 py-2 px-8 text-lg bg-green-600 text-white rounded hover:bg-green-700">
            Explorar
          </button>
        </div>
      </div>
    </section>
  );
}
