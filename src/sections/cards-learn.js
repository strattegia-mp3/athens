import Image from "next/image";
import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";
import card1 from "/public/assets/card1.png";
import card2 from "/public/assets/card2.png";
import card3 from "/public/assets/card3.png";

export default function Learn() {
  return (
    <section className="my-20">
      <div className="flex justify-center items-center">
        <span class="text-2xl font-bold text-center relative">
          O que você vai <span class="text-emerald-500">aprender</span>
          <span class="absolute top-10 bottom-0 left-1/2 bg-emerald-500 h-0.5 w-2/4 transform -translate-x-1/2"></span>
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8 mx-6 lg:mx-20">
        <div className="rounded-lg shadow-3xl p-6 my-8 mx-auto sm:mx-16">
          <Image
            src={card1}
            width={40}
            height={40}
            alt="Imagem com um livro aberto e um cerebro"
          />
          <Link href="/" className="block flex my-4 text-xl">
            Conceitos Básicos
            <ImArrowUpRight2 className="ml-1 pt-1" />
          </Link>
          <h4>
            Entenda o que significam palavras que você certamente escuta
            diariamente: Juros, receita, capital, montante, giro e muito mais
          </h4>
        </div>
        <div className="rounded-lg shadow-3xl p-6 my-8 mx-auto sm:mx-16">
          <Image
            src={card2}
            width={40}
            height={40}
            alt="Imagem com uma calculadora e planilha de controle"
          />
          <Link href="/" className="block flex my-4 text-xl">
            Finanças Pessoais
            <ImArrowUpRight2 className="ml-1 pt-1" />
          </Link>
          <h4>
            Pare de ser escravo do capital e comece a aprender as estruturas
            racionais que regem o sistema financeiro!
          </h4>
        </div>
        <div className="rounded-lg shadow-3xl p-6 my-8 mx-auto sm:mx-16">
          <Image
            src={card3}
            width={40}
            height={40}
            alt="Imagem com um gráfico crescente"
          />
          <Link href="/" className="block flex my-4 text-xl">
            Investimentos
            <ImArrowUpRight2 className="ml-1 pt-1" />
          </Link>
          <h4>
            Entenda como funciona o mecanismo por trás do investimento e retorno
            de um capital.
          </h4>
        </div>
      </div>
    </section>
  );
}
