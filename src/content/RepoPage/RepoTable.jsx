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

function RepoTable({ dataRows, dataHeaders }) {
  return (
    <DataTable
      rows={dataRows}
      headers={dataHeaders}
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
            title="Carbon Repositories"
            description="A collection of public Carbon repositories."
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
                        <p>Row description</p>
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
  dataRows: PropTypes.arrayOf(PropTypes.object),
  dataHeaders: PropTypes.arrayOf(PropTypes.object),
};

RepoTable.defaultProps = {
  dataRows: [],
  dataHeaders: [],
};

export default RepoTable;
