
"use client";

import React, { useState } from 'react';

interface Person {
    name: string;
    email: string;
    status: string;
    role: string;
    property: string;
    unit: string;
    lastInvited: string;
}

export default function PeoplePage() {
    const [tab, setTab] = useState<'Approved' | 'Awaiting Approval'>('Approved');
    const [isOpen, setIsOpen] = useState<Boolean>(false)

    const people: Person[] = [
        { name: 'JP', email: 'yjoch12@gmail.com', status: 'Active', role: 'Admin', property: '-', unit: 'ABC', lastInvited: '08/15/2024' },
        // You can add more mock data here
    ];

    return (
        <div className="sm:ml-64 mt-5 px-5">
            {/* Title */}
            <h1 className="text-3xl font-semibold mb-6">People</h1>

            {/* Tabs for Approved and Awaiting Approval */}
            <div className="flex border-b border-3 border-[#F3F3F3]">
                <button
                    onClick={() => setTab('Approved')}
                    className={`px-6 py-2 ${tab === 'Approved' ? 'border-b-2 border-[#595959] text-black' : 'text-gray-500'}`}
                >
                    People
                </button>
                <button
                    onClick={() => setTab('Awaiting Approval')}
                    className={`px-6 py-2 ${tab === 'Awaiting Approval' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}
                >
                    Properties
                </button>
            </div>

            {/* Search and Actions */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 space-y-4 md:space-y-0">

                <div className="md:flex hidden space-x-4">
                    {/* Approved Button */}
                    <button className="bg-black text-white rounded-full px-4 py-2">
                        Approved
                    </button>
                    {/* Awaiting Approval Button */}
                    <button className="bg-gray-100 text-black rounded-full px-4 py-2">
                        Awaiting Approval
                    </button>
                </div>

                <div className='flex md:flex-row flex-col justify-center items-center'>
                    <div className='flex items-center '>
                        <div className="relative rounded-full w-full md-mb-0 mb-3 md:w-auto mr-2">
                            <input
                                type="text"
                                placeholder="Search by name or email"
                                className="border border-gray-300 rounded-full p-2 pl-10 md:w-96 w-90"
                            />
                            <svg className="w-5 h-5 absolute left-2 top-3 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10 2a8 8 0 106.32 13.9l5.38 5.39a1 1 0 001.42-1.42l-5.39-5.38A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"></path>
                            </svg>
                        </div>
                        <div className='flex md:hidden items-center justify-center bg-[#F3F3F3] px-2 py-3'>
                            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.125 5.75C18.125 6.04837 18.0065 6.33452 17.7955 6.54549C17.5845 6.75647 17.2984 6.875 17 6.875H5C4.70163 6.875 4.41548 6.75647 4.2045 6.54549C3.99353 6.33452 3.875 6.04837 3.875 5.75C3.875 5.45163 3.99353 5.16548 4.2045 4.9545C4.41548 4.74353 4.70163 4.625 5 4.625H17C17.2984 4.625 17.5845 4.74353 17.7955 4.9545C18.0065 5.16548 18.125 5.45163 18.125 5.75ZM20.75 0.125H1.25C0.951631 0.125 0.665483 0.243526 0.454505 0.454505C0.243526 0.665483 0.125 0.951631 0.125 1.25C0.125 1.54837 0.243526 1.83452 0.454505 2.0455C0.665483 2.25647 0.951631 2.375 1.25 2.375H20.75C21.0484 2.375 21.3345 2.25647 21.5455 2.0455C21.7565 1.83452 21.875 1.54837 21.875 1.25C21.875 0.951631 21.7565 0.665483 21.5455 0.454505C21.3345 0.243526 21.0484 0.125 20.75 0.125ZM13.25 9.125H8.75C8.45163 9.125 8.16548 9.24353 7.9545 9.45451C7.74353 9.66548 7.625 9.95163 7.625 10.25C7.625 10.5484 7.74353 10.8345 7.9545 11.0455C8.16548 11.2565 8.45163 11.375 8.75 11.375H13.25C13.5484 11.375 13.8345 11.2565 14.0455 11.0455C14.2565 10.8345 14.375 10.5484 14.375 10.25C14.375 9.95163 14.2565 9.66548 14.0455 9.45451C13.8345 9.24353 13.5484 9.125 13.25 9.125Z" fill="black" />
                            </svg>

                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <button className="bg-gray-200 px-10 md:px-4 rounded-md flex justify-center items-center">
                            <svg width="21" height="21" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.79166 14.1666H4.60416C3.52749 14.1666 2.60902 13.796 1.84874 13.0546C1.08847 12.3085 0.708328 11.3994 0.708328 10.3275C0.708328 9.40665 0.984578 8.58498 1.53708 7.86248C2.0943 7.13998 2.82152 6.67956 3.71874 6.48123C4.01624 5.39512 4.60652 4.51679 5.48958 3.84623C6.37736 3.17095 7.38083 2.83331 8.49999 2.83331C9.88361 2.83331 11.0547 3.31498 12.0133 4.27831C12.9767 5.23692 13.4583 6.40804 13.4583 7.79165C14.2753 7.88609 14.9506 8.24026 15.4842 8.85415C16.0225 9.45859 16.2917 10.1669 16.2917 10.9791C16.2917 11.8669 15.9824 12.6201 15.3637 13.2387C14.7451 13.8573 13.9919 14.1666 13.1042 14.1666H9.20833V9.10206L10.3417 10.2L11.3333 9.20831L8.49999 6.37498L5.66666 9.20831L6.65833 10.2L7.79166 9.10206V14.1666Z" fill="black" />
                            </svg>
                            <span >{" "}Export</span>

                        </button>
                        <button className="bg-gray-200 px-4 py-2 rounded md:flex hidden   items-center">
                            <svg width="21" height="19" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.60418 12.1667C3.52751 12.1667 2.60904 11.796 1.84876 11.0546C1.08848 10.3085 0.708344 9.39946 0.708344 8.32751C0.708344 7.40668 0.984594 6.58501 1.53709 5.86251C2.09432 5.14001 2.82154 4.6796 3.71876 4.48126C3.99265 3.52738 4.49793 2.7246 5.23459 2.07293C5.97126 1.42599 6.82362 1.03168 7.79168 0.890015V6.60626L6.65834 5.50835L5.66668 6.50001L8.50001 9.33335L11.3333 6.50001L10.3417 5.50835L9.20834 6.60626V0.890015C10.4267 1.05529 11.4396 1.60071 12.2471 2.52626C13.0546 3.45182 13.4583 4.54029 13.4583 5.79168C14.2753 5.88613 14.9506 6.24029 15.4842 6.85418C16.0225 7.45863 16.2917 8.16696 16.2917 8.97918C16.2917 9.86696 15.9824 10.6202 15.3638 11.2388C14.7451 11.8574 13.992 12.1667 13.1042 12.1667H4.60418Z" fill="black" />
                            </svg>
                            <span>{" "} Bulk Add</span>
                        </button>
                        <button className="bg-black text-white md:px-4 px-10 rounded-md py-2 justify-between  flex items-center" onClick={() => setIsOpen(true)}>
                            <svg width="24" height="15" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4583 9.04169V10.4584H4.95833V9.04169C4.95833 9.04169 4.95833 6.20835 9.20833 6.20835C13.4583 6.20835 13.4583 9.04169 13.4583 9.04169ZM11.3333 2.66669C11.3333 2.2464 11.2087 1.83556 10.9752 1.4861C10.7417 1.13665 10.4098 0.86428 10.0215 0.703444C9.63324 0.542608 9.20598 0.500526 8.79377 0.582519C8.38156 0.664513 8.00292 0.866899 7.70573 1.16409C7.40854 1.46127 7.20616 1.83991 7.12416 2.25212C7.04217 2.66433 7.08425 3.0916 7.24509 3.47989C7.40593 3.86818 7.67829 4.20006 8.02775 4.43356C8.3772 4.66706 8.78805 4.79169 9.20833 4.79169C9.77192 4.79169 10.3124 4.5678 10.7109 4.16929C11.1095 3.77078 11.3333 3.23027 11.3333 2.66669ZM13.6 6.25085C13.9872 6.60807 14.2994 7.03883 14.5183 7.518C14.7372 7.99717 14.8584 8.51514 14.875 9.04169V10.4584H17V9.04169C17 9.04169 17 6.59794 13.6 6.25085ZM12.75 0.541688C12.536 0.5417 12.3233 0.575159 12.1196 0.640854C12.534 1.23512 12.7562 1.94219 12.7562 2.66669C12.7562 3.39118 12.534 4.09825 12.1196 4.69252C12.3233 4.75822 12.536 4.79168 12.75 4.79169C13.3136 4.79169 13.8541 4.5678 14.2526 4.16929C14.6511 3.77078 14.875 3.23027 14.875 2.66669C14.875 2.1031 14.6511 1.5626 14.2526 1.16409C13.8541 0.765571 13.3136 0.541688 12.75 0.541688ZM5.66667 4.08335H3.54167V1.95835H2.125V4.08335H0V5.50002H2.125V7.62502H3.54167V5.50002H5.66667V4.08335Z" fill="#F3F3F3" />
                            </svg>
                            <span > {" "}Add</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Table of People */}
            <div className="relative overflow-x-auto shadow-md top-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-[#F3F3F3] ">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input
                                        id="checkbox-all-search"
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-[#000000] dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 "
                                    />
                                    <label htmlFor="checkbox-all-search" className="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Property
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Unit
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Last invited
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b  hover:bg-gray-50 ">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input
                                        id="checkbox-table-search-1"
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-[#000000]  focus:ring-2 "
                                    />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                                <span className='font-serif'>JP</span>
                                <div>yjoch12@gmail.com</div>

                            </th>
                            <td className="px-6 py-4 ">
                                <span className='bg-[#EAF6ED] text-[#1E6E3F] px-2 py-1 rounded-sm'>
                                    Active
                                </span>
                            </td>
                            <td className="px-6 py-4">-</td>
                            <td className="px-6 py-4">Admin</td>
                            <td className="px-6 py-4">ABC</td>
                            <td className="px-6 py-4">08/15/2024</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div
                id="modal"
                className={`fixed inset-0 bg-black bg-opacity-50 flex items-start justify-end ${isOpen ? "flex" : "hidden"}`}
            >
                {/* Modal Content */}
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-semibold mb-4">Edit</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-[#000000]">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#000000]">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#000000]">Phone</label>
                            <input
                                type="tel"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#000000]">Email</label>
                            <input
                                type="email"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#000000]">
                                Property
                            </label>
                            <select className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000] sm:text-sm">
                                <option></option>
                                <option>ABC</option>
                                <option>PQR</option>
                                <option>XYZ</option>

                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#000000]">Unit</label>
                            <input
                                type="text"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                            />
                        </div>
                        <div className="flex justify-between flex-col">
                            <button
                                type="submit"
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2 bg-[#000000] text-white rounded"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                className="px-auto py-2 bg-transparent text-[#000000] rounded"
                                id="cancelBtn"
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </button>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}
