"use client";
import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import { useRouter } from 'next/navigation'

type Props = {
  buttonLink: LinkField;
  buttonText: string | null;
  className?: string;
};

export default function Button({ buttonLink, buttonText, className }: Props) {
  const router = useRouter();
  const navigate = () => {
    window.location.href="https://cresolution0128.vercel.app/";
  }
  return (
    <div
      className={clsx(
        "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl cursor-pointer",
        className,
      )}
      onClick={() => navigate()}
    >
      {buttonText}
    </div>
  );
}
