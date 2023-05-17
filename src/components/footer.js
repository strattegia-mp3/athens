import Image from "next/image";
import logo from "/public/assets/Logo.png";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <footer className="flex flex-wrap items-center justify-between bg-[#F3F3F3] p-10">
      <div className="grid grid-cols-4">
        <div className="flex justify-center items-center">
          <Link href="/">
            <Image src={logo} width={110} alt="" />
          </Link>
        </div>
        <div>
          <h2 className="mb-3 text-lg">Acesse!</h2>
          <ul>
            <li className="my-1.5 text-base text-gray-600">
              <Link href="/">Home</Link>
            </li>
            <li className="my-1.5 text-base text-gray-600">
              <Link href="/">Documentação</Link>
            </li>
            <li className="my-1.5 text-base text-gray-600">
              <Link href="/">Ranking</Link>
            </li>
            <li className="my-1.5 text-base text-gray-600">
              <Link href="/">Blog</Link>
            </li>
            <li className="my-1.5 text-base text-gray-600">
              <Link href="/">Fórum</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-lg">Informações Adicionais</h2>
          <ul>
            <li className="my-1.5 text-base text-gray-600">
              <Link href="/">Contate-nos</Link>
            </li>
            <li className="my-1.5 text-base text-gray-600">
              <Link href="/">FAQ</Link>
            </li>
            <li className="my-1.5 text-base text-gray-600">
              <Link href="/">Política de Privacidade</Link>
            </li>
            <li className="my-1.5 text-base text-gray-600">
              <Link href="/">Termos e Condições</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-lg">Inscreva-se em nossa newsletter!</h2>
          <h5 className="text-base text-gray-600 mb-3">
            Fique por dentro das novidades e atualizações do Athens
          </h5>
          {/* <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
              className="py-2 px-4 rounded shadow-lg"
            />
            <input
              type="submit"
              className="py-2 px-4 ml-2 rounded shadow-lg bg-emerald-500 hover:bg-emerald-600/90 cursor-pointer text-white"
            />
          </form> */}
        </div>
      </div>
      <div className="flex justify-between mt-5 w-full">
        <h2 className="flex flex-grow items-center">
          Todos os direitos reservados &copy; Athens | 2023
        </h2>
        <div className="flex items-center justify-center text-4xl">
          <Link href="/">
            <BsInstagram
              size="1.75em"
              className="p-4 border-r-2 border-solid border-black"
            />
          </Link>
          <Link href="/">
            <BsTwitter size="1.75em" className="p-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
