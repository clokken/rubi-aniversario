import ScrollIndicator from "../ScrollIndicator";

export default function Page11() {
  return (
    <div
      className="page relative bg-gradient-to-br from-amber-600 to-orange-700 flex flex-col
        font-starter"
    >
      <div className="grow flex flex-col justify-center text-center space-y-4">
        <span className="text-3xl">Obrigado por visualizar</span>
        <span className="text-4xl">O meu cartão de aniversário</span>
        {/* <span>Feito à mão</span> */}
      </div>

      <ScrollIndicator />
    </div>
  );
}
