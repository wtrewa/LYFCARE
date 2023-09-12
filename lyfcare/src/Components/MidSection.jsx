import { Heading,  Text,   } from "@chakra-ui/react";
import React from "react";

const MidSection = () => {
  return (
    <div>
      <Heading  Text fontSize={'1rem'}Align={'center'}>Spotlight On: Vitamin C</Heading>
      < Text fontSize={'1rem'} style={{  Align: "center" }}>
        The ingredient that does it all: protects, brightens, firms & smooths.
      </ Text >
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
          <Heading as={'h3'} >New From Eminence Organic Skin Care</Heading >
          < Text fontSize={'1rem'}>Three new formula that makes visivility smooth</ Text >
        </div>
        <div>
          <img
            style={{ width: "100%" }}
            src="https://static.thcdn.com/images/small/webp/widgets/208-us/40/0307_47951_THG0035372_DS_EF_March_Batch_Shot_012_HP_LPSQ_BANNER_676x556-075940.jpg"
            alt="we care"
          />
          <Heading as={'h5'}>New From Image Skin Care</Heading >
          < Text fontSize={'1rem'}>Micro-biome formula for makes skin looking </ Text >
        </div>
        <div>
          <img
            style={{ width: "100%" }}
            src="https://static.thcdn.com/images/small/webp/widgets/208-us/20/HPLPSQBANNER-676x556-073820.jpeg"
            alt="we care"
          />
          <Heading as={'h5'}>New From U Beauty</Heading>
          < Text fontSize={'1rem'}>help better eyes and reduce dark circel</ Text>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
