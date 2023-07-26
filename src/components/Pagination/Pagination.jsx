import { IconArrowLeft } from '../../images/icons/IconArrowLeft.js';
import { IconArrowRight } from '../../images/icons/IconArrowRight.js';
import {
  PaginationBtn,
  PaginationBtnActive,
  PaginationList,
  PaginationListItem,
  PaginationArrowBtn,
  PaginationWrapper,
} from './Pagination.styled';

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  paginationLength,
}) => {
  const getPageNumbers = () => {
    const page = 1;
    const range = [];
    const left = currentPage - page;
    const right = currentPage + page + 1;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i <= right)) {
        range.push(i);
      }
    }

    return range.splice(0, paginationLength);
  };

  const handlePageChange = page => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPagination = () => {
    const pageNumbers = getPageNumbers();

    return (
      <PaginationWrapper>
        <PaginationList>
          <PaginationListItem>
            <PaginationArrowBtn
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <IconArrowLeft />
            </PaginationArrowBtn>
          </PaginationListItem>
          {pageNumbers.map(number => (
            <PaginationListItem key={number}>
              {currentPage === number ? (
                <PaginationBtnActive onClick={() => onPageChange(number)}>
                  {number}
                </PaginationBtnActive>
              ) : (
                <PaginationBtn onClick={() => onPageChange(number)}>
                  {number}
                </PaginationBtn>
              )}
            </PaginationListItem>
          ))}
          <PaginationListItem>
            <PaginationArrowBtn
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <IconArrowRight />
            </PaginationArrowBtn>
          </PaginationListItem>
        </PaginationList>
      </PaginationWrapper>
    );
  };

  return <>{renderPagination()}</>;
};
