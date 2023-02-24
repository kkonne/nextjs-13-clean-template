import { DefaultTags } from "@/ui/default-tags";

export default function Head() {
  return (
    <>
      <DefaultTags />
      <title>&lt;app-name&gt; - Impressum</title>
      <meta
        name="description"
        content="<app-name> - Impressum info"
      />
    </>
  );
}
