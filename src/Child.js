import { memo, useMemo } from "react";
import { isEqual } from "lodash";
const Child = (props) => {
  const { value, incCounter } = props;
  console.log(`child re-rendered ${value}`);

  const bigFun = useMemo(() => {
    let bigNum = 0;
    for (let i = 0; i < 90000000; i++) bigNum++;
    return bigNum;
  }, []);
  return (
    <>
      <h2>Child-{value}</h2>
      <button onClick={incCounter}>inc</button>
      <h4>{bigFun + value}</h4>
    </>
  );
};
export default memo(Child, isEqual);
