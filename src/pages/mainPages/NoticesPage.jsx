import { Pagination } from '../../components/Pagination/Pagination';
import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const NoticesPage = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const handlePageChange = page => {
    setSearchParams({ ...params, page });
  };
  return (
    <>
      <p>NoticesPage</p>
      {totalPages > 1 && (
        <Pagination
          currentPage={+params.page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default NoticesPage;
