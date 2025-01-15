<template>
    <div class="bg-white rounded-lg p-4 flex space-x-4">
      <div class="flex items-center space-x-2">
        <i class="bi bi-search text-gray-500"></i>
        <input type="text" placeholder="Search..." class="border-none outline-none focus:ring-0" />
      </div>
      <div class="flex items-center space-x-4">
        <select class="border-none focus:ring-0 text-gray-500">
          <option>Category 1</option>
          <option>Category 2</option>
        </select>
        <button class="bg-purple text-white px-4 py-2 rounded-lg hover:bg-opacity-90">Filter</button>
      </div>
    </div>
  </template>
  