import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const lineChartOptions = {
    chart: {
      type: 'line',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    series: [{
      name: "Users",
      data: [30, 70, 40, 90, 60, 100, 80]
    }],
    colors: ['#5932EA'],
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        style: {
          colors: '#9197B3'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#9197B3'
        }
      }
    },
    grid: {
      borderColor: '#F5F5F5',
      strokeDashArray: 5,
    },
    markers: {
      size: 5,
      colors: ['#5932EA'],
      strokeColors: '#fff',
      strokeWidth: 2,
    }
  };

  const customers = [
    {
      name: "Arjun Patel",
      company: "TCS",
      phone: "(225) 555-0118",
      email: "arjun.patel@tcs.com",
      country: "India",
      status: "Active"
    },
    {
      name: "Priya Sharma",
      company: "Infosys",
      phone: "(205) 555-0100",
      email: "priya.sharma@infosys.com",
      country: "India",
      status: "Active"
    },
    {
      name: "Raj Malhotra",
      company: "Wipro",
      phone: "(302) 555-0107",
      email: "raj.malhotra@wipro.com",
      country: "India",
      status: "Inactive"
    },
    {
      name: "Neha Gupta",
      company: "HCL",
      phone: "(252) 555-0126",
      email: "neha.gupta@hcl.com",
      country: "India",
      status: "Active"
    },
    {
      name: "Arun Kumar",
      company: "Tech Mahindra",
      phone: "(629) 555-0129",
      email: "arun.kumar@techmahindra.com",
      country: "India",
      status: "Active"
    },
    {
      name: "Meera Reddy",
      company: "Cognizant",
      phone: "(406) 555-0120",
      email: "meera.reddy@cognizant.com",
      country: "India",
      status: "Active"
    },
    {
      name: "Vikram Singh",
      company: "Accenture",
      phone: "(208) 555-0112",
      email: "vikram.singh@accenture.com",
      country: "India",
      status: "Active"
    },
    {
      name: "Anjali Desai",
      company: "Oracle",
      phone: "(704) 555-0127",
      email: "anjali.desai@oracle.com",
      country: "India",
      status: "Inactive"
    }
  ];

  // Sample data for charts
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 }
  ];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <nav className="nav-menu">
          <a href="#" className="nav-item active">
            <i className="fas fa-om"></i>
            <span>Dashboard</span>
          </a>
          <a href="#" className="nav-item">
            <i className="fas fa-book"></i>
            <span>Courses</span>
          </a>
          <a href="#" className="nav-item">
            <i className="fas fa-users"></i>
            <span>Students</span>
          </a>
          <a href="#" className="nav-item">
            <i className="fas fa-rupee-sign"></i>
            <span>Income</span>
          </a>
          <a href="#" className="nav-item">
            <i className="fas fa-bullhorn"></i>
            <span>Promote</span>
          </a>
          <a href="#" className="nav-item">
            <i className="fas fa-question-circle"></i>
            <span>Help</span>
          </a>
        </nav>

        <div className="user-info">
          <img src="/guru-avatar.png" alt="Admin" className="user-avatar" />
          <div className="user-details">
            <p>Admin</p>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="main-header">
          <h1>Om Namah Shivaya <i className="fas fa-om header-om"></i></h1>
        </header>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon green">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <div className="stat-info">
              <p>Earning</p>
              <h3>$198k</h3>
              <span className="trend positive">↑ 37.8% this month</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">
              <i className="fas fa-file-alt"></i>
            </div>
            <div className="stat-info">
              <p>Orders</p>
              <h3>$2.4k</h3>
              <span className="trend negative">↓ 2% this month</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon blue">
              <i className="fas fa-wallet"></i>
            </div>
            <div className="stat-info">
              <p>Balance</p>
              <h3>$2.4k</h3>
              <span className="trend negative">↓ 2% this month</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon red">
              <i className="fas fa-shopping-bag"></i>
            </div>
            <div className="stat-info">
              <p>Total Sales</p>
              <h3>$89k</h3>
              <span className="trend positive">↑ 11% this week</span>
            </div>
          </div>
        </div>

        <div className="chart-section">
          <div className="chart-header">
            <div>
              <h2>Overview</h2>
              <p>Monthly Earning</p>
            </div>
            <select className="period-select">
              <option>Quarterly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="customers-section">
          <div className="table-header">
            <div className="search-wrapper">
              <i className="fas fa-search search-icon"></i>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search customers..."
              />
            </div>
            <select className="period-select">
              <option value="30">Last 30 days</option>
              <option value="60">Last 60 days</option>
              <option value="90">Last 90 days</option>
            </select>
          </div>
          <div className="customers-table">
            <table>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Company</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr key={index}>
                    <td>{customer.name}</td>
                    <td>{customer.company}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.email}</td>
                    <td>{customer.country}</td>
                    <td>
                      <span className={`status-badge ${customer.status.toLowerCase()}`}>
                        {customer.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 