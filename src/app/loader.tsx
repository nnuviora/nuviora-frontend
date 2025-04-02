import { DotLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-1">
      <DotLoader color="#04b22b" loading size={200} speedMultiplier={1} />
    </div>
  );
}
