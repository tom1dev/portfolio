


export default function SectionHeader({headerText}: {headerText: string}) {
  return (
    <div className="text-2xl font-bold text-center w-full p-4 bg-gray-200 border-b border-gray-300">
      {headerText}
    </div>
  );
}