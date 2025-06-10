import React from "react";
import AmazonAccountDropdown from "./AmazonAccountDropdown";

export default function Nav() {





  return (
    <div style={{ background: "#131921", padding: "0", minHeight: "48px", display: "flex", alignItems: "center" }}>
      {/* Logo and deliver to */}
      <div style={{ display: "flex", alignItems: "center", marginLeft: 10 }}>
        <span style={{ fontWeight: "bold", fontSize: 28, color: "white", fontFamily: "Amazon Ember, Arial, sans-serif" }}>
          <a href="/">Brain</a>
          <span style={{ color: "#ff9900", fontSize: 22, marginLeft: -3 }}>&#8250;</span>
        </span>
        <div style={{ color: "#d6d6d6", fontSize: 12, marginLeft: 20, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <span style={{ fontSize: 11, lineHeight: 1 }}>Deliver to</span>
          <span style={{ fontWeight: "bold", color: "white", fontSize: 14, display: "flex", alignItems: "center" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{ marginRight: 3, marginBottom: -2 }} fill="#fff">
              <path d="M7.5 1.5C4.462 1.5 2 3.962 2 7c0 3.475 4.924 6.96 5.13 7.11a.5.5 0 0 0 .74 0C10.076 13.96 15 10.475 15 7c0-3.038-2.462-5.5-5.5-5.5zm0 9.5A4 4 0 1 1 7.5 3a4 4 0 0 1 0 8z"/>
            </svg>
            United Kingdom
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <form style={{ display: "flex", flex: 1, marginLeft: 40, marginRight: 40, maxWidth: 1100 }}>
        <select
          style={{
            border: "none",
            outline: "none",
            background: "#e6e6e6",
            color: "#555",
            borderRadius: "4px 0 0 4px",
            padding: "0 12px",
            height: 40,
            fontSize: 15,
            minWidth: 55
          }}
          defaultValue="all"
        >
          <option value="all">All</option>
        </select>
        <input
          type="text"
          placeholder="Search Amazon"
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            height: 40,
            fontSize: 16,
            padding: "0 10px"
          }}
        />
        <button
          type="submit"
          style={{
            background: "#febd69",
            border: "none",
            borderRadius: "0 4px 4px 0",
            width: 48,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
          }}
        >
          <svg width="24" height="24" fill="#333" viewBox="0 0 24 24">
            <path d="M10.5 2a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 2a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13zm7.03 13.97a1 1 0 0 1 1.41 0l2.09 2.09a1 1 0 1 1-1.41 1.41l-2.09-2.09a1 1 0 0 1 0-1.41z"/>
          </svg>
        </button>
      </form>

      {/* Right Side: Language, Account, Orders, Cart */}
      <div style={{ display: "flex", alignItems: "center", color: "#fff", fontSize: 14 }}>
        {/* Language */}
        <div style={{ marginRight: 16, display: "flex", alignItems: "center" }}>
          <span role="img" aria-label="flag" style={{ marginRight: 4, fontSize: 18 }}>🇺🇸</span>
          <span>EN</span>
        </div>
        {/* Account */}
        <div style={{ marginRight: 18, cursor: "pointer" }} className="clickdrop">
          <div style={{ fontSize: 12, color: "#ddd" }}>Hello, sign in</div>
          <div style={{ fontWeight: "bold", color: "#fff" }}>
            Account &amp; Lists
            <span style={{ fontSize: 10, marginLeft: 2 }} >▼</span>
        <div style={{display:"none"}} >
           <AmazonAccountDropdown />
        </div>
          </div>
        </div>
        {/* Orders */}
        <div style={{ marginRight: 18, cursor: "pointer" }}>
          <div style={{ fontSize: 12, color: "#ddd" }}>Returns</div>
          <div style={{ fontWeight: "bold", color: "#fff" }}>&amp; Orders</div>
        </div>
        {/* Cart */}
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <div style={{ position: "relative", marginRight: 2 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="#fff" viewBox="0 0 24 24">
              <path d="M7 18a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm10 2a2 2 0 1 0 4 0a2 2 0 0 0-4 0zM7.16 16l.94-2h7.8l.94 2H7.16zM6.1 14l-.94-2H21a1 1 0 0 0 .96-1.27l-2.04-7A1 1 0 0 0 19 3H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44A1.996 1.996 0 0 0 5 17a1 1 0 0 0 1 1h12v-2H7.16z"/>
            </svg>
            <span style={{
              position: "absolute",
              top: -8,
              right: 3,
              color: "#f08804",
              fontWeight: "bold",
              fontSize: 18
            }}>0</span>
          </div>
          <span style={{ fontWeight: "bold", color: "#fff", fontSize: 16, marginLeft: 2 }}>Cart</span>
        </div>
      </div>
    </div>
  );
}
