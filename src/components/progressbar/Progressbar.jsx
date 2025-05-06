import ProgressWrapper from "./Progressbar.style";

const Progressbar = ({ variant, done }) => {
  return (
    <ProgressWrapper variant={variant}>
      <div className="progress-done" style={{ width: `${done}%` }}>
        {done > 0 && <p>{done}%</p>}
      </div>
    </ProgressWrapper>
  );
};

export default Progressbar;
