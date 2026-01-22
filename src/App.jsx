import React, { useState } from 'react';
import { ChevronDown, ChevronRight, User, Package, DollarSign, Users, BarChart3, Settings, Bell, Lock, FileText, ShoppingCart, CreditCard, TrendingUp, Database, UserPlus, LogIn, Home } from 'lucide-react';

const SitemapNode = ({ title, icon: Icon, children, level = 0, defaultExpanded = true }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const hasChildren = children && children.length > 0;
  
  const bgColors = [
    'bg-blue-50 border-blue-200',
    'bg-green-50 border-green-200',
    'bg-purple-50 border-purple-200',
    'bg-orange-50 border-orange-200'
  ];
  
  return (
    <div className="my-2">
      <div 
        className={`flex items-center gap-2 p-3 rounded-lg border-2 ${bgColors[level % 4]} cursor-pointer hover:shadow-md transition-all`}
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        {hasChildren && (
          <span className="text-gray-600">
            {expanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </span>
        )}
        {Icon && <Icon size={20} className="text-gray-700" />}
        <span className="font-semibold text-gray-800">{title}</span>
      </div>
      {hasChildren && expanded && (
        <div className="ml-8 mt-2 border-l-2 border-gray-300 pl-4">
          {children.map((child, idx) => (
            <SitemapNode key={idx} {...child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const FlowDiagram = () => {
  const flows = [
    {
      title: "User Authentication Flow",
      steps: [
        { label: "Landing Page", color: "bg-blue-100" },
        { label: "Login/Register", color: "bg-blue-200" },
        { label: "Authentication Check", color: "bg-yellow-100", diamond: true },
        { label: "Dashboard", color: "bg-green-100" }
      ]
    },
    {
      title: "Inventory Management Flow",
      steps: [
        { label: "Inventory Module", color: "bg-purple-100" },
        { label: "Add/Update Product", color: "bg-purple-200" },
        { label: "Stock Level Check", color: "bg-yellow-100", diamond: true },
        { label: "Low Stock Alert?", color: "bg-orange-100", diamond: true },
        { label: "Update Database", color: "bg-green-100" }
      ]
    },
    {
      title: "Sales Transaction Flow",
      steps: [
        { label: "New Transaction", color: "bg-indigo-100" },
        { label: "Select Products", color: "bg-indigo-200" },
        { label: "Apply Discounts/Tax", color: "bg-indigo-200" },
        { label: "Payment Method", color: "bg-yellow-100", diamond: true },
        { label: "Process Payment", color: "bg-blue-200" },
        { label: "Generate Receipt", color: "bg-green-100" },
        { label: "Update Inventory", color: "bg-green-200" }
      ]
    },
    {
      title: "Report Generation Flow",
      steps: [
        { label: "Reports Module", color: "bg-teal-100" },
        { label: "Select Report Type", color: "bg-yellow-100", diamond: true },
        { label: "Set Filters/Date Range", color: "bg-teal-200" },
        { label: "Generate Report", color: "bg-teal-300" },
        { label: "View/Export", color: "bg-green-100" }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {flows.map((flow, idx) => (
        <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-gray-800">{flow.title}</h3>
          <div className="flex flex-col items-center gap-3">
            {flow.steps.map((step, stepIdx) => (
              <React.Fragment key={stepIdx}>
                <div className={`${step.color} ${step.diamond ? 'rotate-45 w-32 h-32 flex items-center justify-center' : 'px-6 py-3 rounded-lg'} border-2 border-gray-400 shadow-sm`}>
                  <span className={`${step.diamond ? '-rotate-45 text-sm' : 'text-base'} font-semibold text-gray-800 text-center`}>
                    {step.label}
                  </span>
                </div>
                {stepIdx < flow.steps.length - 1 && (
                  <div className="w-1 h-8 bg-gray-400"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const SMEAppSitemap = () => {
  const [activeTab, setActiveTab] = useState('sitemap');

  const sitemapStructure = {
    title: "SME Business Management App",
    icon: Home,
    children: [
      {
        title: "Public Pages",
        icon: FileText,
        children: [
          { title: "Landing Page", icon: Home },
          { title: "Login", icon: LogIn },
          { title: "Registration", icon: UserPlus },
          { title: "Password Reset", icon: Lock }
        ]
      },
      {
        title: "Dashboard",
        icon: BarChart3,
        children: [
          { title: "Overview/KPIs", icon: TrendingUp },
          { title: "Quick Actions", icon: Settings },
          { title: "Recent Activities", icon: Bell },
          { title: "Notifications Center", icon: Bell }
        ]
      },
      {
        title: "User Management",
        icon: User,
        children: [
          { title: "User List", icon: Users },
          { title: "Add/Edit User", icon: UserPlus },
          { title: "Role Assignment (RBAC)", icon: Lock },
          { title: "Profile Settings", icon: Settings }
        ]
      },
      {
        title: "Inventory Management",
        icon: Package,
        children: [
          { title: "Product List", icon: Database },
          { title: "Add/Edit Product", icon: Package },
          { title: "Stock Levels", icon: BarChart3 },
          { title: "Low Stock Alerts", icon: Bell },
          { title: "Purchase Orders", icon: ShoppingCart },
          { title: "Supplier Management", icon: Users }
        ]
      },
      {
        title: "Sales & Invoicing",
        icon: ShoppingCart,
        children: [
          { title: "New Sale/Transaction", icon: DollarSign },
          { title: "Invoice Management", icon: FileText },
          { title: "Create Invoice", icon: FileText },
          { title: "Payment Recording", icon: CreditCard },
          { title: "Receipt Generation", icon: FileText },
          { title: "Sales History", icon: Database }
        ]
      },
      {
        title: "Accounting & Expenses",
        icon: DollarSign,
        children: [
          { title: "Expense Entry", icon: CreditCard },
          { title: "Expense Categories", icon: Database },
          { title: "Income Tracking", icon: TrendingUp },
          { title: "Profit & Loss Statement", icon: BarChart3 },
          { title: "Balance Sheet", icon: FileText },
          { title: "Cash Flow Report", icon: TrendingUp },
          { title: "Bank Reconciliation", icon: Database }
        ]
      },
      {
        title: "Customer Relationship Management (CRM)",
        icon: Users,
        children: [
          { title: "Customer List", icon: Users },
          { title: "Add/Edit Customer", icon: UserPlus },
          { title: "Purchase History", icon: Database },
          { title: "Outstanding Payments", icon: CreditCard },
          { title: "Payment Reminders", icon: Bell },
          { title: "Customer Segmentation", icon: BarChart3 },
          { title: "Communication Log", icon: FileText }
        ]
      },
      {
        title: "Reports & Analytics",
        icon: BarChart3,
        children: [
          { title: "Sales Reports", icon: TrendingUp },
          { title: "Expense Reports", icon: DollarSign },
          { title: "Inventory Reports", icon: Package },
          { title: "Profit Reports", icon: TrendingUp },
          { title: "Tax Reports", icon: FileText },
          { title: "Custom Reports", icon: Settings },
          { title: "Export Options (PDF/Excel)", icon: FileText }
        ]
      },
      {
        title: "Settings & Configuration",
        icon: Settings,
        children: [
          { title: "Business Profile", icon: Users },
          { title: "Tax Configuration (VAT)", icon: FileText },
          { title: "Payment Gateway Setup", icon: CreditCard },
          { title: "Notification Preferences", icon: Bell },
          { title: "Currency Settings", icon: DollarSign },
          { title: "Security Settings (2FA)", icon: Lock },
          { title: "Backup & Recovery", icon: Database }
        ]
      },
      {
        title: "Staff & Task Management",
        icon: Users,
        children: [
          { title: "Staff Directory", icon: Users },
          { title: "Task Assignment", icon: FileText },
          { title: "Task Tracking", icon: BarChart3 },
          { title: "Schedules", icon: Database },
          { title: "Productivity Reports", icon: TrendingUp }
        ]
      }
    ]
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          SME Business Management Application
        </h1>
        {/* <p className="text-gray-600 mb-6">Complete Sitemap & User Flow Documentation</p> */}
        
        <div className="flex gap-4 mb-6 border-b">
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'sitemap'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Sitemap Structure
          </button>
          <button
            onClick={() => setActiveTab('flows')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'flows'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            User Flows
          </button>
        </div>

        {activeTab === 'sitemap' && (
          <div className="mt-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-sm text-blue-800">
                <strong>Navigation Structure:</strong> This sitemap shows the complete hierarchical structure 
                of the SME App, organized by main modules and sub-features. Click on sections to expand/collapse.
              </p>
            </div>
            <SitemapNode {...sitemapStructure} />
          </div>
        )}

        {activeTab === 'flows' && (
          <div className="mt-6">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
              <p className="text-sm text-purple-800">
                <strong>User Flow Diagrams:</strong> These flowcharts illustrate the key user journeys 
                through the application. Diamond shapes represent decision points.
              </p>
            </div>
            <FlowDiagram />
          </div>
        )}

        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="font-bold text-lg mb-3 text-gray-800">Key Features Summary</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Platform Access</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Web Dashboard (Admin/Manager)</li>
                <li>Mobile App (iOS & Android)</li>
                <li>Real-time synchronization</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Core Modules</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Inventory Management</li>
                <li>Sales & Invoicing</li>
                <li>Accounting & Expenses</li>
                <li>CRM & Customer Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">User Roles (RBAC)</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Admin</li>
                <li>Business Owner</li>
                <li>Staff (Sales/Operations)</li>
                <li>Accountant</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Integration</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Payment Gateways (Flutterwave, Paystack)</li>
                <li>SMS/Email Notifications</li>
                <li>Cloud Storage & Backup</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMEAppSitemap;