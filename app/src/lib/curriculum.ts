// California Common Core 6th Grade Math Curriculum
export interface Topic {
  id: string;
  code: string;
  name: string;
  description: string;
  standards: string[];
}

export interface Domain {
  id: string;
  code: string;
  name: string;
  description: string;
  topics: Topic[];
}

export const GRADE_6_CURRICULUM: Domain[] = [
  {
    id: "rp",
    code: "6-RP",
    name: "Ratios & Proportional Relationships",
    description: "Understand ratio concepts and use ratio reasoning to solve problems",
    topics: [
      {
        id: "6-rp-1",
        code: "6.RP.1",
        name: "Understanding Ratios",
        description: "Understand the concept of a ratio and use ratio language",
        standards: ["6.RP.A.1"]
      },
      {
        id: "6-rp-2",
        code: "6.RP.2",
        name: "Unit Rates",
        description: "Understand unit rate associated with a ratio",
        standards: ["6.RP.A.2"]
      },
      {
        id: "6-rp-3",
        code: "6.RP.3",
        name: "Ratio Reasoning",
        description: "Use ratio and rate reasoning to solve real-world problems",
        standards: ["6.RP.A.3", "6.RP.A.3.A", "6.RP.A.3.B", "6.RP.A.3.C", "6.RP.A.3.D"]
      },
      {
        id: "6-rp-percents",
        code: "6.RP.P",
        name: "Percentages",
        description: "Find percent of a quantity as a rate per 100",
        standards: ["6.RP.A.3.C"]
      },
      {
        id: "6-rp-conversion",
        code: "6.RP.C",
        name: "Measurement Conversion",
        description: "Use ratio reasoning to convert measurement units",
        standards: ["6.RP.A.3.D"]
      }
    ]
  },
  {
    id: "ns",
    code: "6-NS",
    name: "The Number System",
    description: "Apply and extend previous understandings of numbers to the system of rational numbers",
    topics: [
      {
        id: "6-ns-1",
        code: "6.NS.1",
        name: "Dividing Fractions",
        description: "Interpret and compute quotients of fractions",
        standards: ["6.NS.A.1"]
      },
      {
        id: "6-ns-2",
        code: "6.NS.2",
        name: "Multi-Digit Division",
        description: "Fluently divide multi-digit numbers using the standard algorithm",
        standards: ["6.NS.B.2"]
      },
      {
        id: "6-ns-3",
        code: "6.NS.3",
        name: "Decimal Operations",
        description: "Fluently add, subtract, multiply, and divide multi-digit decimals",
        standards: ["6.NS.B.3"]
      },
      {
        id: "6-ns-4",
        code: "6.NS.4",
        name: "GCF and LCM",
        description: "Find greatest common factor and least common multiple",
        standards: ["6.NS.B.4"]
      },
      {
        id: "6-ns-5",
        code: "6.NS.5",
        name: "Positive & Negative Numbers",
        description: "Understand that positive and negative numbers describe quantities",
        standards: ["6.NS.C.5"]
      },
      {
        id: "6-ns-6",
        code: "6.NS.6",
        name: "Rational Numbers on Number Line",
        description: "Understand rational numbers as points on the number line",
        standards: ["6.NS.C.6", "6.NS.C.6.A", "6.NS.C.6.B", "6.NS.C.6.C"]
      },
      {
        id: "6-ns-7",
        code: "6.NS.7",
        name: "Ordering & Absolute Value",
        description: "Understand ordering and absolute value of rational numbers",
        standards: ["6.NS.C.7", "6.NS.C.7.A", "6.NS.C.7.B", "6.NS.C.7.C", "6.NS.C.7.D"]
      },
      {
        id: "6-ns-8",
        code: "6.NS.8",
        name: "Coordinate Plane",
        description: "Solve problems by graphing points in all four quadrants",
        standards: ["6.NS.C.8"]
      }
    ]
  },
  {
    id: "ee",
    code: "6-EE",
    name: "Expressions & Equations",
    description: "Apply and extend previous understandings of arithmetic to algebraic expressions",
    topics: [
      {
        id: "6-ee-1",
        code: "6.EE.1",
        name: "Whole-Number Exponents",
        description: "Write and evaluate numerical expressions involving whole-number exponents",
        standards: ["6.EE.A.1"]
      },
      {
        id: "6-ee-2",
        code: "6.EE.2",
        name: "Writing Expressions",
        description: "Write, read, and evaluate expressions in which letters stand for numbers",
        standards: ["6.EE.A.2", "6.EE.A.2.A", "6.EE.A.2.B", "6.EE.A.2.C"]
      },
      {
        id: "6-ee-3",
        code: "6.EE.3",
        name: "Equivalent Expressions",
        description: "Apply properties of operations to generate equivalent expressions",
        standards: ["6.EE.A.3"]
      },
      {
        id: "6-ee-4",
        code: "6.EE.4",
        name: "Identifying Equivalent Expressions",
        description: "Identify when two expressions are equivalent",
        standards: ["6.EE.A.4"]
      },
      {
        id: "6-ee-5",
        code: "6.EE.5",
        name: "Understanding Equations",
        description: "Understand solving an equation or inequality as a process of answering a question",
        standards: ["6.EE.B.5"]
      },
      {
        id: "6-ee-6",
        code: "6.EE.6",
        name: "Using Variables",
        description: "Use variables to represent numbers and write expressions",
        standards: ["6.EE.B.6"]
      },
      {
        id: "6-ee-7",
        code: "6.EE.7",
        name: "One-Step Equations",
        description: "Solve real-world problems by writing and solving equations",
        standards: ["6.EE.B.7"]
      },
      {
        id: "6-ee-8",
        code: "6.EE.8",
        name: "One-Step Inequalities",
        description: "Write inequalities to represent constraints or conditions",
        standards: ["6.EE.B.8"]
      },
      {
        id: "6-ee-9",
        code: "6.EE.9",
        name: "Dependent & Independent Variables",
        description: "Use variables to represent two quantities in a real-world problem",
        standards: ["6.EE.C.9"]
      }
    ]
  },
  {
    id: "g",
    code: "6-G",
    name: "Geometry",
    description: "Solve real-world and mathematical problems involving area, surface area, and volume",
    topics: [
      {
        id: "6-g-1",
        code: "6.G.1",
        name: "Area of Polygons",
        description: "Find area of right triangles, other triangles, special quadrilaterals",
        standards: ["6.G.A.1"]
      },
      {
        id: "6-g-2",
        code: "6.G.2",
        name: "Volume of Prisms",
        description: "Find the volume of right rectangular prisms with fractional edge lengths",
        standards: ["6.G.A.2"]
      },
      {
        id: "6-g-3",
        code: "6.G.3",
        name: "Coordinate Plane Polygons",
        description: "Draw polygons in the coordinate plane given coordinates for the vertices",
        standards: ["6.G.A.3"]
      },
      {
        id: "6-g-4",
        code: "6.G.4",
        name: "Surface Area",
        description: "Represent three-dimensional figures using nets and find surface area",
        standards: ["6.G.A.4"]
      }
    ]
  },
  {
    id: "sp",
    code: "6-SP",
    name: "Statistics & Probability",
    description: "Develop understanding of statistical variability and summarize distributions",
    topics: [
      {
        id: "6-sp-1",
        code: "6.SP.1",
        name: "Statistical Questions",
        description: "Recognize a statistical question as one that anticipates variability",
        standards: ["6.SP.A.1"]
      },
      {
        id: "6-sp-2",
        code: "6.SP.2",
        name: "Data Distribution",
        description: "Understand that data has a distribution described by center, spread, shape",
        standards: ["6.SP.A.2"]
      },
      {
        id: "6-sp-3",
        code: "6.SP.3",
        name: "Measures of Center & Variation",
        description: "Recognize measures of center and variation for numerical data sets",
        standards: ["6.SP.A.3"]
      },
      {
        id: "6-sp-4",
        code: "6.SP.4",
        name: "Data Displays",
        description: "Display numerical data in plots on a number line",
        standards: ["6.SP.B.4"]
      },
      {
        id: "6-sp-5",
        code: "6.SP.5",
        name: "Summarize Data Sets",
        description: "Summarize numerical data sets in relation to their context",
        standards: ["6.SP.B.5", "6.SP.B.5.A", "6.SP.B.5.B", "6.SP.B.5.C", "6.SP.B.5.D"]
      },
      {
        id: "6-sp-mmmr",
        code: "6.SP.M",
        name: "Mean, Median, Mode, Range",
        description: "Understand mean, median, mode, and range as measures of data",
        standards: ["6.SP.B.5.C"]
      }
    ]
  }
];

export const DIFFICULTIES = [
  { id: "easy", name: "Easy", color: "bg-green-500" },
  { id: "medium", name: "Medium", color: "bg-yellow-500" },
  { id: "hard", name: "Hard", color: "bg-red-500" }
];
