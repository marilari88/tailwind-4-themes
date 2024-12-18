import clsx from "clsx";
import React from "react";

export function Welcome() {
  const [isDark, setIsDark] = React.useState(false);

  const mainClassName = isDark ? "inverted" : "";

  return (
    <div className="flex flex-col items-center justify-center gap-2 h-screen">
    <main className={clsx(mainClassName, 'bg-background/80 text-text-primary flex flex-col p-4 gap-2 rounded-lg')}>
    <div>ole</div>
    <div>ole</div>
    <div>ole</div>
    <div>ole</div>
    </main>
    <button className="p-2 rounded-lg bg-background" onClick={() => setIsDark(!isDark)}>Toggle inverted mode</button>
    </div>
  );
}

