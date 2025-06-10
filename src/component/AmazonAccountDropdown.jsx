import React from "react";

import styled from "styled-components";

export default function AmazonAccountDropdown() {
  return (
   
       <div
      style={{
        background: "#fff",
        borderRadius: 6,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        width: 500,
        padding: "24px 0 24px 0",
        margin: "0 auto",
        border: "1px solid #d5d9d9",
        fontFamily: "Amazon Ember, Arial, sans-serif",
        position: "absolute",
        right:"10px",
        zIndex: 10,
        // display:"none"


       
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 10 }}>
        <button
          style={{
            background: "#ffd814",
            border: "1px solid #fcd200",
            borderRadius: 6,
            padding: "8px 0",
            width: 200,
            fontWeight: "bold",
            fontSize: 17,
            cursor: "pointer",
            boxShadow: "0 2px 5px rgba(0,0,0,0.04)"
          }}
        >
          Sign in
        </button>
        <div style={{ fontSize: 14, color: "#111", marginTop: 6 }}>
          New customer?{" "}
          <a href="#" style={{ color: "#007185", textDecoration: "none" }}>
            Start here.
          </a>
        </div>
      </div>
      <hr style={{ border: 0, borderTop: "1px solid #e7e7e7", margin: "14px 0" }} />

      <div style={{ display: "flex", justifyContent: "space-between", padding: "0 32px" }}>
        {/* Your Lists */}
        <div>
          <div style={{ fontWeight: "bold", marginBottom: 8, fontSize: 16 }}>Your Lists</div>
          <div style={{ fontSize: 15, marginBottom: 7, color: "#111" }}>
            <a href="#" style={{ color: "#007185", textDecoration: "none" }}>
              Create a List
            </a>
          </div>
          <div style={{ fontSize: 15, color: "#111" }}>
            <a href="#" style={{ color: "#007185", textDecoration: "none" }}>
              Find a List or Registry
            </a>
          </div>
        </div>
        {/* Your Account */}
        <div>
          <div style={{ fontWeight: "bold", marginBottom: 8, fontSize: 16 }}>Your Account</div>
          <div style={{ fontSize: 15, marginBottom: 7, color: "#111" }}>
            <a href="#" style={{ color: "#007185", textDecoration: "none" }}>Account</a>
          </div>
          <div style={{ fontSize: 15, marginBottom: 7, color: "#111" }}>
            <a href="#" style={{ color: "#007185", textDecoration: "none" }}>Orders</a>
          </div>
          <div style={{ fontSize: 15, marginBottom: 7, color: "#111" }}>
            <a href="#" style={{ color: "#007185", textDecoration: "none" }}>Recommendations</a>
          </div>
          <div style={{ fontSize: 15, marginBottom: 7, color: "#111" }}>
            <a href="#" style={{ color: "#007185", textDecoration: "none" }}>Browsing History</a>
          </div>
          <div style={{ fontSize: 15, marginBottom: 7, color: "#111" }}>
            <a href="#" style={{ color: "#007185", textDecoration: "none" }}>Watchlist</a>
          </div>
          <div style={{ fontSize: 15, marginBottom: 7, color: "#111" }}>
            <a href="#" style={{ color: "#007185", textDecoration: "none" }}>Video Purchases & Rentals</a>
          </div>
          <div style={{ fontSize: 15, marginBottom: 7, color: "#111" }}>
            <a href="#" style={{ color: "#007185", textDecoration: "none" }}>Kindle Unlimited</a>
          </div>
          <div style={{ fontSize: 15, marginBottom: 7, color: "#111" }}>
            <a href="#" style={{ color: "#007185", textDecoration: "none" }}>Content & Devices</a>
          </div>
          <div style={{ fontSize: 15, marginBottom: 7, color: "#111" }}>
            <a href="#" style={{ color: "#007185", textDecoration: "none" }}>Subscribe & Save Items</a>
          </div>
          <div style={{ fontSize: 15, marginBottom: 7, color: "#111" }}>
            <a href="#" style={{ color: "#007185", textDecoration: "none" }}>Memberships & Subscriptions</a>
          </div>
          <div style={{ fontSize: 15, color: "#111" }}>
            <a href="#" style={{ color: "#007185", textDecoration: "none" }}>Music Library</a>
          </div>
        </div>
      </div>
    </div> 
   
  );
}


