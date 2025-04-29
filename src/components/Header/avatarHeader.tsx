import { Avatar, AvatarFallback, AvatarImage } from "@components/ui";

export default function AvatarHeader() {
  return (
    <Avatar className="size-9" isEdit={false}>
      <AvatarImage src="https://github.com/1.png" />
      <AvatarFallback className="text-xl text-neutral-800">ІП</AvatarFallback>
    </Avatar>
  );
}
