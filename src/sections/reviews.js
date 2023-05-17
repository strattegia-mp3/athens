import Image from "next/image";
import img1 from "/public/assets/avatar1.png";
import img2 from "/public/assets/avatar2.png";
import img3 from "/public/assets/avatar3.png";

export default function Reviews() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:m-32">
      <div className="w-full md:w-1/2 flex flex-wrap">
        <div className="flex w-full md:w-[47.35%] m-2">
          <div className="rounded shadow-3xl p-5">
            <div className="flex items-center">
              <Image src={img1} width={55} alt="" />
              <h2 className="text-lg ml-2">@Matheus_002</h2>
            </div>
            <div>
              <h4 className="text-base m-2">
                Faz-se evidente a necessidade destes módulos e suas respectivas
                complementaridades.
              </h4>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-[47.35%] m-2">
          <div className="rounded shadow-3xl p-5">
            <div className="flex items-center">
              <Image src={img2} width={55} alt="" />
              <h2 className="text-lg ml-2">@ThatGuy</h2>
            </div>
            <div>
              <h4 className="text-base m-2">
                Agora posso gastar de um jeito mais prudente.
              </h4>
            </div>
          </div>
        </div>
        <div className="flex w-full m-2">
          <div className="rounded shadow-3xl p-5">
            <div className="flex items-center">
              <Image src={img3} width={55} alt="" />
              <h2 className="text-lg ml-2">@strattegia</h2>
            </div>
            <div>
              <h4 className="text-base m-2">
                Sem impugnação ideológica, de fato, constitui uma excelente
                ferramenta para o estudo da micro e macroeconomia, além da
                educação financeira proporcionada que é de grande estima.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mb-6 md:w-1/2 text-center md:text-right">
        <span className="text-lg inline-block mb-4 border-b-2 border-solid border-emerald-500">
          Avaliações
        </span>
        <h1 className="text-4xl md:text-6xl my-3">
          E, de fato, a maioria dos usuários está satisfeita com os{" "}
          <span className="text-emerald-500">resultados</span>.
        </h1>
        <button className="py-2 px-6 mt-4 text-lg text-white rounded bg-green-600 hover:bg-green-700">
          Conheça
        </button>
      </div>
    </section>
  );
}
