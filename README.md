# Next.js E-Commerce Store

[![Next.js](https://img.shields.io/badge/Next.js-15+-black?logo=next.js)](https://nextjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5-blue?logo=prisma)](https://www.prisma.io/)
[![Supabase](https://img.shields.io/badge/Supabase-green?logo=supabase)](https://supabase.com/)
[![Clerk](https://img.shields.io/badge/Clerk-auth-6C47FF?logo=clerk)](https://clerk.com/)
[![Stripe](https://img.shields.io/badge/Stripe-payments-6772E5?logo=stripe)](https://stripe.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-black?logo=shadcn-ui&logoColor=white)](https://ui.shadcn.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

---

## 📝 Description

This is a full-stack e-commerce application built with the **Next.js 15+ App Router**, demonstrating a modern, robust, and scalable architecture. The project features a complete shopping experience, from browsing products and adding them to a cart to secure payment processing. It also includes a comprehensive admin dashboard for product management. The backend is powered by **Supabase** for its managed PostgreSQL database and storage solutions, paired with the **Prisma ORM** for type-safe database access. User authentication is seamlessly handled by **Clerk**, and payments are securely processed by **Stripe**. The UI is crafted with **shadcn/ui** and **Tailwind CSS**, resulting in a clean, responsive, and highly customizable design that delivers a premium user experience.

---

## ✨ Features

* **Full-Stack Architecture:** Built entirely with Next.js using Server Components, Server Actions, and Route Handlers.
* **User Authentication:** Secure and seamless user management powered by **Clerk**, including sign-up, sign-in, and profile management.
* **Product Catalog:**
    * Browse all products with user-selectable grid and list layouts.
    * A debounced search functionality for instant, performant filtering.
    * View detailed information, images, and reviews for a single product.
    * A curated featured products section on the homepage to highlight key items.
* **Shopping Cart:**
    * Add products to the cart with quantity selection.
    * Update item quantities or remove items directly from the cart page.
    * Dynamic, real-time calculation of subtotal, tax, shipping, and order total.
* **Favorites (Wishlist):**
    * Authenticated users can add products to a personal favorites list.
    * A dedicated page allows users to view all their favorited items.
* **Product Reviews & Ratings:**
    * Authenticated users can submit detailed reviews and star ratings for products they've interacted with.
    * The application calculates and displays the average product rating and a list of all reviews.
* **Secure Payments:** Integrated with **Stripe Checkout** using the Embedded Form for a secure, PCI-compliant, and seamless payment process without leaving the site.
* **Order Management:**
    * Users can access a history of their past orders to track purchases.
    * Administrators can view all sales and order details in the dashboard.
* **Admin Dashboard:**
    * A protected, role-based route accessible only to administrators.
    * **CRUD Operations:** Full capabilities to create, read, update, and delete products.
    * Image uploads are handled through a secure connection to **Supabase Storage**.
* **Modern UI/UX:**
    * Built with the highly customizable **shadcn/ui** component library and styled with **Tailwind CSS**.
    * Includes a dark/light theme toggle that respects user's system preference and persists their choice in local storage.
    * Fully responsive design ensures a great experience on all devices.
    * Utilizes `Suspense` and loading skeletons to provide a smooth user experience during data fetching.

---

## 📸 Screenshots

<!-- Add your screenshots here. It's highly recommended to showcase the key features of your application. -->

**Homepage**  

**Products Page**  

**Single Product Page**  

**Admin Dashboard - Products**  

**Cart Page**  


---

## 🛠️ Technologies Used

* **Framework:** Next.js 15+ (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS, shadcn/ui
* **Database:** Supabase (PostgreSQL)
* **ORM:** Prisma
* **Authentication:** Clerk
* **Payments:** Stripe
* **Image Storage:** Supabase Storage
* **Form Validation:** Zod
* **UI Components:** Radix UI (via shadcn)
* **Icons:** `react-icons`
* **Utilities:** `next-themes`, `use-debounce`

---

## ⚙️ Setup and Installation

To run this project locally, you'll need to set up several services and create an environment file.

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <your-repository-directory-name>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root of your project. This file is crucial for storing sensitive keys and API credentials securely.

```env
# Prisma / Supabase
# Go to Project Settings > Database > Connection string in Supabase
# Use the URI for both, but add "?pgbouncer=true&connection_limit=1" to DATABASE_URL for connection pooling

DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Supabase Storage
# Go to Project Settings > API in Supabase
SUPABASE_URL="https://your-project-ref.supabase.co"
SUPABASE_KEY="your-supabase-anon-key"

# Clerk Authentication
# Get keys from your Clerk application dashboard
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
# Sign up in your app, then find your user ID in the Clerk dashboard to set this
ADMIN_USER_ID=

# Stripe Payments
# Get keys from your Stripe developer dashboard
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=

# Other
# Your local development URL or deployed site URL
NEXT_PUBLIC_WEBSITE_URL="http://localhost:3000"
```

**Important:** Add the `.env` file to your `.gitignore` to prevent accidentally committing your secret keys to a public repository.

### 4. Prisma Setup

Push the schema to your Supabase database:

This command reads your `schema.prisma` file and syncs it with your database, creating the necessary tables and columns.

```bash
npx prisma db push
```

(Optional) Seed the database with initial product data:

If you have a `prisma/seed.js` and `prisma/products.json`, run this command to populate your database with sample products.

```bash
node prisma/seed.js
```

You can also use `npx prisma studio` to open a local GUI to view and manage your database directly.

### 5. Run the Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## 🏗️ Project Structure

```
app/                  # Main directory for the Next.js App Router, containing all routes and pages.
  (routes)/           # Route groups are used to organize different parts of the application (e.g., public routes, admin routes).
  api/                # Contains Route Handlers for backend logic that requires a traditional API endpoint, such as the Stripe payment intent creation.
  layout.tsx          # The root layout for the application, wrapping all pages.
  page.tsx            # The homepage component.
components/           # Contains all reusable React components, organized by feature.
  ui/                 # Unstyled components provided by shadcn/ui.
  cart/, form/, global/, home/, navbar/, products/, reviews/, single-product/
lib/                  # Utility functions, such as the cn helper for merging Tailwind CSS classes.
prisma/               # Contains the Prisma schema (schema.prisma) and any seeding scripts.
public/               # For static assets like images, fonts, and favicons.
utils/                # Core application logic, types, and helper functions.
  actions.ts          # Contains all Server Actions for data fetching and mutations, centralizing server-side logic.
  db.ts               # Manages the Prisma client instance to ensure efficient database connections.
  schemas.ts          # Defines Zod schemas for robust server-side form validation.
  supabase.ts         # Configures the Supabase client for image storage operations.
middleware.ts         # Clerk middleware for handling route protection and authentication state.
.env                  # Environment variables (should be in .gitignore).
next.config.mjs       # The Next.js configuration file.
tailwind.config.ts    # The Tailwind CSS configuration file.
tsconfig.json         # The TypeScript configuration file.
```

---

## 💡 Technical Highlights

- **Next.js App Router:** Leverages the latest Next.js features for a robust, server-centric architecture. Server Components are used extensively for data fetching, which reduces the amount of JavaScript sent to the client, leading to faster initial page loads.
- **Server Actions:** Data mutations (like creating products, adding to cart, or submitting reviews) are handled securely on the server using Server Actions. This simplifies the architecture by co-locating data mutations with the components that use them, often eliminating the need for separate API routes.
- **Prisma & Supabase:** This combination provides a powerful and type-safe database layer. Prisma's auto-generated client and migration tools streamline database development, while Supabase offers a scalable, hassle-free PostgreSQL backend and file storage solution.
- **Clerk Authentication:** Simplifies user management with pre-built UI components and secure backend SDKs. The middleware efficiently protects routes and manages user sessions across the application.
- **Stripe Payments:** The integration uses a server-side approach where a clientSecret is generated for each transaction. This secret is then passed to the frontend, ensuring a secure payment flow with Stripe's Embedded Checkout, which is fully PCI-compliant.
- **shadcn/ui & Tailwind CSS:** A modern approach to styling that combines the power of a utility-first CSS framework with beautifully designed, accessible, and fully customizable components, allowing for rapid and consistent UI development.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This project is
