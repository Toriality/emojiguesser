import Button from "@/components/Button";

export default function Header() {
  return (
    <nav className="flex justify-between items-center shadow-lg px-24 py-4 z-10">
      <a className="font-bold text-xl" href="/">
        <span className="text-amber-300">emoji</span>
        <span className="text-gray-400">guesser</span>
      </a>
      <ul className="flex gap-4">
        <li>
          <Button
            color="primary"
            onClick={() => {
              window.location.href = "/game?mode=description";
            }}
          >
            guess by name
          </Button>
        </li>
        <li>
          <Button
            color="secondary"
            onClick={() => {
              window.location.href = "/game?mode=emoji";
            }}
          >
            guess by emoji
          </Button>
        </li>
      </ul>
    </nav>
  );
}
