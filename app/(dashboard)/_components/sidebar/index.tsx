import { List } from "./list";
import { NewButton } from "./new-button";

export const Sidebar = () => {
  return (
    <aside className="fixed z-50 left-4 top-4 bottom-4 w-[52px] flex flex-col">
      <div className="kylro-glass-strong rounded-xl flex-1 flex p-2 flex-col gap-y-2 kylro-elevation-2">
        <List />
        <NewButton />
      </div>
    </aside>
  );
};
