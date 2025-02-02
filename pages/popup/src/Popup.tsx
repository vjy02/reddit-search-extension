import { withErrorBoundary, withSuspense } from '@extension/shared';

const Popup = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center border">
      <h1 className="text-xl font-mono">Reddit Google Search</h1>
      <h1 className="text-sm font-mono">Made By: Victor Yoshida</h1>
      <div>{}</div>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
