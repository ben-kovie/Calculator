

const PercentageButton = ({ input, setInput }) => {
  const handlePercentage = () => {
    if (!input) return;
    const result = parseFloat(input) / 100;
    setInput(result.toString());
  };

  return (
    <button  onClick={handlePercentage}>
      %
    </button>
  );
};

export default PercentageButton;
