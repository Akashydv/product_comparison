import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import { Button } from "@mui/material";
import React from "react";

export default function ProductComparisonTable({ productData, setCompare }) {
  const comparedProducts = productData.filter((product) => product.selected);
  const featureKeys = Array.from(
    new Set(comparedProducts.flatMap((p) => Object.keys(p.keyFeatures)))
  );
  debugger;
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
