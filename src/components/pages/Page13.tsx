export default function Page13() {
  return (
    <div
      className="page relative bg-gradient-to-br from-indigo-950 to-black flex flex-col
        font-starter"
    >
      <div className="grow flex flex-col justify-center text-center space-y-4">
        <span className="text-2xl">Você é a estrela</span>
        <span className="text-3xl">mais brilhante</span>
        <span className="text-2xl">do meu universo.</span>
      </div>

      <button
        className="p-4 opacity-50"
        onClick={() => {
          document.getElementById('container')!.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
        {'(Voltar)'}
      </button>
    </div>
  );
}
