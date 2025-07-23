import React from "react";

export default function AmazonFooter() {
  return (
    <footer style={{ background: "#232f3e", color: "#fff", paddingTop: 40, paddingBottom: 0 }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "80px",
        maxWidth: 1400,
        margin: "0 auto",
        flexWrap: "wrap"
      }}>
        {/* Column 1 */}
        <div>
          <div style={{ fontWeight: "bold", fontSize: 20, marginBottom: 12 }}>Get to Know Us</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Careers</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Amazon Newsletter</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>About Amazon</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Accessibility</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Sustainability</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Press Center</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Investor Relations</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Amazon Devices</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Amazon Science</div>
        </div>
        {/* Column 2 */}
        <div>
          <div style={{ fontWeight: "bold", fontSize: 20, marginBottom: 12 }}>Make Money with Us</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Sell on Amazon</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Sell apps on Amazon</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Supply to Amazon</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Protect &amp; Build Your Brand</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Become an Affiliate</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Become a Delivery Driver</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Start a Package Delivery Business</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Advertise Your Products</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Self-Publish with Us</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Become an Amazon Hub Partner</div>
          <div style={{ fontSize: 16, marginBottom: 6, color: "#ccc" }}>&#8250; See More Ways to Make Money</div>
        </div>
        {/* Column 3 */}
        <div>
          <div style={{ fontWeight: "bold", fontSize: 20, marginBottom: 12 }}>Amazon Payment Products</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Amazon Visa</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Amazon Store Card</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Amazon Secured Card</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Amazon Business Card</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Shop with Points</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Credit Card Marketplace</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Reload Your Balance</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Gift Cards</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Amazon Currency Converter</div>
        </div>
        {/* Column 4 */}
        <div>
          <div style={{ fontWeight: "bold", fontSize: 20, marginBottom: 12 }}>Let Us Help You</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Your Account</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Your Orders</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Shipping Rates &amp; Policies</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Amazon Prime</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Returns &amp; Replacements</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Manage Your Content and Devices</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Recalls and Product Safety Alerts</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Registry &amp; Gift List</div>
          <div style={{ fontSize: 16, marginBottom: 6 }}>Help</div>
        </div>
      </div>
      <div style={{
        borderTop: "1px solid #3a4553",
        marginTop: 40,
        padding: "24px 0 0 0",
        display: "flex",
        // flexDirection: "column",
        justifyContent:"center",
        alignItems: "center",
        columnGap:"15px"
      }}>
        <div style={{ marginBottom: 16 }}>
          <span style={{ fontFamily: "Amazon Ember, Arial, sans-serif", fontWeight: "bold", fontSize: 28, color: "#fff" }}>
          The-BRAin
            <span style={{ color: "#ff9900", fontSize: 22, marginLeft: -3 }}>&#8250;</span>
          </span>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <button
            style={{
              background: "transparent",
              border: "1px solid #848688",
              color: "#ccc",
              borderRadius: 3,
              padding: "6px 22px",
              fontSize: 15,
              display: "flex",
              alignItems: "center",
              gap: 6,
              cursor: "pointer"
            }}
          >
            <span style={{ fontSize: 17, marginRight: 3 }}>🌐</span>
            English
          </button>
          <button
            style={{
              background: "transparent",
              border: "1px solid #848688",
              color: "#ccc",
              borderRadius: 3,
              padding: "6px 18px",
              fontSize: 15,
              display: "flex",
              alignItems: "center",
              gap: 6,
              cursor: "pointer"
            }}
          >
            <span style={{ fontSize: 19, marginRight: 3 }}>🇺🇸</span>
            United States
          </button>
        </div>
      </div>
    </footer>
  );
}