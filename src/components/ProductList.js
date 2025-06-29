import { Button, Rating, TextField, Typography } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CompareIcon from "@mui/icons-material/Compare";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import AppsIcon from "@mui/icons-material/Apps";

export default function ProductList({
  productData,
  setProductData,
  productList,
  state,
  setState,
  setCompare,
  closeMessageBox,
}) {
  const clearSelectedProduct = () => {
    setProductData(productList);
    localStorage.removeItem("productData");
  };

  const searchProducts = (event) => {
    setProductData(
      productList.filter((product) =>
        product.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const selectedProducts = productData.filter((product) => product.selected);

  const updateProductSelection = (e) => {
    const products = productData.filter((product) => product.selected);
    if (e.selected === false && products.length >= 3) {
      setState({ ...state, open: true, messageType: "error" });
      return;
    } else {
      setState({
        ...state,
        open: true,
        messageType: "success",
        selected: !e.selected,
      });
      const updatedProducts = productData.map((product) =>
        product.id === e.id
          ? { ...product, selected: !product.selected }
          : product
      );
      setProductData(updatedProducts);
      localStorage.setItem("productData", JSON.stringify(updatedProducts));
    }
  };

  const category = [];
  productList.forEach((product) =>
    category.includes(product.category) ? null : category.push(product.category)
  );

  const updateProductCategoryWise = (category) => {
    setProductData(
      productList.filter((product) => product.category === category)
    );
  };

  return (
    <>
      <div className="col-12 p-2">
        <div className="col-12 px-4 mb-3 d-flex">
          <div className="col">
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="Search products"
              variant="outlined"
              InputLabelProps={{ style: { fontSize: "0.85rem" } }}
              onKeyUp={(event) => searchProducts(event)}
            />
          </div>
          {selectedProducts.length > 1 && (
            <>
              <Button
                size="small"
                variant="outlined"
                className="float-end ms-3 text-capitalize"
                onClick={clearSelectedProduct}
                startIcon={<HighlightOffSharpIcon />}
              >
                Clear
              </Button>
              <Button
                size="small"
                variant="contained"
                className="float-end ms-3 text-capitalize"
                onClick={() => setCompare(true)}
                startIcon={<CompareIcon />}
              >
                Compare
              </Button>
            </>
          )}
        </div>
        <div className="col-12 mb-3 px-4">
          <Button
            variant="outlined"
            size="small"
            className="text-capitalize me-2"
            startIcon={<AppsIcon />}
            onClick={() => clearSelectedProduct()}
          >
            All
          </Button>
          {category.map((cat) => (
            <Button
              variant="outlined"
              size="small"
              className="me-2  text-capitalize"
              onClick={() => updateProductCategoryWise(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 px-4">
          {productData.map((product) => (
            <div class="col">
              <div class="card card-custom-style">
                <div class="col-12 text-center flex-column-between p-3">
                  <div className="col-12 text-end mb-3">
                    <Rating
                      name="read-only"
                      value={product.rating}
                      readOnly
                      size="small"
                      precision={0.5}
                    />
                  </div>
                  <img
                    src={product.image}
                    class="card-img-top card-image"
                    alt={product.name}
                  />
                </div>
                <div class="col-12 p-3">
                  <Typography variant="h6" className="fw-semibold" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {product.description}
                  </Typography>
                  <div className="col-12 mb-5">
                    <li>
                      <span className="me-2">
                        <b>Color</b>
                      </span>
                      <span>{product.color}</span>
                    </li>
                    {Object.entries(product.keyFeatures).map(
                      ([key, feature]) => (
                        <li>
                          <span className="me-2 text-capitalize">
                            <b>{key.replace(/([a-z])([A-Z])/g, "$1 $2")}</b>
                          </span>
                          <span>{feature}</span>
                        </li>
                      )
                    )}
                  </div>
                  <div className="col-12">
                    <span>
                      <b>&#8377; {product.price}</b>
                    </span>
                    {product.selected ? (
                      <Button
                        size="small"
                        color="success"
                        variant="contained"
                        className="float-end text-capitalize"
                        startIcon={<TaskAltIcon />}
                        onClick={() => updateProductSelection(product)}
                      >
                        Selected
                      </Button>
                    ) : (
                      <Button
                        size="small"
                        variant="outlined"
                        className="float-end text-capitalize"
                        startIcon={<AddCircleOutlineSharpIcon />}
                        onClick={() => updateProductSelection(product)}
                      >
                        Select to Compare
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      ;
    </>
  );
}
