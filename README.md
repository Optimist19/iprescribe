# iPrescribe - Development Guide

Welcome to iPrescribe! This document provides comprehensive information on how to set up, run, and develop this application.



## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: v16+ (Recommended: v18 or v20)
  - [Download Node.js](https://nodejs.org/)
  - Verify installation: `node --version && npm --version`
- **Git**: For version control
  - [Download Git](https://git-scm.com/)
- **Code Editor**: Visual Studio Code (recommended)
  - [Download VS Code](https://code.visualstudio.com/)

---

## Installation & Setup

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd iprescribe
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`, including:
- React & React Router for UI and navigation
- Material-UI (MUI) for component library
- React Query (@tanstack/react-query) for server state management
- Zustand for client state management
- React Hook Form for form handling
- Vite for build tooling

### Step 3: Environment Configuration

Create a `.env.local` file in the root directory (see [Environment Configuration](#environment-configuration) section below).

---

## Running the Application

### Development Mode

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at: `http://localhost:5173`

The development server automatically watches for file changes and refreshes the browser.

### Production Build

Build the application for production:

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality and style issues:

```bash
npm run lint
```

---

## Environment Configuration

### Creating the `.env.local` File

The application requires environment variables for API communication. Future developers must create a `.env.local` file in the project root with the following variables:

**File Location**: `c:/Users/dell/Desktop/iprescibe/.env.local`

### Environment Variables

```env
# API Base URL - Backend server address
VITE_BASE_URL=https://api.prescribe-app.com/api/v1

# API Authentication Token
VITE_API_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbjEyMyIsIm5hbWUiOiJBZG1pbiIsImlhdCI6MTcwNDgzNDAwMH0.SampleTokenHere
```

### Variable Details

| Variable | Type | Description | Example |
|----------|------|-------------|---------|
| `VITE_BASE_URL` | String | The backend API server URL. Must include the protocol (http/https) and the API version path. | `https://api.prescribe-app.com/api/v1` |
| `VITE_API_TOKEN` | String | JWT bearer token for API authentication. Obtained from your backend authentication service. | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |

### How to Obtain These Values

1. **VITE_BASE_URL**: 
   - Provided by your backend team/DevOps
   - Development: Usually `http://localhost:3000/api/v1`
   - Production: Deployed backend URL

2. **VITE_API_TOKEN**:
   - Contact the backend administrator for a valid JWT token
   - Or login through the application and retrieve from browser storage
   - Tokens may expire periodically and need renewal

### Where These Variables Are Used

The environment variables are consumed in the API layer:

**File**: `src/utils/api/apis.ts`

```typescript
const token = import.meta.env.VITE_API_TOKEN;
const baseUrl = import.meta.env.VITE_BASE_URL;

export const allPatients = async () => {
  const res = await fetch(
    `${baseUrl}/admin/patients`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
  return res.json();
};
```

### Important Notes

⚠️ **NEVER commit `.env.local` to version control**

Add `.env.local` to your `.gitignore`:

```
.env.local
.env.*.local
```

---

## Project additional Features

### 1. **User Authentication**
- **Login Page**: Secure admin login with email and password
- **Protected Routes**: Authenticated users only can access the dashboard



## Development Workflow

### 1. Starting Development

```bash
npm run dev
```

Open `http://localhost:5173` in your browser. The app will hot-reload on file changes.


### 4. Building for Production

```bash
npm run build
npm run preview  # Test the build locally
```
---


## API Integration Guide

### API Services Location

**File**: `src/utils/api/apis.ts`

### Current API Endpoints

#### 1. Get All Patients

```typescript
export const allPatients = async () => {
  // GET /admin/patients
}
```

**Usage in Component**:

```typescript
import { allPatients } from "../utils/api/apis";
import { useQuery } from "@tanstack/react-query";

function MyComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["patients"],
    queryFn: allPatients
  });
  
  return <div>{data?.map(patient => <div>{patient.name}</div>)}</div>;
}
```

#### 2. Get Dashboard Statistics

```typescript
export const getAllStats = async () => {
  // GET /admin/dashboard/stats
}
```

**Usage in Component**:

```typescript
const { data: stats } = useQuery({
  queryKey: ["allStats"],
  queryFn: getAllStats
});
```

### Adding New API Endpoints

1. **Add function to `src/utils/api/apis.ts`**:

```typescript
export const createPrescription = async (prescriptionData: PrescriptionInput) => {
  const res = await fetch(
    `${baseUrl}/admin/prescriptions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(prescriptionData)
    }
  );

  if (!res.ok) {
    throw new Error("Failed to create prescription");
  }

  return res.json();
};
```

2. **Use in Component with React Query**:

```typescript
import { useMutation } from "@tanstack/react-query";

function PrescriptionForm() {
  const { mutate: createPrescription } = useMutation({
    mutationFn: createPrescription,
    onSuccess: () => {
      toast.success("Prescription created!");
    },
    onError: () => {
      toast.error("Failed to create prescription");
    }
  });

  const handleSubmit = (data) => {
    createPrescription(data);
  };

  return <form onSubmit={handleSubmit}>{/* form fields */}</form>;
}
```

### Authentication

All API requests automatically include the Bearer token from environment variables:

```typescript
headers: {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json"
}
```
