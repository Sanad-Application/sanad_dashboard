import React, { useEffect, useState } from "react";
import "./tags.scss";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import tagService from "../../services/tag";
import { Button, TextField } from "@mui/material";
import { toast } from "react-toastify";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },

  {
    field: "name",
    type: "string",
    headerName: "Title",
    width: 250,
  },
];
const Products = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const handleDelete = async (id: Number) => {
    try {
      await tagService.deleteTag(id);
      toast.success("Delete successfully");
      getData();
    } catch (err) {
      toast.error("Delete failed");
      console.log(err);
    }
  };
  const handleCreate = async (title: string) => {
    try {
      await tagService.addTag(title);
      toast.success("Add successfully");
      getData();
    } catch (err) {
      toast.error("Add failed");
      console.log(err);
    }
  };
  const getData = async () => {
    try {
      const res = await tagService.getTags();
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='tags'>
      <div className='info'>
        <h1>Tags</h1>
        <Button onClick={() => setOpen(true)}>Add New Tag</Button>
      </div>
      <DataTable
        handleDelete={handleDelete}
        slug='Tags'
        columns={columns}
        rows={data}
      />

      {open && (
        <>
          {" "}
          <div className='add' style={{ zIndex: "1000" }}>
            <div className='model'>
              <span onClick={() => setOpen(false)} className='close'>
                x
              </span>
              <h1>Add new tag</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCreate(title);
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <TextField
                  type='text'
                  sx={{ width: "300px", backgroundColor: "white" }}
                  label='Title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Button type='submit' variant='contained'>
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
