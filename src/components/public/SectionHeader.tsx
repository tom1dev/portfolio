


export default function SectionHeader({headerText}: {headerText: string}) {
  return (
    <div className="text-3xl font-semibold text-left w-full p-4 border-b border-gray-300">
      {headerText}
    </div>
  );
}