import React from 'react';

type ActiveSection = 'analytics' | 'audit' | 'packages' | 'account';

interface TopBarProps {
  activeSection: ActiveSection;
  showCheckout: boolean;
  showThankYou: boolean;
  onOpenCart: () => void;
  onBackToDashboards: () => void;
}

const TopBar: React.FC<TopBarProps> = ({
  activeSection,
  showCheckout,
  showThankYou,
  onOpenCart,
  onBackToDashboards,
}) => {
  const showCheckoutFlow = showCheckout || showThankYou;

  let title: string;
  if (showCheckoutFlow) {
    title = 'CHECKOUT';
  } else if (activeSection === 'analytics') {
    title = 'Analytics';
  } else if (activeSection === 'audit') {
    title = 'Audit Report';
  } else if (activeSection === 'packages') {
    title = 'Packages';
  } else {
    title = 'Account';
  }

  return (
    <header className="top-bar">
      <div>
        <h1 className="page-title">{title}</h1>
        <p className="page-subtitle">
          {showCheckoutFlow
            ? 'Shipping & Billing'
            : 'View Recent Schemas Below, See All in Schema History.'}
        </p>
      </div>
      {showCheckoutFlow ? (
        <button className="cart-button" type="button" onClick={onBackToDashboards}>
          Back to Dashboards
        </button>
      ) : (
        <button className="cart-button" type="button" onClick={onOpenCart}>
          Shopping cart
        </button>
      )}
    </header>
  );
};

export default TopBar;


