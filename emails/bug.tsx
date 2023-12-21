import { Tailwind, Button } from "@react-email/components";
import { CustomComponent } from "../components/custom-component";

export default function Email() {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >
      <Button
        href="https://example.com"
        className="bg-brand px-3 py-2 font-medium leading-4 text-white"
      >
        Click me
      </Button>
      <div className="bg-brand">
        <CustomComponent
          className="text-center"
          clazzName="text-center"
          text="Hello World"
        />
      </div>
    </Tailwind>
  );
}
