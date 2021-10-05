import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import './PaginationStyle.css';

export default function PaginationRounded({count, parentCallback }) {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    parentCallback(value);
  };

  return (
    <div className="mt-[10px]">
      <Pagination count={count} className="bg-white w-full" shape="rounded" page={page} onChange={handleChange} />
    </div>
  );
}