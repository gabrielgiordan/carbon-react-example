import React from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableCell,
  TableExpandedRow,
} from 'carbon-components-react';
import PropTypes from 'prop-types';

function RepoTable({ tableRows, tableHeaders }) {
  function getRowDescription(rowId) {
    const row = tableRows.find(({ id }) => id === rowId);
    return row ? row.description : '';
  }

  return (
    <DataTable
      rows={tableRows}
      headers={tableHeaders}
      render={({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps,
      }) => {
        const tableProps = getTableProps();

        return (
          <TableContainer
            title="Repositories of Gabriel Giordano"
            description="A collection of public Gabriel Giordano repositories."
          >
            <Table
              isSortable={tableProps.isSortable}
              overflowMenuOnHover={tableProps.overflowMenuOnHover}
              shouldShowBorder={tableProps.shouldShowBorder}
              size={tableProps.size}
              stickyHeader={tableProps.stickyHeader}
              useStaticWidth={tableProps.useStaticWidth}
              useZebraStyles={tableProps.useZebraStyles}
            >
              <TableHead>
                <TableRow>
                  <TableExpandHeader />
                  {headers.map((header) => {
                    const headerProps = getHeaderProps({ header });

                    return (
                      <TableHeader
                        isSortHeader={headerProps.isSortHeader}
                        isSortable={headerProps.isSortable}
                        key={headerProps.key}
                        onClick={headerProps.onClick}
                        sortDirection={headerProps.sortDirection}
                      >
                        {header.header}
                      </TableHeader>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => {
                  const rowProps = getRowProps({ row });

                  return (
                    <React.Fragment key={row.id}>
                      <TableExpandRow
                        ariaLabel={rowProps.ariaLabel}
                        disabled={rowProps.disabled}
                        isExpanded={rowProps.isExpanded}
                        isSelected={rowProps.isSelected}
                        key={rowProps.key}
                        onExpand={rowProps.onExpand}
                      >
                        {row.cells.map((cell) => {
                          return (
                            <TableCell key={cell.id}>{cell.value}</TableCell>
                          );
                        })}
                      </TableExpandRow>
                      <TableExpandedRow colSpan={headers.length + 1}>
                        <p>{getRowDescription(row.id)}</p>
                      </TableExpandedRow>
                    </React.Fragment>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        );
      }}
    />
  );
}

RepoTable.propTypes = {
  tableRows: PropTypes.arrayOf(PropTypes.object),
  tableHeaders: PropTypes.arrayOf(PropTypes.object),
};

RepoTable.defaultProps = {
  tableRows: [],
  tableHeaders: [],
};

export default RepoTable;
