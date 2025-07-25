# Assignment ACAI - Item Sharing App

A minimal React app for sharing resources like kitchen items, workout equipment, etc., among neighbors.

---

## 🚀 Live Demo

🔗 [https://assignement-acai.vercel.app/](https://assignement-acai.vercel.app/)

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/FerazAhmad1/AssignementACAI.git
cd AssignementACAI

### 2. Install the Dependecy
npm install

### 3. Start the Development Server
npm start

### 4. Tech Stack
Reactjs
Taiwind CSS

###  Feature and Summary

# 1.Home Page: Displays a list of all shared items.

# 2. Owner Controls: If the current user is the owner of an item, they can mark it as Sold via a checkbox.

# 3.Once marked sold, the item status changes to "Not Available" and turns red.

# 4. Sorting: Users can sort items by Name, Category, or Owner.

# 5.Details Page: Click "View Details" to see full item info.

# 6.Add Item Page: Users can add new items with image, name, category, and owner.

# 7.404 Page: Navigating to an invalid route redirects to a clean 404 page.


### Known Issues / Limitations
🔄 Search & Sort Not Sticky: When items overflow the screen, the search and sort bar scrolls out of view.

📃 No Pagination: All items are loaded at once.

🔐 No Authentication: There are no login or signup flows; hence, no protected routes.

👤 Hardcoded Owner: The default owner is hardcoded as "Alice Johnson", who owns the first item.



```
