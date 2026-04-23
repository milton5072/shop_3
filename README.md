- store maintaining & Product fetching
  A. Create productSlice.ts file inside app/features/product folder
  B. Create store.ts file inside app/store folder
  C. Create a provider.tsx file inside app folder and wrap {children} inside app/layout.tsx
  C. Create hooks.ts file inside store folder
  D. Create useProduct.ts file inside features/product folder

  Admin Dashboard Creation
  A. Install Shadcn, sidebar
  B. Folder structure will be (root)\admin\dashboard\page.tsx and layout.tsx
  C. Crate AppSidebar.tsx file inside components/application/admin folder
  D. Install sidebar from shadcn site and Wrap the layout with <SidebarProvider>
  E. Import AppSidebar component inside layout.tsx page
  F. Install react Icons, install collapsible from inside shadcn

  Admin layout mobile responsive
  ১. layout.tsx/admin/dashboard/layout.tsx (Dashboard Layout):

সাইডবার wrapper div-এ hidden md:block যোগ করা হয়েছে — এতে মোবাইলে সাইডবার লুকিয়ে যাবে, শুধু ডেস্কটপে (md+) দেখা যাবে।
মোবাইলের জন্য আলাদা একটি <div className="md:hidden"> এ <AppSidebar /> রেন্ডার করা হয়েছে — এটি shadcn/ui-এর Sheet (drawer) হিসেবে কাজ করবে মোবাইলে।
Main content div-এ min-w-0 যোগ করা হয়েছে যাতে flex overflow ঠিক থাকে।

React Hook from
A. Install react hook from, zodResolver

Backend Full TODO List (Step by Step) for adding category in db.
🔹 Step 1: MongoDB connection setup
🔹 Step 2: Category Model তৈরি
🔹 Step 3: API Route (POST) তৈরি
🔹 Step 4: Frontend থেকে API call
🔹 Step 5: Error handling + validation

- Work flow
  User Form Fillup
  ↓
  React Hook Form
  ↓
  POST /api/category
  ↓
  Next.js API
  ↓
  MongoDB (Mongoose)
  ↓
  Response ফিরে আসে
