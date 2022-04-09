import { Input, Space } from "antd";

const SearchBar = () => {
  const onSearch = (value) => console.log(value);

  return (
    <Input.Search
      placeholder="input search text"
      onSearch={onSearch}
      enterButton
    />
  );
};

export default SearchBar;
