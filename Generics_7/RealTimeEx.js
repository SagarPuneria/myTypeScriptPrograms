export const getUserApiResponse = () => {
    return {
        status: "success",
        data: {
            id: 1001,
            name: "Ch Chandishwar",
            email: "chandishwar@company.com",
        },
    };
};
export const getProductApiResponse = () => {
    return {
        status: "success",
        data: {
            id: 501,
            title: "Laptop - Dell Precision",
            price: 125000,
        },
    };
};
export const getMetricsApiResponse = () => {
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
