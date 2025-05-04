import React, { useState } from 'react';

const EmployeeDashboard = ({ handleLogout, data }) => {
    const [activeTab, setActiveTab] = useState('profile');

    const stats = [
        { label: 'Tasks Completed', value: '12', icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )},
        { label: 'In Progress', value: '3', icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )},
        { label: 'Pending Review', value: '2', icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        )},
        { label: 'Performance', value: '95%', icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        )}
    ];

  return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
            {/* Navigation Bar */}
            <nav className="bg-white shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-emerald-400 to-green-400 flex items-center justify-center shadow-md">
                                    <span className="text-white font-bold text-lg">{data?.name?.[0]?.toUpperCase()}</span>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h1 className="text-gray-900 text-xl font-bold">Employee Portal</h1>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-gradient-to-br from-emerald-400 to-green-400 rounded-xl shadow-lg">
                                    {stat.icon}
                                </div>
                                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                            </div>
                            <div className="text-gray-600 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="flex border-b border-gray-100">
                        <button
                            className={`px-6 py-3 text-sm font-medium flex items-center space-x-2 ${
                                activeTab === 'profile'
                                    ? 'text-emerald-600 border-b-2 border-emerald-500 bg-emerald-50'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                            onClick={() => setActiveTab('profile')}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span>Profile</span>
                        </button>
                        <button
                            className={`px-6 py-3 text-sm font-medium flex items-center space-x-2 ${
                                activeTab === 'tasks'
                                    ? 'text-emerald-600 border-b-2 border-emerald-500 bg-emerald-50'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                            onClick={() => setActiveTab('tasks')}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <span>Tasks</span>
                        </button>
                    </div>

                    <div className="p-6">
                        {activeTab === 'profile' ? (
                            <div className="space-y-6">
                                <div className="flex items-center space-x-6">
                                    <div className="h-24 w-24 rounded-xl bg-gradient-to-r from-emerald-400 to-green-400 flex items-center justify-center text-4xl text-white font-bold shadow-md">
                                        {data?.name?.[0]?.toUpperCase()}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">{data?.name}</h2>
                                        <p className="text-emerald-600">{data?.department}</p>
                                    </div>
    </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                                            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                                            <p className="text-gray-900 text-lg">{data?.email}</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                                            <label className="block text-sm font-medium text-gray-600 mb-1">Role</label>
                                            <p className="text-gray-900 text-lg capitalize">{data?.role}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                                            <label className="block text-sm font-medium text-gray-600 mb-1">Department</label>
                                            <p className="text-gray-900 text-lg">{data?.department}</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                                            <label className="block text-sm font-medium text-gray-600 mb-1">Join Date</label>
                                            <p className="text-gray-900 text-lg">{data?.joinDate}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h3 className="text-gray-900 font-medium">Update Employee Dashboard UI</h3>
                                            <p className="text-gray-600 text-sm mt-1">Improve the visual design and user experience</p>
                                        </div>
                                        <span className="px-3 py-1 text-xs font-medium text-yellow-600 bg-yellow-50 rounded-full">
                                            In Progress
                                        </span>
                                    </div>
                                    <div className="mt-4">
                                        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                                            <span>Progress</span>
                                            <span>60%</span>
                                        </div>
                                        <div className="w-full bg-gray-100 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-emerald-400 to-green-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-gray-900 font-medium">Complete Project Documentation</h3>
                                            <p className="text-gray-600 text-sm mt-1">Write technical documentation for the project</p>
                                        </div>
                                        <span className="px-3 py-1 text-xs font-medium text-emerald-600 bg-emerald-50 rounded-full">
                                            Completed
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default EmployeeDashboard;