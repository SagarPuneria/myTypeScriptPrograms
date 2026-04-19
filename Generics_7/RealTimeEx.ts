// ------------------------------------------------------------
// Generic API Response Interface
// ------------------------------------------------------------
export interface ApiResponse<T> {
  status: "success" | "error";
  data: T;
  errors?: string[];
}

// ------------------------------------------------------------
// User API Model + Sample Usage
// ------------------------------------------------------------
export interface User {
  id: number;
  name: string;
  email: string;
}

export const getUserApiResponse = (): ApiResponse<User> => {
  return {
    status: "success",
    data: {
      id: 1001,
      name: "Ch Chandishwar",
      email: "chandishwar@company.com",
    },
  };
};

// ------------------------------------------------------------
// Product API Model + Sample Usage
// ------------------------------------------------------------
export interface Product {
  id: number;
  title: string;
  price: number;
}

export const getProductApiResponse = (): ApiResponse<Product> => {
  return {
    status: "success",
    data: {
      id: 501,
      title: "Laptop - Dell Precision",
      price: 125000,
    },
  };
};

// ------------------------------------------------------------
// Metrics API Model + Sample Usage
// ------------------------------------------------------------
export interface Metrics {
  cpu: number; // in percentage
  memory: number; // in percentage
  uptime: number; // in seconds
}

export const getMetricsApiResponse = (): ApiResponse<Metrics> => {
  return {
    status: "success",
    data: {
      cpu: 68,
      memory: 72,
      uptime: 127890,
    },
  };
};

// ------------------------------------------------------------
// Example: Function Demonstrating All APIs
// ------------------------------------------------------------
export function logAllApiResponses() {
  console.log("User API Response:", getUserApiResponse());
  console.log("Product API Response:", getProductApiResponse());
  console.log("Metrics API Response:", getMetricsApiResponse());
}
logAllApiResponses();
