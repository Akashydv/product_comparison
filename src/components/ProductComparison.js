import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Rating,
} from "@mui/material";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function ProductComparisonTable({ productData, setCompare }) {
  const [comparedProducts, setComparedProducts] = useState([]);
  useEffect(() => {
    setComparedProducts(productData.filter((product) => product.selected));
  }, []);

  const removeProductFromComparison = (id) => {
    setComparedProducts(comparedProducts.filter((product) => product.id != id));
  };

  const featureKeys = Array.from(
    new Set(comparedProducts.flatMap((p) => Object.keys(p.keyFeatures)))
  );

  if (comparedProducts.length === 0) {
    return (
      <div className="col-12 p-3">
        <Button
          variant="outlined"
          size="small"
          className="mb-3 text-capitalize"
          onClick={() => setCompare(false)}
          startIcon={<ArrowBackIosSharpIcon />}
        >
          Back
        </Button>
        <div className="col-12 text-center">
          <Typography
            variant="captiontext"
            p={2}
            className="fst-italic fw-semibold"
          >
            You have removed all products from here. Kindly go back and come
            again.
          </Typography>
        </div>
      </div>
    );
  }
  return (
    <div className="col-12 p-3">
      <Button
        variant="outlined"
        size="small"
        className="mb-3 text-capitalize"
        onClick={() => setCompare(false)}
        startIcon={<ArrowBackIosSharpIcon />}
      >
        Back
      </Button>
      <TableContainer component={Paper}>
        <Typography variant="h6" p={2}>
          Product Comparison
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Feature</strong>
              </TableCell>
              {comparedProducts.map((p, idx) => (
                <TableCell key={idx}>
                  <strong>{p.name}</strong>
                  <DeleteOutlineIcon
                    onClick={() => removeProductFromComparison(p.id)}
                    style={{ marginLeft: "10px", color: "red" }}
                  />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <strong>Image</strong>
              </TableCell>
              {comparedProducts.map((p, idx) => (
                <TableCell key={idx}>
                  <img src={p.image} style={{ width: "100px" }} alt={p.name} />
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Rating</strong>
              </TableCell>
              {comparedProducts.map((p, idx) => (
                <TableCell key={idx}>
                  <Rating
                    name="read-only"
                    value={p.rating}
                    readOnly
                    size="small"
                    precision={0.5}
                  />
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Brand</strong>
              </TableCell>
              {comparedProducts.map((p, idx) => (
                <TableCell key={idx}>{p.brand}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Color</strong>
              </TableCell>
              {comparedProducts.map((p, idx) => (
                <TableCell key={idx}>{p.color}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Price</strong>
              </TableCell>
              {comparedProducts.map((p, idx) => (
                <TableCell key={idx}>&#8377; {p.price}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Category</strong>
              </TableCell>
              {comparedProducts.map((p, idx) => (
                <TableCell key={idx}>{p.category}</TableCell>
              ))}
            </TableRow>
            {featureKeys.map((key) => (
              <TableRow key={key}>
                <TableCell className="text-capitalize">
                  <strong>{key.replace(/([a-z])([A-Z])/g, "$1 $2")}</strong>
                </TableCell>
                {comparedProducts.map((p, idx) => (
                  <TableCell key={idx}>
                    {typeof p.keyFeatures[key] === "boolean"
                      ? p.keyFeatures[key] === true
                        ? "✅"
                        : "❌"
                      : p.keyFeatures[key] ?? "NA"}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
