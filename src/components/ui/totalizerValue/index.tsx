type TotalizerValueProps = {
  label: string;
  value: string;
};

const TotalizerValue = ({ label, value }: TotalizerValueProps) => {
  return (
    <div className="flex flex-col justify-start gap-[10px]">
      <span className={`font-rubik text-xs uppercase text-black`}>{label}</span>
      <h1 className="font-rubik text-[20.5px] uppercase text-slate-700 font-medium">
        {value}
      </h1>
    </div>
  );
};

export default TotalizerValue;
