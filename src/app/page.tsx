import { Button } from "@components/ui";

export default function Home() {
  return (
    <section className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
      <h1 className="h1-text">Welcome Page h1</h1>
      <div className="mb-4 flex items-center gap-16">
        <Button variant="outline">Outline</Button>
        <Button disabled>Disabled</Button>
      </div>
    </section>
  );
}
