import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function ReactTooltip() {
  return (
    <>
      <div className="tool-tip-container">
      <h1>React-Tooltip</h1>
        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-content="helloworld!!"
          data-tooltip-place="left"
          data-tooltip-variant="success"
        >
          <span> Left success tooltip</span>
        </a>

        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-content="helloworld!!"
          data-tooltip-place="right"
          data-tooltip-variant="warning"
        >
          <span> Right warning tooltip</span>
        </a>

        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-content="helloworld!!"
          data-tooltip-place="top"
          data-tooltip-variant="error"
        >
          <span> Top error tooltip</span>
        </a>

        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-content="helloworld!!"
          data-tooltip-place="bottom"
          data-tooltip-variant="dark"
        >
          <span> Bottom Dark tooltip</span>
        </a>

        <Tooltip id="my-tooltip" />
      </div>
    </>
  );
}

export default ReactTooltip;
