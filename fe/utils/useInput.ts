import { useState } from "react";
const useInput = (defaultVal: any) => {
  const [val, setVal] = useState(defaultVal);
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  }
  return [val, onChange, setVal];
}

export default useInput