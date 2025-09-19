export default function Page13() {
  return (
    <div
      className="page relative flex flex-col font-starter"
      style={{
        backgroundImage: 'url(/space2.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
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
