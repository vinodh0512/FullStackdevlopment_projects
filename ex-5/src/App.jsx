import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings, 
  Bell, 
  Search, 
  TrendingUp, 
  Activity, 
  DollarSign, 
  MousePointer2 
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';

// Mock data generator
const generateData = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    name: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
    value: Math.floor(Math.random() * 5000) + 1000,
    active: Math.floor(Math.random() * 1000) + 200,
  }));
};

function App() {
  const [data, setData] = useState(generateData());
  const [stats, setStats] = useState({
    users: 12450,
    revenue: 84200,
    sessions: 3200,
    conversion: 3.2
  });
  const [activeTab, setActiveTab] = useState('Overview');
  const [activities, setActivities] = useState([
    { id: 1, user: 'Alex Rivera', action: 'purchased Premium Plan', time: 'Just now', color: '#3b82f6' },
    { id: 2, user: 'Sarah Chen', action: 'joined the community', time: '2m ago', color: '#10b981' },
    { id: 3, user: 'Mark Wilson', action: 'submitted a bug report', time: '5m ago', color: '#f59e0b' },
    { id: 4, user: 'Elena Gomez', action: 'updated profile picture', time: '12m ago', color: '#8b5cf6' },
  ]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update stats slightly
      setStats(prev => ({
        ...prev,
        users: prev.users + Math.floor(Math.random() * 5),
        revenue: prev.revenue + Math.floor(Math.random() * 100),
        sessions: prev.sessions + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 10)
      }));

      // Update current month data point
      setData(prev => {
        const newData = [...prev];
        const lastIdx = newData.length - 1;
        newData[lastIdx] = {
          ...newData[lastIdx],
          value: newData[lastIdx].value + (Math.random() > 0.5 ? 50 : -50)
        };
        return newData;
      });

      // Add new activity occasionally
      if (Math.random() > 0.7) {
        const users = ['James', 'Lily', 'Noah', 'Mia', 'Ethan'];
        const actions = ['logged in', 'exported report', 'started a trial', 'invited a member'];
        const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];
        const newActivity = {
          id: Date.now(),
          user: users[Math.floor(Math.random() * users.length)],
          action: actions[Math.floor(Math.random() * actions.length)],
          time: 'Just now',
          color: colors[Math.floor(Math.random() * colors.length)]
        };
        setActivities(prev => [newActivity, ...prev.slice(0, 5)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <Activity size={24} color="#3b82f6" />
          <span>Vantage<span>Core</span></span>
        </div>
        <nav>
          <ul>
            {['Overview', 'Analytics', 'Customers', 'Reports', 'Settings'].map(item => (
              <li 
                key={item} 
                className={activeTab === item ? 'active' : ''} 
                onClick={() => setActiveTab(item)}
              >
                {item === 'Overview' && <LayoutDashboard size={20} />}
                {item === 'Analytics' && <BarChart3 size={20} />}
                {item === 'Customers' && <Users size={20} />}
                {item === 'Reports' && <TrendingUp size={20} />}
                {item === 'Settings' && <Settings size={20} />}
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="avatar">VT</div>
            <div className="info">
              <p>Vinodh T.</p>
              <span>Administrator</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="content">
        <header className="header glass">
          <div className="search-bar">
            <Search size={18} color="#64748b" />
            <input type="text" placeholder="Search analytics..." />
          </div>
          <div className="header-actions">
            <div className="notification-bell">
              <Bell size={20} />
              <span className="dot"></span>
            </div>
            <button className="upgrade-btn">Pro Upgrade</button>
          </div>
        </header>

        <section className="dashboard-body">
          <div className="welcome-header">
            <div>
              <h1>Dashboard Overview</h1>
              <p>Welcome back! Here's what's happening with your projects today.</p>
            </div>
            <div className="live-status">
              <span className="live-indicator"></span>
              Live Data Feed
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card glass">
              <div className="stat-icon" style={{backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6'}}>
                <Users size={20} />
              </div>
              <div className="stat-info">
                <span>Total Users</span>
                <h3>{stats.users.toLocaleString()}</h3>
                <p className="trend positive">+12.5% <span>vs last month</span></p>
              </div>
            </div>
            <div className="stat-card glass">
              <div className="stat-icon" style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981'}}>
                <DollarSign size={20} />
              </div>
              <div className="stat-info">
                <span>Monthly Revenue</span>
                <h3>${stats.revenue.toLocaleString()}</h3>
                <p className="trend positive">+8.2% <span>vs last month</span></p>
              </div>
            </div>
            <div className="stat-card glass">
              <div className="stat-icon" style={{backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b'}}>
                <MousePointer2 size={20} />
              </div>
              <div className="stat-info">
                <span>Active Sessions</span>
                <h3>{stats.sessions.toLocaleString()}</h3>
                <p className="trend negative">-2.1% <span>vs yesterday</span></p>
              </div>
            </div>
            <div className="stat-card glass">
              <div className="stat-icon" style={{backgroundColor: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6'}}>
                <TrendingUp size={20} />
              </div>
              <div className="stat-info">
                <span>Conversion Rate</span>
                <h3>{stats.conversion}%</h3>
                <p className="trend positive">+0.4% <span>vs avg</span></p>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="charts-container">
            <div className="main-chart glass">
              <div className="chart-header">
                <h3>Revenue Growth</h3>
                <select className="chart-filter">
                  <option>Last 12 Months</option>
                  <option>Last 6 Months</option>
                </select>
              </div>
              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#64748b', fontSize: 12}}
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#64748b', fontSize: 12}}
                    />
                    <Tooltip 
                      contentStyle={{backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff'}}
                      itemStyle={{color: '#3b82f6'}}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="side-panel glass">
              <div className="panel-header">
                <h3>Real-time Activity</h3>
                <span className="live-badge">Live</span>
              </div>
              <div className="activity-list">
                {activities.map(activity => (
                  <div key={activity.id} className="activity-item">
                    <div className="activity-dot" style={{backgroundColor: activity.color}}></div>
                    <div className="activity-content">
                      <p><strong>{activity.user}</strong> {activity.action}</p>
                      <span>{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="view-all-btn">View All Activity</button>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .dashboard-layout {
          display: flex;
          min-height: 100vh;
        }

        /* Sidebar Styles */
        .sidebar {
          width: 260px;
          background: var(--bg-sidebar);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          padding: 2rem 1.5rem;
          position: fixed;
          height: 100vh;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 3rem;
        }
        .logo span span {
          color: var(--accent-primary);
        }
        nav ul {
          list-style: none;
        }
        nav li {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          margin-bottom: 0.5rem;
          border-radius: 8px;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        nav li:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-main);
        }
        nav li.active {
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-primary);
        }
        .sidebar-footer {
          margin-top: auto;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
        }
        .user-profile {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .avatar {
          width: 40px;
          height: 40px;
          background: var(--accent-secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }
        .info p {
          font-size: 0.9rem;
          font-weight: 600;
        }
        .info span {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        /* Content Styles */
        .content {
          flex: 1;
          margin-left: 260px;
          padding: 2rem;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1.5rem;
          margin-bottom: 2rem;
        }
        .search-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          width: 300px;
        }
        .search-bar input {
          background: transparent;
          border: none;
          color: white;
          outline: none;
          width: 100%;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .notification-bell {
          position: relative;
          color: var(--text-muted);
          cursor: pointer;
        }
        .dot {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 8px;
          height: 8px;
          background: var(--danger);
          border-radius: 50%;
          border: 2px solid var(--bg-main);
        }
        .upgrade-btn {
          background: var(--accent-primary);
          color: white;
          padding: 0.5rem 1.25rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.85rem;
        }

        .welcome-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2rem;
        }
        .welcome-header h1 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
        }
        .welcome-header p {
          color: var(--text-muted);
        }
        .live-status {
          background: rgba(16, 185, 129, 0.1);
          color: var(--success);
          padding: 0.4rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .stat-card {
          padding: 1.5rem;
          display: flex;
          gap: 1.25rem;
        }
        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stat-info span {
          font-size: 0.85rem;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.25rem;
        }
        .stat-info h3 {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }
        .trend {
          font-size: 0.75rem;
          font-weight: 600;
        }
        .trend span {
          display: inline;
          font-weight: 400;
          margin-left: 4px;
        }
        .trend.positive { color: var(--success); }
        .trend.negative { color: var(--danger); }

        /* Charts Row */
        .charts-container {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1.5rem;
        }
        .main-chart {
          padding: 1.5rem;
        }
        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .chart-filter {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          padding: 0.4rem 0.75rem;
          border-radius: 6px;
          outline: none;
        }

        .side-panel {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }
        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .live-badge {
          font-size: 0.7rem;
          text-transform: uppercase;
          background: var(--danger);
          padding: 0.1rem 0.5rem;
          border-radius: 4px;
          font-weight: 700;
        }
        .activity-list {
          flex: 1;
        }
        .activity-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.25rem;
          position: relative;
        }
        .activity-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-top: 6px;
          flex-shrink: 0;
        }
        .activity-content p {
          font-size: 0.85rem;
          line-height: 1.4;
        }
        .activity-content span {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .view-all-btn {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-main);
          padding: 0.6rem;
          border-radius: 8px;
          font-weight: 500;
          font-size: 0.85rem;
          margin-top: 1rem;
          transition: background 0.2s;
        }
        .view-all-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 1200px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .charts-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
