import './RootPageLayout.scss';

function RootPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="root-page-layout">
      {children}
    </div>
  );
}

export default RootPageLayout;
