import {Button} from '@components/ui'

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <h1 className="text-h1">Welcome Page  h1</h1>
        <h2 className="text-h2">Welcome Page  h2</h2>
        <h3 className="text-h3">Welcome Page  h3</h3>
        <h2 className="text-subtitle1">Welcome Page  subtitle1</h2>
        <h3 className="text-subtitle2">Welcome Page  subtitle2</h3>
        <h3 className="text-subtitle3">Welcome Page  subtitle3</h3>
        <p className="text-body">Welcome Page  Body</p>
        <div className="mb-4 flex items-center gap-16">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary" disabled>isabled</Button>
        </div>
        {/*<div className="mb-4 flex items-center gap-16">*/}
        {/*  <Input*/}
        {/*    type={"password"}*/}
        {/*    placeholder={"Enter Password"}*/}
        {/*    showToggle={true}*/}
        {/*    className={errors && "border border-red-500/80"}*/}
        {/*    name={"password"}*/}
        {/*  />*/}
        {/*  <Input*/}
        {/*    type={"text"}*/}
        {/*    placeholder={"Enter text"}*/}
        {/*    showToggle={false}*/}
        {/*    className={error && "border border-red-500/80"}*/}
        {/*    name={"text"}*/}
        {/*  />*/}
        {/*</div>*/}
      </main>
    </div>
  );
}
