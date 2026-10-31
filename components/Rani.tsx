import Image from "next/image";

export default function Rani() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Image
        src="/rani.png"
        alt="Rani illustration"
        width={200}
        height={200}
      />
      <h2 className="text-2xl font-semibold">Hi, I’m Rani!</h2>
      <p className="text-center max-w-xl">
        I’m a passionate developer building amazing web experiences.
      </p>
    </div>
  );
}
