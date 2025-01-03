import type { MetaFunction } from "react-router";
import { Welcome } from "~/components/Welcome/Welcome";
import { ColorSchemeToggle } from "~/components/ColorSchemeToggle/ColorSchemeToggle";

export const meta: MetaFunction = () => {
  return [
    { title: "Mantine Remix App" },
    { name: "description", content: "Welcome to Mantine!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Welcome />
      <ColorSchemeToggle />
    </div>
  );
}
