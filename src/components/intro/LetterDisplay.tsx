function getSpeed(line: number, index: number) {
  const x = index - 12;
  const y = line;

  const dist = Math.sqrt(x * x + y * y);

  return 1 / (1 + dist);
}
function getX(line: number, index: number) {
  const x = index - 12;
  const y = line;

  const len = Math.sqrt(x * x + y * y) || 1;

  return  x / len;
}

function getY(line: number, index: number) {
  const x = index - 12;
  const y = line;

  const len = Math.sqrt(x * x + y * y) || 1;

  return y / len;
}

export function LetterDisplay({ word, line, startChar }: { word: string, line: number, startChar:number }) {
  return (
    <>
      {word.split('').map((char, i) => (
        <div
          key={i}
          className="letter text-4xl font-semibold xs:text-[90px] md:text-[100px]"
          data-speed={getSpeed(line, startChar+i+1)}
          data-x={getX(line,startChar+i+1)}
          data-y={getY(line,startChar+i+1)}
        >
          {char}
        </div>
      ))}
    </>
  );
}