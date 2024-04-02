"use client";
import React from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

const ShareLinkButton = () => {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  return (
    <button
      className="px-2 mb-2 flex items-center rounded border text-slate-500 hover:text-slate-700 hover:bg-orange-100"
      onClick={handleClick}
    >
      <LinkIcon className="w-4 h-4 mr-1" />
      {clicked ? "Copied!" : "Share"}
    </button>
  );
};

export default ShareLinkButton;
