## 🏗️ Project Structure

```
├── .husky/                         # Configuration for Git hooks using Husky
├── docs/                           # Project documentation and guides
├── public/                         # Public static assets served directly by Next.js
│   ├── images/                     # Static image assets (logos, icons)
│   ├── videos/                     # Static video files
│   ├── audio/                      # Static audio files
│   ├── favicon/                    # Favicon and related icons
│   ├── documents/                  # Downloadable/public documents
│   ├── locales/                    # Localization files for internationalization (i18n)
│   │   ├── index.ts                # Locale index and configuration
│   │   ├── en/                     # English language translations
│   │   │   ├── home.json           # English strings for the home page
│   │   │   └── about.json          # English strings for the about page
│   │   └── jp/                     # Japanese language translations
│   │       ├── home.json           # Japanese strings for the home page
│   │       └── about.json          # Japanese strings for the about page
│   ├── next.svg                    # Next.js logo or branding asset
│   └── site.webmanifest            # PWA manifest configuration file
├── server-fake/                    # Mock server simulating backend API responses
├── src/                            # Application source code
│   ├── api/                        # API configuration and request utilities
│   │   ├── axios-instance.ts       # Configured Axios instance with interceptors
│   │   └── api-request.ts          # Generic API request handler
│   ├── components/
│   │   │── templates/
│   │   │   ├── MainLayout.tsx      # Layout with sidebar and header
│   │   │   ├── AuthLayout.tsx      # Layout for authentication pages
│   │   │   ├── DashboardLayout.tsx # Layout for admin dashboard
│   │   │   └── PublicLayout.tsx    # Layout for public-facing pages
│   │   │── organisms
│   │   │   ├── Header/             # Header UI components
│   │   │   ├── Sidebar/            # Sidebar navigation components
│   │   │   ├── Footer/             # Footer components
│   │   │   └── Breadcrumbs/        # Breadcrumb navigation components
│   │   ├── molecules/                  # Mid-level feature-specific UI components
│   │   │   ├── Auth/                   # Authentication form components
│   │   │   │   ├── LoginForm.tsx       # Login form
│   │   │   │   └── RegisterForm.tsx    # Registration form
│   │   │   ├── Profile/                # User profile components
│   │   │   │   ├── ProfileCard.tsx     # Display user profile info
│   │   │   │   └── ProfileForm.tsx     # Edit profile form
│   │   │   └── Settings/               # Settings-related forms
│   │   │       ├── AccountSettings.tsx     # Account settings form
│   │   │       └── NotificationSettings.tsx # Notification preferences
│   │   └── atoms/                      # Basic reusable UI elements
│   │       ├── Button/                 # Button component
│   │       ├── Input/                  # Input field component
│   │       ├── Table/                  # Table display component
│   │       ├── Form/                   # Form layout component
│   │       ├── Select/                 # Select dropdown component
│   │       ├── Checkbox/               # Checkbox component
│   │       ├── Notification/           # Notification/alert component
│   │       ├── Upload/                 # File upload input
│   │       ├── Avatar/                 # Avatar/display image component
│   │       ├── Tabs/                   # Tabbed navigation component
│   │       ├── Tag/                    # Tag or label component
│   │       ├── Tooltip/                # Tooltip component
│   │       ├── Drawer/                 # Drawer/sidebar panel component
│   │       ├── Image/                  # Image display component
│   │       ├── Radio/                  # Radio button component
│   │       └── Loading/                # Loading spinner indicator
│   ├── constants/                      # Static values and app-wide constants
│   │   ├── routes.ts                   # Route path constants
│   │   ├── api-endpoints.ts            # API endpoint paths
│   │   ├── roles.ts                    # User role definitions
│   │   ├── messages.ts                 # Success/error message templates
│   │   ├── regex.ts                    # Commonly used regex patterns
│   │   ├── i18n-keys.ts                # Translation key strings
│   │   ├── app-config.ts               # General app-level configurations
│   │   └── index.ts                    # Barrel export for constants
│   ├── enums/                          # TypeScript enums for standardized values
│   │   ├── role.ts                     # Enum for user roles
│   │   ├── status.ts                   # Enum for common statuses
│   │   ├── language.ts                 # Enum for supported languages
│   │   ├── theme.ts                    # Enum for UI themes
│   │   ├── storage-key.ts              # Enum for localStorage keys
│   │   ├── route.ts                    # Enum for app route names
│   │   ├── api-endpoint.ts             # Enum for API endpoint names
│   │   └── index.ts                    # Barrel export for enums
│   ├── hocs/                           # Higher-Order Components to enhance components
│   │   ├── withAuth.tsx                # HOC to protect routes requiring authentication
│   │   └── withLocale.tsx              # HOC to provide locale context
│   ├── hooks/                          # Custom React hooks for shared logic
│   │   ├── index.ts                    # Barrel export for hooks
│   │   ├── useBoolean.ts               # Boolean toggle hook
│   │   ├── useNetworkState.ts          # Track online/offline network state
│   │   ├── useParams.ts                # Extract URL parameters
│   │   ├── useToggle.ts                # Simple toggle logic
│   │   ├── useResponsive.ts            # Handle responsive breakpoints
│   │   ├── useIsFirstRender.ts         # Detect initial component render
│   │   ├── useDebounce.ts              # Debounce input values
│   │   ├── useCopyToClipboard.ts       # Copy text to clipboard
│   │   ├── useMediaQuery.ts            # Listen for media query changes
│   │   ├── usePrevious.ts              # Track previous value of a variable
│   │   ├── useWindowScroll.ts          # Track scroll position
│   │   ├── useWindowSize.ts            # Get window size (width/height)
│   │   ├── useOnClickOutside.ts        # Detect outside element clicks
│   │   └── usePagination.ts            # Handle pagination logic
│   ├── pages/                          # Pages that map to routes in Next.js
│   │   ├── _app.tsx                    # Custom App component
│   │   ├── _document.tsx               # Custom Document setup
│   │   ├── index.tsx                   # Home page
│   │   ├── auth/                       # Auth-related pages
│   │   │   ├── login.tsx               # Login screen
│   │   │   └── register.tsx            # Registration screen
│   │   ├── dashboard/                  # Admin dashboard pages
│   │   │   └── index.tsx               # Dashboard home
│   │   ├── users/                      # User management pages
│   │   │   ├── index.tsx               # User list
│   │   │   └── [id].tsx                # User detail page
│   │   ├── products/                   # Product management pages
│   │   │   ├── index.tsx               # Product list
│   │   │   └── [id].tsx                # Product detail page
│   │   ├── settings/                   # Settings page
│   │   │   └── index.tsx               # User settings screen
│   │   ├── 404.tsx                     # Custom 404 error page
│   │   └── 403.tsx                     # Custom 403 error page
│   ├── redux/                          # Redux state management setup
│   │   ├── index.ts                    # Redux store initialization
│   │   ├── slices/                     # Feature-specific Redux slices
│   │   ├── hooks.ts                    # Typed Redux hooks
│   │   └── root-reducer.ts             # Combines all reducers
│   ├── services/                       # API service modules for business logic
│   │   ├── auth.service.ts             # Authentication API functions
│   │   ├── user.service.ts             # User-related API calls
│   │   ├── product.service.ts          # Product-related API calls
│   │   ├── file.service.ts             # File upload/download services
│   │   ├── setting.service.ts          # User/app settings services
│   │   ├── common.service.ts           # Common/shared API calls
│   │   └── index.ts                    # Barrel export (optional)
│   ├── styles/                         # Styling and theming configuration
│   │   ├── globals.scss                # Global styles
│   │   ├── tailwind.css                # Tailwind base imports
│   │   ├── variables.scss              # SCSS variables for global use
│   │   ├── mixins.scss                 # Reusable SCSS mixins/functions
│   │   ├── antd.override.scss          # Custom overrides for Ant Design
│   │   ├── theme.ts                    # Theme config for Styled Components
│   │   └── index.ts                    # Barrel export
│   ├── types/                          # TypeScript type definitions
│   │   ├── index.ts                    # General shared types
│   │   ├── api.ts                      # API response/request types
│   │   ├── user.ts                     # User-related types
│   │   └── product.ts                  # Product-related types
│   └── utils/                          # General utility/helper functions
│       ├── index.ts                    # Barrel export
│       ├── date.ts                     # Date/time utilities
│       ├── file.ts                     # File operation helpers
│       ├── object.ts                   # Object manipulation utilities
│       ├── array.ts                    # Array operation utilities
│       ├── form.ts                     # Form validation and helpers
│       ├── string.ts                   # String formatting/manipulation
│       ├── url.ts                      # URL parsing/generation helpers
│       ├── local-storage.ts            # LocalStorage helpers
│       ├── i18n.ts                     # Internationalization helpers
│       └── cookie.ts                   # Cookie utility functions
├── .env.local                         # Local environment variables (ignored by Git)
├── .eslintignore                      # ESLint ignore rules
├── .eslintrc.json                     # ESLint configuration
├── .gitignore                         # Git ignore rules
├── .prettierignore                    # Prettier ignore rules
├── .prettierrc                        # Prettier configuration
├── next-i18next.config.js             # i18n configuration for Next.js
├── next.config.js                     # Main configuration for Next.js
├── package.json                       # Project metadata and dependencies
├── postcss.config.js                  # PostCSS plugin configuration
├── README.md                          # Project overview and setup guide
├── tailwind.config.js                 # Tailwind CSS configuration
├── tsconfig.json                      # TypeScript compiler options
└── yarn.lock                          # Locked dependency versions for Yarn
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/username/repo-name.git
cd repo-name
```

### 2. Install dependencies

```bash
yarn
# or
yarn install
```

### 3. Setup environment variables

Copy `.env.example` and fill in your values:

```bash
cp .env.example .env
```

### 4. Start the development server

```bash
yarn dev
# or for MacOS
yarn dev:mac
```

Visit `http://localhost:3000` in your browser.

---

## 🧪 Scripts

| Command        | Description                            |
| -------------- | -------------------------------------- |
| `dev`          | Start the dev server                   |
| `dev:mac`      | Start the dev server (macOS)           |
| `build`        | Build the app for production           |
| `start`        | Start the production server            |
| `lint`         | Run ESLint to check for code issues    |
| `format`       | Format all files using Prettier        |
| `prepare`      | Prepare hooks (for Husky)              |
| `merge-db`     | Merge database for fake-server         |
| `merge-db:mac` | Merge database for fake-server (macOS) |

---

## 📁 Environment Variables

All environment variables are defined in `.env`.
Public variables must be prefixed with `NEXT_PUBLIC_`.

Example:

```
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## 🛠 Technical stacks

### 1. **Frontend Framework**

### **Next.js Ver 14**

- ✅ **App Router** and **Server Components** support
- ✅ Built-in **SSR** / **SSG**
- ✅ Image and Font optimization

### 2. **State Management**

### **Redux Toolkit**

- ✅ Modern & simplified Redux
- ✅ Built-in support for **async thunks** and slices
- ✅ DevTools support

### 3. **UI Libraries**

### **Option 1: Ant Design 5**

- ✅ Enterprise-ready UI components
- ✅ Supports **dark mode**
- ✅ Built-in **form validation**
- ✅ Internationalization (i18n) supported out of box
- ✅ Tree-shakable and optimized for performance

### **Option 2: Chakra UI**

- ✅ Built-in support for **dark mode**
- ✅ Easy to customize colors, fonts,...
- ✅ Tree-shakable and optimized for performance
- ✅ Built-in support for **responsive design**

### **Option 3: Shadcn UI**

- ✅ Dark Mode Support
- ✅ Server Components Friendly
- ✅ Styled with Tailwind CSS

### 4. **Styling**

### **Tailwind CSS 3**

- ✅ Utility-first CSS framework
- ✅ **JIT engine** (super fast)
- ✅ Works great with **responsive design**
- ✅ Plugins like `prettier-plugin-tailwindcss` auto-sort classes

### **styled-components**

- ✅ CSS-in-JS with **tagged template literals**
- ✅ Supports **dynamic styling** based on props
- ✅ Built-in **theming** support
- ✅ Prevents class name clashes with **scoped styles**

### **Sass** (Optional)

- ✅ CSS preprocessor with **variables**, **mixins**, and **nesting**

### 5. **API Request**

### **React Query**

- ✅ **SSR Support** with Next.js
- ✅ **Client-side caching** with hydration
- ✅ **Background refetching** for fresh data
- ✅ Supports **pagination**, **infinite scroll**
- ✅ **Mutations** with optimistic updates
- ✅ Built-in **loading/error states**
- ✅ Devtools for query debugging

### **Axios**

- ✅ Promise-based HTTP client
- ✅ Supports **interceptors** (auth tokens, error handling)
- ✅ Supports **cancel tokens** for aborting requests
- ✅ Easy to create custom instances (`apiClient`)

### 6. **Internationalization (i18n)**

### **i18next**

- ✅ Core i18n engine (language switching, translation)
- ✅ Supports **pluralization**, **interpolation**, **fallbacks**

### **react-i18next**

- ✅ React bindings for i18next
- ✅ Supports **hooks** (`useTranslation`), and SSR
- ✅ Works with React Suspense

### **next-i18next**

- ✅ Next.js wrapper for i18next
- ✅ Supports SSR, static, and dynamic routes translation
- ✅ Auto language detection

### **i18next-scanner**

- ✅ CLI tool to scan `.ts/.tsx` files for translation keys
- ✅ Auto-generates translation JSON files

### 7. **Linting & Formatting**

### **ESLint**

- ✅ Linting JavaScript & TypeScript code
- ✅ **Airbnb config** ensures best practices
- ✅ Next.js-specific lint rules with `eslint-config-next`
- ✅ Prevents bugs before runtime

### **Prettier**

- ✅ Code formatter (standardizes quotes, spacing)
- ✅ Works with **Tailwind plugin** to auto-sort class names

### **Husky (via pre-commit)**

- ✅ Runs linting/formatting **before git commits**
- ✅ Prevents bad code from being pushed

### 8. **Type Checking**

### **TypeScript**

- ✅ Type safety for components, hooks, API calls
- ✅ Catches errors at compile-time
- ✅ Supports strict mode
- ✅ Works great with Next.js + React Query + Axios
