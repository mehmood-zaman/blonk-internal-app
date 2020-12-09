/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import React from 'react';
import { Button, Table, Input, Space } from 'antd';

import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

let searchInput: any;
let filterData: any = [];

const CrawliesGroupTable = (props: any) => {
  const [searchedColumn, setSearchedColumn] = React.useState('');
  const [searchText, setSearchText] = React.useState('');
  const [selectedRowKeys, setSelectedRowsId] = React.useState([]);

  const handleSearch = (selectedKeys: any, confirm: any, dataIndex: any) => {
    confirm();
  };

  const onSelectChange = (selectedRowKeys: any) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowsId(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys: any) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((index: any) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          console.log(newSelectedRowKeys);
          setSelectedRowsId(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys: any) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((index: any) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowsId(newSelectedRowKeys);
        },
      },
    ],
  };

  const GetColumnSearchProps = (dataIndex: any) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: any) => {
      const handleReset = (clearFilters: any) => {
        clearFilters();
        setSearchText('');
      };
      return (
        <div style={{ padding: 8 }}>
          <Input
            ref={(node) => {
              searchInput = node;
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button
              onClick={() => handleReset(clearFilters)}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
          </Space>
        </div>
      );
    },
    filterIcon: (filtered: any) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value: any, record: any) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: (visibleDropDown: any) => {
      if (visibleDropDown) {
        setTimeout(() => searchInput.select());
      }
    },
    render: (text: any) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  if (props !== undefined)
    filterData = props.columns.map((e: any) => {
      if (e.filter) {
        Object.assign(e, GetColumnSearchProps(e.filter));
      }
      return e;
    });
  return props.rowSelect === true ? (
    <Table
      size="small"
      className="table-striped"
      rowSelection={props.rowSelect === true ? rowSelection : {}}
      dataSource={props.data}
      columns={props.columns}
    />
  ) : (
    <Table
      size="small"
      className="table-striped"
      dataSource={props.data}
      columns={props.columns}
    />
  );
};
export default CrawliesGroupTable;
