import React, { useEffect, useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import "./CustomTable.css";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";

function CustomTable({
  columns,
  data,
  localStorageKey,
  searchPlaceholder = "Search...",
  rowsPerPageOptions = [10, 20, 30],
  isDevicePage = false,
  isManageMemberModalOpen = false,
  onAddMember,
  onAccessCode,
  isAccessCodePage = false,
  isPricePage = false,
  disableSearch = false, // New prop to disable search
  disablePagination = false,
}) {
  const [tableData, setTableData] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || data
  );
  const [filterInput, setFilterInput] = useState("");
  const [activeRowId, setActiveRowId] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const initialSortBy = JSON.parse(
    localStorage.getItem(`${localStorageKey}_sortBy`)
  ) || [{ id: "hostname", desc: false }];

  const [sortBy, setSortBy] = useState(initialSortBy);

  useEffect(() => {
    localStorage.setItem(`${localStorageKey}_sortBy`, JSON.stringify(sortBy));
  }, [sortBy, localStorageKey]);

  const tableInstance = useTable(
    {
      columns,
      data: tableData,
      initialState: { sortBy, pageSize: rowsPerPageOptions[0] },
      stateReducer: (newState, action) => {
        if (action.type === "toggleSortBy") {
          const newSortBy = newState.sortBy;
          setSortBy(newSortBy);
        }
        return newState;
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setGlobalFilter,
    state: { pageIndex, pageSize },
    gotoPage,
    setPageSize,
  } = tableInstance;

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setGlobalFilter(value);
    setFilterInput(value);
  };

  const handleDeleteRow = (rowId) => {
    const newData = tableData.filter((row) => row.id !== rowId);
    setTableData(newData);
    localStorage.setItem(localStorageKey, JSON.stringify(newData));
  };

  const handleView = (rowId) => {
    const basePath = location.pathname.split("/")[1];
    navigate(`/${basePath}/${rowId}`);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const dropdownActions = isPricePage
    ? [
        {
          label: "View",
          icon: <VisibilityIcon style={{ marginRight: 8 }} />,
          onClick: () => {
            handleView(activeRowId);
            handleCloseMenu();
          },
        },
      ]
    : isAccessCodePage
    ? [
        {
          label: "Delete",
          icon: <DeleteIcon style={{ marginRight: 8 }} />,
          onClick: () => {
            handleDeleteRow(activeRowId);
            handleCloseMenu();
          },
        },
      ]
    : []; // Return an empty array if neither page condition is met

  const handleMenuClick = (event, rowId) => {
    setAnchorEl(event.currentTarget);
    setActiveRowId(rowId);
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
    setAnchorEl(null);
  };

  const handlePageChange = (newPage) => {
    gotoPage(newPage);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(Number(event.target.value));
    gotoPage(0);
  };

  const rowStart = pageIndex * pageSize + 1;
  const rowEnd = Math.min(rowStart + page.length - 1, tableData.length);

  return (
    <div className="customTableMain">
      {/* Conditionally render the search input */}
      {!disableSearch && (
        <div className="searchContainer">
          <input
            value={filterInput}
            onChange={handleFilterChange}
            placeholder={searchPlaceholder}
            className="searchInput"
          />
          <SearchIcon className="search-icon" />
          {isAccessCodePage && (
            <Button
              variant="contained"
              onClick={onAccessCode}
              sx={{
                fontSize: "0.8rem",
                backgroundColor: "var(--secondary-color)",
                color: "var(--text-color2)",
                padding: "0.5rem 1.5rem",
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  backgroundColor: "var(--primary-color)",
                },
              }}
            >
              New Access Code
            </Button>
          )}
        </div>
      )}

      <table {...getTableProps()} className="customTable">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.id}
                  className="sortable-header"
                >
                  {column.render("Header")}
                  <span className="sort-indicator">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ArrowDropDownIcon />
                      ) : (
                        <ArrowDropUpIcon />
                      )
                    ) : (
                      <ArrowDropUpIcon style={{ opacity: 0.3 }} />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={row.id} // Unique key for rows
                onMouseEnter={() => setActiveRowId(row.original.id)}
                onMouseLeave={() => setActiveRowId(null)}
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={cell.column.id}>
                    {cell.column.id === "status" ? (
                      <div className="status-container">
                        <span
                          className={`status-indicator ${cell.value.toLowerCase()}`}
                        ></span>
                        {cell.value}
                      </div>
                    ) : (
                      cell.render("Cell")
                    )}
                    {(isPricePage || isAccessCodePage) &&
                      cell.column.id ===
                        row.cells[row.cells.length - 1].column.id && (
                        <CustomDropdown
                          anchorEl={anchorEl}
                          activeRow={activeRowId}
                          rowIndex={row.original.id}
                          onMenuClick={(event) =>
                            handleMenuClick(event, row.original.id)
                          }
                          onClose={handleCloseMenu}
                          options={dropdownActions}
                        />
                      )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Conditionally render pagination controls */}
      {!disablePagination && (
        <div className="pagination">
          <select value={pageSize} onChange={handlePageSizeChange}>
            {rowsPerPageOptions.map((size) => (
              <option key={size} value={size}>
                {size} rows per page
              </option>
            ))}
          </select>
          <div>
            <Button onClick={() => handlePageChange(0)} disabled={!pageIndex}>
              <ArrowBackIosIcon />
            </Button>
            <span>
              Page {pageIndex + 1} of {Math.ceil(tableData.length / pageSize)}
            </span>
            <Button
              onClick={() =>
                handlePageChange(
                  Math.min(
                    pageIndex + 1,
                    Math.ceil(tableData.length / pageSize) - 1
                  )
                )
              }
              disabled={pageIndex >= Math.ceil(tableData.length / pageSize) - 1}
            >
              <ArrowForwardIosIcon />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomTable;
