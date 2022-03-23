import clsx from "clsx"

export default function Box({ children, label,labelClass, className }) {
  return (
    <div className={clsx("bg-white rounded shadow-[0px_2px_6px_rgba(0,0,0,0.14)]",className)}>
      {label && (
        <div className={clsx("capitalize text-black font-semibold",labelClass)}>
          {label}
        </div>
      )}
      {children}
    </div>
  );
}
