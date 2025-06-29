import { Alert, Slide, Snackbar } from "@mui/material";
import React, { useState } from "react";
import ProductComparisonTable from "./ProductComparison";
import ProductList from "./ProductList";

export default function Products() {
  const productList = [
    {
      id: 1000,
      name: "Sony WH-1000XM5",
      category: "Headphones",
      image:
        "https://media.croma.com/image/upload/v1669124926/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/262565_10_youun4.png",
      description: "Industry‑leading noise cancelling over‑ear headphones.",
      brand: "Sony",
      price: 34998,
      rating: 4.5,
      color: "Black",
      selected: false,
      keyFeatures: {
        batteryLife: "30h",
        wireless: true,
        noiseCancellation: true,
      },
    },
    {
      id: 1001,
      name: "Apple AirPods Pro (2nd Gen)",
      category: "Headphones",
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836",
      description: "Active Noise Cancelling, transparency mode.",
      brand: "Apple",
      price: 24999,
      color: "White",
      rating: 4,
      selected: false,
      keyFeatures: {
        batteryLife: "24h",
        wireless: true,
        noiseCancellation: true,
      },
    },
    {
      id: 1002,
      name: "Samsung Galaxy S23 Ultra",
      category: "Smartphone",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-s911bzebins/gallery/in-galaxy-s23-s911-sm-s911bzebins-535265834?imwidth=480",
      description: "Flagship smartphone with 200 MP camera and S Pen.",
      brand: "Samsung",
      selected: false,
      price: 119999,
      color: "Gold",
      rating: 3.5,
      keyFeatures: {
        screenSize: '6.8"',
        batteryLife: "28h",
        camera: "200 MP",
        support5G: true,
      },
    },
    {
      id: 1003,
      name: "Google Pixel 8 Pro",
      category: "Smartphone",
      image:
        "https://www.designinfo.in/wp-content/uploads/2024/03/Google-Pixel-8-Pro-128GB-Porcelain-1.webp",
      description: "Google’s latest flagship with computational photography.",
      brand: "Google",
      price: 29999,
      rating: 5,
      color: "Gold",
      selected: false,
      keyFeatures: {
        screenSize: '6.7"',
        batteryLife: "26h",
        camera: "50 MP",
        support5G: true,
      },
    },
    {
      id: 1004,
      name: "Dell XPS 13",
      category: "Laptop",
      image:
        "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9350/spi/platinum/oled/notebook-xps-13-9350-oled-silver-campaign-hero-504x350-ng.psd?fmt=jpg&wid=570&hei=400",
      description: "Ultra‑portable 13.3” laptop with premium build.",
      brand: "Dell",
      price: 78999,
      color: "Silver",
      rating: 4.5,
      selected: false,
      keyFeatures: {
        screenSize: '13.3"',
        batteryLife: "12h",
        processor: "Intel i7",
        RAM: "16 GB",
      },
    },
    {
      id: 1005,
      name: 'MacBook Air 13" M2',
      category: "Laptop",
      image:
        "https://www.designinfo.in/wp-content/uploads/2023/10/Apple-13.6-MacBook-Air-M2-Midnight-1.webp",
      description: "Thin, light Apple laptop with M2 chip and 13 inch screen.",
      brand: "Apple",
      price: 89999,
      color: "Midnight Grey",
      rating: 4,
      selected: false,
      keyFeatures: {
        screenSize: '13.6"',
        batteryLife: "15h",
        processor: "Apple M2",
        RAM: "8 GB",
      },
    },
    {
      id: 1006,
      name: "Apple Watch Series 9",
      category: "Smartwatch",
      image:
        "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/apple-watch-series-9.png",
      description: "Latest Apple Watch with health features.",
      brand: "Apple",
      price: 39599,
      color: "Black",
      rating: 5,
      selected: false,
      keyFeatures: {
        batteryLife: "18h",
        waterResistance: "5 ATM",
        heartRateMonitor: true,
      },
    },
    {
      id: 1007,
      name: "Samsung Galaxy Watch 6",
      category: "Smartwatch",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/2307/gallery/in-galaxy-watch6-r945-469954-sm-r945fzkains-537406789?$684_547_PNG$",
      description: "Samsung watch with Wear OS and sensors.",
      brand: "Samsung",
      price: 29999,
      color: "Black",
      rating: 4.5,
      selected: false,
      keyFeatures: {
        batteryLife: "40h",
        waterResistance: "5 ATM",
        heartRateMonitor: true,
      },
    },
    {
      id: 1008,
      name: "Apple iPad Air (5th Gen)",
      category: "Tablet",
      image:
        "https://icreststore.in/wp-content/uploads/2022/05/ipad_air_5thgen_wi-fi_purple_pdp_image_position-1b__en-in_copy.webp",
      description: "Powerful tablet with M1 chip.",
      brand: "Apple",
      price: 59990,
      color: "Silver",
      rating: 4,
      selected: false,
      keyFeatures: {
        screenSize: '10.9"',
        batteryLife: "10h",
        storage: "64 GB",
        supportStylus: true,
      },
    },
    {
      id: 1009,
      name: "Samsung Galaxy Tab S9",
      category: "Tablet",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-x510nzaeinu/gallery/in-galaxy-tab-s9-fe-sm-x510-481717-sm-x510nzaeinu-538592754?$684_547_PNG$",
      description: "Premium Android tablet with S Pen.",
      brand: "Samsung",
      price: 69999,
      color: "Space Grey",
      rating: 5,
      selected: false,
      keyFeatures: {
        screenSize: '11"',
        batteryLife: "14h",
        storage: "128 GB",
        supportStylus: true,
      },
    },
  ];
  const [productData, setProductData] = useState(
    localStorage.getItem("productData")
      ? JSON.parse(localStorage.getItem("productData"))
      : productList
  );
  const [isCompare, setCompare] = useState(false);
  const [state, setState] = useState({
    messageType: "success",
    open: false,
    Transition: Slide,
    selected: false,
  });

  const closeMessageBox = () => {
    setState({ ...state, open: false });
  };

  return (
    <>
      <Snackbar
        open={state.open}
        autoHideDuration={1200}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        slots={{ transition: state.Transition }}
        onClose={closeMessageBox}
      >
        <Alert
          onClose={closeMessageBox}
          severity={state.messageType}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {state.messageType === "error"
            ? "Cannot compare more than 3 products"
            : state.selected
            ? "Product Added Successfully!"
            : "Product Removed Successfully!"}
        </Alert>
      </Snackbar>
      {isCompare ? (
        <ProductComparisonTable
          productData={productData}
          setCompare={setCompare}
        />
      ) : (
        <ProductList
          productData={productData}
          setProductData={setProductData}
          productList={productList}
          state={state}
          setState={setState}
          setCompare={setCompare}
          closeMessageBox={closeMessageBox}
        />
      )}
    </>
  );
}
