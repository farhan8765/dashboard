import React, { useState } from 'react';
import './App.css';

const AnalyticsDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<
    'analytics' | 'audit' | 'packages' | 'account'
  >('analytics');
  const [activeTab, setActiveTab] = useState<'monthly' | 'siteHealth' | 'webTraffic' | 'metaAnalytics' | 'googleAds' | 'googleBusiness'>('monthly');
  const [activePackageTab, setActivePackageTab] = useState<
    'everything' | 'reputation' | 'branding' | 'website' | 'app' | 'uiux'
  >('everything');

  return (
    <div className="analytics-app">
      <aside className="sidebar">
      <div className="sidebar-brand">
  <img 
    src="/images/logo.png" 
    alt="AI Mark Lab Logo" 
    className="w-28 h-auto object-contain"
  />
</div>


        <nav className="sidebar-nav">
          <button
            type="button"
            className={`nav-item ${activeSection === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveSection('analytics')}
          >
            <span className="nav-dot" />
            <span>Analytics</span>
          </button>
          <button
            type="button"
            className={`nav-item ${activeSection === 'audit' ? 'active' : ''}`}
            onClick={() => setActiveSection('audit')}
          >
            <span className="nav-dot" />
            <span>Audit Report</span>
          </button>
          <button
            type="button"
            className={`nav-item ${activeSection === 'packages' ? 'active' : ''}`}
            onClick={() => setActiveSection('packages')}
          >
            <span className="nav-dot" />
            <span>Packages</span>
          </button>
          <button
            type="button"
            className={`nav-item ${activeSection === 'account' ? 'active' : ''}`}
            onClick={() => setActiveSection('account')}
          >
            <span className="nav-dot" />
            <span>Account</span>
          </button>
        </nav>

        <div className="sidebar-user">
          <div className="user-avatar">W</div>
          <div className="user-info">
            <div className="user-name">Wade Warren</div>
            <div className="user-role">Engineer</div>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="top-bar">
          <div>
            <h1 className="page-title">
              {activeSection === 'analytics' && 'Analytics'}
              {activeSection === 'audit' && 'Audit Report'}
              {activeSection === 'packages' && 'Packages'}
              {activeSection === 'account' && 'Account'}
            </h1>
            <p className="page-subtitle">
              View Recent Schemas Below, See All in Schema History.
            </p>
          </div>
          <button className="cart-button">Shopping cart</button>
        </header>
        {activeSection === 'analytics' && (
        <>
        <section className="tab-row">
          <button
            className={`tab ${activeTab === 'monthly' ? 'active' : ''}`}
            onClick={() => setActiveTab('monthly')}
          >
            Monthly Plan
          </button>
          <button
            className={`tab ${activeTab === 'siteHealth' ? 'active' : ''}`}
            onClick={() => setActiveTab('siteHealth')}
          >
            Site Health
          </button>
          <button
            className={`tab ${activeTab === 'webTraffic' ? 'active' : ''}`}
            onClick={() => setActiveTab('webTraffic')}
          >
            Web Traffic
          </button>
          <button
            className={`tab ${activeTab === 'metaAnalytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('metaAnalytics')}
          >
            Meta Analytics
          </button>
          <button
            className={`tab ${activeTab === 'googleAds' ? 'active' : ''}`}
            onClick={() => setActiveTab('googleAds')}
          >
            Google Ads
          </button>
          <button
            className={`tab ${activeTab === 'googleBusiness' ? 'active' : ''}`}
            onClick={() => setActiveTab('googleBusiness')}
          >
            Google business
          </button>
        </section>

        {activeTab === 'monthly' && (
        <section className="card">
          <header className="card-header">
            <h2 className="card-title">February Strategy For Cash For Gold Beckley</h2>
            <p className="card-subtitle">
              In February, we&apos;ll enhance online presence, improve website
              functionality, connect with customers through Valentine&apos;s Day
              promotions on social media, and run targeted ads focused on the
              Beckley area.
            </p>
          </header>

          <div className="strategy-table">
            <div className="strategy-row strategy-row--header">
              <div>Category</div>
              <div>Actions</div>
              <div>Details</div>
            </div>

            <div className="strategy-section-title">Social Media</div>

            <div className="strategy-row">
              <div className="cell-label">Platform Focus</div>
              <div>Facebook, Instagram, Google My Business,</div>
              <div />
            </div>

            <div className="strategy-row">
              <div className="cell-label">Content Focus</div>
              <div>
                <ul className="bullet-list">
                  <li>Success Stories: Highlight customer experiences.</li>
                  <li>
                    Educational Tips: Offer tips for selling gold, silver, and
                    platinum.
                  </li>
                  <li>
                    Valentine&apos;s Day Promotions: Special offers for those
                    selling gold or buying gifts.
                  </li>
                  <li>
                    Polls &amp; Q&amp;A: Engage followers with polls and answer
                    common questions about selling precious metals.
                  </li>
                </ul>
              </div>
              <div />
            </div>

            <div className="strategy-row">
              <div className="cell-label">Organic Posting/Engagement</div>
              <div>
                Reply to comments, messages, and engage with user-generated
                content
              </div>
              <div />
            </div>

            <div className="strategy-row">
              <div className="cell-label">Short Video</div>
              <div>1 short video (will be produced exclusively by our team)</div>
              <div />
            </div>

            <div className="strategy-row">
              <div className="cell-label">Paid Ads</div>
              <div>Run Ads as per client requirements</div>
              <div />
            </div>

            <div className="strategy-row">
              <div className="cell-label">Target Audience</div>
              <div>
                Focus on Beckley and surrounding areas. Highlight New Year
                promotions
              </div>
              <div />
            </div>

            <div className="strategy-section-title">Onsite SEO</div>

            <div className="strategy-row">
              <div className="cell-label">Keyword Research</div>
              <div>Focus on best keywords</div>
              <div />
            </div>

            <div className="strategy-row">
              <div className="cell-label">Blog Writing/Topic</div>
              <div>
                <strong>Topic:</strong> &quot;Top 5 Things to Consider When
                Selling Scrap Metals Like Gold, Silver, and Platinum&quot;
                <br />
                <strong>Goal:</strong> Educate customers on evaluating scrap
                metals and pricing factors.
              </div>
              <div />
            </div>

            <div className="strategy-row">
              <div className="cell-label">Internal Linking</div>
              <div>Link to homepage and service pages</div>
              <div />
            </div>

            <div className="strategy-section-title">Technical SEO</div>

            <div className="strategy-row">
              <div className="cell-label">Page Speed Optimization</div>
              <div>Ensure fast loading times post-holiday traffic surge.</div>
              <div />
            </div>

            <div className="strategy-row">
              <div className="cell-label">Mobile Optimization</div>
              <div>
                Optimize the website for mobile usability, simplify forms for
                lead generation forms for lead generation
              </div>
              <div />
            </div>

            <div className="strategy-row">
              <div className="cell-label">Schema Markup Updates</div>
              <div>
                Update structured data to improve local search visibility
              </div>
              <div />
            </div>
          </div>
        </section>
        )}

        {activeTab === 'siteHealth' && (
          <section className="card">
            <header className="card-header">
              <h2 className="card-title">Site Health For Cash For Gold Beckley</h2>
              <p className="card-subtitle">
                In February, we&apos;ll enhance online presence, improve website
                functionality, connect with customers through Valentine&apos;s Day
                promotions on social media, and run targeted ads focused on the
                Beckley area.
              </p>
            </header>

            <div className="site-health-layout">
              <div className="site-health-header-bar">
                <div className="site-health-brand">
                  <div className="site-health-brand-logo">Cash 4 Gold</div>
                </div>
                <button className="site-health-date">
                  Nov 15, 2025 - Nov 22, 2025 ▾
                </button>
              </div>

              <div className="site-health-section">
                <h3 className="site-health-section-title">Website Health</h3>
                <div className="site-health-panel wide">
                  <p className="site-health-muted">
                    The Health Score shows how well a website is doing
                  </p>
                  <div className="site-health-icon-row">
                    <span className="site-health-icon">🔧</span>
                    <div className="site-health-panel-text">
                      <div>Looker Studio cannot connect to your data set.</div>
                      <button className="site-health-link">See details</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="site-health-columns">
                <div className="site-health-section">
                  <h3 className="site-health-section-title">Health score history</h3>
                  <div className="site-health-panel tall">
                    <div className="site-health-icon-row center">
                      <span className="site-health-icon">🔧</span>
                      <div className="site-health-panel-text center-text">
                        <div>Data Set Configuration Error</div>
                        <div className="site-health-muted">
                          Looker Studio cannot connect to your data set.
                        </div>
                        <button className="site-health-link">See details</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="site-health-section">
                  <h3 className="site-health-section-title">Issues distribution</h3>
                  <div className="site-health-panel tall">
                    <div className="site-health-icon-row center">
                      <span className="site-health-icon">🔧</span>
                      <div className="site-health-panel-text center-text">
                        <div>Looker Studio cannot connect to your data set.</div>
                        <button className="site-health-link">See details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="site-health-bottom-grid">
                <div className="site-health-section">
                  <h3 className="site-health-section-title">
                    HTTP status codes distribution
                  </h3>
                  <div className="site-health-panel">
                    <div className="site-health-icon-row center">
                      <span className="site-health-icon">🔧</span>
                      <div className="site-health-panel-text center-text">
                        <div>Data Set Configuration Error</div>
                        <div className="site-health-muted">
                          Looker Studio cannot connect to your data set.
                        </div>
                        <button className="site-health-link">See details</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="site-health-section">
                  <h3 className="site-health-section-title">Content type distribution</h3>
                  <div className="site-health-panel">
                    <div className="site-health-icon-row center">
                      <span className="site-health-icon">🔧</span>
                      <div className="site-health-panel-text center-text">
                        <div>Data Set Configuration Error</div>
                        <div className="site-health-muted">
                          Looker Studio cannot connect to your data set.
                        </div>
                        <button className="site-health-link">See details</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="site-health-section">
                  <h3 className="site-health-section-title">Protocols distribution</h3>
                  <div className="site-health-panel">
                    <div className="site-health-icon-row center">
                      <span className="site-health-icon">🔧</span>
                      <div className="site-health-panel-text center-text">
                        <div>Data Set Configuration Error</div>
                        <div className="site-health-muted">
                          Looker Studio cannot connect to your data set.
                        </div>
                        <button className="site-health-link">See details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'webTraffic' && (
          <section className="card">
            <header className="card-header">
              <h2 className="card-title">Web Traffic For Cash For Gold Beckley</h2>
              <p className="card-subtitle">
                In February, we&apos;ll enhance online presence, improve website
                functionality, connect with customers through Valentine&apos;s Day
                promotions on social media, and run targeted ads focused on the
                Beckley area.
              </p>
            </header>

            <div className="web-traffic-layout">
              <div className="web-traffic-legend">
                <span className="legend-dot legend-clicks" />
                <span className="legend-label">Clicks</span>
                <span className="legend-dot legend-impressions" />
                <span className="legend-label">Impressions</span>
              </div>

              <div className="web-traffic-chart">
                <div className="chart-bg" />
                <div className="chart-lines">
                  <div className="line clicks" />
                  <div className="line impressions" />
                </div>
                <div className="chart-x-axis">
                  <span>Oct 10, 2024</span>
                  <span>Oct 11, 2024</span>
                  <span>Oct 12, 2024</span>
                  <span>Oct 13, 2024</span>
                  <span>Oct 14, 2024</span>
                  <span>Oct 15, 2024</span>
                  <span>Oct 16, 2024</span>
                  <span>Oct 17, 2024</span>
                  <span>Oct 18, 2024</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'metaAnalytics' && (
          <section className="card">
            <header className="card-header">
              <h2 className="card-title">Meta Analytics For Cash For Gold Beckley</h2>
              <p className="card-subtitle">
                In February, we&apos;ll enhance online presence, improve website
                functionality, connect with customers through Valentine&apos;s Day
                promotions on social media, and run targeted ads focused on the
                Beckley area.
              </p>
            </header>

            <div className="meta-layout">
              <section className="meta-section">
                <h3 className="meta-section-heading">Meta Analytics</h3>

                <div className="meta-panel meta-panel--top">
                  <div className="meta-header-row">
                    <div className="meta-brand">
                      <span className="meta-brand-icon">Cash 4 Gold</span>
                      <span className="meta-brand-title">Meta Analytics</span>
                    </div>
                    <button className="meta-date">
                      Oct 1, 2025 - Nov 24, 2025 ▾
                    </button>
                  </div>

                  <div className="meta-top-grid">
                    <div className="meta-card small">
                      <div className="meta-error">
                        <span className="meta-error-icon">🔧</span>
                        <div className="meta-error-text">
                          Looker Studio cannot connect to your data set.
                          <button className="site-health-link">See details</button>
                        </div>
                      </div>
                    </div>
                    <div className="meta-card small">
                      <div className="meta-error">
                        <span className="meta-error-icon">🔧</span>
                        <div className="meta-error-text">
                          Looker Studio cannot connect to your data set.
                          <button className="site-health-link">See details</button>
                        </div>
                      </div>
                    </div>
                    <div className="meta-card small">
                      <div className="meta-error">
                        <span className="meta-error-icon">🔧</span>
                        <div className="meta-error-text">
                          Looker Studio cannot connect to your data set.
                          <button className="site-health-link">See details</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="meta-bottom-grid">
                    <div className="meta-subsection">
                      <h4 className="meta-subsection-title">Split by actions</h4>
                      <div className="meta-card">
                        <div className="meta-error center">
                          <span className="meta-error-icon">🔧</span>
                          <div className="meta-error-text">
                            Data Set Configuration Error
                            <span className="site-health-muted">
                              Looker Studio cannot connect to your data set.
                            </span>
                            <button className="site-health-link">See details</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="meta-subsection">
                      <h4 className="meta-subsection-title">
                        Organic impressions
                        <span className="meta-subsection-note">
                          (All impressions recorded under post&apos;s creation date)
                        </span>
                      </h4>
                      <div className="meta-card">
                        <div className="meta-error center">
                          <span className="meta-error-icon">🔧</span>
                          <div className="meta-error-text">
                            Data Set Configuration Error
                            <span className="site-health-muted">
                              Looker Studio cannot connect to your data set.
                            </span>
                            <button className="site-health-link">See details</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="meta-section meta-section--post">
                <h3 className="meta-section-heading">Post performance</h3>

                <div className="meta-panel meta-panel--top">
                  <div className="meta-header-row">
                    <div className="meta-brand">
                      <span className="meta-brand-icon">Cash 4 Gold</span>
                      <span className="meta-brand-title">Post performance</span>
                    </div>
                    <button className="meta-date">
                      Oct 1, 2025 - Nov 24, 2025 ▾
                    </button>
                  </div>

                  <div className="meta-tabs-row">
                    <button className="meta-mini-tab active">Engagements</button>
                    <button className="meta-mini-tab">Clicks</button>
                    <button className="meta-mini-tab">Impressions</button>
                  </div>

                  <div className="meta-subsection">
                    <h4 className="meta-subsection-title">Performance by Posts</h4>
                    <div className="meta-card meta-card--large">
                      <div className="meta-error center">
                        <span className="meta-error-icon">🔧</span>
                        <div className="meta-error-text">
                          Data Set Configuration Error
                          <span className="site-health-muted">
                            Looker Studio cannot connect to your data set.
                          </span>
                          <button className="site-health-link">See details</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        )}

        {activeTab === 'googleAds' && (
          <section className="card">
            <header className="card-header">
              <h2 className="card-title">Google Ads For Cash For Gold Beckley</h2>
              <p className="card-subtitle">
                In February, we&apos;ll enhance online presence, improve website
                functionality, connect with customers through Valentine&apos;s Day
                promotions on social media, and run targeted ads focused on the
                Beckley area.
              </p>
            </header>

            <div className="google-ads-layout">
              <div className="google-ads-inner">
                <div className="google-ads-logo" />
                <p className="google-ads-text">
                  No advertisements are launched this month,
                  <br />
                  as per your request.
                </p>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'googleBusiness' && (
          <section className="card">
            <header className="card-header">
              <h2 className="card-title">Google Ads For Cash For Gold Beckley</h2>
              <p className="card-subtitle">
                In February, we&apos;ll enhance online presence, improve website
                functionality, connect with customers through Valentine&apos;s Day
                promotions on social media, and run targeted ads focused on the
                Beckley area.
              </p>
            </header>

            <div className="google-biz-layout">
              <div className="google-biz-inner">
                <div className="google-biz-logo" />
                <p className="google-biz-text">
                  Once you share access, we&apos;ll provide you with
                  <br />
                  detailed insights and results for your Google
                  <br />
                  My Business profile.
                </p>
              </div>
            </div>
          </section>
        )}
        </>
        )}

        {activeSection === 'audit' && (
          <section className="card audit-card">
            <div className="audit-inner">
              <div className="audit-icon" />
              <h2 className="audit-title">Audit Report</h2>
              <p className="audit-text">
                Sorry, We can&apos;t found any Audit report for you
                <br />
                at this time
              </p>
              <button className="audit-button">Download Report</button>
            </div>
          </section>
        )}

        {activeSection === 'packages' && (
          <section className="card packages-card">
            <div className="packages-tabs">
              <button
                className={`packages-tab ${
                  activePackageTab === 'everything' ? 'active' : ''
                }`}
                type="button"
                onClick={() => setActivePackageTab('everything')}
              >
                Everything You Need
              </button>
              <button
                className={`packages-tab ${
                  activePackageTab === 'reputation' ? 'active' : ''
                }`}
                type="button"
                onClick={() => setActivePackageTab('reputation')}
              >
                Reputation Management
              </button>
              <button
                className={`packages-tab ${
                  activePackageTab === 'branding' ? 'active' : ''
                }`}
                type="button"
                onClick={() => setActivePackageTab('branding')}
              >
                Branding/Designs
              </button>
              <button
                className={`packages-tab ${
                  activePackageTab === 'website' ? 'active' : ''
                }`}
                type="button"
                onClick={() => setActivePackageTab('website')}
              >
                Website Development
              </button>
              <button
                className={`packages-tab ${
                  activePackageTab === 'app' ? 'active' : ''
                }`}
                type="button"
                onClick={() => setActivePackageTab('app')}
              >
                App Development
              </button>
              <button
                className={`packages-tab ${
                  activePackageTab === 'uiux' ? 'active' : ''
                }`}
                type="button"
                onClick={() => setActivePackageTab('uiux')}
              >
                UI/UX
              </button>
            </div>

            {activePackageTab === 'everything' && (
              <div className="packages-grid">
                <div className="package-card">
                  <h3 className="package-name">Revenue Rocket</h3>
                  <p className="package-subtitle">
                    Free Trail Insights Art Plan
                    <br />
                    Ideal for beginner artists.
                  </p>
                  <div className="package-price-row">
                    <span className="package-price">$349</span>
                    <span className="package-period">per month</span>
                  </div>
                  <ul className="package-features">
                    <li>3 Graphical Posts</li>
                    <li>3 Text Posts</li>
                    <li>Cross Posts</li>
                    <li>1 Logo</li>
                    <li>1 Google Ads</li>
                    <li>7 Website</li>
                    <li>Maintenance</li>
                    <li>5 Backlinks</li>
                    <li>2 Blogs</li>
                    <li>Technical SEO</li>
                    <li>On-Page Optimization</li>
                  </ul>
                  <button className="package-button">Add To Cart</button>
                </div>

                <div className="package-card">
                  <h3 className="package-name">Profit Prodigy</h3>
                  <p className="package-subtitle">
                    Free Trail Insights Art Plan
                    <br />
                    Ideal for beginner artists.
                  </p>
                  <div className="package-price-row">
                    <span className="package-price">$799</span>
                    <span className="package-period">per month</span>
                  </div>
                  <ul className="package-features">
                    <li>3 Graphical Posts</li>
                    <li>3 Text Posts</li>
                    <li>Cross Posts</li>
                    <li>1 Logo</li>
                    <li>1 Google Ads</li>
                    <li>7 Website</li>
                    <li>Maintenance</li>
                    <li>5 Backlinks</li>
                    <li>2 Blogs</li>
                    <li>Technical SEO</li>
                    <li>On-Page Optimization</li>
                  </ul>
                  <button className="package-button">Add To Cart</button>
                </div>

                <div className="package-card">
                  <h3 className="package-name">Growth Gator</h3>
                  <p className="package-subtitle">
                    Free Trail Insights Art Plan
                    <br />
                    Ideal for beginner artists.
                  </p>
                  <div className="package-price-row">
                    <span className="package-price">$999</span>
                    <span className="package-period">per month</span>
                  </div>
                  <ul className="package-features">
                    <li>3 Graphical Posts</li>
                    <li>3 Text Posts</li>
                    <li>Cross Posts</li>
                    <li>1 Logo</li>
                    <li>1 Google Ads</li>
                    <li>7 Website</li>
                    <li>Maintenance</li>
                    <li>5 Backlinks</li>
                    <li>2 Blogs</li>
                    <li>Technical SEO</li>
                    <li>On-Page Optimization</li>
                  </ul>
                  <button className="package-button">Add To Cart</button>
                </div>

                <div className="package-card">
                  <h3 className="package-name">Domination Decoder</h3>
                  <p className="package-subtitle">
                    Free Trail Insights Art Plan
                    <br />
                    Ideal for beginner artists.
                  </p>
                  <div className="package-price-row">
                    <span className="package-price">$1499</span>
                    <span className="package-period">per month</span>
                  </div>
                  <ul className="package-features">
                    <li>3 Graphical Posts</li>
                    <li>3 Text Posts</li>
                    <li>Cross Posts</li>
                    <li>1 Logo</li>
                    <li>1 Google Ads</li>
                    <li>7 Website</li>
                    <li>Maintenance</li>
                    <li>5 Backlinks</li>
                    <li>2 Blogs</li>
                    <li>Technical SEO</li>
                    <li>On-Page Optimization</li>
                  </ul>
                  <button className="package-button">Add To Cart</button>
                </div>
              </div>
            )}

            {activePackageTab === 'reputation' && (
              <div className="packages-grid">
                <div className="package-card">
                  <h3 className="package-name">Essentials</h3>
                  <p className="package-subtitle">
                    Free Trail Insights Art Plan
                    <br />
                    Ideal for beginner artists.
                  </p>
                  <div className="package-price-row">
                    <span className="package-price">$299</span>
                    <span className="package-period">per month</span>
                  </div>
                  <ul className="package-features">
                    <li>5 Posts per month</li>
                    <li>1 Campaigns, We Create 1 Campaigns to run advertising of your brand</li>
                    <li>Monthly Analytics</li>
                    <li>Reputation Management</li>
                    <li>Videos</li>
                  </ul>
                  <button className="package-button">Add To Cart</button>
                </div>

                <div className="package-card">
                  <h3 className="package-name">Foundation</h3>
                  <p className="package-subtitle">
                    Free Trail Insights Art Plan
                    <br />
                    Ideal for beginner artists.
                  </p>
                  <div className="package-price-row">
                    <span className="package-price">$799</span>
                    <span className="package-period">per month</span>
                  </div>
                  <ul className="package-features">
                    <li>10 Posts Per Month 1 Design 5 Products</li>
                    <li>2 Campaigns, We Create 2 Campaigns to run advertising of your brand</li>
                    <li>Monthly Analytics</li>
                    <li>Reputation Management</li>
                    <li>Videos</li>
                  </ul>
                  <button className="package-button">Add To Cart</button>
                </div>

                <div className="package-card">
                  <h3 className="package-name">Evolution</h3>
                  <p className="package-subtitle">
                    Free Trail Insights Art Plan
                    <br />
                    Ideal for beginner artists.
                  </p>
                  <div className="package-price-row">
                    <span className="package-price">$1199</span>
                    <span className="package-period">per month</span>
                  </div>
                  <ul className="package-features">
                    <li>15 Posts Per Month 1 Design 5 Products</li>
                    <li>3 Campaigns, We Create 3 Campaigns to run advertising of your brand</li>
                    <li>1 Videos</li>
                    <li>Monthly Analytics</li>
                    <li>Reputation Management</li>
                  </ul>
                  <button className="package-button">Add To Cart</button>
                </div>

                <div className="package-card">
                  <h3 className="package-name">Luxe</h3>
                  <p className="package-subtitle">
                    Free Trail Insights Art Plan
                    <br />
                    Ideal for beginner artists.
                  </p>
                  <div className="package-price-row">
                    <span className="package-price">$2299</span>
                    <span className="package-period">per month</span>
                  </div>
                  <ul className="package-features">
                    <li>30 Posts Per Month 1 Design 5 Products</li>
                    <li>5 Campaigns, We Create 5 Campaigns to run advertising of your brand</li>
                    <li>4 Videos</li>
                    <li>Monthly Analytics</li>
                    <li>Reputation Management</li>
                  </ul>
                  <button className="package-button">Add To Cart</button>
                </div>
              </div>
            )}
          </section>
        )}

        {activeSection === 'account' && (
          <section className="card placeholder-card">
            <p>Account view coming soon.</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default AnalyticsDashboard;


