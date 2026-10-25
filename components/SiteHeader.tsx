"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function SiteHeader() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!resourcesOpen) return;

    function handlePointerDown(event: MouseEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setResourcesOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [resourcesOpen]);

  return (
    <>
      <div className="top-bar">
        <div className="wrap">
          <div className="brand">
            <Link href={"/"} className="flex items-center">
              <Image
                src="/images/k2-logo.jpg"
                alt="Brand"
                width={250}
                height={126}
                className="object-contain w-[160px] sm:w-[200px] md:w-[250px] h-auto"
              />
            </Link>
            <div className="brand-text">
              <strong>Lender-Ready.com</strong>a K2 Commercial Finance property
            </div>
          </div>
          <a
            className="btn-k2visit"
            target="_blank"
            href="https://www.k2commercialfinance.com"
          >
            Visit K2CommercialFinance.com
          </a>
        </div>
      </div>
      <div className="nav-bar">
        <div className="wrap">
          <Link href="/">Home</Link>{" "}
          <Link href="/property-types">Property Types</Link>{" "}
          <Link href="/loan-programs">Loan Programs</Link>{" "}
          <Link href="/about">About</Link>{" "}
          <div
            className={`nav-dropdown${resourcesOpen ? " open" : ""}`}
            ref={dropdownRef}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
              onClick={() => setResourcesOpen((open) => !open)}
            >
              Resources
              <svg
                className="dropdown-icon"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="dropdown-menu">
              <Link href="/resources" onClick={() => setResourcesOpen(false)}>
                All Content
              </Link>
              <Link
                href="/resources/videos"
                onClick={() => setResourcesOpen(false)}
              >
                Videos
              </Link>
              <Link
                href="/resources/articles"
                onClick={() => setResourcesOpen(false)}
              >
                Articles
              </Link>
              <Link
                href="/resources/third-party-tools"
                onClick={() => setResourcesOpen(false)}
              >
                Third-Party Tools
              </Link>
            </div>
          </div>{" "}
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
}
