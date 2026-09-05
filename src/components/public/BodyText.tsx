export default function BodyText({bodyText}: {bodyText: string[]}) {
  return (
    <div className="text-lg text-justify w-full p-4">
      {bodyText.map((paragraph, index) => (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      ))}
    </div>
  );
}