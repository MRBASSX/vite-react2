import React from "react";

export default function AmazonFathersDayPromo() {
  return (
    <div style={{
      background: "#f0f2f2",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 0,
      margin: 0
    }}>
      <div style={{
        background: "#0084ff",
        borderRadius: 0,
        marginTop: 12,
        width: 1540,
        maxWidth: "96vw",
        position: "relative",
        minHeight: 320,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
      }}>
        {/* Left Arrow */}
        <button
          style={{
            position: "absolute",
            left: 26,
            top: "45%",
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 36,
            cursor: "pointer"
          }}
          aria-label="Previous"
        >
          &#8249;
        </button>
        {/* Right Arrow */}
        <button
          style={{
            position: "absolute",
            right: 26,
            top: "45%",
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 36,
            cursor: "pointer"
          }}
          aria-label="Next"
        >
          &#8250;
        </button>
        {/* Center Content */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          gap: 32
        }}>
          <div style={{ width: 440, marginRight: 24, marginLeft: 80, marginTop: 32 }}>
            <div style={{ color: "#fff", fontWeight: "bold", fontSize: 48, lineHeight: 1.1, marginBottom: 6 }}>
              Gifts dads love
            </div>
            <div style={{ color: "#fff", fontSize: 26, marginBottom: 24 }}>
              Members get fast, free shipping<br />on Father’s Day must-haves
            </div>
            <button
              style={{
                background: "#ffd814",
                color: "#0f1111",
                border: "none",
                borderRadius: 22,
                padding: "10px 36px",
                fontWeight: "bold",
                fontSize: 20,
                marginBottom: 10,
                cursor: "pointer"
              }}
            >
              Join Prime
            </button>
            <div style={{ color: "#fff", fontSize: 15, marginTop: 8 }}>Terms apply.</div>
          </div>
          {/* Promo Images */}
          <div style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            marginTop: 24,
            gap: 34,
            minWidth: 370
          }}>
            <img
              src="https://m.media-amazon.com/images/I/81vJybjD6+L._AC_SX569_.jpg"
              alt="Backpack"
              style={{ width: 110, height: 160, objectFit: "contain", background: "none" }}
            />
            <img
              src="https://m.media-amazon.com/images/I/61KqKLC5G4L._AC_SY450_.jpg"
              alt="Shoes"
              style={{ width: 90, height: 70, objectFit: "contain", marginTop: 90, background: "none" }}
            />
            <img
              src="https://m.media-amazon.com/images/I/61Q0n2j6UdL._AC_SY879_.jpg"
              alt="Gift Box"
              style={{ width: 94, height: 94, objectFit: "contain", marginTop: 23, background: "none" }}
            />
            <img
              src="https://m.media-amazon.com/images/I/71fsu0wvRFL._AC_SX679_.jpg"
              alt="Book"
              style={{ width: 90, height: 120, objectFit: "contain", marginTop: 12, background: "none" }}
            />
          </div>
        </div>
      </div>
      {/* Categories */}
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 24,
        margin: "0 auto",
        width: 1540,
        maxWidth: "96vw",
        marginTop: -70
      }}>
        {/* Warm-weather looks */}
        <div style={{
          background: "#fff",
          borderRadius: 3,
          boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
          padding: "22px 14px 18px 18px",
          width: 340,
          minHeight: 300,
          display: "flex",
          flexDirection: "column"
        }}>
          <div style={{ fontWeight: "bold", fontSize: 22, marginBottom: 14 }}>Warm-weather looks</div>
          <div style={{ display: "flex", marginBottom: 10 }}>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img src="https://m.media-amazon.com/images/I/71bPjv1vQbL._AC_UL320_.jpg" alt="Bottoms" style={{ width: 90, height: 90, objectFit: "contain" }} />
              <div style={{ fontSize: 15, marginTop: 4 }}>Bottoms</div>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img src="https://m.media-amazon.com/images/I/71m1yJ2iI6L._AC_UL320_.jpg" alt="Dresses" style={{ width: 90, height: 90, objectFit: "contain" }} />
              <div style={{ fontSize: 15, marginTop: 4 }}>Dresses</div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img src="https://m.media-amazon.com/images/I/61I7WGQ6BGL._AC_UL320_.jpg" alt="Poolside essentials" style={{ width: 90, height: 90, objectFit: "contain" }} />
              <div style={{ fontSize: 15, marginTop: 4 }}>Poolside essentials</div>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img src="https://m.media-amazon.com/images/I/91OYK6f5kPL._AC_UL320_.jpg" alt="Tops" style={{ width: 90, height: 90, objectFit: "contain" }} />
              <div style={{ fontSize: 15, marginTop: 4 }}>Tops</div>
            </div>
          </div>
          <a href="#" style={{ color: "#007185", fontSize: 15, marginTop: 18, display: "inline-block" }}>Shop all</a>
        </div>
        {/* Pre-loved jewelry */}
        <div style={{
          background: "#fff",
          borderRadius: 3,
          boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
          padding: "22px 14px 18px 18px",
          width: 340,
          minHeight: 300,
          display: "flex",
          flexDirection: "column"
        }}>
          <div style={{ fontWeight: "bold", fontSize: 22, marginBottom: 14 }}>Pre-loved jewelry</div>
          <div style={{ display: "flex", marginBottom: 10 }}>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img src="https://m.media-amazon.com/images/I/71zqj5Lw8mL._AC_UL320_.jpg" alt="Cartier" style={{ width: 90, height: 90, objectFit: "contain" }} />
              <div style={{ fontSize: 15, marginTop: 4 }}>Cartier</div>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img src="https://m.media-amazon.com/images/I/61wGzQ9yYPL._AC_UL320_.jpg" alt="Tiffany & Co" style={{ width: 90, height: 90, objectFit: "contain" }} />
              <div style={{ fontSize: 15, marginTop: 4 }}>Tiffany & Co</div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img src="https://m.media-amazon.com/images/I/71pAzlQ8SPL._AC_UL320_.jpg" alt="Rolex" style={{ width: 90, height: 90, objectFit: "contain" }} />
              <div style={{ fontSize: 15, marginTop: 4 }}>Rolex</div>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img src="https://m.media-amazon.com/images/I/71Nj0Vq5o2L._AC_UL320_.jpg" alt="Chanel" style={{ width: 90, height: 90, objectFit: "contain" }} />
              <div style={{ fontSize: 15, marginTop: 4 }}>Chanel</div>
            </div>
          </div>
          <a href="#" style={{ color: "#007185", fontSize: 15, marginTop: 18, display: "inline-block" }}>Shop Luxury Stores</a>
        </div>
        {/* Dresses for sunny days */}
        <div style={{
          background: "#fff",
          borderRadius: 3,
          boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
          padding: "22px 14px 18px 18px",
          width: 340,
          minHeight: 300,
          display: "flex",
          flexDirection: "column"
        }}>
          <div style={{ fontWeight: "bold", fontSize: 22, marginBottom: 14 }}>Dresses for sunny days</div>
          <div style={{ display: "flex", marginBottom: 10 }}>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img src="https://m.media-amazon.com/images/I/81ci2dJC8tL._AC_UL320_.jpg" alt="Floral" style={{ width: 90, height: 90, objectFit: "contain" }} />
              <div style={{ fontSize: 15, marginTop: 4 }}>Floral</div>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img src="https://m.media-amazon.com/images/I/81i4y8gM9dL._AC_UL320_.jpg" alt="Maxi" style={{ width: 90, height: 90, objectFit: "contain" }} />
              <div style={{ fontSize: 15, marginTop: 4 }}>Maxi</div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img src="https://m.media-amazon.com/images/I/81w-8y6w8rL._AC_UL320_.jpg" alt="Mini" style={{ width: 90, height: 90, objectFit: "contain" }} />
              <div style={{ fontSize: 15, marginTop: 4 }}>Mini</div>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img src="https://m.media-amazon.com/images/I/81V5p6r5uRL._AC_UL320_.jpg" alt="Pastel" style={{ width: 90, height: 90, objectFit: "contain" }} />
              <div style={{ fontSize: 15, marginTop: 4 }}>Pastel</div>
            </div>
          </div>
          <a href="#" style={{ color: "#007185", fontSize: 15, marginTop: 18, display: "inline-block" }}>Shop now</a>
        </div>
        {/* Gear up for outdoor fun */}
        <div style={{
          background: "#fff",
          borderRadius: 3,
          boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
          padding: "22px 14px 18px 18px",
          width: 340,
          minHeight: 300,
          display: "flex",
          flexDirection: "column"
        }}>
          <div style={{ fontWeight: "bold", fontSize: 22, marginBottom: 14 }}>Gear up for outdoor fun</div>
          <div style={{ display: "flex", marginBottom: 10 }}>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img src="https://m.media-amazon.com/images/I/81guU7sWl+L._AC_UL320_.jpg" alt="Fishing" style={{ width: 90, height: 90, objectFit: "contain" }} />
              <div style={{ fontSize: 15, marginTop: 4 }}>Fishing</div>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img src="https://m.media-amazon.com/images/I/71A6hRZlOLL._AC_UL320_.jpg" alt="Golf" style={{ width: 90, height: 90, objectFit: "contain" }} />
              <div style={{ fontSize: 15, marginTop: 4 }}>Golf</div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img src="https://m.media-amazon.com/images/I/71bN+F3hGzL._AC_UL320_.jpg" alt="Paddlesports" style={{ width: 90, height: 90, objectFit: "contain" }} />
              <div style={{ fontSize: 15, marginTop: 4 }}>Paddlesports</div>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img src="https://m.media-amazon.com/images/I/71j3A2A0j6L._AC_UL320_.jpg" alt="Pickleball" style={{ width: 90, height: 90, objectFit: "contain" }} />
              <div style={{ fontSize: 15, marginTop: 4 }}>Pickleball</div>
            </div>
          </div>
          <a href="#" style={{ color: "#007185", fontSize: 15, marginTop: 18, display: "inline-block" }}>Shop all sports & outdoors</a>
        </div>
      </div>
    </div>
  );
}