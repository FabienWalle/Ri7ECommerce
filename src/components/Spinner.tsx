import React from "react";

type LoaderProps = {
  isLoading: boolean;
  loaderType: string;
  size?: string;
  color?: string;
};

const Loader: React.FC<LoaderProps> = ({
  isLoading,
  loaderType,
  size,
  color,
}) => {
  if (!isLoading) return null;

  const loaderClasses = `loading loading-${loaderType} ${
    size ? `loading-${size}` : ""
  } ${color ? `text-${color}` : ""}`;

  return <span className={loaderClasses} />;
};

export default Loader;