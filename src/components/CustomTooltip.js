function CustomTooltip() {
  return (
    <>
      <div className="custom-tool-tip-container">
        <h1>Custom-Tooltip</h1>
        <div className="tooltip ">
          <span> Left success tooltip</span>
          <span className="tooltip-text-left"> CustomTooltip</span>
        </div>

        <div className="tooltip ">
          <span> Right warning tooltip</span>
          <span className="tooltip-text-right"> CustomTooltip</span>
        </div>

        <div className="tooltip">
          Top error tooltip
          <span className="tooltip-text"> CustomTooltip</span>
        </div>

        <div className="tooltip">
          <span> Bottom Dark tooltip</span>
          <span className="tooltip-text-bottom"> CustomTooltip</span>
        </div>
      </div>
    </>
  );
}

export default CustomTooltip;
