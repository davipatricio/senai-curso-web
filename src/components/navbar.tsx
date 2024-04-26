export default function Navbar() {
  return (
    <aside className="hidden sm:flex flex-col min-h-full max-w-[260px] w-full p-4 bg-neutral-950 border-r border-neutral-700">
      <h1 className="font-bold text-lg">Departamentos</h1>
      <div className="flex flex-col ml-2">
        <a className="hover:underline" href="#">
          Celulares
        </a>
        <a className="hover:underline" href="#">
          Computadores
        </a>
        <a className="hover:underline" href="#">
          Teclados
        </a>
        <a className="hover:underline" href="#">
          Mouses
        </a>
      </div>
      <h1 className="font-bold text-lg mt-4">Lawg Store</h1>
      <div className="flex flex-col ml-2">
        <a className="hover:underline" href="#">
          Sobre nós
        </a>
        <a className="hover:underline" href="#">
          Política de Privacidade
        </a>
      </div>
    </aside>
  );
}
