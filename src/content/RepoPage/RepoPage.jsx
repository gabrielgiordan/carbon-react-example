import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Link, DataTableSkeleton, Pagination } from 'carbon-components-react';
import PropTypes from 'prop-types';
import RepoTable from './RepoTable';

const REPO_QUERY = gql`
  query REPO_QUERY {
    user(login: "gabrielgiordan") {
      repositories(first: 75, orderBy: { field: UPDATED_AT, direction: DESC }) {
        totalCount
        nodes {
          url
          homepageUrl
          issues(filterBy: { states: OPEN }) {
            totalCount
          }
          stargazers {
            totalCount
          }
          releases(first: 1) {
            totalCount
            nodes {
              name
            }
          }
          name
          updatedAt
          createdAt
          description
          id
        }
      }
    }
  }
`;

const tableHeaders = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'createdAt',
    header: 'Created',
  },
  {
    key: 'updatedAt',
    header: 'Updated',
  },
  {
    key: 'issueCount',
    header: 'Open Issues',
  },
  {
    key: 'stars',
    header: 'Stars',
  },
  {
    key: 'links',
    header: 'Links',
  },
];

function LinkList({ url, homepageUrl }) {
  return (
    <ul style={{ display: 'flex' }}>
      <li>
        <Link href={url}>GitHub</Link>
      </li>
      {homepageUrl && (
        <li>
          <span>&nbsp;|&nbsp;</span>
          <Link href={homepageUrl}>Homepage</Link>
        </li>
      )}
    </ul>
  );
}

function Repos() {
  const [totalItems, setTotalItems] = useState(0);
  const [rowItems, setRowItems] = useState([]);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);

  const { loading, error, data } = useQuery(REPO_QUERY);

  useEffect(() => {
    if (data) {
      const {
        user: { repositories },
      } = data;

      setTotalItems(repositories.totalCount);
      setRowItems(
        repositories.nodes.map((node) => {
          return {
            id: node.id,
            key: node.id,
            name: node.name,
            description: node.description,
            stars: node.stargazers.totalCount,
            issueCount: node.issues.totalCount,
            createdAt: new Date(node.createdAt).toLocaleDateString(),
            updatedAt: new Date(node.updatedAt).toLocaleDateString(),
            links: <LinkList url={node.url} homepageUrl={node.homepageUrl} />,
          };
        }),
      );
    }
  }, [data]);

  if (loading)
    return (
      <DataTableSkeleton
        columnCount={tableHeaders.length + 1}
        rowCount={10}
        headers={tableHeaders}
      />
    );

  if (error) return <p>Error! ${error.message}</p>;

  if (!data) return <p>Not found</p>;

  return (
    <>
      <RepoTable
        tableHeaders={tableHeaders}
        tableRows={rowItems.slice(
          firstRowIndex,
          firstRowIndex + currentPageSize,
        )}
      />
      <Pagination
        totalItems={totalItems}
        backwardText="Previous page"
        forwardText="Next page"
        pageSize={currentPageSize}
        pageSizes={[5, 10, 15, 25]}
        itemsPerPageText="Items per page"
        onChange={({ page, pageSize }) => {
          if (pageSize !== currentPageSize) {
            setCurrentPageSize(pageSize);
          }
          setFirstRowIndex(pageSize * (page - 1));
        }}
      />
    </>
  );
}

function RepoPage() {
  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
      <div className="bx--row repo-page__r1">
        <div className="bx--col-lg-16">
          <Repos />
        </div>
      </div>
    </div>
  );
}

LinkList.propTypes = {
  url: PropTypes.string,
  homepageUrl: PropTypes.string,
};

LinkList.defaultProps = {
  url: '',
  homepageUrl: '',
};

export default RepoPage;
