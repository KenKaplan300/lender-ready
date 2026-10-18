import Link from "next/link";

export default function SiteHeader() {
  return (
    <>
      <div className="top-bar">
        <div className="wrap">
          <div className="brand">
            <img src="/images/k2-logo.jpg" alt="K2 Commercial Finance" />
            <div className="brand-text">
              <strong>Lender-Ready.com</strong>a K2 Commercial Finance property
            </div>
          </div>
          <a className="btn-k2visit" href="https://www.k2commercialfinance.com">
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
          <div className="nav-dropdown">
            <Link href="/resources">Resources</Link>
            <div className="dropdown-menu">
              <Link href="/resources/videos">Videos</Link>
              <Link href="/resources/articles">Articles</Link>
              <Link href="/resources/third-party-tools">
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
