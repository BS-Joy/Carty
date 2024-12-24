"use client";

import { FaFacebook, FaXTwitter, FaWhatsapp, FaCopy } from "react-icons/fa6";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const ShareProduct = ({ title }) => {
  const [pageUrl, setPagetUrl] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setPagetUrl(window.location.href);
  }, []);

  const copyPageLink = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    toast.success("Link Copied", {
      position: "bottom-right",
    });

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div
      className={`rounded-md shadow-md dark:border-primary mt-4 max-w-[403px] py-4 px-6 flex gap-8 border`}
    >
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold">Share</h1>

        {/* social icons */}
        <div className="flex gap-3 mt-4">
          <div className="text-gray-400 dark:text-gray-300 dark:hover:text-primary hover:text-primary hover:border-primary h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
            <FacebookShareButton url={pageUrl} hashtag="#lwsKart">
              <FaFacebook />
            </FacebookShareButton>
          </div>
          <div
            href="#"
            className="text-gray-400 dark:text-gray-300 dark:hover:text-primary hover:text-primary hover:border-primary h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <TwitterShareButton
              url={pageUrl}
              title={title}
              hashtags={["lwsKart"]}
            >
              <FaXTwitter />
            </TwitterShareButton>
          </div>
          <div className="text-gray-400 dark:text-gray-300 dark:hover:text-primary hover:text-primary hover:border-primary h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
            <WhatsappShareButton url={pageUrl}>
              <FaWhatsapp />
            </WhatsappShareButton>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-xl font-semibold">Copy Link</h1>
        <div className="flex gap-3 bg-gray-100 dark:bg-gray-500 px-3 py-2 my-2 rounded">
          <p className="">
            {pageUrl?.length > 15 ? `${pageUrl?.slice(0, 19)}...` : pageUrl}
          </p>
          <button onClick={copyPageLink} className="hover:text-primary">
            <FaCopy />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareProduct;
