import React from "react";

const MidSection = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Spotlight On: Vitamin C</h1>
      <p style={{ textAlign: "center" }}>
        The ingredient that does it all: protects, brightens, firms & smooths.
      </p>
      <div
        style={{
          width: "90%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          margin: "auto",
        }}
      >
        <div>
          <img
            style={{ width: "100%" }}
            src="https://static.thcdn.com/images/small/webp/widgets/208-us/02/HPLPSQBANNER-676x556.jpeg-080002.jpg"
            alt="we care"
          />
          <h3>New From Eminence Organic Skin Care</h3>
          <p>Three new formula that makes visivility smooth</p>
        </div>
        <div>
          <img
            style={{ width: "100%" }}
            src="https://static.thcdn.com/images/small/webp/widgets/208-us/40/0307_47951_THG0035372_DS_EF_March_Batch_Shot_012_HP_LPSQ_BANNER_676x556-075940.jpg"
            alt="we care"
          />
          <h3>New From Image Skin Care</h3>
          <p>Micro-biome formula for makes skin looking </p>
        </div>
        <div>
          <img
            style={{ width: "100%" }}
            src="https://static.thcdn.com/images/small/webp/widgets/208-us/20/HPLPSQBANNER-676x556-073820.jpeg"
            alt="we care"
          />
          <h3>New From U Beauty</h3>
          <p>help better eyes and reduce dark circel</p>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
