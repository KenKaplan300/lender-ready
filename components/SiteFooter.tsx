import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="brand">
          <img
            src="/images/k2-logo.jpg"
            alt="K2 Commercial Finance"
            style={{ height: "26px", borderRadius: "4px" }}
          />
          <div className="brand-text">
            <strong>Lender-Ready.com</strong>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div>
            Brought to you by{" "}
            <a href="https://www.k2commercialfinance.com">
              K2 Commercial Finance
            </a>
          </div>
          <div style={{ marginTop: "4px" }}>
            <Link href="/free-reports">Browse All Free Reports</Link>
          </div>
        </div>
      </div>
      <div className="wrap">
        <p className="footer-tagline">
          Empowering borrowers with knowledge, tools, and preferred
          relationships to secure financing and build successful businesses
          since 2001.
        </p>
      </div>
    </footer>
  );
}
