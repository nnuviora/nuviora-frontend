import { Button } from "@components/ui";
export default function Home() {
  return (
    <section className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
      <h1 className="text-h1">Welcome Page h1</h1>
      <h2 className="text-h2">Welcome Page h2</h2>
      <h3 className="text-h3">Welcome Page h3</h3>
      <h2 className="text-subtitle1">Welcome Page subtitle1</h2>
      <h3 className="text-subtitle2">Welcome Page subtitle2</h3>
      <h3 className="text-subtitle3">Welcome Page subtitle3</h3>
      <p className="text-body">Welcome Page Body</p>
      <div className="mb-4 flex items-center gap-16">
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
      </div>
    </section>
  );
}
