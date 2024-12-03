const company = {
  name: "Tech Corp",
  departments: {
    it: {
      head: "Alice",
      employees: ["Bob", "Charlie"],
      projects: undefined,
    },
    hr: {
      head: "David",
      employees: ["Eve"],
    },
  },
  location: {
    city: "Tech City",
    country: "Techland",
  },
};

// Create a function that:
// 1. Takes this company object as parameter
// 2. Destructure in parameter list to get:
//    - company name
//    - IT head and first IT employee
//    - IT projects (with default value ['Project A'])
//    - company city
// 3. Log all these values

// Write your function below

function learningObjDest({
  name,
  departments: {
    it: {
      head,
      employees: [firstEmployee],
      projects = ["Project A"],
    },
  },
  location: { city },
}) {
  console.log(name, head, firstEmployee, city, projects);
}

learningObjDest(company);
