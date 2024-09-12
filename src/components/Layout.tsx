import React, { useEffect } from "react";

interface Props {
  children: React.ReactNode
  title?: string
}


export function Layout({ children, title }: Props) {
  useEffect(() => {
    document.title = title ? `${title} | Simple Coffee Listing` : 'Simple Coffee Listing';

    document.addEventListener('wheel', (event: any) => {
      if (event.target.type === 'number') {
        event.preventDefault();
      }
    }, { passive: false });
  }, []);


  return (
    <div style={{ height: '100%' }}>
      <div className="layout__container">
        <div className="layout__main-content">
          { children }
        </div>
      </div>
    </div>
  );
}
