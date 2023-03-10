import { DefaultTags } from "@/ui/default-tags";

export default function Head() {
  return (
    <>
      <DefaultTags />
      <title>&lt;app-name&gt;</title>
      <meta
        name="description"
        content="Welcome to <app-name>! Next.js 13.1 boilerplate project"
      />
    </>
  );
}
