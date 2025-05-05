type ItemProps = {
  label: string;
  qty: number;
  value: number;
  color: string;
};

type GraphProps = {
  data: Array<ItemProps>;
};

const Graph = ({ data }: GraphProps) => {
  const calcPercentage = (index: number) => {
    let total = 0;

    data.forEach((item) => {
      total = total + item.qty;
    });

    console.log(data[index]);

    return (data[index].qty / total) * 100;
  };

  return (
    <div className="w-full flex justify-between gap-5">
      {data.length > 0 &&
        data.map(
          (item, i) =>
            item.qty > 0 && (
              <div
                className={`w-[${calcPercentage(
                  i
                )}%] h-[6px] border border-black bg-[${item.color}]`}
                key={item.label}
              ></div>
            )
        )}
    </div>
  );
};

export default Graph;
