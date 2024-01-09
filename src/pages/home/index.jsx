import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <div className="font-bold text-center mb-8">
        <h1 className="px-6 text-4xl md:text-6xl mb-4">
          <span className="text-gray-500">welcome to </span>
          <span className="text-amber-300">emoji</span>
          <span className="text-gray-400">guesser</span>
        </h1>
        <p className="px-12 text-xl md:text-2xl text-gray-400/65">
          a cool game where you guess random emojis
        </p>
      </div>
      <div className="flex flex-col gap-4 text-xl">
        <Button
          color="primary"
          className="px-12"
          onClick={() => {
            window.location.href = "/game?mode=description";
          }}
        >
          guess by name
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            window.location.href = "/game?mode=emoji";
          }}
        >
          guess by emoji
        </Button>
      </div>
    </>
  );
}
