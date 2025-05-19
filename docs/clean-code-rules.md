## ✅ **1. Project Structure**

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

## ✅ **2. Naming Conventions**

- Use **PascalCase** for components and pages: `UserProfile.tsx`
- Use **camelCase** for functions, variables, and hooks: `useFetchData`
- Use **UPPER_CASE** for constants: `DEFAULT_PAGE_SIZE`

---

## ✅ **3. File & Component Design**

- One component per file
- Component name should match file name
- Keep components **small** and **focused**
- Prefer **functional components** and **React Hooks**

---

## ✅ **4. Avoid Magic Strings/Numbers**

Bad:

```tsx
if (user.role === 'admin') { ... }
```

Good:

```tsx
const ROLE_ADMIN = 'admin';
if (user.role === ROLE_ADMIN) { ... }
```

---

## ✅ **5. TypeScript Usage**

- Always type your props and states
- Use `interface` or `type` for data structures

```tsx
interface UserI {
  id: number;
  name: string;
}
```

---

## ✅ **6. API Handling (Server + Client)**

- Use **`fetch`/`axios` wrappers** in `lib` or `services`
- Separate API logic from UI
- Use **React Query** for data fetching (especially client-side)

---

## ✅ **7. Pages and Routing**

- Keep `pages/` folder clean
- Use nested routes for layout grouping
- Move logic out of pages when possible to keep them minimal

---

## ✅ **8. Environment Variables**

- Use `.env.local` for local secrets (never commit this)
- Prefix public variables with `NEXT_PUBLIC_`

---

## ✅ **9. Styling**

- Prefer **Tailwind CSS**, or **Styled Components**
- Avoid inline styles
- Use consistent class naming conventions (BEM, utility-first, etc.)

---

## ✅ **10. Error Handling**

- Always handle potential API and render errors
- Use `try/catch`, error boundaries, and fallback UI
- Log errors meaningfully

---

## ✅ **11. Code Splitting and Lazy Loading**

- Use `next/dynamic` for dynamic imports
- Avoid loading large components upfront unnecessarily

---

## ✅ **12. Linting & Formatting**

- Use **ESLint** with recommended rules and plugins:
- Use **Prettier** for consistent code formatting
- Add Git hooks with `husky` to enforce clean code on commit

---

## ✅ **13. Avoid Anti-Patterns**

- Don’t mix data fetching and rendering logic
- Don’t overuse context; prefer hooks and prop drilling where appropriate
- Avoid `any` in TypeScript

---

## ✅ **14. Use Next.js Features**

- Prefer `getServerSideProps`, `getStaticProps`, or `app/route.js` over custom fetch logic in components
- Use middleware for redirects, auth, etc.
- Use `Image` and `Link` components from `next/image` and `next/link`

---
