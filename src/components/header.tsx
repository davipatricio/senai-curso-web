export default function Header() {
  return (
    <header className="flex flex-wrap gap-4 p-4 justify-evenly items-center bg-neutral-800 min-h-16">
      <div>Logo</div>
      <nav className="flex flex-wrap justify-center gap-2 sm:text-lg">
        <a className="font-bold hover:underline" href="/">
          Home
        </a>
        <a className="font-bold hover:underline text-center" href="/">
          Cadastro de Produtos
        </a>
      </nav>
    </header>
  );
}
