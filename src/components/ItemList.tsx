import React from "react";
import {
  Container,
  List,
  ListItem,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import "./table.css";

interface IProps {
  items: {
    name: string;
    price: number;
    url: string;
    description?: string;
  }[];
}

const ItemList: React.FC<IProps> = ({ items }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderItemTable = (): JSX.Element => {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Picture</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    {
                      <Avatar
                        sx={{
                          width: "4rem",
                          height: "4rem",
                          marginRight: "20px",
                        }}
                        src={row.url}
                      />
                    }
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">{row.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">${row.price}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{ width: "70%", textAlign: "left" }}
                    >
                      {row.description}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={items.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    );
  };

  //THIS METHOD RENDERING THE ITEMS WITH LIST
  /* const renderItemList = (): JSX.Element[] => {
    return items.map((item) => {
      return (
        <Box
          sx={{
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            width: "50rem",
            margin: "0rem auto",
            border: " 0.1rem solid #F7DC6F",
            padding: "1rem",
            justifyContent: "space-between",
          }}
          key={item.name}
        >
          <ListItem>
            <Container sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                sx={{ width: "4rem", height: "4rem", marginRight: "20px" }}
                src={item.url}
              />
              <Typography variant="h5">{item.name}</Typography>
            </Container>
          </ListItem>
          <ListItem>
            <Typography variant="h6">${item.price}</Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant="body2"
              sx={{ width: "70%", textAlign: "left" }}
            >
              {item.description}
            </Typography>
          </ListItem>
        </Box>
      );
    });
  };    */

  return <Container sx={{ marginTop: 2 }}>{renderItemTable()}</Container>;
};

export default ItemList;
