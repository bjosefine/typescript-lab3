import { BackButton } from "../../components/BackButton";

export const UserSettings = () => {
  return (
    <>
      <BackButton to="profile" />
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="font-secondary text-4xl tracking-tight text-center">
          Settings
        </p>
        <p>Coming soon</p>
      </div>
    </>
  );
};
